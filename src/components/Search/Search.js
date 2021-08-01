// import React from 'react';
// import { useState } from 'react'

// import './Search.css';

// export const Search = ({ onFilterSubmit }) => {
//   const [search, setSearch] = useState('')

//   return (
//     <main className='search'>
//       <form className='search_form'
//         // onsubmit={"event.preventDefault();"} 
//         role="search">
//         <label className='search_label'>Search for stuff</label>
//         <input className='search_input'
//           id="search"
//           type="search"
//           placeholder="Search..."
//           required
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button className='search_button' type="submit"
//           onClick={() => onFilterSubmit({ search })}
//         >Go</button>
//       </form>
//     </main>
//   )
// }

import React, { useState } from 'react'
import { Button, InputBase, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    right: '50px',
    top: '5px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    width: '100%',
    backgroundColor: ' #fff',
    margin: '3px 0',
    padding: '2px 8px',
    border: '1px solid #fff',
    borderRadius: '8px 0 0 8px'
  },
  searchButton: {
    display: 'flex',
    margin: '3px 0',
    fontWeight: 'bold',
    color: '#024820',
    backgroundColor: ' #9ad3b4',
    border: '1px solid #9ad3b4',
    borderRadius: '0 8px 8px 0'
  }
})

export const Search = ({ onFilterSubmit }) => {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  return (
    <Grid className={classes.container}>
      <Grid item xs={12} md={9} lg={10}>
        <InputBase
          className={classes.searchbar}
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        // onKeyDown={() => onFilterSubmit({ search })}
        />
      </Grid>
      <Grid item xs={3} md={3} lg={2}>
        <Button className={classes.searchButton} onClick={() => onFilterSubmit({ search })} variant="contained" >
          Search
        </Button>
      </Grid>
    </Grid>
  )
}