import React, { Component } from 'react'
import design from './img/svg/design.svg';
import marketing from './img/svg/marketing.svg';
import mobile from './img/svg/mobile.svg';
import cloud from './img/svg/cloud.svg';
import $ from 'jquery'

// initial configuration of tabs
var prev = "aside-todo"
var prev_tab = "aside-todo-tab"
export default class Sidebar extends Component {

  tabClickHandler = (id, tab_id) => {
    $("#" + prev_tab).removeClass("active");
    $("#" + tab_id).toggleClass("active");
    $("#" + prev).removeClass("active");
    $("#" + id).toggleClass("active");
    prev = id; // setting current to previous
    prev_tab = tab_id; // setting current to previous
  }

  render() {
    return (
      <aside class="quick-view">
        <div class="side-wrapper">
          <nav class="nav nav-tabs nav-fill tabs-clean slide">
            <a href="javascript:void(0)" id="aside-profile-tab" class="nav-item nav-link " data-toggle="tab" onClick={() => { this.tabClickHandler('aside-profile', 'aside-profile-tab') }}>
              <i class="far fa-id-card icon"></i>
            </a>
            <a href="javascript:void(0)" id="aside-todo-tab" class="nav-item nav-link active" data-toggle="tab" onClick={() => { this.tabClickHandler('aside-todo', "aside-todo-tab") }} data-rel="todos">
              <i class="fas fa-list-ul icon"></i>
            </a>
            <a href="javascript:void(0)" id="aside-users-tab" class="nav-item nav-link" data-toggle="tab" onClick={() => { this.tabClickHandler('aside-users', "aside-users-tab") }} data-rel="users">
              <i class="fas fa-users icon"></i>
            </a>
            <a href="javascript:void(0)" id="aside-settings-tab" class="nav-item nav-link" data-toggle="tab" onClick={() => { this.tabClickHandler('aside-settings', "aside-settings-tab") }}>
              <i class="fas fa-cog icon"></i>
            </a>
          </nav>
          <div class="tab-content">
            <div class="tab-pane" id="aside-profile">
              <ul class="list-unstyled d-flex justify-content-between text-left pt-3">
                <li>
                  <p class="mb-0 small text-uppercase color-2">followers</p>
                  <h4>2.7k</h4>
                </li>
                <li>
                  <p class="mb-0 small text-uppercase color-2">friends</p>
                  <h4>1.3k</h4>
                </li>
                <li>
                  <p class="mb-0 small text-uppercase color-2">posts</p>
                  <h4>451</h4>
                </li>
              </ul>
              <hr class="my-3" />
              <p class="regular text-uppercase">Favorite categories</p>
              <div class="row gap-y">
                <div class="col-6">
                  <a class="btn btn-5 d-flex flex-column align-items-center py-4" href="">
                    <i class="w-50">
                      <img src={design} class="img-responsive" alt="" />
                    </i>
                    <p class="mb-0">Design</p>
                  </a>
                </div>
                <div class="col-6">
                  <a class="btn btn-4 d-flex flex-column align-items-center py-4" href="">
                    <i class="w-50">
                      <img src={marketing} class="img-responsive" alt="" />
                    </i>
                    <p class="mb-0">Marketing</p>
                  </a>
                </div>
                <div class="col-6">
                  <a class="btn btn-3 d-flex flex-column align-items-center py-4" href="">
                    <i class="w-50">
                      <img src={mobile} class="img-responsive" alt="" />
                    </i>
                    <p class="mb-0">Mobile</p>
                  </a>
                </div>
                <div class="col-6">
                  <a class="btn btn-danger d-flex flex-column align-items-center py-4" href="">
                    <i class="w-50">
                      <img src={cloud} class="img-responsive" alt="" />
                    </i>
                    <p class="mb-0">Cloud</p>
                  </a>
                </div>
              </div>
              <hr class="my-3" />
              <p class="regular text-uppercase">Quick overview</p>
              <ul class="list-unstyled">
                <li class="stat">
                  <p class="small d-flex justify-content-between mb-1">
                    <span class="text-muted">Profile almost complete</span>
                    <span class="bold text-success">75%</span>
                  </p>
                  <div class="progress progress-xs mb-4">
                    <div class="progress-bar bg-success" style={{ width: "75%" }}></div>
                  </div>
                </li>
                <li>
                  <p class="small d-flex justify-content-between mb-1">
                    <span class="text-muted">Tasks done</span>
                    <span class="bold text-info">50%</span>
                  </p>
                  <div class="progress progress-xs mb-4">
                    <div class="progress-bar bg-info" style={{ width: "50%" }}></div>
                  </div>
                </li>
                <li>
                  <p class="small d-flex justify-content-between mb-1">
                    <span class="text-muted">You're running out of space</span>
                    <span class="bold text-danger">94%</span>
                  </p>
                  <div class="progress progress-xs mb-4">
                    <div class="progress-bar bg-danger" style={{ width: "94%" }}></div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane active" id="aside-todo">
              <ul class="list-group list-group-flush load-content aside--todo-list">
                <li class="loader-container">
                  <div class="loader-8">Loading...</div>
                </li>
              </ul>
            </div>
            <div class="tab-pane" id="aside-users">
              <form class="form">
                <div class="input-group clean-group mb-3">
                  <input type="text" class="form-control" placeholder="Search user ..." name="q" />
                  <div class="input-group-append">
                    <button class="btn btn-1" type="button">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div class="list-group list-group-flush load-content aside--users-list">
                <div class="loader-container">
                  <div class="loader-8">Loading...</div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="aside-settings">
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0">
                  <h4 class="small bold mb-4">Email settings</h4>
                  <div class="mb-3 d-flex justify-content-between align-items-center">
                    <div class="mr-3">
                      <p class="regular mb-0 color-5">Automatic response</p>
                      <p class="color-2 mb-0 small">(Experimental) Configure an automated response</p>
                    </div>
                    <div class="form-group mb-0">
                      <input class="tgl tgl-light" id="tgl-1" type="checkbox" />
                      <label class="tgl-btn tgl-btn-4" for="tgl-1"></label>
                    </div>
                  </div>
                  <div class="mb-3 d-flex justify-content-between align-items-center">
                    <div class="mr-3">
                      <p class="regular mb-0 color-5">Daily summary emails</p>
                      <p class="color-2 mb-0 small">Send me a daily summary of all my activity</p>
                    </div>
                    <div class="form-group mb-0">
                      <input class="tgl tgl-light" id="tgl-2" type="checkbox" checked="checked" />
                      <label class="tgl-btn tgl-btn-4" for="tgl-2"></label>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0">
                  <h4 class="small bold mb-4">Personal settings</h4>
                  <div class="mb-3 d-flex justify-content-between align-items-center">
                    <p class="regular mb-0 color-5 mr-3">Other can view my status</p>
                    <div class="form-group mb-0">
                      <input class="tgl tgl-light" id="tgl-3" type="checkbox" />
                      <label class="tgl-btn tgl-btn-4" for="tgl-3"></label>
                    </div>
                  </div>
                  <div class="mb-3 d-flex justify-content-between align-items-center">
                    <p class="regular mb-0 color-5 mr-3">Allow remote access</p>
                    <div class="form-group mb-0">
                      <input class="tgl tgl-light" id="tgl-4" type="checkbox" checked="checked" />
                      <label class="tgl-btn tgl-btn-4" for="tgl-4"></label>
                    </div>
                  </div>
                  <div class="mb-3 d-flex justify-content-between align-items-center">
                    <p class="regular mb-0 color-5 mr-3">Automatic signing</p>
                    <div class="form-group mb-0">
                      <input class="tgl tgl-light" id="tgl-5" type="checkbox" />
                      <label class="tgl-btn tgl-btn-4" for="tgl-5"></label>
                    </div>
                  </div>
                  <div class="mb-3 d-flex justify-content-between align-items-center">
                    <p class="regular mb-0 color-5 mr-3">Clear cache on log off</p>
                    <div class="form-group mb-0">
                      <input class="tgl tgl-light" id="tgl-6" type="checkbox" checked="checked" />
                      <label class="tgl-btn tgl-btn-4" for="tgl-6"></label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
