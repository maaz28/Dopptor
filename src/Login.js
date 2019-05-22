import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginConsumer } from './config/contextConfig';
import Logo from './img/logo.png'

export default class Login extends Component {

  submitBtnHandler = isLogin => {
    isLogin();
    this.props.history.push('/');
  }

  render() {
    return (
      <main>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-53 alpha-7 image-background cover" style={{ backgroundImage: "url(https://picsum.photos/1920/1200/?random&gravity=south)" }}>
              <div class="content">
                <h2 class="display-4 display-md-3 color-1 mt-4 mt-md-0">Welcome to
							<span class="bold d-block">Dopptor</span>
                </h2>
                <p class="lead color-1 alpha-5">Login to your account</p>
                <hr class="mt-md-6 w-25" />
                <div class="d-flex flex-column">
                  <p class="small bold color-1">Or sign in with</p>
                  <nav class="nav mb-4">
                    <a class="btn btn-rounded btn-outline-2 brand-facebook mr-2" href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-rounded btn-outline-2 brand-twitter mr-2" href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-rounded btn-outline-2 brand-linkedin" href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-lg-4 mx-auto">
              <div class="login-form mt-5 mt-md-0">
                <img src={Logo} class="logo img-responsive mb-4 mb-md-6" alt="" />
                <h1 class="color-5 bold">Login</h1>
                <p class="color-2 mt-0 mb-4 mb-md-6">Don't have an account yet?
							<Link to='/register' class="accent bold">Create it here</Link>
                </p>
                <form class="cozy" data-validate-on="submit" novalidate>
                  <label class="control-label bold small text-uppercase color-2">Username</label>
                  <div class="form-group has-icon">
                    <input type="text" id="login_username" name="Login[username]" class="form-control form-control-rounded" placeholder="Your registered username" required />
                    <i class="icon fas fa-user"></i>
                  </div>
                  <label class="control-label bold small text-uppercase color-2">Password</label>
                  <div class="form-group has-icon">
                    <input type="password" id="login_password" name="Login[password]" class="form-control form-control-rounded" placeholder="Your password" required />
                    <i class="icon fas fa-lock"></i>
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between">
                    <Link to="/forgot" class="text-warning small">Forgot your password?</Link>
                    <div class="ajax-button">
                      <div class="fas fa-check btn-status text-success success"></div>
                      <div class="fas fa-times btn-status text-danger failed"></div>
                      <LoginConsumer>{({ isLogin }) => {
                        return (
                          <button type="button" class="btn btn-accent btn-rounded" onClick={() => {
                            this.submitBtnHandler(isLogin)
                          }}>Login
										<i class="fas fa-long-arrow-alt-right ml-2"></i>
                          </button>
                        )
                      }}</LoginConsumer>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
