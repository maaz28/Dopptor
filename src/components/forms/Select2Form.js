import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'banana', label: 'Banana' }
]

export default class Select2Form extends Component {


  componentDidMount() {

  }

  render() {
    return (
      <div>
        <header className="page header">
          <div className="content">
            <h1 className="display-4 mb-0">Select2</h1>
            <p className="lead text-muted">The jQuery replacement for select boxes</p>
          </div>
        </header>
        <div className="content">
          <div className="card-columns columns-md-2">
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Single Selects</h5>
              </div>
              <div className="card-body">
                <form action=";">
                  <div className="form-group">
                    <label>Basic select</label>
                    <select className="form-control select-2">
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="WY">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Hide search</label>
                    <select className="form-control" id="select2-hide-search">
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="WY">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Select with placeholder</label>
                    <select className="form-control select2-placeholder">
                      <option></option>
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="WY">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Select with icons</label>
                    <select className="form-control select2-with-icons">
                      <optgroup label="Emotions">
                        <option value="tired" data-icon="icon far fa-tired" className="text-capitalize">tired</option>
                        <option value="surprise" data-icon="icon far fa-surprise" className="text-capitalize">surprise</option>
                        <option value="smile" data-icon="icon far fa-smile" className="text-capitalize">smile</option>
                        <option value="frown" data-icon="icon far fa-frown" className="text-capitalize">frown</option>
                        <option value="flushed" data-icon="icon far fa-flushed" className="text-capitalize">flushed</option>
                        <option value="angry" data-icon="icon far fa-angry" className="text-capitalize">angry</option>
                      </optgroup>
                      <optgroup label="Social">
                        <option value="facebook" data-icon="icon fab fa-facebook" className="text-capitalize">facebook</option>
                        <option value="twitter" data-icon="icon fab fa-twitter" className="text-capitalize">twitter</option>
                        <option value="instagram" data-icon="icon fab fa-instagram" className="text-capitalize">instagram</option>
                        <option value="pinterest" data-icon="icon fab fa-pinterest" className="text-capitalize">pinterest</option>
                        <option value="whatsapp" data-icon="icon fab fa-whatsapp" className="text-capitalize">whatsapp</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Disable items</label>
                    <select className="form-control select-2">
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ" disabled="disabled">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID" disabled="disabled">Idaho</option>
                        <option value="WY" disabled="disabled">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="AR" disabled="disabled">Arkansas</option>
                        <option value="KS">Kansas</option>
                        <option value="KY" disabled="disabled">Kentucky</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Disabled select</label>
                    <select className="form-control select-2" disabled="disabled">
                      <option value="AZ">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID">Idaho</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Multiple Selects</h5>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>Multiple select</label>
                  <Select
                    defaultValue={[options[2], options[3]]}
                    isMulti
                    name="colors"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                <div className="form-group">
                  <label>Animation</label>
                  <Select
                    closeMenuOnSelect={false}
                    components={makeAnimated()}
                    defaultValue={[options[0], options[1]]}
                    isMulti
                    options={options}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
