import React from 'react'
import { LeftMenu, ICON_TYPES } from '@core/ui-kit'

export const Home = () => {
  const profileIcons = [
    ICON_TYPES.USER_ICON,
    ICON_TYPES.PHONE_ICON,
    ICON_TYPES.EDIT_ICON,
    ICON_TYPES.MONITOR_ICON,
    ICON_TYPES.GLASSES_ICON,
  ]

  return (
    <main>
      <LeftMenu profileIcons={profileIcons} />
    </main>
  )
}
