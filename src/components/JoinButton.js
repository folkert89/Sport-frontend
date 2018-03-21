import React, { PureComponent } from 'react'
import './JoinButton.css'

class JoinButton extends PureComponent {
  classNames() {
    const { joined } = this.state
    let classes = 'join'

    if (joined) { classes += ' joined'}

    return classes
  }
  toggleJoin() {
    console.log('Join button clicked!')
  }

  render() {
    const joined = false
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleJoin.bind(this) }>
          { joined? '⚽' : '⚾' }
        </button>
        <span className="joins"> { joined? 'You join this' : null}
        </span>
      </p>
    )
  }
}

export default JoinButton
