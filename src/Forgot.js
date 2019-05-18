import React, { Component } from 'react'

export default class Forgot extends Component {
  render() {
    return (
      <main>
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-6 col-lg-7 fullscreen-md d-flex justify-content-center align-items-center overlay gradient gradient-53 alpha-7 image-background cover" style={{ backgroundImage: "url(https://picsum.photos/1920/1200/?random&gravity=west)" }}>
              <div class="content">
                <h2 class="display-4 display-md-3 color-1 mt-4 mt-md-0">Forgot
							<span class="bold d-block">Password?</span>
                </h2>
                <p class="lead color-1 alpha-5">We've got you covered</p>
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
              <div class="forgot-form mt-5 mt-md-0">
                <img src="img/logo.png" class="logo img-responsive mb-4 mb-md-6" alt="" />
                <h1 class="color-5 bold">Forgot your password?</h1>
                <p class="color-2 mt-0 mb-4 mb-md-6">Enter your email bellow to retrieve your account or
							<a href="login.html" class="accent bold">Login</a>
                </p>
                <form class="cozy" action="srv/login.php" data-validate-on="submit" novalidate>
                  <div class="form-group has-icon">
                    <input type="text" id="register_email" class="form-control form-control-rounded" placeholder="Your registered email" />
                    <i class="icon fas fa-envelope"></i>
                  </div>
                  <div class="form-group d-flex align-items-center justify-content-between">
                    <button type="submit" class="btn btn-accent btn-rounded ml-auto">Send reset link
									<i class="fas fa-long-arrow-alt-right ml-2"></i>
                    </button>
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
