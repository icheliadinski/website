import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { About } from '../About'

describe('[About]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<About />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
