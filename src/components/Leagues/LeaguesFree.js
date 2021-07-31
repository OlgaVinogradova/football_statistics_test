import React from 'react';
import './Leagues.css';

import { Search } from '../Search/Search';
import { TableLeagues } from './table';


export const LeaguesFree = () => {

  const FreeLeagues = [
    { id: '1204', name: 'epl' },
    { id: '1399', name: 'laliga' },
    { id: '1229', name: 'bundesliga' },
    { id: '1221', name: 'french ligue1' },
    { id: '1269', name: 'serie a' },
    { id: '1322', name: 'holland erdesive' },
  ]

  return (
    <div className='contentCard'>
      {FreeLeagues.map((league) => (
        <div
          className='l-card'
          key={league.id}>
          {/* <Link to={`Free/${league.id}`}> */}
          <img className='l-card_img'
            src={`img/${league.id}.png`}
            alt=''
          />
          {/* </Link> */}
        </div>
      ))}
    </div>

  );
}