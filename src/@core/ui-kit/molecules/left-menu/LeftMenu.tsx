import React from 'react'
import classNames from 'classnames'
import { Icon, ICON_TYPES } from '@core/ui-kit'
import { ProfileMenu } from './ProfileMenu'
import styles from './LeftMenu.module.scss'

export interface Props {
  profileIcons?: ICON_TYPES[]
}

export const LeftMenu: React.FC<Props> = ({ profileIcons = [] }) => {
  const hamburgerClasses = classNames(styles.hamburger, styles.item)
  const downloadClasses = classNames(styles.item, styles.download)

  return (
    <aside className={styles.menu}>
      <span className={hamburgerClasses} role="button" />
      <ProfileMenu icons={profileIcons} />
      <span className={downloadClasses}>
        <Icon type={ICON_TYPES.DOWNLOAD_ICON} />
      </span>
    </aside>
  )
}
