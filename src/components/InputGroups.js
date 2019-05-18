import React, { Component } from 'react'

export default class InputGroups extends Component {
  render() {
    return (
      <div>
        <header class="page header">
          <div class="content">
            <h1 class="display-4 mb-0">Input groups</h1>
            <p class="lead text-muted">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
          </div>
        </header>
        <div class="content">
          <div class="card-columns columns-md-2">
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Text Addons</h5>
              </div>
              <div class="card-body">
                <form action=";">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Left text addon</label>
                    <div class="col-lg-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">@</span>
                        </span>
                        <input type="text" class="form-control" placeholder="Left addon" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Left addon multiple</label>
                    <div class="col-lg-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">$</span>
                          <span class="input-group-text">0.00</span>
                        </span>
                        <input type="text" class="form-control" placeholder="Multiple left addon" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Right text addon</label>
                    <div class="col-lg-9">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Right addon" />
                        <span class="input-group-append">
                          <span class="input-group-text">@example.com</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Right addon multiple</label>
                    <div class="col-lg-9">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Multiple right addon" />
                        <span class="input-group-append">
                          <span class="input-group-text">$</span>
                          <span class="input-group-text">0.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Left and Right addons</label>
                    <div class="col-lg-9">
                      <div class="input-group">
                        <span class="input-group-prepend">
                          <span class="input-group-text">$</span>
                        </span>
                        <input type="text" class="form-control" placeholder="Multiple right addon" />
                        <span class="input-group-append">
                          <span class="input-group-text">0.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">With textarea</label>
                    <div class="col-lg-9">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">Comments</span>
                        </div>
                        <textarea class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Icons Addon</h5>
              </div>
              <div class="card-body">
                <form action=";">
                  <fieldset class="mb-3">
                    <legend class="small bold text-uppercase">Static Icons</legend>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left icon addon</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-user"></i>
                            </span>
                          </span>
                          <input type="text" class="form-control" placeholder="Left icon addon" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left icon + text</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">Options</span>
                            <span class="input-group-text">
                              <i class="fas fa-cog"></i>
                            </span>
                          </span>
                          <input type="text" class="form-control" placeholder="Multiple left icon addon" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Right icon addon</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Right addon" />
                          <span class="input-group-append">
                            <span class="input-group-text">
                              <i class="far fa-calendar-alt"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Right icon + text</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Multiple right icon addon" />
                          <span class="input-group-append">
                            <span class="input-group-text">Options</span>
                            <span class="input-group-text">
                              <i class="fas fa-cog"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left and Right addons</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-user"></i>
                            </span>
                          </span>
                          <input type="text" class="form-control" placeholder="Multiple right icon addon" />
                          <span class="input-group-append">
                            <span class="input-group-text">
                              <i class="fas fa-cog"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="mb-3">
                    <legend class="small bold text-uppercase">Animated Icons</legend>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left icon addon</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-sync fa-spin"></i>
                            </span>
                          </span>
                          <input type="text" class="form-control" placeholder="Left icon addon" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Right icon addon</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Right addon" />
                          <span class="input-group-append">
                            <span class="input-group-text">
                              <i class="fas fa-spinner fa-pulse"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left and Right addons</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-sync fa-spin"></i>
                            </span>
                          </span>
                          <input type="text" class="form-control" placeholder="Multiple right icon addon" />
                          <span class="input-group-append">
                            <span class="input-group-text">
                              <i class="fas fa-cog fa-spin"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Dropdown Addons</h5>
              </div>
              <div class="card-body">
                <form action=";">
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Left dropdown addon</label>
                    <div class="col-lg-9">
                      <div class="input-group clean-group">
                        <div class="input-group-prepend">
                          <button class="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                        <input type="text" class="form-control" placeholder="Left addon" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Right dropdown addon</label>
                    <div class="col-lg-9">
                      <div class="input-group clean-group">
                        <input type="text" class="form-control" placeholder="Right addon" />
                        <div class="input-group-append">
                          <button class="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-form-label col-lg-3">Left and right dropdown addon</label>
                    <div class="col-lg-9">
                      <div class="input-group clean-group">
                        <div class="input-group-prepend">
                          <button class="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                        <input type="text" class="form-control" placeholder="Left and right addon" />
                        <div class="input-group-append">
                          <button class="btn btn-1 dropdown-toggle" type="button" data-toggle="dropdown">Action</button>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 shadow-box">
              <div class="card-header bg-1">
                <h5 class="mb-0">Button Addons</h5>
              </div>
              <div class="card-body">
                <form action=";">
                  <fieldset class="mb-3">
                    <legend class="small bold text-uppercase">Clean group</legend>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left text addon</label>
                      <div class="col-lg-9">
                        <div class="input-group clean-group">
                          <span class="input-group-prepend">
                            <button class="btn btn-1" type="button">Button</button>
                          </span>
                          <input type="text" class="form-control" placeholder="Left addon" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Right text addon</label>
                      <div class="col-lg-9">
                        <div class="input-group clean-group">
                          <input type="text" class="form-control" placeholder="Right addon" />
                          <span class="input-group-append">
                            <button class="btn btn-1" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left and Right addons</label>
                      <div class="col-lg-9">
                        <div class="input-group clean-group">
                          <span class="input-group-prepend">
                            <button class="btn btn-1" type="button">Button</button>
                          </span>
                          <input type="text" class="form-control" placeholder="Multiple right addon" />
                          <span class="input-group-append">
                            <button class="btn btn-1" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="mb-3">
                    <legend class="small bold text-uppercase">Colored buttons</legend>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left text addon</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <button class="btn btn-accent" type="button">Button</button>
                          </span>
                          <input type="text" class="form-control" placeholder="Left addon" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Right text addon</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Right addon" />
                          <span class="input-group-append">
                            <button class="btn btn-warning" type="button">Button</button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-3">Left and Right addons</label>
                      <div class="col-lg-9">
                        <div class="input-group">
                          <span class="input-group-prepend">
                            <button class="btn btn-primary" type="button">Button</button>
                          </span>
                          <input type="text" class="form-control" placeholder="Multiple right addon" />
                          <span class="input-group-append">
                            <button class="btn btn-danger" type="button">Button</button>
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
