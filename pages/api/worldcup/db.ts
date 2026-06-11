import type { NextApiRequest, NextApiResponse } from 'next';

const CENTRAL_BIN = 'https://extendsclass.com/api/json-storage/bin/bdcedcb';

function sanitizeData(data: any) {
  const sanitizedPlayers: Record<string, any> = {};
  if (data.players) {
    for (const [name, pData] of Object.entries(data.players)) {
      if (pData && typeof pData === 'object') {
        const { passcode, ...rest } = pData as any;
        sanitizedPlayers[name] = {
          ...rest,
          hasPasscode: !!passcode
        };
      }
    }
  }
  return {
    players: sanitizedPlayers,
    adminResults: data.adminResults || {}
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const response = await fetch(CENTRAL_BIN);
      if (!response.ok) {
        throw new Error(`Failed to fetch from extendsclass: ${response.status}`);
      }
      const data = await response.json();
      return res.status(200).json(sanitizeData(data));
    } catch (error: any) {
      console.error('API GET error:', error);
      return res.status(500).json({ error: error.message || 'Failed to fetch data' });
    }
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const { action, playerName, passcode, players, adminResults, deletePlayerName, adminPassword } = req.body;

      // 1. Fetch current remote state
      const response = await fetch(CENTRAL_BIN);
      let remote: { players: Record<string, any>; adminResults: any } = { players: {}, adminResults: {} };
      if (response.ok) {
        try {
          remote = await response.json();
        } catch (e) {
          console.warn('ExtendsClass payload was empty or corrupt, using blank state.', e);
        }
      }

      // Action: Verify passcode
      if (action === 'verify') {
        if (!playerName) {
          return res.status(400).json({ error: 'Player name is required for verification.' });
        }
        const stored = (remote.players && remote.players[playerName]) || null;
        if (!stored) {
          return res.status(200).json({ success: true });
        }
        const storedPass = stored.passcode;
        if (!storedPass) {
          return res.status(200).json({ success: true });
        }
        return res.status(200).json({ success: storedPass === passcode });
      }

      // Enforce lock deadline: June 11, 2026, 3:00 PM EST (UTC-4)
      const LOCK_TIME = new Date('2026-06-11T15:00:00-04:00').getTime();
      const isLocked = Date.now() > LOCK_TIME;
      const isAdmin = adminPassword === 'admin2026';

      // Passcode & Lock validation for player updates
      if (players) {
        for (const [name, pData] of Object.entries(players)) {
          const incoming = pData as any;
          const stored = (remote.players && remote.players[name]) || null;

          if (!isAdmin) {
            // Check time lock first
            if (isLocked) {
              return res.status(403).json({ error: 'Submissions are closed. Predictions can no longer be edited.' });
            }

            // Verify passcode
            if (stored) {
              const storedPass = stored.passcode;
              const incomingPass = incoming.passcode;
              if (storedPass && storedPass !== incomingPass) {
                return res.status(403).json({ error: `Incorrect passcode. You are not authorized to edit ${name}'s bracket.` });
              }
            } else {
              // New player requires passcode
              const incomingPass = incoming.passcode;
              if (!incomingPass || incomingPass.trim().length < 4) {
                return res.status(400).json({ error: `A 4-digit passcode is required to secure the new bracket for ${name}.` });
              }
            }
          }
        }
      }

      // Passcode & Lock validation for player deletion
      if (deletePlayerName) {
        if (!isAdmin) {
          return res.status(403).json({ error: 'Only the administrator is authorized to delete brackets.' });
        }
      }

      // 3. Perform merge and preserve passcodes
      let mergedPlayers: Record<string, any> = { ...(remote.players || {}) };
      if (players) {
        for (const [name, pData] of Object.entries(players)) {
          const incoming = pData as any;
          const stored = mergedPlayers[name] || {};
          
          // Preserve stored passcode if incoming passcode is not sent/empty
          const finalPasscode = incoming.passcode || stored.passcode || null;
          
          mergedPlayers[name] = {
            ...stored,
            ...incoming,
          };
          
          if (finalPasscode) {
            mergedPlayers[name].passcode = finalPasscode;
          } else {
            delete mergedPlayers[name].passcode;
          }
        }
      }

      if (deletePlayerName) {
        delete mergedPlayers[deletePlayerName];
      }

      const mergedAdmin = adminResults ? { ...(remote.adminResults || {}), ...adminResults } : (remote.adminResults || {});

      // 4. Save back to extendsclass
      const saveResponse = await fetch(CENTRAL_BIN, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ players: mergedPlayers, adminResults: mergedAdmin }),
      });

      if (!saveResponse.ok) {
        throw new Error(`Failed to save to extendsclass: ${saveResponse.status}`);
      }

      return res.status(200).json(sanitizeData({ players: mergedPlayers, adminResults: mergedAdmin }));
    } catch (error: any) {
      console.error('API POST error:', error);
      return res.status(500).json({ error: error.message || 'Failed to save data' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}

