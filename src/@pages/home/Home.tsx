import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LeftMenu, ICON_TYPES } from '@core/ui-kit'
import { About, Contact, Skills, Works, Blog } from '@core/public-components'

export const Home = () => {
  const navigation = [
    { path: '', icon: ICON_TYPES.USER, title: 'Home' },
    { path: 'contact', icon: ICON_TYPES.PHONE, title: 'Contact' },
    { path: 'blog', icon: ICON_TYPES.EDIT, title: 'Blog' },
    { path: 'works', icon: ICON_TYPES.WORK, title: 'Works' },
    { path: 'skills', icon: ICON_TYPES.GLASSES, title: 'Skills' },
  ]

  return (
    <main>
      <LeftMenu navigationItems={navigation} />
      <Switch>
        <Route path="/home" component={About} exact />
        <Route path="/home/contact" component={Contact} />
        <Route path="/home/blog" component={Blog} />
        <Route path="/home/works" component={Works} />
        <Route path="/home/skills" component={Skills} />
      </Switch>
    </main>
  )
}
