import React, { PureComponent } from 'react'
import './JoinButton.css'

class JoinButton extends PureComponent {
  constructor() {
    super()

    this.state = {
      joined: false
    }
  }

  classNames() {
    const { joined } = this.state
    let classes = 'join'

    if (joined) { classes += ' joined'}

    return classes
  }

  toggleJoin() {
    this.setState({
      joined: !this.state.joined
    })
  }

  render() {
    const { joined } = this.state
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleJoin.bind(this) }>
          { joined?
            <span role='img' aria-label='joined'>⚽</span>
             :
            <span role='img' aria-label='not joined'>⚾</span> }
            <span className='copy'>
            { joined ?
              <span role='img' aria-label='joined'>⚽</span>
               :
              <span role='img' aria-label='not joined'>⚾</span> }
            </span>
        </button>
        <span className="joins"> { joined? 'You join this' : null}
        </span>
      </p>
    )
  }
}

export default JoinButton
