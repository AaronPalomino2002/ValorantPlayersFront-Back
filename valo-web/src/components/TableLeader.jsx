import React, { useEffect, useState } from 'react';

const TableLeader = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cambia esta URL a la URL de tu API local
    fetch('http://localhost:5001/api/v1/player/get-ranking-players')
      .then((response) => response.json())
      .then((data) => {
        // Extrae los datos de interés de la respuesta de la API
        const players = data.rankingPlayers.map((nombre, index) => ({
          id_player: index + 1,
          name: nombre.player.nickname,
          league: nombre.league,
          r_rank: nombre.regional_rank,
          g_rank: nombre.global_rank,
          mmr : nombre.mmr,
          namet: nombre.profileImageUrl,
        }));
        setData(players);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);



  return (
    <table className='css-1iy7n7q'>
      <colgroup>
        <col style={{width:46}} />
        <col style={{width:136}} />
        <col style={{width:88}} />
        <col style={{width:62}} />
        <col style={{width:70}} />
        <col style={{width:178}} />
        <col style={{width:120}} />
      </colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>Player Name</th>
          <th>User Image</th>
          <th>League</th>
          <th>Regional Rank</th>
          <th>Global Rank</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody style={{color: '#9E9EB1'}}>
        {data.map((item) => (
          <tr key={item.id_player}>
            <td>{item.id_player}</td>
            <td>{item.name}</td>
            <td><img src={item.namet} style={{width:30, margin:'auto'}}/></td>
            <td>{item.league}</td>
            <td>{item.r_rank}</td>
            <td>{item.g_rank}</td>
            <td>{item.mmr}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableLeader;
