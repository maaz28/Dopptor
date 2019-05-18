import React, { Component } from 'react'

export default class Select2 extends Component {
  render() {
    return (
      <div>
        <header class="page header">
          <div class="content">
            <h1 class="display-4 mb-0">Select2</h1>
            <p class="lead text-muted">The jQuery replacement for select boxes</p>
          </div>
        </header>
        <div class="content">
          <div class="card-columns columns-md-2">
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Single Selects</h5>
              </div>
              <div class="card-body">
                <form action=";">
                  <div class="form-group">
                    <label>Basic select</label>
                    <select class="form-control select-2">
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
                  <div class="form-group">
                    <label>Hide search</label>
                    <select class="form-control" id="select2-hide-search">
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
                  <div class="form-group">
                    <label>Select with placeholder</label>
                    <select class="form-control select2-placeholder">
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
                  <div class="form-group">
                    <label>Select with icons</label>
                    <select class="form-control select2-with-icons">
                      <optgroup label="Emotions">
                        <option value="tired" data-icon="icon far fa-tired" class="text-capitalize">tired</option>
                        <option value="surprise" data-icon="icon far fa-surprise" class="text-capitalize">surprise</option>
                        <option value="smile" data-icon="icon far fa-smile" class="text-capitalize">smile</option>
                        <option value="frown" data-icon="icon far fa-frown" class="text-capitalize">frown</option>
                        <option value="flushed" data-icon="icon far fa-flushed" class="text-capitalize">flushed</option>
                        <option value="angry" data-icon="icon far fa-angry" class="text-capitalize">angry</option>
                      </optgroup>
                      <optgroup label="Social">
                        <option value="facebook" data-icon="icon fab fa-facebook" class="text-capitalize">facebook</option>
                        <option value="twitter" data-icon="icon fab fa-twitter" class="text-capitalize">twitter</option>
                        <option value="instagram" data-icon="icon fab fa-instagram" class="text-capitalize">instagram</option>
                        <option value="pinterest" data-icon="icon fab fa-pinterest" class="text-capitalize">pinterest</option>
                        <option value="whatsapp" data-icon="icon fab fa-whatsapp" class="text-capitalize">whatsapp</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Disable items</label>
                    <select class="form-control select-2">
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
                  <div class="form-group">
                    <label>Disabled select</label>
                    <select class="form-control select-2" disabled="disabled">
                      <option value="AZ">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID">Idaho</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Multiple Selects</h5>
              </div>
              <div class="card-body">
                <form action=";">
                  <div class="form-group">
                    <label>Multiple select</label>
                    <select class="form-control select-2" multiple="multiple">
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ" selected="selected">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="WY">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="IA" selected="selected">Iowa</option>
                        <option value="KS" selected="selected">Kansas</option>
                        <option value="KY">Kentucky</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>With placeholder</label>
                    <select class="form-control select2-placeholder" multiple="multiple">
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
                  <div class="form-group">
                    <label>With icons</label>
                    <select class="form-control select2-with-icons" multiple="multiple">
                      <optgroup label="Emotions">
                        <option value="tired" data-icon="icon far fa-tired" class="text-capitalize">tired</option>
                        <option value="surprise" data-icon="icon far fa-surprise" class="text-capitalize">surprise</option>
                        <option value="smile" data-icon="icon far fa-smile" class="text-capitalize" selected="selected">smile</option>
                        <option value="frown" data-icon="icon far fa-frown" class="text-capitalize">frown</option>
                        <option value="flushed" data-icon="icon far fa-flushed" class="text-capitalize">flushed</option>
                        <option value="angry" data-icon="icon far fa-angry" class="text-capitalize">angry</option>
                      </optgroup>
                      <optgroup label="Social">
                        <option value="facebook" data-icon="icon fab fa-facebook" class="text-capitalize">facebook</option>
                        <option value="twitter" data-icon="icon fab fa-twitter" class="text-capitalize">twitter</option>
                        <option value="instagram" data-icon="icon fab fa-instagram" class="text-capitalize" selected="selected">instagram</option>
                        <option value="pinterest" data-icon="icon fab fa-pinterest" class="text-capitalize">pinterest</option>
                        <option value="whatsapp" data-icon="icon fab fa-whatsapp" class="text-capitalize">whatsapp</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Disable menu items</label>
                    <select class="form-control select-2" multiple="multiple">
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ" disabled="disabled">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID" disabled="disabled">Idaho</option>
                        <option value="WY" selected="selected">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="AR" selected="selected">Arkansas</option>
                        <option value="KS">Kansas</option>
                        <option value="KY" disabled="disabled">Kentucky</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Disabled select</label>
                    <select class="form-control select-2" disabled="disabled" multiple="multiple">
                      <option value="AZ" selected="selected">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID" selected="selected">Idaho</option>
                      <option value="WY" selected="selected">Wyoming</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
