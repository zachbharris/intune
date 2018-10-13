import React, { Component, Fragment } from 'react';
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
          <Link to="/standard">standard</Link>
          <Link to="/drop-d">drop d</Link>
          <Link to="/open-g">open g</Link>
          <Link to="/open-d">open d</Link>
          <Link to="/open-e">open e</Link>
          <Link to="/open-a">open a</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
