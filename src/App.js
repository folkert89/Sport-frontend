import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sporting pp</h1>
        </header>
        <p className="App-intro">
          Together we sport!
        </p>
        <Title content="All Matches"/>
      </div>
    );
  }
}

export default App;
