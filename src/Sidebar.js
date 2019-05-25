/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react'
import $ from 'jquery'
import Users from './components/sidebar.js/Users';
import Todo from './components/sidebar.js/Todo';
import Settings from './components/sidebar.js/Settings';
import Profile from './components/sidebar.js/Profile';

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
      <aside className="quick-view">
        <div className="side-wrapper">
          <nav className="nav nav-tabs nav-fill tabs-clean slide">
            <a href="javascript:void(0)" id="aside-profile-tab" className="nav-item nav-link " data-toggle="tab" onClick={() => { this.tabClickHandler('aside-profile', 'aside-profile-tab') }}>
              <i className="far fa-id-card icon"></i>
            </a>
            <a href="javascript:void(0)" id="aside-todo-tab" className="nav-item nav-link active" data-toggle="tab" onClick={() => { this.tabClickHandler('aside-todo', "aside-todo-tab") }} data-rel="todos">
              <i className="fas fa-list-ul icon"></i>
            </a>
            <a href="javascript:void(0)" id="aside-users-tab" className="nav-item nav-link" data-toggle="tab" onClick={() => { this.tabClickHandler('aside-users', "aside-users-tab") }} data-rel="users">
              <i className="fas fa-users icon"></i>
            </a>
            <a href="javascript:void(0)" id="aside-settings-tab" className="nav-item nav-link" data-toggle="tab" onClick={() => { this.tabClickHandler('aside-settings', "aside-settings-tab") }}>
              <i className="fas fa-cog icon"></i>
            </a>
          </nav>
          <div className="tab-content">
            <div className="tab-pane" id="aside-profile">
              <Profile/>
            </div>
            <div className="tab-pane active" id="aside-todo">
              <Todo/>
            </div>
            <div className="tab-pane" id="aside-users">
              <Users />
            </div>
            <div className="tab-pane" id="aside-settings">
             <Settings/>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
