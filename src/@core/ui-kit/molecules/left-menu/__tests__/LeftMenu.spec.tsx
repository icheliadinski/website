import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { ICON_TYPES } from '@core/ui-kit'
import { LeftMenu, Props } from '../LeftMenu'

describe('[LeftMenu]', () => {
  let wrapper: ShallowWrapper<Props>

  beforeEach(() => {
    wrapper = shallow(<LeftMenu />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when has navigation items', () => {
    beforeEach(() => {
      wrapper.setProps({
        navigationItems: [
          { icon: ICON_TYPES.PHONE, path: '' },
          { icon: ICON_TYPES.USER, path: 'user' },
        ],
      })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
