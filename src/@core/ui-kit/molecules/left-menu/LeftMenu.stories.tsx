import React from 'react'
import { ICON_TYPES } from '@core/ui-kit'
import { LeftMenu } from './LeftMenu'

// tslint:disable-next-line no-default-export
export default { title: 'Left Menu', component: LeftMenu }

const navigation = [
  { icon: ICON_TYPES.USER, path: '', title: 'User' },
  { icon: ICON_TYPES.PHONE, path: 'phone', title: 'Contact' },
]

export const Default = () => <LeftMenu navigationItems={[]} />
export const withNavigation = () => <LeftMenu navigationItems={navigation} />
