import React, { Component } from 'react'
import Logo from './img/logo.png'
import { Link } from 'react-router-dom'
export default class Register extends Component {
  render() {
    return (
      <main>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-53 alpha-7 image-background cover" style={{ backgroundImage: "url(https://picsum.photos/1920/1200/?random&gravity=south)" }}>
              <div class="content">
                <h2 class="display-4 display-md-3 color-1 mt-4 mt-md-0">Get started with
							<span class="bold d-block">Dopptor</span>
                </h2>
                <p class="lead color-1 alpha-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <hr class="mt-md-6 w-25" />
                <div class="d-flex flex-column">
                  <p class="small bold color-1">Or sign up with</p>
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
                <h1 class="color-5 bold">Register</h1>
                <p class="color-2 mb-4 mb-md-6">Already have an account?
							<Link to="/login" class="accent bold">Login here</Link>
                </p>
                <form class="cozy" action="" data-validate-on="submit" novalidate>
                  <div class="form-group has-icon">
                    <input type="text" id="register_username" class="form-control form-control-rounded" placeholder="Desired username" />
                    <i class="icon fas fa-user-plus"></i>
                  </div>
                  <div class="form-group has-icon">
                    <input type="text" id="register_fullname" class="form-control form-control-rounded" placeholder="Full name" />
                    <i class="icon fas fa-address-card"></i>
                  </div>
                  <div class="form-group has-icon">
                    <input type="text" id="register_email" class="form-control form-control-rounded" placeholder="Valid email" />
                    <i class="icon fas fa-envelope"></i>
                  </div>
                  <div class="form-group has-icon">
                    <input type="password" id="register_password" class="form-control form-control-rounded" placeholder="Password" />
                    <i class="icon fas fa-lock"></i>
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between">
                    <button type="submit" class="btn btn-accent btn-rounded ml-auto">Register
									<i class="fas fa-long-arrow-alt-right ml-2"></i>
                    </button>
                  </div>
                </form>
                <div class="mt-5">
                  <p class="small color-2">By signing up, I agree to the
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