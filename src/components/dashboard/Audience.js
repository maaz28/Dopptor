import React, { Component } from 'react'
import AudienceTable from '../templates/AudienceTable';
import Map from './Map';

export default class Audience extends Component {
  render() {
    return (
      <div className="card border-0 shadow-box">
        <div className="card-header bg-1 border-bottom-0 d-flex">
          <div>
            <h4 className="card-title light">Total Audience by Region</h4>
            <p className="card-subtitle color-2 mb-0">Where your visitors are coming from</p>
          </div>
          <div className="card-options ml-auto">
            <a href="javascript:void(0)" className="color-2" data-toggle="dropdown">
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">Action</button>
              <button className="dropdown-item" type="button">Another action</button>
              <button className="dropdown-item" type="button">Something else here</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-5">
              <div className="global-audience-table">
                <AudienceTable />
              </div>
            </div>
            <div className="col-lg-6 ml-lg-auto">
              <div id="world-map" style={{ height: "300px" }}>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
