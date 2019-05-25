import React, { Component } from 'react'

export default class CheckboxRadio extends Component {
	render() {
		return (
			<>
				<header className="page header">
					<div className="content">
						<h1 className="display-4 mb-0">Checkbox and Radios</h1>
						<p className="lead text-muted">Checkboxes and Radio buttons styles</p>
					</div>
				</header>
				<div className="content">
					<div className="card-columns columns-md-2">
						<div className="card border-0 shadow-box">
							<div className="card-header bg-1">
								<h5 className="mb-0">Checkboxes</h5>
							</div>
							<div className="card-body">
								<form action=";" className="cozy">
									<fieldset>
										<legend className="bold small text-uppercase">Default unstyled</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
													<label className="form-check-label" htmlFor="defaultCheck1">Default checkbox</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="disabled" />
													<label className="form-check-label" htmlFor="defaultCheck2">Disabled checkbox</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Inline</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="form-check form-check-inline">
													<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
													<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
												</div>
												<div className="form-check form-check-inline">
													<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
													<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
												</div>
												<div className="form-check form-check-inline">
													<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="disabled" />
													<label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Bootstrap custom</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="form-check custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheck1" />
													<label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
												</div>
												<div className="form-check custom-control custom-checkbox">
													<input type="checkbox" className="custom-control-input" id="customCheckDisabled" disabled="disabled" />
													<label className="custom-control-label" htmlFor="customCheckDisabled">Check this (disabled) checkbox</label>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div className="card border-0 shadow-box demo-form-styled-checkboxes">
							<div className="card-header bg-1">
								<h5 className="mb-0">Styled Checkboxes</h5>
							</div>
							<div className="card-body">
								<form action=";" className="cozy">
									<fieldset>
										<legend className="bold small text-uppercase">Default style</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="checkbox">
													<input type="checkbox" id="exampleCheckStyled1" />
													<label htmlFor="exampleCheckStyled1">Check me out</label>
												</div>
												<div className="checkbox">
													<input type="checkbox" id="exampleCheckStyled2" />
													<label htmlFor="exampleCheckStyled2">Check me out</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Inline</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="checkbox form-check-inline checkbox-inline">
													<input type="checkbox" id="exampleCheckInlineStyled1" />
													<label htmlFor="exampleCheckInlineStyled1">1</label>
												</div>
												<div className="checkbox form-check-inline checkbox-inline">
													<input type="checkbox" id="exampleCheckInlineStyled2" />
													<label htmlFor="exampleCheckInlineStyled2">2</label>
												</div>
												<div className="checkbox form-check-inline checkbox-inline">
													<input type="checkbox" id="exampleCheckInlineStyled3" disabled="disabled" />
													<label htmlFor="exampleCheckInlineStyled3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Checked color</legend>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="checkbox checkbox-2">
															<input type="checkbox" id="exampleCheckColorStyled2" />
															<label htmlFor="exampleCheckColorStyled2">Style 2</label>
														</div>
														<div className="checkbox checkbox-3">
															<input type="checkbox" id="exampleCheckColorStyled3" />
															<label htmlFor="exampleCheckColorStyled3">Style 3</label>
														</div>
														<div className="checkbox checkbox-4">
															<input type="checkbox" id="exampleCheckColorStyled4" />
															<label htmlFor="exampleCheckColorStyled4">Style 4</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="checkbox checkbox-success">
															<input type="checkbox" id="exampleCheckColorStyledSuccess" />
															<label htmlFor="exampleCheckColorStyledSuccess">Style Success</label>
														</div>
														<div className="checkbox checkbox-warning">
															<input type="checkbox" id="exampleCheckColorStyledWarning" />
															<label htmlFor="exampleCheckColorStyledWarning">Style Warning</label>
														</div>
														<div className="checkbox checkbox-danger">
															<input type="checkbox" id="exampleCheckColorStyledDanger" />
															<label htmlFor="exampleCheckColorStyledDanger">Style Danger</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Outlined Style</legend>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="checkbox checkbox-2 checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlined2" />
															<label htmlFor="exampleCheckColorStyledOutlined2">Style 2</label>
														</div>
														<div className="checkbox checkbox-3 checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlined3" />
															<label htmlFor="exampleCheckColorStyledOutlined3">Style 3</label>
														</div>
														<div className="checkbox checkbox-4 checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlined4" />
															<label htmlFor="exampleCheckColorStyledOutlined4">Style 4</label>
														</div>
														<hr />
														<div className="checkbox checkbox-3 checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedBw3" />
															<label htmlFor="exampleCheckColorStyledOutlinedBw3">Border 2x</label>
														</div>
														<div className="checkbox checkbox-4 checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedBw4" />
															<label htmlFor="exampleCheckColorStyledOutlinedBw4">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="checkbox checkbox-success checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedSuccess" />
															<label htmlFor="exampleCheckColorStyledOutlinedSuccess">Style Success</label>
														</div>
														<div className="checkbox checkbox-warning checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedWarning" />
															<label htmlFor="exampleCheckColorStyledOutlinedWarning">Style Warning</label>
														</div>
														<div className="checkbox checkbox-danger checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedDanger" />
															<label htmlFor="exampleCheckColorStyledOutlinedDanger">Style Danger</label>
														</div>
														<hr />
														<div className="checkbox checkbox-warning checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedWarningBw" />
															<label htmlFor="exampleCheckColorStyledOutlinedWarningBw">Border 2x</label>
														</div>
														<div className="checkbox checkbox-danger checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedDangerBw" />
															<label htmlFor="exampleCheckColorStyledOutlinedDangerBw">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Solid Style</legend>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="checkbox checkbox-2 checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolid2" />
															<label htmlFor="exampleCheckColorStyledSolid2">Style 2</label>
														</div>
														<div className="checkbox checkbox-3 checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolid3" />
															<label htmlFor="exampleCheckColorStyledSolid3">Style 3</label>
														</div>
														<div className="checkbox checkbox-4 checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolid4" />
															<label htmlFor="exampleCheckColorStyledSolid4">Style 4</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="checkbox checkbox-success checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolidSuccess" />
															<label htmlFor="exampleCheckColorStyledSolidSuccess">Style Success</label>
														</div>
														<div className="checkbox checkbox-warning checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolidWarning" />
															<label htmlFor="exampleCheckColorStyledSolidWarning">Style Warning</label>
														</div>
														<div className="checkbox checkbox-danger checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolidDanger" />
															<label htmlFor="exampleCheckColorStyledSolidDanger">Style Danger</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
								<div className="bg-light b rounded p-4 form-group">
									<p className="mt-0 small">Checkboxes are set to a solid background by default when checked, you can change that behavior by adding <code>.inverted</code> css class to the main <code>.checkbox</code> element, that way the checkbox will remain outlined keeping the color of your preference.</p>
									<p>Make sure you have some elements checked and give it a try</p>
									<button className="btn btn-accent btn-toggle-checkbox-inverted" data-toggle="button">Toggle inverted</button>
								</div>
							</div>
						</div>
						<div className="card border-0 shadow-box">
							<div className="card-header bg-1">
								<h5 className="mb-0">Radios</h5>
							</div>
							<div className="card-body">
								<form action=";" className="cozy">
									<fieldset>
										<legend className="small bold-text uppercase">Default unstyle</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="form-check">
													<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked="checked" />
													<label className="form-check-label" htmlFor="exampleRadios1">Default radio</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
													<label className="form-check-label" htmlFor="exampleRadios2">Second default radio</label>
												</div>
												<div className="form-check">
													<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="disabled" />
													<label className="form-check-label" htmlFor="exampleRadios3">Disabled radio</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="small bold text-uppercase">Inline</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="form-check form-check-inline">
													<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
													<label className="form-check-label" htmlFor="inlineRadio1">1</label>
												</div>
												<div className="form-check form-check-inline">
													<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
													<label className="form-check-label" htmlFor="inlineRadio2">2</label>
												</div>
												<div className="form-check form-check-inline">
													<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="disabled" />
													<label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Bootstrap custom</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="form-check custom-control custom-radio">
													<input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
													<label className="custom-control-label" htmlFor="customRadio1">Toggle this custom radio</label>
												</div>
												<div className="form-check custom-control custom-radio">
													<input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
													<label className="custom-control-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
												</div>
												<div className="form-check custom-control custom-radio">
													<input type="radio" id="customRadioDisabled" name="customRadio" className="custom-control-input" disabled="disabled" />
													<label className="custom-control-label" htmlFor="customRadioDisabled">Toggle this (disabled) radio</label>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div className="card border-0 shadow-box">
							<div className="card-header bg-1">
								<h5 className="mb-0">Styled Radios</h5>
							</div>
							<div className="card-body">
								<form action=";" className="cozy">
									<fieldset>
										<legend className="bold small text-uppercase">Default style</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="radio">
													<input type="radio" id="exampleRadioStyled1" name="defaultStyleRadio" />
													<label htmlFor="exampleRadioStyled1">Check me out</label>
												</div>
												<div className="radio">
													<input type="radio" id="exampleRadioStyled2" name="defaultStyleRadio" />
													<label htmlFor="exampleRadioStyled2">Check me out</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Inline</legend>
										<div className="form-group">
											<div className="form-check-list">
												<div className="radio form-check-inline radio-inline">
													<input type="radio" id="exampleRadioInlineStyled1" name="inlineStyleRadio" />
													<label htmlFor="exampleRadioInlineStyled1">1</label>
												</div>
												<div className="radio form-check-inline radio-inline">
													<input type="radio" id="exampleRadioInlineStyled2" name="inlineStyleRadio" />
													<label htmlFor="exampleRadioInlineStyled2">2</label>
												</div>
												<div className="radio form-check-inline radio-inline">
													<input type="radio" id="exampleRadioInlineStyled3" name="inlineStyleRadio" disabled="disabled" />
													<label htmlFor="exampleRadioInlineStyled3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Checked color</legend>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="radio radio-2">
															<input type="radio" id="exampleRadioColorStyled2" name="colorCheckStyleRadio" />
															<label htmlFor="exampleRadioColorStyled2">Style 2</label>
														</div>
														<div className="radio radio-3">
															<input type="radio" id="exampleRadioColorStyled3" name="colorCheckStyleRadio" />
															<label htmlFor="exampleRadioColorStyled3">Style 3</label>
														</div>
														<div className="radio radio-4">
															<input type="radio" id="exampleRadioColorStyled4" name="colorCheckStyleRadio" />
															<label htmlFor="exampleRadioColorStyled4">Style 4</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="radio radio-success">
															<input type="radio" id="exampleRadioColorStyledSuccess" name="colorCheckStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledSuccess">Style Success</label>
														</div>
														<div className="radio radio-warning">
															<input type="radio" id="exampleRadioColorStyledWarning" name="colorCheckStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledWarning">Style Warning</label>
														</div>
														<div className="radio radio-danger">
															<input type="radio" id="exampleRadioColorStyledDanger" name="colorCheckStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledDanger">Style Danger</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend className="bold small text-uppercase">Outlined Style</legend>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="radio radio-2 radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlined2" name="colorOutlineStyleRadio" />
															<label htmlFor="exampleRadioColorStyledOutlined2">Style 2</label>
														</div>
														<div className="radio radio-3 radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlined3" name="colorOutlineStyleRadio" />
															<label htmlFor="exampleRadioColorStyledOutlined3">Style 3</label>
														</div>
														<div className="radio radio-4 radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlined4" name="colorOutlineStyleRadio" />
															<label htmlFor="exampleRadioColorStyledOutlined4">Style 4</label>
														</div>
														<hr />
														<div className="radio radio-3 radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedBw3" name="colorOutlineStyleRadio" />
															<label htmlFor="exampleRadioColorStyledOutlinedBw3">Border 2x</label>
														</div>
														<div className="radio radio-4 radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedBw4" name="colorOutlineStyleRadio" />
															<label htmlFor="exampleRadioColorStyledOutlinedBw4">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="form-check-list">
														<div className="radio radio-success radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlinedSuccess" name="colorOutlineStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledOutlinedSuccess">Style Success</label>
														</div>
														<div className="radio radio-warning radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlinedWarning" name="colorOutlineStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledOutlinedWarning">Style Warning</label>
														</div>
														<div className="radio radio-danger radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlinedDanger" name="colorOutlineStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledOutlinedDanger">Style Danger</label>
														</div>
														<hr />
														<div className="radio radio-warning radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedWarningBw" name="colorOutlineStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledOutlinedWarningBw">Border 2x</label>
														</div>
														<div className="radio radio-danger radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedDangerBw" name="colorOutlineStyleRadio2" />
															<label htmlFor="exampleRadioColorStyledOutlinedDangerBw">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div className="card border-0 shadow-box">
							<div className="card-header bg-1">
								<h5 className="mb-0">Switch toggle</h5>
							</div>
							<div className="card-body">
								<p>Default theme colors</p>
								<form action=";" className="cozy">
									<div className="row">
										<div className="col-md-5 mr-md-auto">
											<fieldset>
												<legend className="small bold text-uppercase">Light theme</legend>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-cs-1" type="checkbox" />
														<label className="tgl-btn tgl-btn-1" htmlFor="tgl-light-cs-1"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 1</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-cs-2" type="checkbox" />
														<label className="tgl-btn tgl-btn-2" htmlFor="tgl-light-cs-2"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 2</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-cs-3" type="checkbox" />
														<label className="tgl-btn tgl-btn-3" htmlFor="tgl-light-cs-3"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 3</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-cs-4" type="checkbox" />
														<label className="tgl-btn tgl-btn-4" htmlFor="tgl-light-cs-4"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 4</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-cs-5" type="checkbox" />
														<label className="tgl-btn tgl-btn-5" htmlFor="tgl-light-cs-5"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 5</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-cs-6" type="checkbox" />
														<label className="tgl-btn tgl-btn-6" htmlFor="tgl-light-cs-6"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 6</p>
													</div>
												</div>
											</fieldset>
										</div>
										<div className="col-md-5">
											<fieldset>
												<legend className="small bold text-uppercase">iOs theme</legend>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-cs-1" type="checkbox" />
														<label className="tgl-btn tgl-btn-1" htmlFor="tgl-ios-cs-1"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 1</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-cs-2" type="checkbox" />
														<label className="tgl-btn tgl-btn-2" htmlFor="tgl-ios-cs-2"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 2</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-cs-3" type="checkbox" />
														<label className="tgl-btn tgl-btn-3" htmlFor="tgl-ios-cs-3"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 3</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-cs-4" type="checkbox" />
														<label className="tgl-btn tgl-btn-4" htmlFor="tgl-ios-cs-4"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 4</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-cs-5" type="checkbox" />
														<label className="tgl-btn tgl-btn-5" htmlFor="tgl-ios-cs-5"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 5</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-cs-6" type="checkbox" />
														<label className="tgl-btn tgl-btn-6" htmlFor="tgl-ios-cs-6"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">Color 6</p>
													</div>
												</div>
											</fieldset>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="card border-0 shadow-box">
							<div className="card-header bg-1">
								<h5 className="mb-0">Switch toggle</h5>
							</div>
							<div className="card-body">
								<p>Default Bootstrap colors</p>
								<form action=";" className="cozy">
									<div className="row">
										<div className="col-md-5 mr-md-auto">
											<fieldset>
												<legend className="small bold text-uppercase">Light theme</legend>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-1" type="checkbox" />
														<label className="tgl-btn tgl-btn-primary" htmlFor="tgl-light-bs-1"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">primary</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-2" type="checkbox" />
														<label className="tgl-btn tgl-btn-secondary" htmlFor="tgl-light-bs-2"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">secondary</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-3" type="checkbox" />
														<label className="tgl-btn tgl-btn-success" htmlFor="tgl-light-bs-3"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">success</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-4" type="checkbox" />
														<label className="tgl-btn tgl-btn-info" htmlFor="tgl-light-bs-4"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">info</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-5" type="checkbox" />
														<label className="tgl-btn tgl-btn-warning" htmlFor="tgl-light-bs-5"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">warning</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-6" type="checkbox" />
														<label className="tgl-btn tgl-btn-danger" htmlFor="tgl-light-bs-6"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">danger</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-7" type="checkbox" />
														<label className="tgl-btn tgl-btn-light" htmlFor="tgl-light-bs-7"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">light</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-light" id="tgl-light-bs-8" type="checkbox" />
														<label className="tgl-btn tgl-btn-dark" htmlFor="tgl-light-bs-8"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">dark</p>
													</div>
												</div>
											</fieldset>
										</div>
										<div className="col-md-5">
											<fieldset>
												<legend className="small bold text-uppercase">iOs theme</legend>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-1" type="checkbox" />
														<label className="tgl-btn tgl-btn-primary" htmlFor="tgl-ios-bs-1"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">primary</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-2" type="checkbox" />
														<label className="tgl-btn tgl-btn-secondary" htmlFor="tgl-ios-bs-2"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">secondary</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-3" type="checkbox" />
														<label className="tgl-btn tgl-btn-success" htmlFor="tgl-ios-bs-3"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">success</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-4" type="checkbox" />
														<label className="tgl-btn tgl-btn-info" htmlFor="tgl-ios-bs-4"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">info</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-5" type="checkbox" />
														<label className="tgl-btn tgl-btn-warning" htmlFor="tgl-ios-bs-5"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">warning</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-6" type="checkbox" />
														<label className="tgl-btn tgl-btn-danger" htmlFor="tgl-ios-bs-6"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">danger</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-7" type="checkbox" />
														<label className="tgl-btn tgl-btn-light" htmlFor="tgl-ios-bs-7"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">light</p>
													</div>
												</div>
												<div className="mb-3 d-flex justify-content-between align-items-center">
													<div className="form-group mb-0">
														<input className="tgl tgl-ios" id="tgl-ios-bs-8" type="checkbox" />
														<label className="tgl-btn tgl-btn-dark" htmlFor="tgl-ios-bs-8"></label>
													</div>
													<div className="mr-3">
														<p className="regular mb-0 text-capitalize">dark</p>
													</div>
												</div>
											</fieldset>
										</div>
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
