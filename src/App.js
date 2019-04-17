import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route } from "react-router-dom"


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>about!</div>,
    main: () => <h2>about</h2>
  },
  {
    path: "/works",
    sidebar: () => <div>works!</div>,
    main: () => <h2>works</h2>
  },
  {
    path: "/contacts",
    sidebar: () => <div>contacts!</div>,
    main: () => <h2>contacts</h2>
  }
];



class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Sidebar />
          <div className="content__wrap">
            <div className="content">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
