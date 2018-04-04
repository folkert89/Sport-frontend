import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import MatchItem from './MatchItem'
import MatchEditor from './MatchEditor'
import './MatchItem.css'

class MatchesContainer extends PureComponent {
  renderMatch(match, index) {
    return <MatchItem key={index} index={index} { ...match } />
  }

  render() {
    return(
      <div className="wrapper">
        <header>
          <Title content="Matches" />
        </header>

        <MatchEditor />

        <main className="matches">
          { this.props.matches.map(this.renderMatch) }
        </main>
      </div>
    )
  }
}

const MapStateToProps = ({ matches }) => ({
  matches
})

export default connect(MapStateToProps)(MatchesContainer)
