import React, { Component } from 'react';
let subscribers_today = require('../../data/subscribers-today.json');

export default class Ajax extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{ origin: 'loading' }]
    }
  }

  componentDidMount() {
    this.setState({
      data: subscribers_today
    })
  }

  render() {
    return (
      <div>
        <header className="page header">
          <div className="content">
            <h1 className="display-4 mb-0">DataTables</h1>
            <p className="lead text-muted">Ajax sourced data</p>
          </div>
        </header>
        <div className="content">
          <table id="dt-ajax" className="table table-hover table-clean" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>User</th>
                <th>Email address</th>
                <th>Origin</th>
                <th>Location</th>
                <th>Address</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {
                subscribers_today.data.map((item, i) => {
                  const { user, location, origin } = item
                  return (
                    <tr key={i}>
                      <td>
                        <div className="media">
                          <img src={user.picture} className="rounded-circle mr-3 shadow" alt="" />
                          <span className={"status " + user.status}></span>
                          <div className="media-body">
                            <p className="mb-0 d-flex w-100 justify-content-between">
                              <span className="bold mb-1 text-capitalize">
                                {user.name}
                              </span>
                            </p>
                            <p className="small color-2 alpha-5 mb-0">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href={"mailto:" + user.email}>{user.email}</a>
                      </td>
                      <td>
                        <span className={"badge badge-pill px-2 py-1 shadow-sm brand-" + origin}>
                          {origin}
                        </span>
                      </td>
                      <td>
                        <p className="text-capitalize bold mb-0">
                          {location.city}
                        </p><p className="text-capitalize mb-0">
                          {location.state}
                        </p>
                      </td>
                      <td>
                        <p className="text-capitalize mb-0">
                          {location.street}
                        </p><p className="text-capitalize mb-0">
                          {location.postcode}
                        </p>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
