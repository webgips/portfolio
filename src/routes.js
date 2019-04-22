import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import { Switch, Route } from "react-router-dom"

import AboutPage from './pages/about/about'
import WorksPage from './pages/works/WorkList'
import Contacts from './pages/contacts/contacts'
import WorkItem from './components/WorkItem/WorkItem'

const routesArr = [
  {
    name: 'about',
    path: "/",
    exact: true,
    main: AboutPage
  },
  {
    name: 'works',
    path: "/works",
    exact: true,
    main: WorksPage
  },
  {
    name: 'contacts',
    path: "/contacts",
    exact: true,
    main: Contacts
  }
];

export const Routes = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content__wrap">
        <Switch>
        {routesArr.map((route, index) => 
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )}
        <Route
          path='/works/:id'
          component={WorkItem}
        />
        </Switch>
      </div>
    </div>
  )
}