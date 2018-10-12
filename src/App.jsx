import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Tunings from './data/tunings';

import Routes from './routes';

class App extends Component {
  render() {
    console.log(Tunings);
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
