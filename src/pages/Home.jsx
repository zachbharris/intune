import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import tunings from '../data/tunings.json';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="home">
        <Helmet>
          <title>InTune</title>
        </Helmet>
        <div className="popular">
          <h2><span role="img" aria-label="fire emoji">🔥</span> Popular Tunings</h2>
          <div className="items">
            <Link to="/tuning/standard">standard</Link>
            <Link to="/tuning/drop-d">drop d</Link>
            <Link to="/tuning/c-standard">c standard</Link>
            <Link to="/tuning/c-standard-sharp">c standard sharp</Link>
            <Link to="/tuning/dadgad">dadgad</Link>
            <Link to="/tuning/open-g">open g</Link>
          </div>
        </div>

        <div className="available">
          <h2><span role="img" aria-label="guitar emoji">🎸</span> All Available Tunings</h2>
          <ul className="items">
            {
              tunings.map(t => (
                <li key={t.name}>
                  <Link to={`/tuning/${t.name}`}>
                    {
                      t.name.replace(/-/g, ' ')
                      .split(' ')
                      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(' ')
                    }
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
