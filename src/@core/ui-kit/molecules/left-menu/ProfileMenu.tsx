import React from 'react'
import { Icon, ICON_TYPES } from '@core/ui-kit'
import styles from './LeftMenu.module.scss'

export interface Props {
  icons?: ICON_TYPES[]
}

export const ProfileMenu: React.FC<Props> = ({ icons = [] }) => {
  const iconsList = icons.map(icon => (
    <li className={styles.item} key={icon}>
      <Icon type={icon} />
    </li>
  ))

  return <ul className={styles.profile}>{iconsList}</ul>
}
