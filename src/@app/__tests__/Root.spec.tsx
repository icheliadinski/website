import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Root } from '../Root'

describe('[Root]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Root />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
