import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Skills } from '../Skills'

describe('[Skills]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Skills />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
