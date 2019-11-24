import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Works } from '../Works'

describe('[Works]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Works />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
