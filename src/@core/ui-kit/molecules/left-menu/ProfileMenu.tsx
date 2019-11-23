import React from 'react'
import classNames from 'classnames'
import { Icon, ICON_TYPES } from '@core/ui-kit'
import { noop } from '@core/libs'
import styles from './LeftMenu.module.scss'

export interface Props {
  icons?: ICON_TYPES[]
  activeItem?: ICON_TYPES
  onItemClick?: (itemType: ICON_TYPES | null) => void
}

export const ProfileMenu: React.FC<Props> = ({
  icons = [],
  activeItem,
  onItemClick = noop,
}) => {
  const handleItemClick = (itemType: ICON_TYPES) => onItemClick(itemType)

  const iconsList = icons.map(icon => {
    const classes = classNames(styles.item, {
      [styles.active]: activeItem === icon,
    })
    return (
      <li
        className={classes}
        key={icon}
        onClick={handleItemClick.bind(null, icon)}
        role="button"
      >
        <Icon type={icon} />
      </li>
    )
  })

  return <ul className={styles.profile}>{iconsList}</ul>
}
