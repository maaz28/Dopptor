import React, { Component } from 'react'

export default class DatePicker extends Component {
  render() {
    return (
      <>
        <header class="page header">
          <div class="content">
            <h1 class="display-4 mb-0">Date Pickers</h1>
            <p class="lead text-muted">Showcasing multiple date pickers</p>
          </div>
        </header>
        <div class="content">
          <div class="card-columns columns-md-2">
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Bootstrap datepicker</h5>
              </div>
              <div class="card-body">
                <form action=";" class="cozy">
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Minimum Setup</label>
                    <div class="col-md-9">
                      <input type="text" class="form-control" id="datepicker-default" placeholder="Select a date" readonly="readonly" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Input Group Setup</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" id="datepicker-inputgroup" placeholder="Select a date" readonly="readonly" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Enable Helper Buttons</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" value="11/30/2018" id="datepicker-helpers" readonly="readonly" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Position</label>
                    <div class="col-md-9">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Top left" id="datepicker-tl" />
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Top right" id="datepicker-tr" />
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Bottom left" id="datepicker-bl" />
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Bottom right" id="datepicker-br" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Range Picker</label>
                    <div class="col-md-9">
                      <div class="input-group input-daterange" id="datepicker-range">
                        <input type="text" class="form-control" name="startDate" />
                        <div class="input-group-append input-group-prepend">
                          <span class="input-group-text">
                            <i class="fas fa-angle-right"></i>
                          </span>
                        </div>
                        <input type="text" class="form-control" name="endDate" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3 col-sm-12">Inline Mode</label>
                    <div class="col-lg-4 col-md-9 col-sm-12">
                      <div class="" id="datepicker-inline"></div>
                      <input type="hidden" id="datepicker-inline-value" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Pickadate.js picker</h5>
              </div>
              <div class="card-body">
                <form action=";" class="cozy">
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Basic options</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Header labels</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-header-labels" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Buttons</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-buttons" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Formats</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-format" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Year selector</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-year" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Editable input</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-editable" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Dropdown selectors</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-selectors" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Disable ranges</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-disable-range" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Events</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-events" placeholder="Open your console and Pick a date..." />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-md-3">Disable dates</label>
                    <div class="col-md-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="far fa-calendar-alt"></i>
                          </span>
                        </span>
                        <input type="text" class="form-control pickadate-disable" placeholder="Pick a date..." />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow-box"></div>
          </div>
        </div>
      </>
    )
  }
}
