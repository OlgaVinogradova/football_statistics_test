import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Leagues } from './components/Leagues/Leagues';
import { Teams } from './components/Teams/Teams';
import { Navigation } from './components/Navigation/Navigation';
import './App.css'
import { ScheduleLeagues } from './components/Leagues/ScheduleLeagues';
import { Schedule } from './components/Leagues/Schedule';
import { ScheduleTeam } from './components/Teams/ScheduleTeam'
import { Free } from './components/Leagues/Free';

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
            <Route path='/Leagues/:id' component={ScheduleLeagues} />
            <Route path='/Teams' exact component={Teams} />
            <Route path='/Teams/:id' component={ScheduleTeam} />
            <Route path='/Free' exact component={Free} />
            {/* <Route path='/Free/:id' component={Schedule} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};