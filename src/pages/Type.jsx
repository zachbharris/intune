import React, { Component } from 'react';

class TypePage extends Component {

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Types page</h1>
        <p>{match.params.type}</p>
      </div>
    );
  }
}

export default TypePage;
