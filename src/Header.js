/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import logo_light from './img/logo-light.png'
import $ from 'jquery';
import User from './img/user.jpg'
import { LoginConsumer } from './config/contextConfig';

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
      <header class="main-header">
        <nav class="navbar navbar-expand-md bg-3">
          <div class="navbar-logo p-3 py-md-0">
            <a class="navbar-brand" href="index.html">
              <img src={logo_light} alt="LOGO" class="logo" /> </a>
            <button type="button" class="navbar-toggler" onClick={this.navbarToggler}>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-options px-3 px-md-4">
            <form class="form search-form mr-auto" action="search-result.html" method="GET" id="header-search">
              <div class="form-group mb-0 d-flex position-relative">
                <input type="text" class="form-control pl-5" placeholder="Search for..." name="q" />
                <button type="submit" class="btn btn-link pl-0 pt-2">
                  <i class="pe pe-7s-search pe-2x"></i>
                </button>
              </div>
            </form>
            <ul class="nav">
              <li class="nav-item tasks dropdown" id="task" data-rel="tasks" onClick={() => this.badgeClickHandler("tasks", "task_show")}>
                <a href="javascript:void(0)" class="nav-link dropdown-toggle" data-toggle="dropdown">
                  <i class="pe pe-7s-menu"></i>
                  <span class="badge badge-pill badge-info">6</span>
                </a>

                <div class="dropdown-menu dropdown-menu-right" id="task_show">
                  <div class="dropdown-heading d-flex align-items-center justify-content-between">
                    <h6 class="m-0 text-uppercase bold">Tasks</h6>
                    <small class="text-muted">
                      <span class="bold number">6</span> pending</small>
                  </div>
                  <div class="dropdown-body list list-group list-group-flush load-content">
                    <div class="loader-container">
                      <div class="loader-8">Loading...</div>
                    </div>
                  </div>
                  <div class="dropdown-footer text-center">
                    <a href="javascript:void(0)" title="">
                      <i class="fas fa-ellipsis-h"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item notifications dropdown" id="notification" onClick={() => this.badgeClickHandler("notification", "notifications_show")} data-rel="notifications">
                <a href="javascript:void(0)" class="nav-link dropdown-toggle pl-4" data-toggle="dropdown">
                  <i class="pe pe-7s-bell"></i>
                  <span class="badge badge-pill badge-info">11</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right" id="notifications_show">
                  <div class="dropdown-heading d-flex align-items-center justify-content-between">
                    <h6 class="m-0 text-uppercase bold">Notifications</h6>
                    <small class="text-muted">
                      <span class="bold number">7</span> new</small>
                  </div>
                  <div class="list list-unstyled list-hover list-bordered dropdown-body load-content">
                    <div class="loader-container">
                      <div class="loader-8">Loading...</div>
                    </div>
                  </div>
                  <div class="dropdown-footer text-center">
                    <a href="javascript:void(0)" title="">
                      <i class="fas fa-ellipsis-h"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item messages dropdown" data-rel="messages" id="message" onClick={() => this.badgeClickHandler("message", "messages_show")} >
                <a href="javascript:void(0)" class="nav-link dropdown-toggle pl-4" data-toggle="dropdown">
                  <i class="pe pe-7s-mail"></i>
                  <span class="badge badge-pill badge-info">9</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right" id="messages_show">
                  <div class="dropdown-heading d-flex align-items-center justify-content-between">
                    <h6 class="m-0 text-uppercase bold">Messages</h6>
                    <small class="text-muted">
                      <span class="bold number">9</span> unread</small>
                  </div>
                  <div class="list list-hover dropdown-body load-content">
                    <div class="loader-container">
                      <div class="loader-8">Loading...</div>
                    </div>
                  </div>
                  <div class="dropdown-footer text-center">
                    <a href="javascript:void(0)" title="">
                      <i class="fas fa-ellipsis-h"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item account dropdown" id="user_profile" onClick={() => this.badgeClickHandler("user_profile", "user_profile_show")}>
                <a href="javascript:void(0)" class="nav-link dropdown-toggle pl-4" data-toggle="dropdown">
                  <img src={User} class="avatar user-avatar rounded-circle" alt="..." />
                  <i class="fas fa-angle-down"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" id="user_profile_show">
                  <div class="dropdown-heading rounded-top bg-3 arrow top color-1">
                    <div class="content py-1">
                      <div class="media align-items-center">
                        <img src={User} class="user-avatar shadow mr-2 rounded-circle" alt="" />
                        <div class="media-body">
                          <span class="bold color-1 user-name text-overflow text-capitalize">Kay Peters</span>
                          <p class="small user-info text-overflow capitalize-first mb-0 op-5">kay.peters@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="dropdown-body list list-group list-group-flush">
                    <li class="list-group-item list-group-item-action">
                      <a href="javascript:void(0)">
                        <i class="mr-3 fas fa-user"></i>Profile</a>
                    </li>
                    <li class="list-group-item list-group-item-action">
                      <a href="javascript:void(0)">
                        <i class="mr-3 fas fa-cogs"></i>Settings</a>
                    </li>
                    <li class="list-group-item list-group-item-action">
                      <a href="javascript:void(0)">
                        <i class="mr-3 fas fa-life-ring"></i>Help</a>
                    </li>
                  </ul>
                  <div class="dropdown-footer bg-1 d-flex justify-content-between align-items-center">
                    <LoginConsumer>{({ isLogin }) => {
                      return (
                        <a href="javascript:void(0)" onClick={() => { isLogin() }} class="btn btn-rounded btn-3">
                          <i class="mr-3 fas fa-sign-out-alt"></i>Log out </a>
                      )
                    }}
                    </LoginConsumer>
                    <a href="javascript:void(0)" class="text-danger">
                      <i class="mr-3 fas fa-lock"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li class="aside-toggler" data-behavior="absolute" onClick={this.asideHandler}>
                <a href="javascript:void(0)">
                  <i class="pe pe-7s-keypad"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    )
  }
}
