import React, { Component } from 'react'
import MatchesContainer from './matches/MatchesContainer'
import './App.css'


class App extends Component {
  updateMatches(id, update) {
     // content later
   }
  render() {
    return (
      <div className="App">
        <MatchesContainer
          updateMatches={ this.updateMatches.bind(this) } />
      </div>
    )
  }
}

export default App;
