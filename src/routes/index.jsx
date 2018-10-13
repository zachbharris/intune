import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HomePage from '../pages/Home';
import TuningPage from '../pages/Tuning';
import NotFoundPage from '../pages/NotFound';

const Routes = () => (
  <div>
    <Route render={({ location }) => (
      <TransitionGroup className="app">
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/tuning/:tuning" component={TuningPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </div>
);

export default withRouter(Routes);
