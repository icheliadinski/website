import React from 'react'
import classNames from 'classnames'
import styles from './with-overlay.module.scss'

export interface Props {
  isCentered?: boolean
}

export const withOverlay = (Component: React.FC) => {
  return ({ isCentered = true, ...props }: Props) => {
    const classes = classNames(styles.overlay, {
      [styles.centered]: isCentered,
    })

    return (
      <div className={classes}>
        <Component {...props} />
      </div>
    )
  }
}
