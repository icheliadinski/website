import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Icon, Props } from '../Icon'
import { ICON_TYPES } from '../constants'

describe('[Icon]', () => {
  let wrapper: ShallowWrapper<Props>

  it('renders successfully with download icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.DOWNLOAD_ICON} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with edit icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.EDIT_ICON} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with glasses icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.GLASSES_ICON} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with monitor icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.MONITOR_ICON} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with phone icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.PHONE_ICON} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.USER_ICON} />)
    expect(wrapper).toMatchSnapshot()
  })
})
