import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'


import Profile from './Profile'
import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Contacts}/> 
          <Route exact path='/profile/:id' component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
