import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { UnderConstruction } from '../UnderConstruction'

describe('[Construct Page]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<UnderConstruction />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
