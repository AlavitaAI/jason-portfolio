import type { NextApiRequest, NextApiResponse } from 'next';

const CENTRAL_BIN = 'https://extendsclass.com/api/json-storage/bin/bdcedcb';

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
      return res.status(200).json(data);
    } catch (error: any) {
      console.error('API GET error:', error);
      return res.status(500).json({ error: error.message || 'Failed to fetch data' });
    }
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    try {
      const { players, adminResults, deletePlayerName } = req.body;

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

      // 2. Perform merge
      let mergedPlayers: Record<string, any> = { ...(remote.players || {}) };
      if (players) {
        mergedPlayers = { ...mergedPlayers, ...players };
      }
      
      // 3. Handle explicit deletions
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

      return res.status(200).json({ players: mergedPlayers, adminResults: mergedAdmin });
    } catch (error: any) {
      console.error('API POST error:', error);
      return res.status(500).json({ error: error.message || 'Failed to save data' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
