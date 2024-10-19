import React, { useEffect, useState } from 'react';

const TableAgents = ({ searchTerm, category  }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Cambia esta URL a la URL de tu API local
      fetch('http://localhost:5001/api/v1/agents/get-agents')
        .then((response) => response.json())
        .then((responseData) => {
          // Extraer datos específicos según la categoría seleccionada
          let categoryData = [];

          switch (category) {
            case 'controller': // Assault Rifle
              categoryData = responseData.agents.controllers;
              break;
            case 'sentinels': // Pistol
              categoryData = responseData.agents.sentinels;
              break;
            case 'duelist': // Sniper
              categoryData = responseData.agents.duelists;
              break;
              case 'initiators': // Sniper
                categoryData = responseData.agents.initiators;
                break;
            default:
              categoryData = responseData.agents.controllers;
          }
  
          // Mapear los datos a un formato uniforme
          const formattedData = categoryData.map((agent, index) => ({
            agentId: index + 1,
            name: agent.name,
            role: agent.agentRole,
            p_skill: agent.primarySkill,
            s_skill: agent.secondarySkill,
            t_skill: agent.tertiarySkill,
            ulti: agent.ultimate,
            imgAgent: agent.agentUrl
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
      <caption>Leaderboards</caption>
      <colgroup>
        <col style={{width:46}} />
        <col style={{width:100}} />
        <col style={{width:88}} />
        <col style={{width:100}} />
        <col style={{width:100}} />
        <col style={{width:178}} />
        <col style={{width:120}} />
        <col style={{width:160}} />
      </colgroup>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Agent Photo</th>
          <th>Role Agent</th>
          <th>Primary Skill</th>
          <th>Secondary Skill</th>
          <th>Tertiary Skill</th>
          <th>Ultimate</th>
        </tr>
      </thead>
      <tbody style={{color: '#9E9EB1'}}>
        {data.map((item) => (
          <tr key={item.agentId}>
            <td>{item.agentId}</td>
            <td>{item.name}</td>
            <td><img src={item.imgAgent} style={{width:15, margin:'auto'}}></img></td>
            <td>{item.role}</td>
            <td>{item.p_skill}</td>
            <td>{item.s_skill}</td>
            <td>{item.t_skill}</td>
            <td>{item.ulti}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAgents;
