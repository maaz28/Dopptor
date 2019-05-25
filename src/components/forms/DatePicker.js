import React, { Component } from 'react'

export default class DatePicker extends Component {
  render() {
    return (
      <>
        <header className="page header">
          <div className="content">
            <h1 className="display-4 mb-0">Date Pickers</h1>
            <p className="lead text-muted">Showcasing multiple date pickers</p>
          </div>
        </header>
        <div className="content">
          <div className="card-columns columns-md-2">
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Bootstrap datepicker</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Minimum Setup</label>
                    <div className="col-md-9">
                      <input type="text" className="form-control" id="datepicker-default" placeholder="Select a date" readonly="readonly" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Input Group Setup</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" id="datepicker-inputgroup" placeholder="Select a date" readonly="readonly" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Enable Helper Buttons</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" value="11/30/2018" id="datepicker-helpers" readonly="readonly" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Position</label>
                    <div className="col-md-9">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Top left" id="datepicker-tl" />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Top right" id="datepicker-tr" />
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Bottom left" id="datepicker-bl" />
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Bottom right" id="datepicker-br" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Range Picker</label>
                    <div className="col-md-9">
                      <div className="input-group input-daterange" id="datepicker-range">
                        <input type="text" className="form-control" name="startDate" />
                        <div className="input-group-append input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-angle-right"></i>
                          </span>
                        </div>
                        <input type="text" className="form-control" name="endDate" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3 col-sm-12">Inline Mode</label>
                    <div className="col-lg-4 col-md-9 col-sm-12">
                      <div className="" id="datepicker-inline"></div>
                      <input type="hidden" id="datepicker-inline-value" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Pickadate.js picker</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Basic options</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Header labels</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-header-labels" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Buttons</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-buttons" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Formats</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-format" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Year selector</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-year" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Editable input</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-editable" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Dropdown selectors</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-selectors" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Disable ranges</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-disable-range" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Events</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-events" placeholder="Open your console and Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Disable dates</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" className="form-control pickadate-disable" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box"></div>
          </div>
        </div>
      </>
    )
  }
}
