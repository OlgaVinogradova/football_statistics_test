import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LINKS } from '../api/links';
import { TeamsCard } from './TeamsCard';
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';
import { ObjectToQueryString } from '../typography/url'
import * as queryString from 'querystring';
import { Search } from '../Search/Search';

import './Teams.css';

export const Teams = () => {
  const history = useHistory()

  const [{ data, isLoading, isError }] = useFetch(LINKS.TEAMS_LINK)

  const [teamsInfo, getTeamsInfo] = useState([]);

  useEffect(() => {
    if (data) {
      getTeamsInfo(data.teams);

    }

  }, [data]);

  return (
    <div className='contentBox'>

      {isLoading ? <Loader /> : isError ? <span>Ошибка</span> :
        <TeamsCard
          teamsInfo={teamsInfo}
        />}
    </div>
  );
}