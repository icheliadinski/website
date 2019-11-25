import React from 'react'
import { addDecorator } from '@storybook/react'
import { Icon } from './Icon'
import { ICON_TYPES } from './constants'

addDecorator(storyFn => <div style={{ color: 'white' }}>{storyFn()}</div>)

// tslint:disable-next-line no-default-export
export default { title: 'Icon', component: Icon }

export const Phone = () => <Icon type={ICON_TYPES.PHONE} />
export const Glasses = () => <Icon type={ICON_TYPES.GLASSES} />
export const User = () => <Icon type={ICON_TYPES.USER} />
export const Monitor = () => <Icon type={ICON_TYPES.MONITOR} />
export const Edit = () => <Icon type={ICON_TYPES.EDIT} />
export const Download = () => <Icon type={ICON_TYPES.DOWNLOAD} />
export const Work = () => <Icon type={ICON_TYPES.WORK} />
export const Rocket = () => <Icon type={ICON_TYPES.ROCKET} />
export const Database = () => <Icon type={ICON_TYPES.DATABASE} />
export const Computer = () => <Icon type={ICON_TYPES.COMPUTER} />
export const Iteration = () => <Icon type={ICON_TYPES.ITERATION} />
export const Envelope = () => <Icon type={ICON_TYPES.ENVELOPE} />
export const Address = () => <Icon type={ICON_TYPES.ADDRESS} />
export const Speedometer = () => <Icon type={ICON_TYPES.SPEEDOMETER} />
export const Mortarboard = () => <Icon type={ICON_TYPES.MORTARBOARD} />
export const Contract = () => <Icon type={ICON_TYPES.CONTRACT} />
export const Facebook = () => <Icon type={ICON_TYPES.FACEBOOK} />
export const Github = () => <Icon type={ICON_TYPES.GITHUB} />
export const Twitter = () => <Icon type={ICON_TYPES.TWITTER} />
