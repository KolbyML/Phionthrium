import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch></Switch>
      </Router>
    </div>
  );
}

export default App;
