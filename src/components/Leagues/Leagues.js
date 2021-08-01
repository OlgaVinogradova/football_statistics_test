import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LINKS } from '../api/links';
import { LeaguesTableSort } from './LeaguesTableSort';
import { Loader } from '../Loader/Loader';
import { useFetch } from '../api/useFetch';
import { DateFilter } from '../DateFilter';
import { Search } from '../Search/Search';
import { ObjectToQueryString } from '../typography/url';
import * as queryString from 'querystring';

import './Leagues.css';


export const Leagues = () => {
  const history = useHistory()



  const [{ data, isLoading, isError }] = useFetch(LINKS.COMPETITIONS_LINK)
  const [leaguesInfo, getLeaguesInfo] = useState([]);

  useEffect(() => {
    if (data) {
      getLeaguesInfo(data.competitions)
      applyFilters()
    }
  }, [data])
  console.log(leaguesInfo)


  const applyFilters = () => {
    const parsed = queryString.parse(history.location.search.substr(1))
    let leaguesArray = data.competitions
    if (parsed.search !== undefined) {
      const searchTerm = String(parsed.search).toLowerCase()
      leaguesArray = leaguesArray.filter((competition) => {
        return (
          competition.name.toLowerCase().includes(searchTerm) ||
          competition.area.name.toLowerCase().includes(searchTerm) ||
          (competition.plan && competition.plan.toLowerCase().includes(searchTerm)) ||
          (competition.currentSeason?.startDate && competition.currentSeason.startDate.toLowerCase().includes(searchTerm)) ||
          (competition.currentSeason?.endDate && competition.currentSeason.endDate.toLowerCase().includes(searchTerm))
        )
      })
    }
    if (parsed.dateFrom !== undefined && parsed.dateTo !== undefined) {
      leaguesArray = leaguesArray.filter((competition) => {
        return (
          new Date(competition.currentSeason?.startDate).getTime() >= new Date(parsed.dateFrom).getTime() &&
          new Date(competition.currentSeason?.endDate).getTime() <= new Date(parsed.dateTo).getTime()
        )
      })
    }
    getLeaguesInfo(leaguesArray)
  }

  const onFilterSubmit = (obj) => {
    const parsed = { ...queryString.parse(history.location.search.substr(1)), ...obj }
    history.push({
      search: ObjectToQueryString(parsed)
    })
    applyFilters()
  };
  return (
    <div className='contentBox'>

      <DateFilter onFilterSubmit={onFilterSubmit} />
      <Search onFilterSubmit={onFilterSubmit} />
      {isLoading ? <Loader /> : isError ? <span>Ошибка</span> : <LeaguesTableSort
        leaguesInfo={leaguesInfo}
        getLeaguesInfo={getLeaguesInfo}
      />};

    </div>
  );
}