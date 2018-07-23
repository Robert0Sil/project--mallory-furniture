import React, { Component } from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import { headers } from './data/datasource.js';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import TC from './components/Terms+Conditions';
import AP from './components/All-Products';
import NoMatch404 from './components/NoMatch404';

import Single from './components/Single';
import MidBody from './components/MidBody';
import Splash from './components/Splash';


class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <Header header = {headers}/>

        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/About" component={ AboutPage } />
          <Route exact path="/Terms+Conditions" component={ TC } />
          <Route exact path="/All-Products" component={ AP } />
          <Route exact path="/gender/:ProId" component={ MidBody } />
          <Route exact path="/gender/:ProId" component={ Splash } />
          <Route exact path="/product/:PId" component={ Single } />
          <Route exact path="/NoMatch404" component={ NoMatch404 } />
        </Switch>
      </div>
    );
  }
}

export default App;
