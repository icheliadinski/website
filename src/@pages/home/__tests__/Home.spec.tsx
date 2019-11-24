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
})
