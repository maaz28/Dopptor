import React, { Component } from 'react'
import user from './img/user.jpg';
import './css/main.css';
import $ from 'jquery';
import { Link } from 'react-router-dom'

export default function Navbar() {

  const navDropdownHandler = (id) => { // animation with respect to ID
    $("#" + id).toggleClass("open");
  }

  return (
    <nav className="side-nav overlay gradient gradient-53 alpha-9 image-background cover center-bottom" style={{ backgroundImage: "url(https://picsum.photos/350/200/?random&gravity=west)" }}>
      <div className="side-wrapper content" style={{ margin: "0px" }}>
        <div className="nav-wrapper">
          <ul className="nav flex-column">
            <li className="nav-item user-sidebar nav-dropdown" id="Profile" onClick={() => { navDropdownHandler("Profile") }} style={{ cursor: "pointer" }}>
              <a href="javascript:;" className="nav-link">
                <div className="media align-items-center justify-content-center">
                  <div className="position-relative"> <img src={user} className="user-avatar rounded-circle mr-2" alt="" /> <span className="status status-right online"></span> </div>
                  <div className="media-body title"> <span className="media-heading bold user-name text-truncate text-capitalize">Kay Peters</span>
                    <div className="small user-info text-truncate capitalize-first text-muted">kaypeters@example.com</div>
                  </div>
                </div>
              </a>
              <div className="nav-dropdown-items">
                <div className="stat">
                  <p className="small task d-flex justify-content-between mb-1"> <span className="text-muted">You're running out of space</span> <span className="bold percent text-danger">94%</span> </p>
                  <div className="progress progress-xs mb-4">
                    <div className="progress-bar bg-danger" style={{ width: "94%" }}></div>
                  </div>
                </div>
                <nav className="nav justify-content-between">
                  <a href="javascript:;" className="nav-link py-3"> <i className="mr-1 fas fa-inbox"></i> <span className="small">Inbox</span> <small className="badge badge-primary">7</small> </a>
                  <a href="javascript:;" className="nav-link py-3"> <i className="mr-1 fas fa-lock"></i><span className="small">Lock</span> </a>
                  <a href="javascript:;" className="nav-link py-3"> <i className="mr-1 fas fa-sign-out-alt"></i><span className="small">Log out</span> </a>
                </nav>
              </div>
            </li>
            <li className="nav-header pt-4"> <span>Main</span> </li>
            <li className="nav-item">
              <Link to="/" className="nav-link"> <i className="icon pe pe-7s-display1"></i> <span className="title">Dashboard</span> </Link>
            </li>
            <li className="nav-item nav-dropdown" id="forms" onClick={() => { navDropdownHandler("forms") }}>
              <a href="javascript:;" className="nav-link"> <i className="icon pe pe-7s-switch"></i> <span className="title">Forms</span> </a>
              <ul className="nav-dropdown-items">
                <li>
                  <Link to='/forms/basic' className="nav-link"> <b className="icon extra-bold">B</b> <span className="title">Basic inputs</span> </Link>
                </li>
                <li>
                  <Link to="/forms/checkbox-radio" className="nav-link"> <b className="icon extra-bold">C</b> <span className="title">Checkbox & Radio</span> </Link>
                </li>
                <li>
                    <Link to="/forms/date-picker" className="nav-link"> <b className="icon extra-bold">D</b> <span className="title">Date Picker</span> </Link>
                  </li>
                <li>
                  <Link to="/forms/input-groups" className="nav-link"> <b className="icon extra-bold">I</b> <span className="title">Input Groups</span> </Link>
                </li>
                <li>
                  <Link to="/forms/select" className="nav-link"> <b className="icon extra-bold">S</b> <span className="title">Select 2</span> </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown" id="data_tables" onClick={() => { navDropdownHandler("data_tables") }}>
              <a href="javascript:;" className="nav-link"> <i className="icon pe pe-7s-browser"></i> <span className="title">Data Tables</span> </a>
              <ul className="nav-dropdown-items">
                <li>
                  <Link to="/data/ajax" className="nav-link"> <b className="icon extra-bold">A</b> <span className="title">Ajax</span> </Link>
                </li>
                <li>
                  <Link to="/data/checkbox" className="nav-link"> <b className="icon extra-bold">C</b> <span className="title">Checkbox</span> </Link>
                </li>
              </ul>
            </li>
            <li className="nav-header"> <span className="title">Apps</span> </li>
            <li className="nav-item">
              <Link to="/calendar" className="nav-link"> <i className="icon pe pe-7s-date"></i> <span className="title">Calendar</span> </Link>
            </li>
            <li className="nav-item nav-dropdown" id="invoices" onClick={() => { navDropdownHandler("invoices") }}>
              <a href="javascript:;" className="nav-link"> <i className="icon pe pe-7s-note2"></i> <span className="title">Invoices</span> </a>
              <ul className="nav-dropdown-items">
                <li>
                  <Link to="/invoice" className="nav-link"> <b className="icon extra-bold">1</b> <span className="title">Version 1</span> </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
