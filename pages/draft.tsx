import Head from "next/head";
import { useState, useEffect, useMemo } from "react";

interface Player {
  id: string;
  name: string;
  pos: string;
  team: string;
  rank: number;
}

const TEAMS = [
  "Hooked on a Thielen",
  "Amari Pooper",
  "Johnny Broken Dreams",
  "Jerry Jones' Diary",
  "The greatest team ever",
  "Tortured Butt(ker) Department",
  "Whiskey’s Warriors",
  "Love a Cook Mixon up some Lamb",
  "rohit's Great Team",
  "Waddle Baby Waddle"
];

const ROUNDS = 15;
const TOTAL_PICKS = TEAMS.length * ROUNDS;

const POS_COLORS: Record<string, string> = {
  QB: "bg-red-200 border-red-500 text-red-900",
  RB: "bg-green-200 border-green-500 text-green-900",
  WR: "bg-blue-200 border-blue-500 text-blue-900",
  TE: "bg-orange-200 border-orange-500 text-orange-900",
  K: "bg-purple-200 border-purple-500 text-purple-900",
  DEF: "bg-gray-300 border-gray-500 text-gray-900",
};

const POS_COLORS_LIGHT: Record<string, string> = {
  QB: "bg-red-50",
  RB: "bg-green-50",
  WR: "bg-blue-50",
  TE: "bg-orange-50",
  K: "bg-purple-50",
  DEF: "bg-gray-100",
};

export default function DraftBoard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [draftState, setDraftState] = useState<Record<number, Player>>({});
  const [activePick, setActivePick] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [posFilter, setPosFilter] = useState("ALL");
  const [isLoaded, setIsLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!isTimerRunning || timeLeft <= 0) return;
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) setIsTimerRunning(false);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    fetch("/players.json")
      .then((r) => r.json())
      .then((data) => setPlayers(data))
      .catch((e) => console.error("Error loading players:", e));

    const saved = localStorage.getItem("draft_2026");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDraftState(parsed);
        // Find next empty pick
        for (let i = 0; i < TOTAL_PICKS; i++) {
          if (!parsed[i]) {
            setActivePick(i);
            break;
          }
        }
      } catch (e) {}
    }
    setIsLoaded(true);
  }, []);

  const saveDraft = (newState: Record<number, Player>) => {
    setDraftState(newState);
    localStorage.setItem("draft_2026", JSON.stringify(newState));
  };

  const draftPlayer = (player: Player) => {
    if (activePick >= TOTAL_PICKS) return;
    
    // Check if player is already drafted
    const isDrafted = Object.values(draftState).some(p => p.id === player.id);
    if (isDrafted) {
      alert("Player already drafted!");
      return;
    }

    const newState = { ...draftState, [activePick]: player };
    saveDraft(newState);

    // Auto-advance to next empty pick
    let next = activePick + 1;
    while (next < TOTAL_PICKS && newState[next]) {
      next++;
    }
    const finalNext = Math.min(next, TOTAL_PICKS - 1);
    setActivePick(finalNext);

    // Start timer for the new pick
    const nextRound = Math.floor(finalNext / 10) + 1;
    let newTime = 35;
    if (nextRound <= 3) newTime = 90;
    else if (nextRound <= 10) newTime = 60;
    setTimeLeft(newTime);
    setIsTimerRunning(true);
  };

  const handleWriteIn = () => {
    const name = prompt("Enter custom player name:");
    if (!name) return;
    const pos = prompt("Enter position (QB, RB, WR, TE, K, DEF):", "WR");
    if (!pos) return;
    const team = prompt("Enter team abbreviation:", "FA");
    
    draftPlayer({
      id: 'custom-' + Date.now(),
      name: name.trim(),
      pos: pos.trim().toUpperCase(),
      team: team ? team.trim().toUpperCase() : "FA",
      rank: 9999
    });
  };

  const removePick = (pickIndex: number) => {
    if (!confirm("Remove this pick?")) return;
    const newState = { ...draftState };
    delete newState[pickIndex];
    saveDraft(newState);
    setActivePick(pickIndex);
  };

  const clearBoard = () => {
    if (confirm("Are you sure you want to completely clear the draft board?")) {
      saveDraft({});
      setActivePick(0);
    }
  };

  const filteredPlayers = useMemo(() => {
    return players.filter((p) => {
      const matchPos = posFilter === "ALL" || p.pos === posFilter;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      // Filter out drafted players
      const isDrafted = Object.values(draftState).some(drafted => drafted.id === p.id);
      return matchPos && matchSearch && !isDrafted;
    }).slice(0, 200); // only show top 200 matches to keep UI fast
  }, [players, search, posFilter, draftState]);

  if (!isLoaded) return null;

  // Build grid
  const grid = [];
  for (let r = 0; r < ROUNDS; r++) {
    const row = [];
    const isEven = r % 2 === 1; // 0-indexed: r=0 is Round 1, r=1 is Round 2 (Even)
    for (let c = 0; c < 10; c++) {
      const teamIdx = isEven ? 9 - c : c;
      const pickOverall = r * 10 + c;
      const pickObj = draftState[pickOverall];
      
      row.push(
        <div
          key={pickOverall}
          onClick={() => setActivePick(pickOverall)}
          onDoubleClick={() => pickObj && removePick(pickOverall)}
          className={`relative flex flex-col items-center justify-center p-1 md:p-2 border cursor-pointer select-none transition-colors h-24 md:h-28
            ${activePick === pickOverall ? "ring-4 ring-blue-500 z-10" : "hover:brightness-95"}
            ${pickObj ? (POS_COLORS[pickObj.pos] || "bg-gray-100") : "bg-white"}
          `}
        >
          <span className="absolute top-1 left-1 text-[10px] font-semibold opacity-60">
            {r + 1}.{(isEven ? 10 - c : c + 1).toString().padStart(2, '0')}
          </span>
          {pickObj ? (
            <>
              <div className="font-bold text-xs md:text-sm text-center leading-tight">{pickObj.name}</div>
              <div className="text-[10px] md:text-xs font-semibold opacity-80 mt-1">
                {pickObj.team} - {pickObj.pos}
              </div>
            </>
          ) : (
            <div className="text-gray-300 text-xs italic">Empty</div>
          )}
        </div>
      );
    }
    grid.push(row);
  }

  // Determine actual team layout for header. Round 1 goes 1 to 10 (Left to Right).
  // Thus, columns are always Team 0 to 9 in order.
  // Wait, if Round 1 is Left to Right (1 to 10), then Col 0 is Team 1.
  // If Round 2 is Right to Left (10 to 1), then Col 0 is still Team 1, but the 1st pick of Round 2 happens at Col 9 (Team 10).
  // In the loop above, `pickOverall` is just the chronological pick number. 
  // Let's rewrite the grid rendering so it's strictly Column based for the HTML table layout.

  const renderGridCols = () => {
    const cols = [];
    for (let teamIdx = 0; teamIdx < 10; teamIdx++) {
      const colPicks = [];
      for (let r = 0; r < ROUNDS; r++) {
        const isSnake = r % 2 === 1;
        // If normal (left to right), the pick index for this cell is r * 10 + teamIdx
        // If snake (right to left), the pick index is r * 10 + (9 - teamIdx)
        const pickOverall = r * 10 + (isSnake ? 9 - teamIdx : teamIdx);
        const pickObj = draftState[pickOverall];

        colPicks.push(
          <div
            key={pickOverall}
            onClick={() => setActivePick(pickOverall)}
            onDoubleClick={() => pickObj && removePick(pickOverall)}
            className={`relative flex flex-col items-center justify-center p-1 md:p-2 border cursor-pointer select-none transition-colors h-24
              ${activePick === pickOverall ? "ring-4 ring-blue-500 z-10" : "border-gray-300 hover:brightness-95"}
              ${pickObj ? (POS_COLORS[pickObj.pos] || "bg-gray-100") : "bg-white"}
            `}
          >
            <span className="absolute top-1 left-1 text-[9px] md:text-[10px] font-semibold opacity-60">
              {r + 1}.{(isSnake ? 10 - teamIdx : teamIdx + 1).toString().padStart(2, '0')}
            </span>
            {pickObj ? (
              <>
                <div className="font-bold text-[11px] md:text-sm text-center leading-tight">{pickObj.name}</div>
                <div className="text-[9px] md:text-xs font-bold opacity-80 mt-1">
                  {pickObj.team} - {pickObj.pos}
                </div>
              </>
            ) : (
              <div className="text-gray-300 text-xs italic opacity-0 hover:opacity-100">Select</div>
            )}
          </div>
        );
      }

      cols.push(
        <div key={teamIdx} className="flex-1 flex flex-col min-w-[120px]">
          <div className="bg-[#ED1D24] text-white p-2 text-center text-xs md:text-sm font-bold border border-[#b81218] shadow-inner h-14 flex items-center justify-center leading-tight relative overflow-hidden">
             {/* Subtle web pattern for Spiderman theme */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 30%, black 150%), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'}}></div>
            <span className="relative z-10 drop-shadow-md">{TEAMS[teamIdx]}</span>
          </div>
          {colPicks}
        </div>
      );
    }
    return cols;
  };

  return (
    <>
      <Head>
        <title>2026 Fantasy Draft Board</title>
      </Head>
      
      <div className="flex flex-col h-screen bg-[#f8f9fa] font-sans overflow-hidden">
        
        {/* Huge Title */}
        <div className="bg-[#ED1D24] text-white text-center py-4 md:py-6 text-3xl md:text-5xl font-black uppercase tracking-widest shadow-lg border-b-4 border-black relative z-20">
          Teenage Mutant Ninja Bortles 2026
        </div>

        {/* Header - Spider-Man aesthetic (Red/Blue accents) */}
        <header className="flex-none bg-[#0476F2] text-white p-3 shadow-md flex justify-between items-center relative overflow-hidden border-b-2 border-black">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          
          <h1 className="text-xl md:text-2xl font-black italic tracking-wider drop-shadow-lg relative z-10 flex items-center">
            {/* Spider-Man Face SVG */}
            <svg width="28" height="28" viewBox="0 0 100 100" className="inline-block mr-3">
              <ellipse cx="50" cy="50" rx="45" ry="50" fill="#ED1D24" stroke="#000" strokeWidth="4"/>
              <path d="M 20 40 Q 40 20 45 50 Q 30 55 20 40" fill="#FFF" stroke="#000" strokeWidth="3"/>
              <path d="M 80 40 Q 60 20 55 50 Q 70 55 80 40" fill="#FFF" stroke="#000" strokeWidth="3"/>
            </svg>
            2026 DRAFT BOARD
            <svg width="28" height="28" viewBox="0 0 100 100" className="inline-block ml-3">
              <ellipse cx="50" cy="50" rx="45" ry="50" fill="#ED1D24" stroke="#000" strokeWidth="4"/>
              <path d="M 20 40 Q 40 20 45 50 Q 30 55 20 40" fill="#FFF" stroke="#000" strokeWidth="3"/>
              <path d="M 80 40 Q 60 20 55 50 Q 70 55 80 40" fill="#FFF" stroke="#000" strokeWidth="3"/>
            </svg>
          </h1>
          
          <div className="flex gap-4 relative z-10 items-center">
            {/* Timer */}
            <div className={`text-2xl md:text-3xl font-mono font-bold px-4 py-1 rounded bg-black/30 shadow-inner ${timeLeft <= 10 && isTimerRunning ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </div>

            <div className="bg-white/20 px-4 py-2 rounded text-sm font-bold flex items-center shadow-sm">
              Pick {activePick + 1} / {TOTAL_PICKS}
            </div>
            <button onClick={clearBoard} className="bg-[#ED1D24] hover:bg-red-700 border-2 border-black px-4 py-1 rounded font-bold shadow-md transition-colors text-sm">
              Clear Board
            </button>
          </div>
        </header>

        {/* Main Workspace */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Draft Board Grid Area */}
          <div className="flex-1 overflow-auto bg-gray-100 p-4 shadow-inner">
            <div className="flex gap-0 bg-white border border-gray-400 shadow-xl rounded-sm overflow-hidden" style={{ minWidth: '1200px' }}>
              {renderGridCols()}
            </div>
          </div>

          {/* Sidebar - Player Pool */}
          <div className="w-80 flex-none bg-white border-l border-gray-300 flex flex-col shadow-lg z-20">
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <h2 className="font-bold text-gray-800 mb-2">Available Players</h2>
              <input 
                type="text" 
                placeholder="Search players..."
                className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex flex-wrap gap-1 mt-2">
                {["ALL", "QB", "RB", "WR", "TE", "K", "DEF"].map(pos => (
                  <button
                    key={pos}
                    onClick={() => setPosFilter(pos)}
                    className={`px-2 py-1 text-[10px] font-bold rounded cursor-pointer transition-colors ${posFilter === pos ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                  >
                    {pos}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleWriteIn}
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-2 rounded text-xs shadow-sm"
              >
                + Write-in Player
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {filteredPlayers.length === 0 ? (
                <div className="text-center text-gray-400 p-4 text-sm font-medium">No players found</div>
              ) : (
                filteredPlayers.map(p => (
                  <div 
                    key={p.id}
                    onClick={() => draftPlayer(p)}
                    className={`flex items-center justify-between p-2 rounded border cursor-pointer transition-transform hover:scale-[1.02] shadow-sm
                      ${POS_COLORS_LIGHT[p.pos] || "bg-gray-50 border-gray-200"}
                    `}
                  >
                    <div>
                      <div className="font-bold text-sm text-gray-900">{p.name}</div>
                      <div className="text-[10px] font-semibold text-gray-600">{p.team} - {p.pos}</div>
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 bg-white px-2 py-1 rounded shadow-sm">
                      Rank {p.rank}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
