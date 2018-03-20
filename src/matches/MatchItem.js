import React, { PureComponent } from 'react'
import './MatchItem.css'

class MatchItem extends PureComponent {
  render() {
    const { title, open, location, players } = this.props

    return(
      <article className="match">
        <h1>{ title }</h1>
        <div>
          <p>{ location }</p>
          <ul className="bullet">
            { open && <li><span role="img" aria-label="vegan">🌾</span></li> }
            { players && <li><span role="img" aria-label="pescatarian">🐟</span></li> }
          </ul>
        </div>
      </article>
    )
  }
}

export default MatchItem
