import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Loader } from '@core/ui-kit'
import { withOverlay } from '@core/hocs'

const LazyUnderConstruct = lazy(() => import('@pages/under-construction'))
const LazyHome = lazy(() => import('@pages/home'))

const LoaderWithOverlay = withOverlay(Loader)

export const Root: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<LoaderWithOverlay />}>
        <Switch>
          <Route path="/construct" component={LazyUnderConstruct} />
          <Route path="/home" component={LazyHome} />
          <Redirect to="/construct" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
