import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { SideCard, Props } from '../SideCard'

describe('[SideCard]', () => {
  let wrapper: ShallowWrapper<Props>

  beforeEach(() => {
    wrapper = shallow(<SideCard>content</SideCard>)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
