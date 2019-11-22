import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { UnderConstruction } from '@pages/under-construction'
import { Home } from '@pages/home'

export const Root: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/construct" component={UnderConstruction} />
        <Route path="/home" component={Home} />
        <Redirect to="/construct" />
      </Switch>
    </BrowserRouter>
  )
}
