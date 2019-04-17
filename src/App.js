import React, { Component } from 'react';
import './App.scss';

import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


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
      <div className="App">
        <Router>
          <Sidebar />
          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
