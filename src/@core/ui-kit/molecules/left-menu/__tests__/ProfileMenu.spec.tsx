import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { ProfileMenu, Props } from '../ProfileMenu'

describe('[ProfileMenu]', () => {
  let wrapper: ShallowWrapper<Props>

  beforeEach(() => {
    wrapper = shallow(<ProfileMenu />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when icons provided', () => {
    beforeEach(() => {
      wrapper.setProps({ icons: ['user', 'phone'] as any[] })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
