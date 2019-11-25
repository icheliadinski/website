import React from 'react'
import { Icon } from './Icon'
import { ICON_TYPES } from './constants'

// tslint:disable-next-line no-default-export
export default { title: 'Icon', component: Icon }

export const Phone = () => <Icon type={ICON_TYPES.PHONE} />
export const Glasses = () => <Icon type={ICON_TYPES.GLASSES} />
export const User = () => <Icon type={ICON_TYPES.USER} />
export const Monitor = () => <Icon type={ICON_TYPES.MONITOR} />
export const Edit = () => <Icon type={ICON_TYPES.EDIT} />
export const Download = () => <Icon type={ICON_TYPES.DOWNLOAD} />
