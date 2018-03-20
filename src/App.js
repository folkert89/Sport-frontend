import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MatchesContainer from './matches/MatchesContainer'


const matches = [
  {
    title: 'Football',
    location: 'The Hague',
    open: false,
    players: 4
  },
  {
    title: 'Tennis',
    location: 'Rotterdam',
    open: false,
    players: 7
  },
  {
    title: '4-4 football',
    location: 'Rotterdam - at the park',
    open: false,
    players: 8
  },
  {
    title: 'Basketball',
    location: 'Amsterdam',
    open: true,
    players: 3
  },
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sporting App</h1>
        </header>
        <p className="App-intro">
          Together we sport!
        </p>
        <MatchesContainer matches={matches} />
      </div>
    );
  }
}

export default App;
