import React from 'react'
import classNames from 'classnames'
import styles from './Loader.module.scss'

interface Props {
  children?: string
  isCentered?: boolean
}

export const Loader: React.FC<Props> = ({
  children = 'Loading',
  isCentered = true,
}) => {
  const classes = classNames(styles.loader, {
    [styles.centered]: isCentered,
  })
  return <div className={classes}>{children}</div>
}
