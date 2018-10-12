import React, { Component } from 'react';

class TuningPage extends Component {

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>tunings page</h1>
        <p>{match.params.type}</p>
        <p>{match.params.tuning}</p>
      </div>
    );
  }
}

export default TuningPage;
