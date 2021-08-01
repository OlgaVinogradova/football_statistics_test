import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';
import { PageTitle } from '../typography/PageTitle';
import './Leagues.css';


export const ScheduleLeagues = (props) => {
  const history = useHistory()

  const { id } = props.match.params
  const [{ data, isLoading, isError }] = useFetch(`https://api.football-data.org/v2/competitions/${id}/matches`)
  const [scheduleInfo, getScheduleInfo] = useState([]);

  const leaguesName = scheduleInfo.competition?.name && scheduleInfo.competition.name
  const leaguesSchudlue = scheduleInfo?.matches && scheduleInfo.matches

  useEffect(() => {
    if (data) {
      getScheduleInfo(data)
    }
  }, [data])

  return (

    <div className='content'>
      <PageTitle>Leagues: {leaguesName}</PageTitle>
      {isLoading ? <Loader /> :
        isError ?
          <div>
            Sorry, but in the free API currently has no data for this competition. Check: "Serie A", "Premier League", "La Liga", "Bundesliga", "Ligue 1", "Eredivisie"...You can use the search...</div> :
          <Fragment>
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
          </Fragment>
      }
    </div>

  );
}