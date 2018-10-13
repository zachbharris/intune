import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';

import tunings from '../data/tunings.json';

class TuningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      stringOne: '',
      stringTwo: '',
      stringThree: '',
      stringFour: '',
      stringFive: '',
      stringSix: '',
      tuningName: '',
      tuningDescription: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.handleTuning();

    const name = (
      match.params.tuning
        .replace(/-/g, ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
      );
    this.setState({ tuningName: name });
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
        tuningDescription: tuning.description
      });
    } else {
      this.setState({ redirect: true });
    }
  }

  render() {
    const {
      redirect,
      stringOne,
      stringTwo,
      stringThree,
      stringFour,
      stringFive,
      stringSix,
      tuningName,
      tuningDescription,
    } = this.state;

    if (redirect) {
      return <Redirect to="/404" />
    }

    return (
      <div className="tuning">
        <Helmet>
          <title>{tuningName} | InTune</title>
        </Helmet>
        <h1>{tuningName} Tuning</h1>

        {
          tuningDescription !== ''
          ? <p>{tuningDescription}</p>
          : null
        }

        <ul className="tuning-visual">
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
