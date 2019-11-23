import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { LeftMenu } from '../LeftMenu'

describe('[LeftMenu]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<LeftMenu />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
