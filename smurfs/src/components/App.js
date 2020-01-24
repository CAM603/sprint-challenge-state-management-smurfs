import React, { Component } from "react";
import { connect } from 'react-redux';

import "./App.css";
import { getSmurfs } from '../actions/getSmurfs';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {this.props.smurfs.map(smurf => (
          <p>{smurf.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.getSmurfs.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
