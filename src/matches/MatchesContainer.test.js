import React from 'react'
import { shallow } from 'enzyme'
import MatchesContainer from './MatchesContainer'
import MatchItem from './MatchItem'
import Title from '../components/Title'

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

describe('<MatchesContainer />', () => {
  const container = shallow(<MatchesContainer matches={matches} />)

  it('is wrapped in a div with class name "matches"', () =>{
    expect(container).toHaveClassName('wrapper')
    expect(container).toHaveClassName('matches')
  })

  it('sets the Title to "All Matches"', () => {
    expect(container).toContainReact(<Title content="Matches" />)
  })

  it('renders all matches as a MatchItem', () => {
    matches.map((match, index) => {
      return expect(container).toContainReact(<MatchItem key={index} { ...matches } />)
    })
  })
})
