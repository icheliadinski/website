import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Contact } from '../Contact'

describe('[Contact]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Contact />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
