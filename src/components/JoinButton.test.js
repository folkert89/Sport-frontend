import React from 'react'
import { shallow } from 'enzyme'
import JoinButton from './JoinButton'

describe('<JoinButton />', () => {
  const button = shallow(<JoinButton />)

  it('is wrapped in a paragraph with class "join"', () => {
    expect(button).toHaveTagName('p')
    expect(button).toHaveClassName('join')
  })

  it('has an inital state for "joined", that is "false"', () => {
    expect(button).toHaveState('joined', false)
  })

  describe('click it', () => {
    it('toggles the "joined" state', () => {
      expect(button).toHaveState("joined", false)

      button.find('button').simulate('click')
      expect(button).toHaveState("joined", true)

      button.find('button').simulate('click')
      expect(button).toHaveState("joined", false)
    })
  })
})
