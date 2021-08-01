import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';

export const Schedule = ({ setScheduleParams, scheduleParams, id }) => {


  const [{ data, isLoading, isError }] = useFetch(`https://api.football-data.org/v2/teams/${id}/matches`)

  const history = useHistory()
  useEffect(() => {
    if (data) {
      setScheduleParams(data.matches)
    }
  }, [data])


  return (

    <div>
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
            {scheduleParams.map((row) => (
              <tr key={row.id}>
                <td>{row.utcDate && new Date(row.utcDate).toLocaleString()}</td>
                <td className='name_small'>{row.status}</td>
                <td><h4>{row.homeTeam?.name && row.homeTeam.name}<span className='name_small'> vs </span>{row.awayTeam?.name && row.awayTeam.name}</h4></td>
                <td>{row.matchday}</td>
                <td>{row.score?.winner && row.score.winner}</td>
              </tr>))}
          </tbody>
        </table>
      }
    </div>

  );
}