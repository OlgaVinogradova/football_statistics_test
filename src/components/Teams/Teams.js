import React from 'react';
import { useState, useEffect } from 'react';
import { LINKS } from '../api/links';
import { TeamsCard } from './TeamsCard';
import { Loader } from '../Loader/Loader';
import { makeStyles, Container } from '@material-ui/core'
import { useFetch } from '../api/useFetch';
import { Team } from './Team';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}))

export const Teams = () => {

  const classes = useStyles()
  const [{ data, isLoading, isError }] = useFetch(LINKS.TEAMS_LINK)

  const [teamsInfo, getTeamsInfo] = useState([]);

  useEffect(() => {
    if (data) {
      getTeamsInfo(data.teams)
      // applyFilters()
    }
  }, [data])
  console.log(teamsInfo)

  return (
    <Container className={classes.container}>
      {isLoading ? <Loader /> : isError ? <span>Ошибка</span> :
        <div className={classes.root}>
          {teamsInfo.map((team) => (
            <TeamsCard key={team.id}
              team={team}
              teamsInfo={teamsInfo}
            />
          ))}
          <Team />
        </div>
      }
    </Container>
  );
}