import React from 'react'
import { shallow } from 'enzyme'
import MatchItem from './MatchItem'

const match = {
  title: 'Football',
  location: 'The Hague',
  open: false,
  players: 4
}

describe('<MatchItem />', () => {
  const container = shallow(<MatchItem { ...match } />)

  it('is wrapped in a article tag with class name "match"', () => {
    expect(container).toHaveTagName('article')
    expect(container).toHaveClassName('match')
  })

  it('contains a the title', () => {
    expect(container.find('h1')).toHaveText(match.title)
  })
})
