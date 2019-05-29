import React, { Component } from "react";
import $ from "jquery";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

import "react-datepicker/dist/react-datepicker.css";
export default class datePicker extends Component {
  // toggle = () =>{
  //   $(function() {
  //   $('#datetimepicker1').datetimepicker();
  // });}

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

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
                    <label className="col-form-label col-md-3">
                      Default Setup
                    </label>
                    <div className="col-md-9">
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                      />
                      {/* <input type="text" className="form-control" id="datetimepicker1" placeholder="Select a date"  /> */}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      Select Time Setup
                    </label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </div>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          dateFormat="MMMM d, yyyy h:mm aa"
                          timeCaption="time"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      Select Time Only Setup
                    </label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </div>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          dateFormat="h:mm aa"
                          timeCaption="Time"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Exclude Times Setup</label>
                    <div className="col-md-9">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </div>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          excludeTimes={[setHours(setMinutes(new Date(), 0), 17), setHours(setMinutes(new Date(), 30), 18), setHours(setMinutes(new Date(), 30), 19), setHours(setMinutes(new Date(), 30), 17)]}
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                      </div>
                    </div>
                  </div>
                  
                    {/* </div> */}
                  {/* </div> */}
                 
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
                    <label className="col-form-label col-md-3">
                      Include Times Setup
                    </label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </span>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          includeTimes={[setHours(setMinutes(new Date(), 0), 17), setHours(setMinutes(new Date(), 30), 18), setHours(setMinutes(new Date(), 30), 19), setHours(setMinutes(new Date(), 30), 17)]}
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      Inject Specific Times Setup
                    </label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </span>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          timeFormat="HH:mm"
                          injectTimes={[
                            setHours(setMinutes(new Date(), 1), 0),
                            setHours(setMinutes(new Date(), 5), 12),
                            setHours(setMinutes(new Date(), 59), 23)
                          ]}
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Specific Time Range Setup</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="far fa-calendar-alt" />
                          </span>
                        </span>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          minTime={setHours(setMinutes(new Date(), 0), 17)}
                          maxTime={setHours(setMinutes(new Date(), 30), 20)}
                          dateFormat="MMMM d, yyyy"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box" />
          </div>
        </div>
      </>
    );
  }
}
