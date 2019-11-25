import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Home } from '../Home'

describe('[Home]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
