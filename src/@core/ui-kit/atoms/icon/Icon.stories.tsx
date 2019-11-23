import React from 'react'
import { Icon } from './Icon'
import { ICON_TYPES } from './constants'

// tslint:disable-next-line no-default-export
export default { title: 'Icon', component: Icon }

export const Phone = () => <Icon type={ICON_TYPES.PHONE_ICON} />
export const Glasses = () => <Icon type={ICON_TYPES.GLASSES_ICON} />
export const User = () => <Icon type={ICON_TYPES.USER_ICON} />
export const Monitor = () => <Icon type={ICON_TYPES.MONITOR_ICON} />
export const Edit = () => <Icon type={ICON_TYPES.EDIT_ICON} />
export const Download = () => <Icon type={ICON_TYPES.DOWNLOAD_ICON} />
