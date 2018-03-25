import React, { PureComponent } from 'react'
import JoinButton from '../components/JoinButton'
import Paper from 'material-ui/Paper'
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
            { open && <li><span role="img" class="fa fa-user-plus"></span></li> }
            { players && <li>5 <span role="img" class="fa fa-users"></span></li> }
          </ul>
        </div>
        <JoinButton />
      </article>
    )
  }
}

export default MatchItem
