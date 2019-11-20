import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Construct } from '@pages/construct'

export const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/construct" component={Construct} />
        <Redirect to="/construct" />
      </Switch>
    </BrowserRouter>
  )
}
