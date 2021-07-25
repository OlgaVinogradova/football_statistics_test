import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { key } from './components/api/key';
import { LINKS } from './components/api/links';
import axios from 'axios';
import { LeaguesTable } from './components/Leagues/LeaguesTable';
import { Loader } from './components/Loader/Loader';


export const App = () => {
  const [leaguesInfo, getLeaguesInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [directionSort, setDirectionSort] = useState(true)

  const sortBy = (field) => {
    console.log(field)
    const copyData = leaguesInfo.concat();

    let sortData;

    if (directionSort) {
      sortData = copyData.sort(
        (a, b) => { return a[field] > b[field] ? 1 : -1 });
    } sortData = copyData.reverse(
      (a, b) => { return a[field] > b[field] ? 1 : -1 });

    getLeaguesInfo(sortData)
    setDirectionSort(!directionSort)
  }

  useEffect(() => {
    setTimeout(() => {
      axios.get(LINKS.COMPETITIONS_LINK, key).then((res) => {
        const allLeagues = res.data.competitions;
        getLeaguesInfo(allLeagues)
        setIsLoading(false)
      }).catch((error) => {
        setIsError(true)
        setIsLoading(false)
      })
    }, 2000);
  }, [getLeaguesInfo])
  console.log(leaguesInfo)



  return (
    <div className="container">
      {isLoading ? <Loader /> : isError ? <span>Ошибка</span> : <LeaguesTable leaguesInfo={leaguesInfo}
        sortBy={sortBy} />}
    </div>
  );
};