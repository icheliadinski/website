import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { withOverlay, Props } from '../with-overlay'

describe('withOverlay', () => {
  const Component = () => <div>Component</div>
  let wrapper: ShallowWrapper<Props>
  let WithOverlay

  beforeEach(() => {
    WithOverlay = withOverlay(Component)
    wrapper = shallow(<WithOverlay />)
  })

  it('renders successfully', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('when not centered', () => {
    beforeEach(() => {
      wrapper.setProps({ isCentered: false })
    })

    it('renders successfully', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
