import React, { ReactNode } from 'react'
import styles from './SideCard.module.scss'

export interface Props {
  children: ReactNode
}

export const SideCard: React.FC<Props> = ({ children }) => {
  return <section className={styles.card}>{children}</section>
}
