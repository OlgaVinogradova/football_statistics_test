import React from 'react';
import { key } from '../api/key'
import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router'
import { useFetch } from '../api/useFetch';
import { PageTitle } from '../typography/PageTitle'
import axios from 'axios';
import './Leagues.css';


export const ScheduleLeagues = (props) => {

  const { id } = props.match.params
  const [{ data, isLoading, isError }] = useFetch([`https://api.football-data.org/v2/competitions/${id}/matches`])
  const [scheduleInfo, getScheduleInfo] = useState([]);

  useEffect(() => {
    if (data) {
      getScheduleInfo(data)
    }
  }, [data])
  console.log(scheduleInfo)


  return (

    <div className='content'>
      <PageTitle>Leagues: {scheduleInfo.competition?.name && scheduleInfo.competition.name}</PageTitle>
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
          {scheduleInfo.matches.map((row) => (
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
    </div>
  );
}