import React from 'react'
import { LeftMenu } from './LeftMenu'

export default { title: 'Left Menu', component: LeftMenu }

export const initial = () => <LeftMenu />
export const withIcons = () => <LeftMenu profileIcons={['user', 'phone']} />
