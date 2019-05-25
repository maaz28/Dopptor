import React, { Component } from 'react'

export default class Basics extends Component {
  render() {
    return (
      <>
        <header className="page header">
          <div className="content">
            <h1 className="display-4 mb-0">Form Controls</h1>
            <p className="lead text-muted">Basic form inputs example</p>
          </div>
        </header>
        <div className="content">
          <div className="card-columns columns-md-2">
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Basic form inputs</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmailBase">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmailBase" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPasswordBase">Password</label>
                    <input type="password" className="form-control" id="exampleInputPasswordBase" placeholder="Password" />
                  </div>
                  <div className="form-group checkbox">
                    <input type="checkbox" className="form-check-input" id="exampleCheckBase" />
                    <label className="form-check-label" htmlFor="exampleCheckBase">Check me out</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelectMultipleBase">Example select</label>
                    <select className="form-control" id="exampleFormControlSelectMultipleBase">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelectBase">Example multiple select</label>
                    <select multiple="multiple" className="form-control" id="exampleFormControlSelectBase">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextareaBase">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextareaBase" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Rounded inputs</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmailRounded">Email address</label>
                    <input type="email" className="form-control form-control-rounded" id="exampleInputEmailRounded" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPasswordRounded">Password</label>
                    <input type="password" className="form-control form-control-rounded" id="exampleInputPasswordRounded" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelectMultipleRounded">Example select</label>
                    <select className="form-control form-control-rounded" id="exampleFormControlSelectMultipleRounded">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelectRounded">Example multiple select</label>
                    <select multiple="multiple" className="form-control form-control-rounded" id="exampleFormControlSelectRounded">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextareaRounded">Example textarea</label>
                    <textarea className="form-control form-control-rounded" id="exampleFormControlTextareaRounded" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Inputs with icons</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <fieldset>
                    <legend className="bold small text-uppercase">Default inputs</legend>
                    <div className="form-group has-icon">
                      <input type="text" id="exampleInputIconRight" className="form-control" placeholder="Right icon" />
                      <i className="icon fas fa-user"></i>
                    </div>
                    <div className="form-group has-icon icon-left">
                      <input type="text" id="exampleInputIconLeft" className="form-control" placeholder="Left icon" />
                      <i className="icon fas fa-user"></i>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Rounded inputs</legend>
                    <div className="form-group has-icon">
                      <input type="text" id="exampleInputIconRightRounded" className="form-control form-control-rounded" placeholder="Right icon" />
                      <i className="icon fas fa-user"></i>
                    </div>
                    <div className="form-group has-icon icon-left">
                      <input type="text" id="exampleInputIconLeftRounded" className="form-control form-control-rounded" placeholder="Left icon" />
                      <i className="icon fas fa-user"></i>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Sizing inputs</legend>
                    <div className="form-group has-icon">
                      <input type="text" id="exampleInputIconRightLg" className="form-control form-control-lg" placeholder="Right icon - input large" />
                      <i className="icon fas fa-user"></i>
                    </div>
                    <div className="form-group has-icon icon-left">
                      <input type="text" id="exampleInputIconLeftSm" className="form-control form-control-sm" placeholder="Left icon - input small" />
                      <i className="icon fas fa-user"></i>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Animation icons</legend>
                    <div className="form-group has-icon icon-left">
                      <input type="text" id="exampleInputIconLeftAnimated" className="form-control" placeholder="Left icon - fa-sync fa-spin" />
                      <i className="icon fas fa-sync fa-spin"></i>
                    </div>
                    <div className="form-group has-icon icon-left">
                      <input type="text" id="exampleInputIconLeftAnimated" className="form-control" placeholder="Left icon - fa-spinner fa-pulse" />
                      <i className="icon fas fa-spinner fa-pulse"></i>
                    </div>
                    <div className="form-group has-icon">
                      <input type="text" id="exampleInputIconRightAnimated" className="form-control" placeholder="Right icon - fa-sync fa-spin" />
                      <i className="icon fas fa-sync fa-spin"></i>
                    </div>
                    <div className="form-group has-icon">
                      <input type="text" id="exampleInputIconRightAnimated" className="form-control" placeholder="Right icon - fa-spinner fa-pulse" />
                      <i className="icon fas fa-spinner fa-pulse"></i>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1 d-flex flex-column flex-md-row">
                <h5 className="mb-0">Text options</h5>
              </div>
              <div className="card-body">
                <form action=";" className="form cozy">
                  <div className="form-group">
                    <label htmlFor="exampleInputThin">Input with thin font</label>
                    <input type="text" className="form-control thin" id="exampleInputThin" placeholder="Input with thin font" defaultValue="Input with thin font" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputLight">Input with light font</label>
                    <input type="text" className="form-control light" id="exampleInputLight" placeholder="Input with light font" defaultValue="Input with light font" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputRegular">Input with regular font</label>
                    <input type="text" className="form-control regular" id="exampleInputRegular" placeholder="Input with regular font" defaultValue="Input with regular font" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputBold">Input with bold font</label>
                    <input type="text" className="form-control bold" id="exampleInputBold" placeholder="Input with bold font" defaultValue="Input with bold font" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputExtraBold">Input with bold font</label>
                    <input type="text" className="form-control extra-bold" id="exampleInputExtraBold" placeholder="Input with extra-bold font" defaultValue="Input with extra-bold font" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputCapitalized">Input with bold font</label>
                    <input type="text" className="form-control text-capitalize" id="exampleInputCapitalized" placeholder="Input with capitalized text" defaultValue="Input with capitalized text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputUpperCase">Input with upper case</label>
                    <input type="text" className="form-control text-uppercase" id="exampleInputUpperCase" placeholder="Input with upper case" defaultValue="Input with upper case text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputTextCenter">Input with centered text</label>
                    <input type="text" className="form-control text-center" id="exampleInputTextCenter" placeholder="Input with centered text" defaultValue="Input with centered text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputTextRight">Input with right aligned text</label>
                    <input type="text" className="form-control text-right" id="exampleInputTextRight" placeholder="Input with right aligned text" defaultValue="Input with right aligned text" />
                  </div>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Validation states</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <fieldset>
                    <legend className="bold small text-uppercase">Default inputs</legend>
                    <div className="form-group">
                      <input type="text" id="exampleInputIconRight" className="form-control is-valid" placeholder="Valid state" />
                      <small className="form-text text-success">Valid state helper</small>
                    </div>
                    <div className="form-group">
                      <input type="text" id="exampleInputIconLeft" className="form-control is-invalid" placeholder="Invalid state" />
                      <small className="form-text text-danger">Invalid state helper</small>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Rounded inputs</legend>
                    <div className="form-group">
                      <input type="text" id="exampleInputIconRightRounded" className="form-control form-control-rounded is-valid" placeholder="Valid state" />
                    </div>
                    <div className="form-group">
                      <input type="text" id="exampleInputIconLeftRounded" className="form-control form-control-rounded is-invalid" placeholder="Invalid state" />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Inputs with icon</legend>
                    <div className="form-group has-icon">
                      <input type="text" id="exampleInputIconRightLg" className="form-control is-valid" placeholder="Valid state" />
                      <i className="icon fas fa-check-circle"></i>
                    </div>
                    <div className="form-group has-icon icon-left">
                      <input type="text" id="exampleInputIconLeftSm" className="form-control is-invalid" placeholder="Invalid state" />
                      <i className="icon fas fa-times-circle"></i>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1 d-flex flex-column flex-md-row">
                <h5 className="mb-0">Sizing options</h5>
              </div>
              <div className="card-body">
                <form action=";" className="form cozy">
                  <fieldset>
                    <legend className="bold small text-uppercase">Input elements</legend>
                    <div className="form-group">
                      <label htmlFor="exampleInputLarge">Large input</label>
                      <input type="text" className="form-control form-control-lg" id="exampleInputLarge" placeholder="Large input" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputDefault">Default input</label>
                      <input type="text" className="form-control" id="exampleInputDefault" placeholder="Default input" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputSmall">Small input</label>
                      <input type="text" className="form-control form-control-sm" id="exampleInputSmall" placeholder="Default input" />
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Select inputs</legend>
                    <div className="form-group">
                      <label htmlFor="exampleSelectLarge">Large select</label>
                      <select type="text" className="form-control form-control-lg" id="exampleSelectLarge">
                        <option defaultValue="1">Option 1</option>
                        <option defaultValue="2">Option 2</option>
                        <option defaultValue="3">Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleSelectDefault">Default select</label>
                      <select type="text" className="form-control form-control-sm" id="exampleSelectDefault">
                        <option defaultValue="1">Option 1</option>
                        <option defaultValue="2">Option 2</option>
                        <option defaultValue="3">Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleSelectSmall">Small select</label>
                      <select type="text" className="form-control form-control-sm" id="exampleSelectSmall">
                        <option defaultValue="1">Option 1</option>
                        <option defaultValue="2">Option 2</option>
                        <option defaultValue="3">Option 3</option>
                      </select>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="card border-0 shadow-box demo-form-color-options">
              <div className="card-header bg-1">
                <h5 className="mb-0">Color options</h5>
              </div>
              <div className="card-body">
                <div className="bg-light b rounded p-4 form-group">
                  <p className="mt-0 small">You can change both the text color and the background color</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="my-0">Text Color</p>
                      <div className="dropdown" id="demo-form-color-selector">
                        <button className="btn dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="demo-form-color-current">Info</button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#" data-color="primary">Primary</a>
                          <a className="dropdown-item" href="#" data-color="secondary">Secondary</a>
                          <a className="dropdown-item" href="#" data-color="success">Success</a>
                          <a className="dropdown-item" href="#" data-color="danger">Danger</a>
                          <a className="dropdown-item" href="#" data-color="warning">Warning</a>
                          <a className="dropdown-item" href="#" data-color="info">Info</a>
                          <a className="dropdown-item" href="#" data-color="light">Light</a>
                          <a className="dropdown-item" href="#" data-color="dark">Dark</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#" data-color="1">1</a>
                          <a className="dropdown-item" href="#" data-color="2">2</a>
                          <a className="dropdown-item" href="#" data-color="3">3</a>
                          <a className="dropdown-item" href="#" data-color="4">4</a>
                          <a className="dropdown-item" href="#" data-color="5">5</a>
                          <a className="dropdown-item" href="#" data-color="6">6</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="my-0">Background</p>
                      <div className="dropdown" id="demo-form-background-selector">
                        <button className="btn dropdown-toggle btn-block" type="button" data-toggle="dropdown" id="demo-form-background-current">Info</button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#" data-color="primary">Primary</a>
                          <a className="dropdown-item" href="#" data-color="secondary">Secondary</a>
                          <a className="dropdown-item" href="#" data-color="success">Success</a>
                          <a className="dropdown-item" href="#" data-color="danger">Danger</a>
                          <a className="dropdown-item" href="#" data-color="warning">Warning</a>
                          <a className="dropdown-item" href="#" data-color="info">Info</a>
                          <a className="dropdown-item" href="#" data-color="light">Light</a>
                          <a className="dropdown-item" href="#" data-color="dark">Dark</a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#" data-color="1">1</a>
                          <a className="dropdown-item" href="#" data-color="2">2</a>
                          <a className="dropdown-item" href="#" data-color="3">3</a>
                          <a className="dropdown-item" href="#" data-color="4">4</a>
                          <a className="dropdown-item" href="#" data-color="5">5</a>
                          <a className="dropdown-item" href="#" data-color="6">6</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form action=";" className="cozy">
                  <fieldset>
                    <legend className="bold small text-uppercase">Input elements</legend>
                    <div className="form-group">
                      <label htmlFor="exampleInputCustomColor">Custom text color</label>
                      <input type="text" className="form-control" id="exampleInputCustomColor" aria-describedby="emailHelp" placeholder="Custom text color" defaultValue="Custom text color" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextareaCustomColor">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextareaCustomColor" rows="3">Textarea custom color example
                    </textarea>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Checkboxes and Radios</legend>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group checkbox">
                          <input type="checkbox" id="exampleCheckCustomColor1" />
                          <label htmlFor="exampleCheckCustomColor1">Check me out</label>
                        </div>
                        <div className="form-group checkbox">
                          <input type="checkbox" id="exampleCheckCustomColor2" />
                          <label htmlFor="exampleCheckCustomColor2">Check me out</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group radio">
                          <input type="radio" id="exampleRadioCustomColor1" name="exampleRadioCustomColor" />
                          <label htmlFor="exampleRadioCustomColor1">Check me out</label>
                        </div>
                        <div className="form-group radio">
                          <input type="radio" id="exampleRadioCustomColor2" name="exampleRadioCustomColor" />
                          <label htmlFor="exampleRadioCustomColor2">Check me out</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="bold small text-uppercase">Select elements</legend>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelectMultipleCustomColor">Example select</label>
                      <select className="form-control" id="exampleFormControlSelectMultipleCustomColor">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelectCustomColor">Example multiple select</label>
                      <select multiple="multiple" className="form-control" id="exampleFormControlSelectCustomColor">
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
            <div className="card border-0 shadow-box">
              <div className="card-header bg-1">
                <h5 className="mb-0">Shadow inputs</h5>
              </div>
              <div className="card-body">
                <form action=";" className="cozy">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmailShadow">Email address</label>
                    <input type="email" className="form-control shadow" id="exampleInputEmailShadow" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPasswordShadow">Password</label>
                    <input type="password" className="form-control shadow" id="exampleInputPasswordShadow" placeholder="Password" />
                  </div>
                  <div className="form-group checkbox">
                    <input type="checkbox" className="form-check-input" id="exampleCheckShadow" />
                    <label className="form-check-label" htmlFor="exampleCheckShadow">Check me out</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelectMultipleShadow">Example select</label>
                    <select className="form-control shadow" id="exampleFormControlSelectMultipleShadow">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelectShadow">Example multiple select</label>
                    <select multiple="multiple" className="form-control shadow" id="exampleFormControlSelectShadow">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextareaShadow">Example textarea</label>
                    <textarea className="form-control shadow" id="exampleFormControlTextareaShadow" rows="3"></textarea>
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
