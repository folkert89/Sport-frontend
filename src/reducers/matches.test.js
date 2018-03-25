import matches from './matches'

describe('matches reducer', () => {
  const reducer = matches
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
