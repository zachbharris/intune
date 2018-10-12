import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from '../pages/Home';
import TuningPage from '../pages/Tuning';
import NotFoundPage from '../pages/NotFound';

class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:type/:tuning" component={TuningPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
