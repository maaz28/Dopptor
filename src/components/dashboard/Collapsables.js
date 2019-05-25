import React, { Component } from 'react'

export default class Collapsables extends Component {
  render() {
    return (
      <div className="col-lg-8">
        <div className="accordion accordion-clean accordion-collapsed" id="social-accordion">
          <div className="card">
            <div className="card-header d-flex flex-column flex-md-row">
              <a href="javascript:void(0)" className="card-title btn">Monthly subscribers</a>
              <div className="card-options ml-md-auto">
                <select id="monthly-subscribers-actions" data-style="btn-outline-accent" data-header="Pick an option">
                  <option value="tm">This month</option>
                  <option value="lm">Last month</option>
                  <option value="ty">This year</option>
                </select>
              </div>
            </div>
            <div className="card-body" id="monthly-subscribers-panel">
              <div className="loader-container">
                <div className="loader-8">Loading...</div>
              </div>
              <canvas id="social-subscribers"></canvas>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a href="#" className="card-title btn collapsed" data-toggle="collapse" data-target="#recently-subscribers-panel">Recently subscribers</a>
            </div>
            <div id="recently-subscribers-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <div className="loader-container">
                  <div className="loader-8">Loading...</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a href="#" className="card-title btn collapsed" data-toggle="collapse" data-target="#twitter-trends-panel">Twitter trends</a>
            </div>
            <div id="twitter-trends-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <div className="loader-container">
                  <div className="loader-8">Loading...</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a href="#" className="card-title btn collapsed" data-toggle="collapse" data-target="#most-viewed-yt-videos-panel">Most viewed youtube videos</a>
            </div>
            <div id="most-viewed-yt-videos-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <div className="loader-container">
                  <div className="loader-8">Loading...</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a href="#" className="card-title btn collapsed" data-toggle="collapse" data-target="#fb-audience-growth-panel">Facebook audience growth</a>
            </div>
            <div id="fb-audience-growth-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <div className="loader-container">
                  <div className="loader-8">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
