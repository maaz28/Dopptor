import React, { Component } from 'react';
import {
  Router,
  Route,
  HashRouter
} from 'react-router-dom';
import history from './history';
import App from '../App'
import Login from '../Login';
import Forgot from '../Forgot';
import { LoginProvider } from './contextConfig';
import Register from '../Register';

class Routing extends Component {

  render() {
    return (
      <HashRouter>
        <Structure />
      </HashRouter>
    )
  }
}

const Structure = () => {
  return (<div>
    <Main />
  </div>
  )
}

class Main extends Component {

  constructor(props) {
    super(props);
    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      login: JSON.parse(sessionStorage.getItem('user')) || false,
      isLogin: this.isLogin
    };
  }

  isLogin = () => {
    if (this.state.login) {
      sessionStorage.setItem('user', false)
    }
    else { sessionStorage.setItem('user', true) }
    this.setState(state => ({
      login: !state.login
    }));
    console.log('app.js ===>', this.state.login)
  };
  render() {
    return (
      <LoginProvider value={this.state}>
        <Router history={history}>
          {
            (this.state.login) ? (
              <Route path='/' component={App} />
            ) : (
                <>
                  <Route exact path="/" component={Login} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/forgot' component={Forgot} />
                </>
              )
          }
        </Router>
      </LoginProvider>
    )
  }
}
// Route Views

// Route Views
// Route Views
export default (Routing);
// Route Views