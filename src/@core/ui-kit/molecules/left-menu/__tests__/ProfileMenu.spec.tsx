import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { ICON_TYPES } from '@core/ui-kit'
import { ProfileMenu, Props } from '../ProfileMenu'

describe('[ProfileMenu]', () => {
  let wrapper: ShallowWrapper<Props>

  beforeEach(() => {
    wrapper = shallow(<ProfileMenu />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when has navigation items', () => {
    beforeEach(() => {
      wrapper.setProps({
        navigationItems: [
          { path: '', icon: ICON_TYPES.USER },
          { path: 'phone', icon: ICON_TYPES.PHONE },
        ],
      })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
