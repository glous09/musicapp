import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
        <Route  />
        <Route/>
      </Switch>
      </div>
    );
  }
}

export default App;
