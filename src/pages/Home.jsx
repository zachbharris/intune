import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="home">

        <div className="items">
          <Link to="/tuning/standard">standard</Link>
          <Link to="/tuning/drop-d">drop d</Link>
          <Link to="/tuning/open-g">open g</Link>
          <Link to="/tuning/open-d">open d</Link>
          <Link to="/tuning/open-e">open e</Link>
          <Link to="/tuning/open-a">open a</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
