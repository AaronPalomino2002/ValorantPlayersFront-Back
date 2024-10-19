import React, { useEffect } from 'react';
import { usePlayer } from '../hooks/usePlayer';

import goldMedal from '../assets/img/GOLD.png'
import immortalMedal from '../assets/img/IMMORTAL.png'
import diamondMedal from '../assets/img/DIAMOND.png'
import platinumMedal from '../assets/img/PLATINUM.png'
import radiantMedal from '../assets/img/RADIANT.png'
import bronzeMedal from '../assets/img/BRONZE.png'
import silverMedal from '../assets/img/SILVER.png'
import { HistoryMatch } from '../components/HistoryMatch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LeagueMedal = ({ league }) => {

  const leaguesImages = {
    'GOLD': goldMedal,
    'PLATINUM': platinumMedal,
    'RADIANT': radiantMedal,
    'BROZE': bronzeMedal,
    'SILVER': silverMedal,
    'IMMORTAL': immortalMedal,
    'DIAMOND': diamondMedal
  }

  return <img src={leaguesImages[league]} width={128}></img>
}

export const AgentItem = (agent) => {

  const { agentUrl, name } = agent

  return (
    <div className='flex flex-col justify-center items-center p-2 gap-2 rounded-md' style={{ width: 100, backgroundColor: '#272930' }}>
      <img src={agentUrl} alt="agentThumbnael" width={40} />
      <span>{name}</span>
    </div>
  )
}

export const WeaponItem = (weapon) => {
  const { name, price, weaponType, damage, accuracy } = weapon;

  const formatTypeWp = {
    'ASSAULT_RIFFLE': 'Rifle de asalto',
    'PISTOL': 'Pistola',
    'SNIPER': 'Sniper'
  }

  const formatAccuracy = {
    'Low': 'Baja',
    'Medium': 'Media',
    'High': 'Alta',
    'Very High': 'Muy Alta'
  }

  return (
    <>
      <div className='flex justify-center items-center gap-5' style={{ minWidth: '320px' }}>
        <div className='bg-gray-800 p-2 rounded-md' style={{ width: '40%', backgroundColor: '#272930' }}>
          <h2 className='text-center'>{name} <br /> <strong>({formatTypeWp[weaponType]})</strong></h2>
        </div>
        <div style={{ width: '60%' }}>
          <p className='m-0'><strong>Precio</strong>: {price}$ </p>
          <p className='m-0'><strong>Daño</strong>: {damage} pts</p>
          <p className='m-0'><strong>Precisión</strong>: {formatAccuracy[accuracy]}</p>
        </div>
      </div>
    </>
  )
}


function Profile() {

  const { profile, handleSetHistory, handleSetProfile } = usePlayer();
  const { player, profileImageUrl, league, mainCharacters, mainWeapons, region, mmr } = profile;
  const { nickname } = player;
  const navigate = useNavigate()

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data: axiosResponse } = await axios.get(`http://localhost:5001/api/v1/player/matches-history/${player.playerId}`);
        const { data } = axiosResponse;

        handleSetHistory(data.matchHistory);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    }

    fetchHistory();
  }, []);


  return (
    <>
      <div className="max-w-1200px p-2 relative" style={{ backgroundColor: '#30323b' }}>
        <section className='flex flex-col gap-2'>
          <div className="flex justify-center items-center flex-col gap-3 p-5 rounded-md" style={{ backgroundColor: '#272930' }}>
            <h1 className="text-2xl capitalize font-bold">{nickname}</h1>
            <img className="rounded-full" src={profileImageUrl} width={128} alt="" />
            <h3><strong>Region:</strong> #{region}</h3>
          </div>
          <div className='flex justify-center mt-5 flex-col items-center gap-3  p-5 rounded-md' style={{ backgroundColor: '#272930' }}>
            <h2 className='text-2xl captialize font-bold'>Liga actual <strong>{league}</strong></h2>
            <LeagueMedal league={league} />
            <span className='text-2xl text-amber-500 font-bold'>{mmr} mmr</span>
          </div>
          <div className='flex flex-col items-center gap-3 mt-5'>
            <h3 className='text-2xl captialize font-bold'>Personajes mas usados</h3>
            <div className='flex justify-evenly flex-wrap mt-2 gap-2'>
              {
                mainCharacters.map((agent) => <AgentItem {...agent} key={agent.agentId} />)
              }
            </div>
          </div>
          <div className='flex flex-col items-center gap-5 mt-5'>
            <h3 className='text-2xl captialize font-bold'>Armas mas usadas</h3>
            <div className='flex flex-col gap-2'>
              {
                mainWeapons.map((weapon) => <WeaponItem {...weapon} key={weapon.weaponId} />)
              }
            </div>
          </div>
        </section>

        <HistoryMatch />

        <button className='fixed top-5 left-4 rounded-lg p-2' style={{backgroundColor: '#1b1c1f'}} onClick={() => {
          handleSetProfile(null);
          navigate('/');
        }}>Volver</button>
      </div >
    </>
  )
}

export default Profile