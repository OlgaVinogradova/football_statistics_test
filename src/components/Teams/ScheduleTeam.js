import React from 'react';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';


export const ScheduleTeam = (props) => {

  const { id } = props.match.params
  const [{ data, isLoading, isError }] = useFetch(`https://api.football-data.org/v2/teams/${id}/matches`)

  const [teamScheduleInfo, getTeamScheduleInfo] = useState([]);

  useEffect(() => {
    if (data) {
      getTeamScheduleInfo(data.matches)
    }
  }, [data])
  console.log(teamScheduleInfo)

  return (

    <div className='content'>
      {isLoading ? <Loader /> : isError ? <span>Ошибка</span> :
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Status</th>
              <th scope="col">Team</th>
              <th scope="col">md</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {teamScheduleInfo.map((row) => (
              <tr key={row.id}>
                <td>{row.utcDate && new Date(row.utcDate).toLocaleString()}</td>
                <td>{row.status}</td>
                <td><div>{row.homeTeam?.name && row.homeTeam.name}</div><p> vs </p><div>{row.awayTeam?.name && row.awayTeam.name}</div></td>
                <td>{row.matchday}</td>
                <td>{row.score?.winner && row.score.winner}</td>
              </tr>))}
          </tbody>
        </table>
      }
    </div>

  );
}