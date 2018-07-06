import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './css/styles.css';
import MidBody from './components/MidBody'
import Header from './components/Header.js'
import Splash from './components/Splash.js'
import DownBody from './components/DownBody'
import { headers } from './data/datasource.js'

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">

        <Header header = {headers}/>
        <Splash />
        <MidBody />
        <DownBody />
      </div>
    );
  }
}

export default App;
