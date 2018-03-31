import matches from './matches'

const matches2 = [
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

describe('matches reducer', () => {
  const reducer = matches
  const initialState = matches2

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
