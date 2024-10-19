// import React, { useEffect, useState } from 'react';

// const TablePlayers = ({ searchTerm }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Cambia esta URL a la URL de tu API local
//     fetch('http://localhost:5001/api/v1/player/profile/')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         // Extrae los datos de interés de la respuesta de la API
//         const players = data.nicknames.map((nombre, index) => ({
//           id_player: index + 1,
//           name: nombre.nickname,
//         }));
//         setData(players);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredData = data.filter(
//     (player) =>
//       player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       player.tagline.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <table className='css-1iy7n7q'>
//       <caption>Players</caption>
//       <colgroup>
//         <col style={{width:46}} />
//         <col style={{width:136}} />
//         <col style={{width:88}} />
//         <col style={{width:62}} />
//         <col style={{width:70}} />
//         <col style={{width:178}} />
//         <col style={{width:120}} />
//       </colgroup>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Players Name</th>
//         </tr>
//       </thead>
//       <tbody style={{color: '#9E9EB1'}}>
//         {filteredData.map((item) => (
//           <tr key={item.id_player}>
//             <td>{item.id_player}</td>
//             <td>{item.name}</td>
//             <td>{item.tier}</td>
//             <td>{item.rankedRating}</td>
//             <td>{item.wins}</td>
//             <td>{item.winRatio}</td>
//             <td>{item.mostAgent}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TablePlayers;
