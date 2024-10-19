import React, { useEffect, useState } from 'react';

const TableWeapons = ({ searchTerm, category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cambia esta URL a la URL de tu API local
    fetch('http://localhost:5001/api/v1/weapons/get-weapons')
      .then((response) => response.json())
      .then((responseData) => {
        // Extraer datos específicos según la categoría seleccionada
        let categoryData = [];
        switch (category) {
          case 'ar': // Assault Rifle
            categoryData = responseData.weapons.assaultRiffles;
            break;
          case 'pistol': // Pistol
            categoryData = responseData.weapons.pistols;
            break;
          case 'sniper': // Sniper
            categoryData = responseData.weapons.snipers;
            break;
          default:
            categoryData = responseData.weapons.assaultRiffles;
        }

        // Mapear los datos a un formato uniforme
        const formattedData = categoryData.map((weapon, index) => ({
          weaponId: index + 1,
          name: weapon.name,
          weaponType: weapon.weaponType,
          price: weapon.price,
          damage: weapon.damage,
          rateOfFire: weapon.rateOfFire,
          accuracy: weapon.accuracy
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  return (
    <table className='css-1iy7n7q'>
      <caption>Players</caption>
      <colgroup>
        <col style={{ width: 46 }} />
        <col style={{ width: 136 }} />
        <col style={{ width: 88 }} />
        <col style={{ width: 62 }} />
        <col style={{ width: 70 }} />
        <col style={{ width: 178 }} />
        <col style={{ width: 120 }} />
      </colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Damage</th>
          <th>Rate of Fire</th>
          <th>Accuracy</th>
        </tr>
      </thead>
      <tbody style={{ color: '#9E9EB1' }}>
        {data.map((item) => (
          <tr key={item.weaponId}>
            <td>{item.weaponId}</td>
            <td>{item.name}</td>
            <td>{item.weaponType}</td>
            <td>{item.price}</td>
            <td>{item.damage}</td>
            <td>{item.rateOfFire}</td>
            <td>{item.accuracy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWeapons;
