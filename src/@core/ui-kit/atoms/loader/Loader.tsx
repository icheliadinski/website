import React from 'react'
import styles from './Loader.module.scss'

interface Props {
  label?: string
}

export const Loader: React.FC<Props> = ({ label = 'Loading' }) => {
  return <div className={styles.loader}>{label}</div>
}
