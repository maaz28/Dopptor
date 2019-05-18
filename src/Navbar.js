import React, { Component } from 'react'
import user from './img/user.jpg';
import './css/main.css';
import $ from 'jquery';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  navDropdownHandler = (id) => { // animation with respect to ID
    $("#" + id).toggleClass("open");
  }

  render() {
    return (
      <nav class="side-nav overlay gradient gradient-53 alpha-9 image-background cover center-bottom" style={{ backgroundImage: "url(https://picsum.photos/350/200/?random&gravity=west)" }}>
        <div class="side-wrapper content" style={{ margin: "0px" }}>
          <div class="nav-wrapper">
            <ul class="nav flex-column">
              <li class="nav-item user-sidebar nav-dropdown" id="Profile" onClick={() => { this.navDropdownHandler("Profile") }} style={{ cursor: "pointer" }}>
                <a href="javascript:;" class="nav-link">
                  <div class="media align-items-center justify-content-center">
                    <div class="position-relative"> <img src={user} class="user-avatar rounded-circle mr-2" alt="" /> <span class="status status-right online"></span> </div>
                    <div class="media-body title"> <span class="media-heading bold user-name text-truncate text-capitalize">Kay Peters</span>
                      <div class="small user-info text-truncate capitalize-first text-muted">kaypeters@example.com</div>
                    </div>
                  </div>
                </a>
                <div class="nav-dropdown-items">
                  <div class="stat">
                    <p class="small task d-flex justify-content-between mb-1"> <span class="text-muted">You're running out of space</span> <span class="bold percent text-danger">94%</span> </p>
                    <div class="progress progress-xs mb-4">
                      <div class="progress-bar bg-danger" style={{ width: "94%;" }}></div>
                    </div>
                  </div>
                  <nav class="nav justify-content-between">
                    <a href="javascript:;" class="nav-link py-3"> <i class="mr-1 fas fa-inbox"></i> <span class="small">Inbox</span> <small class="badge badge-primary">7</small> </a>
                    <a href="javascript:;" class="nav-link py-3"> <i class="mr-1 fas fa-lock"></i><span class="small">Lock</span> </a>
                    <a href="javascript:;" class="nav-link py-3"> <i class="mr-1 fas fa-sign-out-alt"></i><span class="small">Log out</span> </a>
                  </nav>
                </div>
              </li>
              <li class="nav-header pt-4"> <span>Main</span> </li>
              <li class="nav-item">
                <Link to="/" class="nav-link"> <i class="icon pe pe-7s-display1"></i> <span class="title">Dashboard</span> </Link>
              </li>
              <li class="nav-item nav-dropdown" id="forms" onClick={() => { this.navDropdownHandler("forms") }}>
                <a href="javascript:;" class="nav-link"> <i class="icon pe pe-7s-switch"></i> <span class="title">Forms</span> </a>
                <ul class="nav-dropdown-items">
                  <li>
                    <Link to='/forms/basic' class="nav-link"> <b class="icon extra-bold">B</b> <span class="title">Basic inputs</span> </Link>
                  </li>
                  <li>
                    <Link to="/forms/checkbox-radio" class="nav-link"> <b class="icon extra-bold">C</b> <span class="title">Checkbox & Radio</span> </Link>
                  </li>
                  {/* <li>
                    <a href="forms/date-picker.html" class="nav-link"> <b class="icon extra-bold">D</b> <span class="title">Date Picker</span> </a>
                  </li> */}
                  <li>
                    <Link to="/forms/input-groups" class="nav-link"> <b class="icon extra-bold">I</b> <span class="title">Input Groups</span> </Link>
                  </li>
                  <li>
                    <Link to="/forms/select" class="nav-link"> <b class="icon extra-bold">S</b> <span class="title">Select 2</span> </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item nav-dropdown" id="data_tables" onClick={() => { this.navDropdownHandler("data_tables") }}>
                <a href="javascript:;" class="nav-link"> <i class="icon pe pe-7s-browser"></i> <span class="title">Data Tables</span> </a>
                <ul class="nav-dropdown-items">
                  <li>
                    <Link to="/data/ajax" class="nav-link"> <b class="icon extra-bold">A</b> <span class="title">Ajax</span> </Link>
                  </li>
                  <li>
                    <Link to="/data/checkbox" class="nav-link"> <b class="icon extra-bold">C</b> <span class="title">Checkbox</span> </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item nav-dropdown" id="pages" onClick={() => { this.navDropdownHandler("pages") }}>
                <a href="javascript:;" class="nav-link"> <i class="icon pe pe-7s-bookmarks"></i> <span class="title">Pages</span> </a>
                <ul class="nav-dropdown-items">
                  <li class="nav-dropdown" id="user" onClick={() => { this.navDropdownHandler("pages"); this.navDropdownHandler("user") }}>
                    <a href="javascript:;" class="nav-link"> <i class="icon fas font-sm fa-user"></i> <span class="title">User</span> </a>
                    <ul class="nav-dropdown-items">
                      <li>
                        <Link to="/login" target="_blank" class="nav-link"> <b class="icon extra-bold">L</b> <span class="title">Login</span> </Link>
                      </li>
                      <li>
                        <Link to="/forgot" target="_blank" class="nav-link"> <b class="icon extra-bold">P</b> <span class="title">Recover Password</span> </Link>
                      </li>
                      <li>
                        <Link to="/register" target="_blank" class="nav-link"> <b class="icon extra-bold">R</b> <span class="title">Register</span> </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-header"> <span class="title">Apps</span> </li>
              <li class="nav-item">
                <Link to="/calendar" class="nav-link"> <i class="icon pe pe-7s-date"></i> <span class="title">Calendar</span> </Link>
              </li>
              <li class="nav-item nav-dropdown" id="invoices" onClick={() => { this.navDropdownHandler("invoices") }}>
                <a href="javascript:;" class="nav-link"> <i class="icon pe pe-7s-note2"></i> <span class="title">Invoices</span> </a>
                <ul class="nav-dropdown-items">
                  <li>
                    <Link to="/invoice" class="nav-link"> <b class="icon extra-bold">1</b> <span class="title">Version 1</span> </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
