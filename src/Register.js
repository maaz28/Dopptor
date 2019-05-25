import React, { Component } from 'react'
import Logo from './img/logo.png'
import { Link } from 'react-router-dom'
export default class Register extends Component {
  render() {
    return (
      <main>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-53 alpha-7 image-background cover" style={{ backgroundImage: "url(https://picsum.photos/1920/1200/?random&gravity=south)" }}>
              <div className="content">
                <h2 className="display-4 display-md-3 color-1 mt-4 mt-md-0">Get started with
							<span className="bold d-block">Dopptor</span>
                </h2>
                <p className="lead color-1 alpha-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <hr className="mt-md-6 w-25" />
                <div className="d-flex flex-column">
                  <p className="small bold color-1">Or sign up with</p>
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
                <h1 className="color-5 bold">Register</h1>
                <p className="color-2 mb-4 mb-md-6">Already have an account?
							<Link to="/login" className="accent bold">Login here</Link>
                </p>
                <form className="cozy" action="" data-validate-on="submit" novalidate>
                  <div className="form-group has-icon">
                    <input type="text" id="register_username" className="form-control form-control-rounded" placeholder="Desired username" />
                    <i className="icon fas fa-user-plus"></i>
                  </div>
                  <div className="form-group has-icon">
                    <input type="text" id="register_fullname" className="form-control form-control-rounded" placeholder="Full name" />
                    <i className="icon fas fa-address-card"></i>
                  </div>
                  <div className="form-group has-icon">
                    <input type="text" id="register_email" className="form-control form-control-rounded" placeholder="Valid email" />
                    <i className="icon fas fa-envelope"></i>
                  </div>
                  <div className="form-group has-icon">
                    <input type="password" id="register_password" className="form-control form-control-rounded" placeholder="Password" />
                    <i className="icon fas fa-lock"></i>
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <button type="submit" className="btn btn-accent btn-rounded ml-auto">Register
									<i className="fas fa-long-arrow-alt-right ml-2"></i>
                    </button>
                  </div>
                </form>
                <div className="mt-5">
                  <p className="small color-2">By signing up, I agree to the
								<a href="javascript:void(0)">Terms of Service</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
