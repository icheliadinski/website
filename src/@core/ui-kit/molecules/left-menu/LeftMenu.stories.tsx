import React from 'react'
import { LeftMenu } from './LeftMenu'

// tslint:disable-next-line no-default-export
export default { title: 'Left Menu', component: LeftMenu }

export const initial = () => <LeftMenu />
export const withIcons = () => <LeftMenu profileIcons={['user', 'phone']} />
