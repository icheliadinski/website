import React from 'react'
import { Loader } from './Loader'

// tslint:disable-next-line no-default-export
export default { title: 'Loader', component: Loader }

export const initial = () => <Loader />
export const withCustomCaption = () => <Loader>Caption</Loader>
