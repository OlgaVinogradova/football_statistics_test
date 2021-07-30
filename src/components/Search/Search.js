import React from 'react';
import { useState } from 'react'

import './Search.css';

export const Search = ({ onFilterSubmit }) => {
  const [search, setSearch] = useState('')

  return (
    <main className='search'>
      <form className='search_form' onsubmit="event.preventDefault();" role="search">
        <label className='search_label' for="search">Search for stuff</label>
        <input className='search_input'
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search_button' type="submit"
          onClick={() => onFilterSubmit({ search })}
        >Go</button>
      </form>
    </main>
  )
}