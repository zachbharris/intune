import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import tunings from '../data/tunings.json';

class TuningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringOne: '',
      stringTwo: '',
      stringThree: '',
      stringFour: '',
      stringFive: '',
      stringSix: '',
      redirect: false,
    };
  }

  componentDidMount() {
    this.handleTuning();
  }

  handleTuning = () => {
    const { match } = this.props;
    const tuning = tunings.find(tuning => tuning.name === match.params.tuning);

    if (tuning) {
      this.setState({
        stringOne: tuning.tune[0],
        stringTwo: tuning.tune[1],
        stringThree: tuning.tune[2],
        stringFour: tuning.tune[3],
        stringFive: tuning.tune[4],
        stringSix: tuning.tune[5],
      });
    } else {
      this.setState({ redirect: true });
    }
  }

  render() {
    const { match } = this.props;
    const {
      stringOne,
      stringTwo,
      stringThree,
      stringFour,
      stringFive,
      stringSix,
      redirect
    } = this.state;

    if (redirect) {
      return <Redirect to="/404" />
    }

    return (
      <div>
        <h1>tunings page</h1>
        <p>{match.params.tuning}</p>
        <ul>
          <li>{stringOne}</li>
          <li>{stringTwo}</li>
          <li>{stringThree}</li>
          <li>{stringFour}</li>
          <li>{stringFive}</li>
          <li>{stringSix}</li>
        </ul>
      </div>
    );
  }
}

export default TuningPage;
