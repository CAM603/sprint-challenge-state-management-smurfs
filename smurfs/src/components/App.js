import React from "react";

import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS 2.0 W/ Redux</h1>
      <div className="container">
        <SmurfList />
        <SmurfForm />
      </div>
    </div>
  );
}

export default App;
