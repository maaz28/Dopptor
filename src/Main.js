import React, { Component } from 'react'
import {
  Router,
  Route
} from 'react-router-dom';
import history from './config/history';
import routes from "./config/view_routes";

export default function Main () {
    return (
      <main className="overflow-hidden bg-6">
        <Router history={history}>
          <div>
            {
              routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                );
              })
            }
          </div>
        </Router>
      </main>
    )
  }
