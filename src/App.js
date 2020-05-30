import React from 'react';
import { Switch, Route } from "react-router-dom";
import './base.scss';

import { MoviesPage, MovieDetailPage } from './containers'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MoviesPage} />
      <Route path="/movies/:id" exact component={MovieDetailPage} />
    </Switch>
  );
}

export default App;
