import React, { Component } from 'react'

export default class Basics extends Component {
  render() {
    return (
      <>
          <header class="page header">
            <div class="content">
              <h1 class="display-4 mb-0">Form Controls</h1>
              <p class="lead text-muted">Basic form inputs example</p>
            </div>
          </header>
          <div class="content">
            <div class="card-columns columns-md-2">
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1">
                  <h5 class="mb-0">Basic form inputs</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="cozy">
                    <div class="form-group">
                      <label for="exampleInputEmailBase">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmailBase" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPasswordBase">Password</label>
                      <input type="password" class="form-control" id="exampleInputPasswordBase" placeholder="Password" />
                    </div>
                    <div class="form-group checkbox">
                      <input type="checkbox" class="form-check-input" id="exampleCheckBase" />
                      <label class="form-check-label" for="exampleCheckBase">Check me out</label>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelectMultipleBase">Example select</label>
                      <select class="form-control" id="exampleFormControlSelectMultipleBase">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelectBase">Example multiple select</label>
                      <select multiple="multiple" class="form-control" id="exampleFormControlSelectBase">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextareaBase">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextareaBase" rows="3"></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1">
                  <h5 class="mb-0">Rounded inputs</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="cozy">
                    <div class="form-group">
                      <label for="exampleInputEmailRounded">Email address</label>
                      <input type="email" class="form-control form-control-rounded" id="exampleInputEmailRounded" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPasswordRounded">Password</label>
                      <input type="password" class="form-control form-control-rounded" id="exampleInputPasswordRounded" placeholder="Password" />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelectMultipleRounded">Example select</label>
                      <select class="form-control form-control-rounded" id="exampleFormControlSelectMultipleRounded">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelectRounded">Example multiple select</label>
                      <select multiple="multiple" class="form-control form-control-rounded" id="exampleFormControlSelectRounded">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextareaRounded">Example textarea</label>
                      <textarea class="form-control form-control-rounded" id="exampleFormControlTextareaRounded" rows="3"></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1">
                  <h5 class="mb-0">Inputs with icons</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="cozy">
                    <fieldset>
                      <legend class="bold small text-uppercase">Default inputs</legend>
                      <div class="form-group has-icon">
                        <input type="text" id="exampleInputIconRight" class="form-control" placeholder="Right icon" />
                        <i class="icon fas fa-user"></i>
                      </div>
                      <div class="form-group has-icon icon-left">
                        <input type="text" id="exampleInputIconLeft" class="form-control" placeholder="Left icon" />
                        <i class="icon fas fa-user"></i>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Rounded inputs</legend>
                      <div class="form-group has-icon">
                        <input type="text" id="exampleInputIconRightRounded" class="form-control form-control-rounded" placeholder="Right icon" />
                        <i class="icon fas fa-user"></i>
                      </div>
                      <div class="form-group has-icon icon-left">
                        <input type="text" id="exampleInputIconLeftRounded" class="form-control form-control-rounded" placeholder="Left icon" />
                        <i class="icon fas fa-user"></i>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Sizing inputs</legend>
                      <div class="form-group has-icon">
                        <input type="text" id="exampleInputIconRightLg" class="form-control form-control-lg" placeholder="Right icon - input large" />
                        <i class="icon fas fa-user"></i>
                      </div>
                      <div class="form-group has-icon icon-left">
                        <input type="text" id="exampleInputIconLeftSm" class="form-control form-control-sm" placeholder="Left icon - input small" />
                        <i class="icon fas fa-user"></i>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Animation icons</legend>
                      <div class="form-group has-icon icon-left">
                        <input type="text" id="exampleInputIconLeftAnimated" class="form-control" placeholder="Left icon - fa-sync fa-spin" />
                        <i class="icon fas fa-sync fa-spin"></i>
                      </div>
                      <div class="form-group has-icon icon-left">
                        <input type="text" id="exampleInputIconLeftAnimated" class="form-control" placeholder="Left icon - fa-spinner fa-pulse" />
                        <i class="icon fas fa-spinner fa-pulse"></i>
                      </div>
                      <div class="form-group has-icon">
                        <input type="text" id="exampleInputIconRightAnimated" class="form-control" placeholder="Right icon - fa-sync fa-spin" />
                        <i class="icon fas fa-sync fa-spin"></i>
                      </div>
                      <div class="form-group has-icon">
                        <input type="text" id="exampleInputIconRightAnimated" class="form-control" placeholder="Right icon - fa-spinner fa-pulse" />
                        <i class="icon fas fa-spinner fa-pulse"></i>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1 d-flex flex-column flex-md-row">
                  <h5 class="mb-0">Text options</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="form cozy">
                    <div class="form-group">
                      <label for="exampleInputThin">Input with thin font</label>
                      <input type="text" class="form-control thin" id="exampleInputThin" placeholder="Input with thin font" value="Input with thin font" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputLight">Input with light font</label>
                      <input type="text" class="form-control light" id="exampleInputLight" placeholder="Input with light font" value="Input with light font" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputRegular">Input with regular font</label>
                      <input type="text" class="form-control regular" id="exampleInputRegular" placeholder="Input with regular font" value="Input with regular font" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputBold">Input with bold font</label>
                      <input type="text" class="form-control bold" id="exampleInputBold" placeholder="Input with bold font" value="Input with bold font" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputExtraBold">Input with bold font</label>
                      <input type="text" class="form-control extra-bold" id="exampleInputExtraBold" placeholder="Input with extra-bold font" value="Input with extra-bold font" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCapitalized">Input with bold font</label>
                      <input type="text" class="form-control text-capitalize" id="exampleInputCapitalized" placeholder="Input with capitalized text" value="Input with capitalized text" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputUpperCase">Input with upper case</label>
                      <input type="text" class="form-control text-uppercase" id="exampleInputUpperCase" placeholder="Input with upper case" value="Input with upper case text" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputTextCenter">Input with centered text</label>
                      <input type="text" class="form-control text-center" id="exampleInputTextCenter" placeholder="Input with centered text" value="Input with centered text" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputTextRight">Input with right aligned text</label>
                      <input type="text" class="form-control text-right" id="exampleInputTextRight" placeholder="Input with right aligned text" value="Input with right aligned text" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1">
                  <h5 class="mb-0">Validation states</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="cozy">
                    <fieldset>
                      <legend class="bold small text-uppercase">Default inputs</legend>
                      <div class="form-group">
                        <input type="text" id="exampleInputIconRight" class="form-control is-valid" placeholder="Valid state" />
                        <small class="form-text text-success">Valid state helper</small>
                      </div>
                      <div class="form-group">
                        <input type="text" id="exampleInputIconLeft" class="form-control is-invalid" placeholder="Invalid state" />
                        <small class="form-text text-danger">Invalid state helper</small>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Rounded inputs</legend>
                      <div class="form-group">
                        <input type="text" id="exampleInputIconRightRounded" class="form-control form-control-rounded is-valid" placeholder="Valid state" />
                      </div>
                      <div class="form-group">
                        <input type="text" id="exampleInputIconLeftRounded" class="form-control form-control-rounded is-invalid" placeholder="Invalid state" />
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Inputs with icon</legend>
                      <div class="form-group has-icon">
                        <input type="text" id="exampleInputIconRightLg" class="form-control is-valid" placeholder="Valid state" />
                        <i class="icon fas fa-check-circle"></i>
                      </div>
                      <div class="form-group has-icon icon-left">
                        <input type="text" id="exampleInputIconLeftSm" class="form-control is-invalid" placeholder="Invalid state" />
                        <i class="icon fas fa-times-circle"></i>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1 d-flex flex-column flex-md-row">
                  <h5 class="mb-0">Sizing options</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="form cozy">
                    <fieldset>
                      <legend class="bold small text-uppercase">Input elements</legend>
                      <div class="form-group">
                        <label for="exampleInputLarge">Large input</label>
                        <input type="text" class="form-control form-control-lg" id="exampleInputLarge" placeholder="Large input" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputDefault">Default input</label>
                        <input type="text" class="form-control" id="exampleInputDefault" placeholder="Default input" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputSmall">Small input</label>
                        <input type="text" class="form-control form-control-sm" id="exampleInputSmall" placeholder="Default input" />
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Select inputs</legend>
                      <div class="form-group">
                        <label for="exampleSelectLarge">Large select</label>
                        <select type="text" class="form-control form-control-lg" id="exampleSelectLarge">
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="exampleSelectDefault">Default select</label>
                        <select type="text" class="form-control form-control-sm" id="exampleSelectDefault">
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="exampleSelectSmall">Small select</label>
                        <select type="text" class="form-control form-control-sm" id="exampleSelectSmall">
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box demo-form-color-options">
                <div class="card-header bg-1">
                  <h5 class="mb-0">Color options</h5>
                </div>
                <div class="card-body">
                  <div class="bg-light b rounded p-4 form-group">
                    <p class="mt-0 small">You can change both the text color and the background color</p>
                    <div class="row">
                      <div class="col-md-6">
                        <p class="my-0">Text Color</p>
                        <div class="dropdown" id="demo-form-color-selector">
                          <button class="btn dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="demo-form-color-current">Info</button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" data-color="primary">Primary</a>
                            <a class="dropdown-item" href="#" data-color="secondary">Secondary</a>
                            <a class="dropdown-item" href="#" data-color="success">Success</a>
                            <a class="dropdown-item" href="#" data-color="danger">Danger</a>
                            <a class="dropdown-item" href="#" data-color="warning">Warning</a>
                            <a class="dropdown-item" href="#" data-color="info">Info</a>
                            <a class="dropdown-item" href="#" data-color="light">Light</a>
                            <a class="dropdown-item" href="#" data-color="dark">Dark</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-color="1">1</a>
                            <a class="dropdown-item" href="#" data-color="2">2</a>
                            <a class="dropdown-item" href="#" data-color="3">3</a>
                            <a class="dropdown-item" href="#" data-color="4">4</a>
                            <a class="dropdown-item" href="#" data-color="5">5</a>
                            <a class="dropdown-item" href="#" data-color="6">6</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <p class="my-0">Background</p>
                        <div class="dropdown" id="demo-form-background-selector">
                          <button class="btn dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="demo-form-background-current">Info</button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" data-color="primary">Primary</a>
                            <a class="dropdown-item" href="#" data-color="secondary">Secondary</a>
                            <a class="dropdown-item" href="#" data-color="success">Success</a>
                            <a class="dropdown-item" href="#" data-color="danger">Danger</a>
                            <a class="dropdown-item" href="#" data-color="warning">Warning</a>
                            <a class="dropdown-item" href="#" data-color="info">Info</a>
                            <a class="dropdown-item" href="#" data-color="light">Light</a>
                            <a class="dropdown-item" href="#" data-color="dark">Dark</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-color="1">1</a>
                            <a class="dropdown-item" href="#" data-color="2">2</a>
                            <a class="dropdown-item" href="#" data-color="3">3</a>
                            <a class="dropdown-item" href="#" data-color="4">4</a>
                            <a class="dropdown-item" href="#" data-color="5">5</a>
                            <a class="dropdown-item" href="#" data-color="6">6</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action=";" class="cozy">
                    <fieldset>
                      <legend class="bold small text-uppercase">Input elements</legend>
                      <div class="form-group">
                        <label for="exampleInputCustomColor">Custom text color</label>
                        <input type="text" class="form-control" id="exampleInputCustomColor" aria-describedby="emailHelp" placeholder="Custom text color" value="Custom text color" />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextareaCustomColor">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextareaCustomColor" rows="3">Textarea custom color example
                    </textarea>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Checkboxes and Radios</legend>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group checkbox">
                            <input type="checkbox" id="exampleCheckCustomColor1" />
                            <label for="exampleCheckCustomColor1">Check me out</label>
                          </div>
                          <div class="form-group checkbox">
                            <input type="checkbox" id="exampleCheckCustomColor2" />
                            <label for="exampleCheckCustomColor2">Check me out</label>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group radio">
                            <input type="radio" id="exampleRadioCustomColor1" name="exampleRadioCustomColor" />
                            <label for="exampleRadioCustomColor1">Check me out</label>
                          </div>
                          <div class="form-group radio">
                            <input type="radio" id="exampleRadioCustomColor2" name="exampleRadioCustomColor" />
                            <label for="exampleRadioCustomColor2">Check me out</label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="bold small text-uppercase">Select elements</legend>
                      <div class="form-group">
                        <label for="exampleFormControlSelectMultipleCustomColor">Example select</label>
                        <select class="form-control" id="exampleFormControlSelectMultipleCustomColor">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelectCustomColor">Example multiple select</label>
                        <select multiple="multiple" class="form-control" id="exampleFormControlSelectCustomColor">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div class="card border-0 shadow-box">
                <div class="card-header bg-1">
                  <h5 class="mb-0">Shadow inputs</h5>
                </div>
                <div class="card-body">
                  <form action=";" class="cozy">
                    <div class="form-group">
                      <label for="exampleInputEmailShadow">Email address</label>
                      <input type="email" class="form-control shadow" id="exampleInputEmailShadow" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPasswordShadow">Password</label>
                      <input type="password" class="form-control shadow" id="exampleInputPasswordShadow" placeholder="Password" />
                    </div>
                    <div class="form-group checkbox">
                      <input type="checkbox" class="form-check-input" id="exampleCheckShadow" />
                      <label class="form-check-label" for="exampleCheckShadow">Check me out</label>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelectMultipleShadow">Example select</label>
                      <select class="form-control shadow" id="exampleFormControlSelectMultipleShadow">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelectShadow">Example multiple select</label>
                      <select multiple="multiple" class="form-control shadow" id="exampleFormControlSelectShadow">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextareaShadow">Example textarea</label>
                      <textarea class="form-control shadow" id="exampleFormControlTextareaShadow" rows="3"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </>
    )
  }
}
