const https = require('https');
const fs = require('fs');

https.get('https://api.sleeper.app/v1/players/nfl', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const players = JSON.parse(data);
    const active = Object.values(players).filter(p => p.active && ['QB','RB','WR','TE','K','DEF'].includes(p.position));
    
    const mapped = active.map(p => ({
      id: p.player_id,
      name: p.full_name || p.first_name + ' ' + p.last_name,
      pos: p.position,
      team: p.team || 'FA',
      rank: p.search_rank || 999999
    }));
    
    // Sort by search rank, then by name
    mapped.sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      return a.name.localeCompare(b.name);
    });

    // Top 1500 is enough for any draft
    const top = mapped.slice(0, 1500);
    fs.writeFileSync('./public/players.json', JSON.stringify(top));
    console.log(`Saved ${top.length} players to public/players.json`);
  });
});
