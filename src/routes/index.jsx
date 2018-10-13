import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from '../pages/Home';
import TuningPage from '../pages/Tuning';
import NotFoundPage from '../pages/NotFound';

const Routes = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tuning/:tuning" component={TuningPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default withRouter(Routes);
