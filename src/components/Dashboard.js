import React, { Component } from 'react'
import Chart from 'chart.js';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <header class="page header">
          <div class="content">
            <h1 class="display-4 mb-0">Dashboard</h1>
            <p class="lead text-muted">This is how your company is doing it</p>
          </div>
        </header>
        <div class="content">
          <div class="row gap-y">
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 shadow-box">
                <div class="card-body text-center">
                  <i class="pe pe-7s-look color-4 pe-3x"></i>
                  <p class="regular color-2">Impressions</p>
                  <h2 class="bold color-4">9.5K</h2>
                  <hr class="mx-auto w-50" />
                  <p class="small bold text-success">
                    <i class="fas fa-arrow-circle-up"></i> 0.03</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 shadow-box">
                <div class="card-body text-center">
                  <i class="pe pe-7s-mouse text-info pe-3x"></i>
                  <p class="regular color-2">Clicks</p>
                  <h2 class="bold text-info">4.3K</h2>
                  <hr class="mx-auto w-50" />
                  <p class="small bold text-success">
                    <i class="fas fa-arrow-circle-up"></i> 3.78</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 shadow-box">
                <div class="card-body text-center">
                  <i class="pe pe-7s-magnet pe-rotate-90 text-success pe-3x"></i>
                  <p class="regular color-2">Engagements</p>
                  <h2 class="bold text-success">21K</h2>
                  <hr class="mx-auto w-50" />
                  <p class="small bold text-danger">
                    <i class="fas fa-arrow-circle-down"></i> -2.01</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="card border-0 shadow-box">
                <div class="card-body text-center">
                  <i class="pe pe-7s-camera color-3 pe-3x"></i>
                  <p class="regular color-2">Posts</p>
                  <h2 class="bold color-3">147</h2>
                  <hr class="mx-auto w-50" />
                  <p class="small bold text-success">
                    <i class="fas fa-arrow-circle-up"></i> 1.02</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="card border-0 shadow-box">
            <div class="card-header bg-1 border-bottom-0 d-flex">
              <div>
                <h4 class="card-title light">Total Audience by Region</h4>
                <p class="card-subtitle color-2 mb-0">Where your visitors are coming from</p>
              </div>
              <div class="card-options ml-auto">
                <a href="javascript:void(0)" class="color-2" data-toggle="dropdown">
                  <i class="fas fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Action</button>
                  <button class="dropdown-item" type="button">Another action</button>
                  <button class="dropdown-item" type="button">Something else here</button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-5">
                  <div class="global-audience-table"></div>
                </div>
                <div class="col-lg-6 ml-lg-auto">
                  <div id="world-map" style={{ height: "300px;" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="row gap-y">
            <div class="col-lg-8">
              <div class="accordion accordion-clean accordion-collapsed" id="social-accordion">
                <div class="card">
                  <div class="card-header d-flex flex-column flex-md-row">
                    <a href="javascript:void(0)" class="card-title btn">Monthly subscribers</a>
                    <div class="card-options ml-md-auto">
                      <select id="monthly-subscribers-actions" data-style="btn-outline-accent" data-header="Pick an option">
                        <option value="tm">This month</option>
                        <option value="lm">Last month</option>
                        <option value="ty">This year</option>
                      </select>
                    </div>
                  </div>
                  <div class="card-body" id="monthly-subscribers-panel">
                    <div class="loader-container">
                      <div class="loader-8">Loading...</div>
                    </div>
                    <canvas id="social-subscribers"></canvas>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a href="#" class="card-title btn collapsed" data-toggle="collapse" data-target="#recently-subscribers-panel">Recently subscribers</a>
                  </div>
                  <div id="recently-subscribers-panel" class="collapse" data-parent="#social-accordion">
                    <div class="card-body load-content">
                      <div class="loader-container">
                        <div class="loader-8">Loading...</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a href="#" class="card-title btn collapsed" data-toggle="collapse" data-target="#twitter-trends-panel">Twitter trends</a>
                  </div>
                  <div id="twitter-trends-panel" class="collapse" data-parent="#social-accordion">
                    <div class="card-body load-content">
                      <div class="loader-container">
                        <div class="loader-8">Loading...</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a href="#" class="card-title btn collapsed" data-toggle="collapse" data-target="#most-viewed-yt-videos-panel">Most viewed youtube videos</a>
                  </div>
                  <div id="most-viewed-yt-videos-panel" class="collapse" data-parent="#social-accordion">
                    <div class="card-body load-content">
                      <div class="loader-container">
                        <div class="loader-8">Loading...</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a href="#" class="card-title btn collapsed" data-toggle="collapse" data-target="#fb-audience-growth-panel">Facebook audience growth</a>
                  </div>
                  <div id="fb-audience-growth-panel" class="collapse" data-parent="#social-accordion">
                    <div class="card-body load-content">
                      <div class="loader-container">
                        <div class="loader-8">Loading...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex">
              <div class="shadow-box overlay gradient gradient-34 alpha-8 image-background cover center-bottom" style={{ backgroundImage: "url(https://picsum.photos/600/300/?random&gravity=east)" }}>
                <div class="content">
                  <div class="card-body">
                    <h4 class="mb-5 color-1 light">Day most engaged post</h4>
                    <img src="https://picsum.photos/600/300/?random&gravity=east" alt="" class="img-responsive rounded shadow" />
                    <nav class="nav mb-5 mt-3">
                      <a href="javascript:void(0)" class="color-1 nav-link pl-0">
                        <i class="pe pe-7s-like font-md mr-2"></i>
                        <span class="small bold">3,751</span>
                      </a>
                      <a href="javascript:void(0)" class="color-1 nav-link">
                        <i class="pe pe-7s-comment font-md mr-2"></i>
                        <span class="small bold">274</span>
                      </a>
                    </nav>
                    <p class="color-1 alpha-5 small">
                      <i class="mr-2 far fa-clock"></i> Jul 10, 2018 @ 03:54 pm</p>
                    <p class="color-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci blanditiis consequatur cupiditate dolor, eius eos esse expedita harum, laudantium modi odit officia possimus quis reiciendis tempore voluptates! Aspernatur, maiores.</p>
                    <nav class="d-flex flex-wrap flex-row align-items-center mt-5">
                      <i
                        class="fas fa-tag color-1 mr-4"></i>
                      <a href="javascript:void(0)" class="small bold text-success mr-3">development</a>
                      <a href="javascript:void(0)" class="small bold text-info mr-3">software</a>
                      <a href="javascript:void(0)" class="small bold text-danger mr-3">startup</a>
                      <a href="javascript:void(0)" class="small bold text-warning mr-3">dashboard</a>
                      <a href="javascript:void(0)" class="small bold text-light mr-3">marketing</a>
                      <a href="javascript:void(0)" class="small bold text-info mr-3">social</a>
                      <a href="javascript:void(0)" class="small bold color-5 mr-3">app</a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
