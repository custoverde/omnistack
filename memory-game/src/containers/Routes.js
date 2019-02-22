import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import GamePage from './Game/GamePage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/game" component={GamePage} />
  </Switch>
);

export default Routes;
