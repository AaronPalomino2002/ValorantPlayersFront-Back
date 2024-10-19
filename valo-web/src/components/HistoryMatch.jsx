import { useEffect, useState } from "react";
import { usePlayer } from "../hooks/usePlayer";
import axios from 'axios';

export const ListPlayers = (team) => {
    const { profile } = usePlayer();
    const { player } = profile;
    const currentPlayerNickname = player.nickname;

    const redTeam = team.teamColor === 'RED';

    return (

        <div className={`${redTeam ? 'bg-red-500' : 'bg-blue-500'} px-5 py-2 rounded-md`}>
            <ul className="mt-2">
                {
                    team.teamPlayers.map(({ teamPlayerId, player, agent }) => {
                        return (
                            <li key={teamPlayerId} className="flex items-center gap-2 mt-1">
                                <img src={agent.agentUrl} width={25} />
                                <p> <strong className={currentPlayerNickname === player.nickname ? 'text-yellow-500' : ''}>{player.nickname}</strong> <br /> {agent.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const MatchCard = (match) => {

    const [stats, setStats] = useState({
        "statId": "550e8400-e29b-41d4-a716-446655440100",
        "deaths": 0,
        "kills": 0,
        "assistances": 0,
        "money": 0,
        "winningRounds": 3,
        "loosingRounds": 2,
        "createdAt": "2024-06-08T05:18:35.000Z",
        "updatedAt": "2024-06-08T05:18:35.000Z"
    });

    const { profile } = usePlayer();
    const { player } = profile;
    const { teams, map, } = match;

    useEffect(() => {
        const getStadistics = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5001/api/v1/stats/get-player-match-stats/?playerId=${player.playerId}&matchId=${match.matchId}`);
                if (!data.stats) {
                    return;
                }

                setStats(data.stats);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);

                }

            }
        }

        getStadistics();
    }, [match.matchId]);



    return (
        <div className="p-3 justify-center gap-2 rounded-lg" style={{backgroundColor: '#34363d'}}>
            <div className="flex justify-between items-center">
                <h4><strong>Mapa</strong>: {map.name}</h4>
                <h4><strong>K: </strong> {stats.kills} <strong>D: </strong> {stats.deaths} <strong>A: </strong>{stats.assistances}</h4>
            </div>
            <hr />
            <div className="flex gap-3 justify-evenly my-2">
                {teams.map((team) => <ListPlayers key={team.teamId} {...team} />)}
            </div>
            <hr />
            <div className="mt-2">
                <p><strong>Dinero Acumulado</strong>: {stats.money}$</p>
            </div>
        </div>
    )
}


export const HistoryMatch = () => {

    const { history } = usePlayer();

    if (!history) {
        return (
            <section className="bg-gray-800 mt-5 p-5 rounded-md">
                <h2>Este jugador no tiene partidas registradas</h2>
            </section>
        )
    }

    return (
        <section className="mt-5 p-5 rounded-md" style={{ backgroundColor: '#272930' }}>
            <h2 className="mb-2 font-bold">Historial de partidas </h2>
            <div className="flex flex-col gap-2">
                {
                    history.map((match) => <MatchCard key={match.matchId} {...match} />)
                }
            </div>
        </section>
    )
}