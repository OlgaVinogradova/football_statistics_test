import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { People } from '../svg/people';
import { Trophy } from '../svg/trophy';
import './Navigation.css';

export const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  return (
    <nav className='nav'>
      <nav className='menu' >
        <ul className={click ? 'nav_menu_active' : 'nav_menu'}>

          <li className='nav_link'>
            <Link to={'/#'} className='link'><Trophy /><span className='nav_text'>Leagues</span></Link>
          </li>
          <li className='nav_link'>
            <Link to={'/Teams'} className='link'><People /><span className='nav_text'>Teams</span></Link>
          </li>
        </ul>
      </nav>
    </nav>
  )
}