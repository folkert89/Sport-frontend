import { CREATE_MATCH } from '../actions/matches/create'

const matches = [
  {
    title: 'Football',
    location: 'The Hague',
    open: false,
    players: 4
  },
  {
    title: 'Tennis',
    location: 'Rotterdam',
    open: false,
    players: 7
  },
  {
    title: '4-4 football',
    location: 'Rotterdam - at the park',
    open: false,
    players: 8
  },
  {
    title: 'Basketball',
    location: 'Amsterdam',
    open: true,
    players: 3
  },
]

export default (state = matches, { type, payload } = {}) => {
  switch(type) {
    case CREATE_MATCH :
      return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
