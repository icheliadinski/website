import React from 'react'
import { LeftMenu, SideCard, ICON_TYPES } from '@core/ui-kit'
import { About } from '@core/public-components'

export const Home = () => {
  const navigation = [
    { path: '', icon: ICON_TYPES.USER_ICON },
    { path: 'contact', icon: ICON_TYPES.PHONE_ICON },
    { path: 'blog', icon: ICON_TYPES.EDIT_ICON },
    { path: 'works', icon: ICON_TYPES.MONITOR_ICON },
    { path: 'skills', icon: ICON_TYPES.GLASSES_ICON },
  ]

  return (
    <main>
      <LeftMenu navigationItems={navigation} />
      <SideCard>
        <About />
      </SideCard>
    </main>
  )
}
