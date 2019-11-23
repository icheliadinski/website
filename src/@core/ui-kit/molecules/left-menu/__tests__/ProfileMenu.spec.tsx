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

  describe('when icons provided', () => {
    beforeEach(() => {
      wrapper.setProps({
        icons: [ICON_TYPES.USER_ICON, ICON_TYPES.PHONE_ICON],
      })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders successfully with active item', () => {
      wrapper.setProps({ activeItem: ICON_TYPES.USER_ICON })
      expect(wrapper).toMatchSnapshot()
    })

    describe('when item clicked', () => {
      const onItemClickMock = jest.fn()

      beforeEach(() => {
        onItemClickMock.mockClear()
        wrapper.setProps({ onItemClick: onItemClickMock })
        wrapper
          .find('li')
          .first()
          .simulate('click')
      })

      it('calls onItemClick property', () => {
        expect(onItemClickMock).toHaveBeenCalledWith(ICON_TYPES.USER_ICON)
      })
    })
  })
})
