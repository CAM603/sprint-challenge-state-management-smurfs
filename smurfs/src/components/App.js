import React, { useState, useEffect} from "react";
import { connect } from 'react-redux';

import "./App.css";
import { getSmurfs } from '../actions/getSmurfs';
import { postSmurf } from '../actions/postSmurf';

const App = (props) => {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
  })

  useEffect(() => {
    props.getSmurfs()
  }, [smurf])

  const handleChange = event => {
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault();
    props.postSmurf(smurf);
    setSmurf({
      name: '',
      age: '',
      height: '',
      id: ''
    })
  }

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      {props.smurfs.map(smurf => (
        <p>{smurf.name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
        onChange={handleChange}
        name="name"
        value={smurf.name}
        />
        <label>Age</label>
        <input 
        onChange={handleChange}
        name="age"
        value={smurf.age}
        
        />
        <label>Height</label>
        <input 
        onChange={handleChange}
        name="height"
        value={smurf.height}
        
        />
        <button>Add</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.getSmurfs.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, postSmurf})(App);
