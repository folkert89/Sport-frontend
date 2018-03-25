import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import MatchItem from './MatchItem'

class MatchesContainer extends PureComponent {
  renderMatch(match, index) {
    return <MatchItem key={index} { ...match } />
  }

  render() {
    return(
      <div className="matches wrapper">
        <header>
          <Title content="Matches" />
        </header>

        <main>
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
