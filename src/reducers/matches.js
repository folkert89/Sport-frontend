import { CREATE_MATCH } from '../actions/matches/create'
import { JOIN_MATCH } from '../actions/matches/join'

const matches = [
  {
    title: 'Football',
    location: 'The Hague',
    open: false,
    players: 4,
    joined: false
  },
  {
    title: 'Tennis',
    location: 'Rotterdam',
    open: false,
    players: 7,
    joined: false
  },
  {
    title: '4-4 football',
    location: 'Rotterdam - at the park',
    open: false,
    players: 8,
    joined: false
  },
  {
    title: 'Basketball',
    location: 'Amsterdam',
    open: true,
    players: 3,
    joined: false
  },
]

export default (state = matches, { type, payload } = {}) => {
  switch(type) {
    case CREATE_MATCH :
      return [Object.assign({}, payload)].concat(state)

    case JOIN_MATCH :
      const index = payload[1]
      matches[index].joined = payload[0]
      return state

    default :
      return state
  }
}
