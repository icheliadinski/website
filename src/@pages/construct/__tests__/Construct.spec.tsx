import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Construct } from '../Construct'

describe('[Construct Page]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Construct />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
