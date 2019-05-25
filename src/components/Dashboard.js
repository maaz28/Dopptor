import React, { Component } from 'react';
import Chart from 'chart.js';
import Audience from './dashboard/Audience';
import Collapsables from './dashboard/Collapsables';
import Post from './dashboard/Post';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <header className="page header">
          <div className="content">
            <h1 className="display-4 mb-0">Dashboard</h1>
            <p className="lead text-muted">This is how your company is doing it</p>
          </div>
        </header>
        <div className="content">
          <div className="row gap-y">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-box">
                <div className="card-body text-center">
                  <i className="pe pe-7s-look color-4 pe-3x"></i>
                  <p className="regular color-2">Impressions</p>
                  <h2 className="bold color-4">9.5K</h2>
                  <hr className="mx-auto w-50" />
                  <p className="small bold text-success">
                    <i className="fas fa-arrow-circle-up"></i> 0.03</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-box">
                <div className="card-body text-center">
                  <i className="pe pe-7s-mouse text-info pe-3x"></i>
                  <p className="regular color-2">Clicks</p>
                  <h2 className="bold text-info">4.3K</h2>
                  <hr className="mx-auto w-50" />
                  <p className="small bold text-success">
                    <i className="fas fa-arrow-circle-up"></i> 3.78</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-box">
                <div className="card-body text-center">
                  <i className="pe pe-7s-magnet pe-rotate-90 text-success pe-3x"></i>
                  <p className="regular color-2">Engagements</p>
                  <h2 className="bold text-success">21K</h2>
                  <hr className="mx-auto w-50" />
                  <p className="small bold text-danger">
                    <i className="fas fa-arrow-circle-down"></i> -2.01</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-box">
                <div className="card-body text-center">
                  <i className="pe pe-7s-camera color-3 pe-3x"></i>
                  <p className="regular color-2">Posts</p>
                  <h2 className="bold color-3">147</h2>
                  <hr className="mx-auto w-50" />
                  <p className="small bold text-success">
                    <i className="fas fa-arrow-circle-up"></i> 1.02</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <Audience />
        </div>
        <div className="content">
          <div className="row gap-y">
            <Collapsables />
            <Post />
          </div>
        </div>

      </div>
    )
  }
}