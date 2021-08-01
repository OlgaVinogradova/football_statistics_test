import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search';
import './Teams.css';

export const TeamsCard = ({ teamsInfo, onFilterSubmit }) => {

  return (
    <div className='contentCard'>
      <Search onFilterSubmit={onFilterSubmit} />
      {teamsInfo.map((team) => (
        <div key={team.id} >
          <Link to={`/Teams/${team.id}`}>
            <div className='card'>
              <img className='card_img' src={team.crestUrl} alt={team.name} />
              <div className='card_content'>
                <div className='name'>
                  {team.name}
                </div>
                <div className='name_small'>
                  {team.venue}
                </div>
              </div>
            </div>
          </Link>
        </div>))}
    </div>
  )
}

