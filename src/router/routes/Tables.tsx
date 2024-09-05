import React from 'react'
import { lazy } from 'react'

const Reactstrap = lazy(() => import('../../tables/reactstrap'))
const DTBasic = lazy(() => import('../../tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../tables/data-tables/advance'))

const TablesRoutes = [
  {
    path: '/tables/reactstrap',
    element: <Reactstrap />
  },
  {
    path: '/datatables/basic',
    element: <DTBasic />
  },
  {
    path: '/datatables/advance',
    element: <DTAdvance />
  }
]

export default TablesRoutes
