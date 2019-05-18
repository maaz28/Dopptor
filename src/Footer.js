import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer class="main-footer">
        <div class="container-fluid d-flex justify-content-between small">
          <span>&copy; 2018.
				<a href="index.html">Dopptor Admin</a> by
				<a href="http://dopptor.com">dopptor.com</a>
          </span>
          <span class="color-2">v1.0</span>
        </div>
      </footer>
    )
  }
}
