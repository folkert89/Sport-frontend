import React from 'react'
import { shallow } from 'enzyme'
import MatchesContainer from './MatchesContainer'
import Title from '../components/Title'

describe('<MatchesContainer />', () => {
  const container = shallow(<MatchesContainer matches={[]} />)

  it('is wrapped in a div with class name "matches"', () =>{
    expect(container).toHaveClassName('wrapper')
    expect(container).toHaveClassName('matches')
  })

  it('sets the Title to "All Matches"', () => {
    expect(container).toContainReact(<Title content="Matches" />)
  })
})
