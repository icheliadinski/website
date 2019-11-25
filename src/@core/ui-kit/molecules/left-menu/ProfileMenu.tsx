import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, ICON_TYPES } from '@core/ui-kit'
import styles from './LeftMenu.module.scss'

export interface Props {
  navigationItems?: Array<{ path: string; icon: ICON_TYPES; title: string }>
}

export const ProfileMenu: React.FC<Props> = ({ navigationItems = [] }) => {
  const iconsList = navigationItems.map(nav => {
    const toRoute = `/home/${nav.path}`
    return (
      <NavLink
        key={nav.icon}
        to={toRoute}
        activeClassName={styles.active}
        className={styles.item}
        role="button"
        title={nav.title}
        exact
      >
        <Icon type={nav.icon} />
      </NavLink>
    )
  })

  return <ul className={styles.profile}>{iconsList}</ul>
}
