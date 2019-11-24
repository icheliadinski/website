import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Blog } from '../Blog'

describe('[Blog]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Blog />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
