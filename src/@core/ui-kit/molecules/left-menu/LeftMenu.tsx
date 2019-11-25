import React from 'react'
import classNames from 'classnames'
import { Icon, ICON_TYPES } from '@core/ui-kit'
import { ProfileMenu } from './ProfileMenu'
import styles from './LeftMenu.module.scss'

export interface Props {
  navigationItems?: Array<{ path: string; icon: ICON_TYPES; title?: string }>
}

export const LeftMenu: React.FC<Props> = ({ navigationItems = [] }) => {
  const hamburgerClasses = classNames(styles.hamburger, styles.item)
  const downloadClasses = classNames(styles.item, styles.download)

  return (
    <aside className={styles.menu}>
      <span className={hamburgerClasses} role="button" title="menu" />
      <ProfileMenu navigationItems={navigationItems} />
      <span className={downloadClasses} title="Download">
        <Icon type={ICON_TYPES.DOWNLOAD} />
      </span>
    </aside>
  )
}
