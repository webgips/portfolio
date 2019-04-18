import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import { Switch, Route } from "react-router-dom"

import WorkList from './components/WorkList/WorkList'
import WorkItem from './components/WorkItem/WorkItem'

const routesArr = [
  {
    name: 'about',
    path: "/",
    exact: true,
    main: () => <h2>about</h2>
  },
  {
    name: 'works',
    path: "/works",
    exact: true,
    main: () => <WorkList />
  },
  /* {
    name: 'WorkItem',
    path: "/works/:id",
    main: () => <WorkItem />
  }, */
  
  {
    name: 'contacts',
    path: "/contacts",
    exact: true,
    sidebar: () => <div>contacts!</div>,
    main: () => <h2>contacts</h2>
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
        {/* <Route
          path='works/:id'
          component={WorkItem}
        /> */}
        </Switch>
      </div>
    </div>
  )
}