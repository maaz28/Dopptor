import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { LoginConsumer } from './config/contextConfig';
import Logo from './img/logo.png'

export default function Login(props) {

  const submitBtnHandler = isLogin => {
    isLogin();
    props.history.push('/');
  }

  return (
    <main>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-53 alpha-7 image-background cover" style={{ backgroundImage: "url(https://picsum.photos/1920/1200/?random&gravity=south)" }}>
            <div className="content">
              <h2 className="display-4 display-md-3 color-1 mt-4 mt-md-0">Welcome to
							<span className="bold d-block">Dopptor</span>
              </h2>
              <p className="lead color-1 alpha-5">Login to your account</p>
              <hr className="mt-md-6 w-25" />
              <div className="d-flex flex-column">
                <p className="small bold color-1">Or sign in with</p>
                <nav className="nav mb-4">
                  <a className="btn btn-rounded btn-outline-2 brand-facebook mr-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-rounded btn-outline-2 brand-twitter mr-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-rounded btn-outline-2 brand-linkedin" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 mx-auto">
            <div className="login-form mt-5 mt-md-0">
              <img src={Logo} className="logo img-responsive mb-4 mb-md-6" alt="" />
              <h1 className="color-5 bold">Login</h1>
              <p className="color-2 mt-0 mb-4 mb-md-6">Don't have an account yet?
							<Link to='/register' className="accent bold">Create it here</Link>
              </p>
              <form className="cozy" data-validate-on="submit" novalidate>
                <label className="control-label bold small text-uppercase color-2">Username</label>
                <div className="form-group has-icon">
                  <input type="text" id="login_username" name="Login[username]" className="form-control form-control-rounded" placeholder="Your registered username" required />
                  <i className="icon fas fa-user"></i>
                </div>
                <label className="control-label bold small text-uppercase color-2">Password</label>
                <div className="form-group has-icon">
                  <input type="password" id="login_password" name="Login[password]" className="form-control form-control-rounded" placeholder="Your password" required />
                  <i className="icon fas fa-lock"></i>
                </div>
                <div className="form-group d-flex align-items-center justify-content-between">
                  <Link to="/forgot" className="text-warning small">Forgot your password?</Link>
                  <div className="ajax-button">
                    <div className="fas fa-check btn-status text-success success"></div>
                    <div className="fas fa-times btn-status text-danger failed"></div>
                    <LoginConsumer>{({ isLogin }) => {
                      return (
                        <button type="button" className="btn btn-accent btn-rounded" onClick={() => {
                          submitBtnHandler(isLogin)
                        }}>Login
										<i className="fas fa-long-arrow-alt-right ml-2"></i>
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
