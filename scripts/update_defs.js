const fs = require('fs');

const defs = [
  { name: "Texans D/ST", team: "HOU" },
  { name: "Broncos D/ST", team: "DEN" },
  { name: "Seahawks D/ST", team: "SEA" },
  { name: "Steelers D/ST", team: "PIT" },
  { name: "Rams D/ST", team: "LAR" },
  { name: "Patriots D/ST", team: "NE" },
  { name: "Eagles D/ST", team: "PHI" },
  { name: "Ravens D/ST", team: "BAL" },
  { name: "Browns D/ST", team: "CLE" },
  { name: "Jaguars D/ST", team: "JAX" },
  { name: "Chargers D/ST", team: "LAC" },
  { name: "Lions D/ST", team: "DET" },
  { name: "Vikings D/ST", team: "MIN" },
  { name: "Chiefs D/ST", team: "KC" },
  { name: "Packers D/ST", team: "GB" },
  { name: "Colts D/ST", team: "IND" },
  { name: "Saints D/ST", team: "NO" },
  { name: "Bears D/ST", team: "CHI" },
  { name: "Bills D/ST", team: "BUF" },
  { name: "Buccaneers D/ST", team: "TB" },
  { name: "49ers D/ST", team: "SF" },
  { name: "Cowboys D/ST", team: "DAL" },
  { name: "Jets D/ST", team: "NYJ" },
  { name: "Dolphins D/ST", team: "MIA" },
  { name: "Falcons D/ST", team: "ATL" },
  { name: "Bengals D/ST", team: "CIN" },
  { name: "Panthers D/ST", team: "CAR" },
  { name: "Titans D/ST", team: "TEN" },
  { name: "Cardinals D/ST", team: "ARI" },
  { name: "Giants D/ST", team: "NYG" },
  { name: "Commanders D/ST", team: "WAS" },
  { name: "Raiders D/ST", team: "LV" }
];

const playersPath = './public/players.json';
const players = JSON.parse(fs.readFileSync(playersPath, 'utf8'));

// Filter out existing DEFs
const nonDefs = players.filter(p => p.pos !== 'DEF');

// Map new DEFs
const mappedDefs = defs.map((d, index) => ({
  id: 'def-' + d.team,
  name: d.name,
  pos: 'DEF',
  team: d.team,
  rank: index + 1 // Rank them 1 to 32 for DEFs
}));

// We can put them at the end of the JSON or anywhere since the frontend will filter them
// But for search results, they should just exist.
const finalPlayers = [...mappedDefs, ...nonDefs];

fs.writeFileSync(playersPath, JSON.stringify(finalPlayers));
console.log('Successfully updated DEFs in players.json!');
