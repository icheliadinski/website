import React from 'react'
import styles from './Loader.module.scss'

export interface Props {
  children?: string
}

export const Loader: React.FC<Props> = ({ children = 'Loading' }) => {
  return <div className={styles.loader}>{children}</div>
}
