import React, { useState } from 'react'
import { LeftMenu, ICON_TYPES } from '@core/ui-kit'

export const Home = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<ICON_TYPES>(
    ICON_TYPES.USER_ICON,
  )
  const profileIcons = [
    ICON_TYPES.USER_ICON,
    ICON_TYPES.PHONE_ICON,
    ICON_TYPES.EDIT_ICON,
    ICON_TYPES.MONITOR_ICON,
    ICON_TYPES.GLASSES_ICON,
  ]
  const handleLeftMenuClick = (item: ICON_TYPES) => setActiveMenuItem(item)

  return (
    <main>
      <LeftMenu
        profileIcons={profileIcons}
        activeItem={activeMenuItem}
        onItemClick={handleLeftMenuClick}
      />
    </main>
  )
}
