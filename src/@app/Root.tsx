import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect to="/construct" />
        <Route path="/" exact />
        <Route path="/construct" />
      </Switch>
    </BrowserRouter>
  )
}
