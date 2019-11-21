import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { UnderConstruction } from '@pages/under-construction'

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="construct" component={UnderConstruction} />
        <Redirect to="construct" />
      </Switch>
    </BrowserRouter>
  )
}
