import React from 'react'
import classNames from 'classnames'
import { ICON_TYPES } from './constants'

export interface Props {
  type: ICON_TYPES
}

export const Icon: React.FC<Props> = ({ type }) => {
  const classes = classNames('icon', `icon-${type}`)
  return <span className={classes} />
}
