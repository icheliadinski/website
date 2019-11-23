import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { ICON_TYPES } from '@core/ui-kit'
import { Home } from '../Home'

type OnLeftItemClickFn = (item: ICON_TYPES) => void

describe('[Home]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when left menu item clicked with user', () => {
    beforeEach(() => {
      wrapper.find('LeftMenu').prop<OnLeftItemClickFn>('onItemClick')(
        ICON_TYPES.USER_ICON,
      )
    })

    it('sets active item to user', () => {
      const actual = wrapper.find('LeftMenu').prop<ICON_TYPES>('activeItem')
      expect(actual).toEqual(ICON_TYPES.USER_ICON)
    })
  })
})
