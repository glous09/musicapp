import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Switch, Route } from "react-router-dom";
import "./firebaseConfig";
import firebase from "firebase";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  logIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(user => {
        this.setState({ isLoggedIn: true });
      });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ isLoggedIn: false });
      });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      }
    });
  }
  
  render() {
    return (
      <div className="">
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
