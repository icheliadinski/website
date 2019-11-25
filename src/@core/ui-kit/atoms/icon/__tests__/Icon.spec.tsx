import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Icon, Props } from '../Icon'
import { ICON_TYPES } from '../constants'

describe('[Icon]', () => {
  let wrapper: ShallowWrapper<Props>

  it('renders successfully with download icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.DOWNLOAD} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with edit icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.EDIT} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with glasses icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.GLASSES} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with monitor icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.MONITOR} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with phone icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.PHONE} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.USER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.USER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.WORK} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.ROCKET} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.DATABASE} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.COMPUTER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.ITERATION} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.ENVELOPE} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.ADDRESS} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.SPEEDOMETER} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.MORTARBOARD} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.CONTRACT} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.FACEBOOK} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.GITHUB} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders successfully with user icon', () => {
    wrapper = shallow(<Icon type={ICON_TYPES.TWITTER} />)
    expect(wrapper).toMatchSnapshot()
  })
})
