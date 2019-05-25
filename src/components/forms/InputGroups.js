import React, { Component } from 'react'

export default class InputGroups extends Component {
  render() {
    return (
      <div>
        <header className="page header">
          <div className="content">
            <h1 className="display-4 mb-0">Input groups</h1>
            <p className="lead text-muted">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
          </div>
        </header>
        <div className="content">
          <div className="card-columns columns-md-2">
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Text Addons</h5>
              </div>
              <div className="card-body">
                <form action=";">
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Left text addon</label>
                    <div className="col-lg-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">@</span>
                        </span>
                        <input type="text" className="form-control" placeholder="Left addon" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Left addon multiple</label>
                    <div className="col-lg-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                        </span>
                        <input type="text" className="form-control" placeholder="Multiple left addon" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Right text addon</label>
                    <div className="col-lg-9">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Right addon" />
                        <span className="input-group-append">
                          <span className="input-group-text">@example.com</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Right addon multiple</label>
                    <div className="col-lg-9">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Multiple right addon" />
                        <span className="input-group-append">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Left and Right addons</label>
                    <div className="col-lg-9">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </span>
                        <input type="text" className="form-control" placeholder="Multiple right addon" />
                        <span className="input-group-append">
                          <span className="input-group-text">0.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">With textarea</label>
                    <div className="col-lg-9">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Comments</span>
                        </div>
                        <textarea className="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Icons Addon</h5>
              </div>
              <div className="card-body">
                <form action=";">
                  <fieldset className="mb-3">
                    <legend className="small bold text-uppercase">Static Icons</legend>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left icon addon</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user"></i>
                            </span>
                          </span>
                          <input type="text" className="form-control" placeholder="Left icon addon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left icon + text</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <span className="input-group-text">Options</span>
                            <span className="input-group-text">
                              <i className="fas fa-cog"></i>
                            </span>
                          </span>
                          <input type="text" className="form-control" placeholder="Multiple left icon addon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Right icon addon</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Right addon" />
                          <span className="input-group-append">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Right icon + text</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Multiple right icon addon" />
                          <span className="input-group-append">
                            <span className="input-group-text">Options</span>
                            <span className="input-group-text">
                              <i className="fas fa-cog"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left and Right addons</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user"></i>
                            </span>
                          </span>
                          <input type="text" className="form-control" placeholder="Multiple right icon addon" />
                          <span className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-cog"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="small bold text-uppercase">Animated Icons</legend>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left icon addon</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-sync fa-spin"></i>
                            </span>
                          </span>
                          <input type="text" className="form-control" placeholder="Left icon addon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Right icon addon</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Right addon" />
                          <span className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-spinner fa-pulse"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left and Right addons</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-sync fa-spin"></i>
                            </span>
                          </span>
                          <input type="text" className="form-control" placeholder="Multiple right icon addon" />
                          <span className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-cog fa-spin"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Dropdown Addons</h5>
              </div>
              <div className="card-body">
                <form action=";">
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Left dropdown addon</label>
                    <div className="col-lg-9">
                      <div className="input-group clean-group">
                        <div className="input-group-prepend">
                          <button className="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Left addon" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Right dropdown addon</label>
                    <div className="col-lg-9">
                      <div className="input-group clean-group">
                        <input type="text" className="form-control" placeholder="Right addon" />
                        <div className="input-group-append">
                          <button className="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-3">Left and right dropdown addon</label>
                    <div className="col-lg-9">
                      <div className="input-group clean-group">
                        <div className="input-group-prepend">
                          <button className="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Left and right addon" />
                        <div className="input-group-append">
                          <button className="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Button Addons</h5>
              </div>
              <div className="card-body">
                <form action=";">
                  <fieldset className="mb-3">
                    <legend className="small bold text-uppercase">Clean group</legend>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left text addon</label>
                      <div className="col-lg-9">
                        <div className="input-group clean-group">
                          <span className="input-group-prepend">
                            <button className="btn btn-1" type="button">Button</button>
                          </span>
                          <input type="text" className="form-control" placeholder="Left addon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Right text addon</label>
                      <div className="col-lg-9">
                        <div className="input-group clean-group">
                          <input type="text" className="form-control" placeholder="Right addon" />
                          <span className="input-group-append">
                            <button className="btn btn-1" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left and Right addons</label>
                      <div className="col-lg-9">
                        <div className="input-group clean-group">
                          <span className="input-group-prepend">
                            <button className="btn btn-1" type="button">Button</button>
                          </span>
                          <input type="text" className="form-control" placeholder="Multiple right addon" />
                          <span className="input-group-append">
                            <button className="btn btn-1" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="mb-3">
                    <legend className="small bold text-uppercase">Colored buttons</legend>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left text addon</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <button className="btn btn-accent" type="button">Button</button>
                          </span>
                          <input type="text" className="form-control" placeholder="Left addon" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Right text addon</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Right addon" />
                          <span className="input-group-append">
                            <button className="btn btn-warning" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-lg-3">Left and Right addons</label>
                      <div className="col-lg-9">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <button className="btn btn-primary" type="button">Button</button>
                          </span>
                          <input type="text" className="form-control" placeholder="Multiple right addon" />
                          <span className="input-group-append">
                            <button className="btn btn-danger" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
