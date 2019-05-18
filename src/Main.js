import React, { Component } from 'react'
import Dashboard from './components/Dashboard';
import {
  Router,
  Route
} from 'react-router-dom';
import history from './config/history';
//Dashboard Components
import Calender from './components/Calender';
import Basics from './components/Basics';
import Invoice from './components/Invoice';
import Select2 from './components/Select2';
import InputGroups from './components/InputGroups';
import CheckboxRadio from './components/CheckboxRadio';
import Ajax from './components/Ajax';
import DatePicker from './components/DatePicker';
import checkbox from './components/checkbox';
import routes from "./config/view_routes";
import withTracker from './withTracker';

export default class Main extends Component {
  render() {
    return (
      <main class="overflow-hidden bg-6">
        <Router history={history}>
          <div style={{ padding: "20px" }}>
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
}
