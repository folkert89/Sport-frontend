import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import join from '../actions/matches/join'
import './JoinButton.css'

class JoinButton extends PureComponent {

  componentWillMount() {
    const { match, index } = this.props

  }

  classNames() {
    console.log('komt alleen op begin aan')
    const { match } = this.props
    const joined = match.joined
    console.log(joined)
    let classes = 'join'

    if (joined) { classes += ' joined'}

    return classes
  }

  toggleJoin() {

    const joined = !this.props.match.joined

    this.props.join(joined, this.props.index)
  }

  render() {
    const { match } = this.props
    const joined = match.joined

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

const MapStateToProps = ({matches}, parentProps) => {
  let index = parentProps.index

  return{
    match: matches[index],
    index
  }
}

export default connect(MapStateToProps, { join })(JoinButton)
