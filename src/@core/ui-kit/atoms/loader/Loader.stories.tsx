import React from 'react'
import { Loader } from '@core/ui-kit'

export default { title: 'Loader', component: Loader }

export const withText = () => <Loader label="Loading..." />