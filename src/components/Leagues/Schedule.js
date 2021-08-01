import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';
import { PageTitle } from '../typography/PageTitle'
import './Leagues.css';


export const Schedule = (props) => {

  const id = props.shItem

  const [{ data, isLoading, isError }] = useFetch(`https://api.football-data.org/v2/competitions/${id}/matches`)
  const [scheduleInfo, getScheduleInfo] = useState([]);

  const leaguesName = scheduleInfo.competition?.name && scheduleInfo.competition.name
  const leaguesSchudlue = scheduleInfo?.matches && scheduleInfo.matches

  useEffect(() => {
    if (data) {
      getScheduleInfo(data)
    }
  }, [data])

  console.log(id)
  return (


    <div div className='content' >

      <PageTitle>Leagues: {leaguesName}</PageTitle>
      {
        isLoading ? <Loader /> : isError ? <span>Ошибка</span> :
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
              {leaguesSchudlue.map((row) => (
                <tr key={row.id}>
                  <td>{row.utcDate && new Date(row.utcDate).toLocaleString()}</td>
                  <td>{row.status}</td>
                  <td><div>{row.homeTeam?.name && row.homeTeam.name}</div><p> vs </p><div>{row.awayTeam?.name && row.awayTeam.name}</div></td>
                  <td>{row.matchday}</td>
                  <td>{row.score?.winner && row.score.winner}</td>
                </tr>
              ))}
            </tbody>
          </table>
      }
    </div>
  )
}