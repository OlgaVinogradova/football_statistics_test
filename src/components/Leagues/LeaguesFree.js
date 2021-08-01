import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Leagues.css';

import { Search } from '../Search/Search';
import { TableLeagues } from './table';
import { key } from '../api/key';


export const LeaguesFree = ({ id, name }) => {


  // const history = useHistory()
  // const handleClick = () => {
  //   history.push({ pathname: `/Free/${id}` })
  // }

  return (
    <Link to={`/Free/${id}`}>
      <img className='l-card_img'
        src={`img/${id}.png`}
        alt=''
      />
    </Link>
  );
}