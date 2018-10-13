import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// importing routes
import Routes from './routes';

import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Routes />
    </React.Fragment>
  </Router>
);

export default App;
