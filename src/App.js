import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Leagues } from './components/Leagues/Leagues';
import { Teams } from './components/Teams/Teams';
import { Team } from './components/Teams/Team';
import { Navigation } from './components/Navigation/Navigation';
import './App.css'
import { ScheduleLeagues } from './components/Leagues/ScheduleLeagues';

export const App = () => {
  return (
    <div className='wrap'>
      <Router>
        <div className='header'>
          <Navigation />
        </div>
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Leagues} />
            <Route path='/teams' component={Teams} />
            <Route path='/teams/:id' component={Team} />
            <Route path='/Leagues/:id' component={ScheduleLeagues} />
          </Switch>
        </div>
      </Router>
    </div>
  );

}

  // `https://data.football-api.com/v3/competitions/${props.match.params.id}?

  // https://api.football-data.org/v2/competitions/${league}/matches`

  // https://api.football-data.org/v2/competitions/${id}/standings

