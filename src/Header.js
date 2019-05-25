/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import logo_light from './img/logo-light.png'
import $ from 'jquery';
import User from './img/user.jpg'
import { LoginConsumer } from './config/contextConfig';
import TaskData from './data/task.json'
import Tasks from './components/templates/Tasks';
import NotificationData from './data/notifications.json'
import Notifications from './components/templates/Notifications';
import MessageData from './data/messages.json'
import Messages from './components/templates/Messages';

export default class Header extends Component {

  navbarToggler = () => {
    $("body").toggleClass("side-nav-collapsed");
  }

  asideHandler = () => {
    $("body").toggleClass("quick-view-expanded");
    $("main").toggleClass("aside-overlay");
  }

  tasksClicked = () => {
    $("#task").toggleClass("show");
    $("#task_show").toggleClass("show");
  }

  badgeClickHandler = (id, render_div_id) => {
    $("#" + id).toggleClass("show");
    $("#" + render_div_id).toggleClass("show");
  }


  render() {
    return (
      <header className="main-header">
        <nav className="navbar navbar-expand-md bg-3">
          <div className="navbar-logo p-3 py-md-0">
            <a className="navbar-brand" href="index.html">
              <img src={logo_light} alt="LOGO" className="logo" /> </a>
            <button type="button" className="navbar-toggler" onClick={this.navbarToggler}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-options px-3 px-md-4">
            <form className="form search-form mr-auto" action="search-result.html" method="GET" id="header-search">
              <div className="form-group mb-0 d-flex position-relative">
                <input type="text" className="form-control pl-5" placeholder="Search for..." name="q" />
                <button type="submit" className="btn btn-link pl-0 pt-2">
                  <i className="pe pe-7s-search pe-2x"></i>
                </button>
              </div>
            </form>
            <ul className="nav">
              <li className="nav-item tasks dropdown" id="task" data-rel="tasks" onClick={() => this.badgeClickHandler("tasks", "task_show")}>
                <a href="javascript:void(0)" className="nav-link dropdown-toggle" data-toggle="dropdown">
                  <i className="pe pe-7s-menu"></i>
                  <span className="badge badge-pill badge-info">6</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" id="task_show">
                  <div className="dropdown-heading d-flex align-items-center justify-content-between">
                    <h6 className="m-0 text-uppercase bold">Tasks</h6>
                    <small className="text-muted">
                      <span className="bold number">6</span> pending</small>
                  </div>
                  <div className="dropdown-body list list-group list-group-flush load-content">
                    {TaskData.map((item, i) => (
                      <Tasks item={item} key={i} />
                    ))}
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="javascript:void(0)" title="">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item notifications dropdown" id="notification" onClick={() => this.badgeClickHandler("notification", "notifications_show")} data-rel="notifications">
                <a href="javascript:void(0)" className="nav-link dropdown-toggle pl-4" data-toggle="dropdown">
                  <i className="pe pe-7s-bell"></i>
                  <span className="badge badge-pill badge-info">7</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" id="notifications_show">
                  <div className="dropdown-heading d-flex align-items-center justify-content-between">
                    <h6 className="m-0 text-uppercase bold">Notifications</h6>
                    <small className="text-muted">
                      <span className="bold number">7</span> new</small>
                  </div>
                  <div className="list list-unstyled list-hover list-bordered dropdown-body load-content">
                    {NotificationData.map((item, i) => (
                      <Notifications item={item} key = {i} />
                    ))}
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="javascript:void(0)" title="">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item messages dropdown" data-rel="messages" id="message" onClick={() => this.badgeClickHandler("message", "messages_show")} >
                <a href="javascript:void(0)" className="nav-link dropdown-toggle pl-4" data-toggle="dropdown">
                  <i className="pe pe-7s-mail"></i>
                  <span className="badge badge-pill badge-info">9</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right" id="messages_show">
                  <div className="dropdown-heading d-flex align-items-center justify-content-between">
                    <h6 className="m-0 text-uppercase bold">Messages</h6>
                    <small className="text-muted">
                      <span className="bold number">9</span> unread</small>
                  </div>
                  <div className="list list-hover dropdown-body load-content">
                    {MessageData.map((item, i) => (
                      <Messages item={item} key = {i} />
                    ))}
                  </div>
                  <div className="dropdown-footer text-center">
                    <a href="javascript:void(0)" title="">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item account dropdown" id="user_profile" onClick={() => this.badgeClickHandler("user_profile", "user_profile_show")}>
                <a href="javascript:void(0)" className="nav-link dropdown-toggle pl-4" data-toggle="dropdown">
                  <img src={User} className="avatar user-avatar rounded-circle" alt="..." />
                  <i className="fas fa-angle-down"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right" id="user_profile_show">
                  <div className="dropdown-heading rounded-top bg-3 arrow top color-1">
                    <div className="content py-1">
                      <div className="media align-items-center">
                        <img src={User} className="user-avatar shadow mr-2 rounded-circle" alt="" />
                        <div className="media-body">
                          <span className="bold color-1 user-name text-overflow text-capitalize">Kay Peters</span>
                          <p className="small user-info text-overflow capitalize-first mb-0 op-5">kay.peters@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="dropdown-body list list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">
                      <a href="javascript:void(0)">
                        <i className="mr-3 fas fa-user"></i>Profile</a>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <a href="javascript:void(0)">
                        <i className="mr-3 fas fa-cogs"></i>Settings</a>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <a href="javascript:void(0)">
                        <i className="mr-3 fas fa-life-ring"></i>Help</a>
                    </li>
                  </ul>
                  <div className="dropdown-footer bg-1 d-flex justify-content-between align-items-center">
                    <LoginConsumer>{({ isLogin }) => {
                      return (
                        <a href="javascript:void(0)" onClick={() => { isLogin() }} className="btn btn-rounded btn-3">
                          <i className="mr-3 fas fa-sign-out-alt"></i>Log out </a>
                      )
                    }}
                    </LoginConsumer>
                    <a href="javascript:void(0)" className="text-danger">
                      <i className="mr-3 fas fa-lock"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li className="aside-toggler" data-behavior="absolute" onClick={this.asideHandler}>
                <a href="javascript:void(0)">
                  <i className="pe pe-7s-keypad"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    )
  }
}
