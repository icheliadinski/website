import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Loader } from '../Loader'

describe('[Loader]', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Loader />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when label set', () => {
    beforeEach(() => {
      wrapper.setProps({ label: 'New Label' })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when is not centered', () => {
    beforeEach(() => {
      wrapper.setProps({ isCentered: false })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
