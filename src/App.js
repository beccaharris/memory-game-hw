import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import Jumbo from './components/Jumbo/Jumbo';
import FixedFooter from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Jumbo/>
        <div className="container">
          <Jumbo/>
          <Jumbo/>
          <Jumbo/>
        </div>
        <FixedFooter/>
      </div>
    );
  }
}

export default App;
