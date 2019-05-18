import React, { Component } from 'react'

export default class CheckboxRadio extends Component {
	render() {
		return (
			<>
				<header class="page header">
					<div class="content">
						<h1 class="display-4 mb-0">Checkbox and Radios</h1>
						<p class="lead text-muted">Checkboxes and Radio buttons styles</p>
					</div>
				</header>
				<div class="content">
					<div class="card-columns columns-md-2">
						<div class="card border-0 shadow-box">
							<div class="card-header bg-1">
								<h5 class="mb-0">Checkboxes</h5>
							</div>
							<div class="card-body">
								<form action=";" class="cozy">
									<fieldset>
										<legend class="bold small text-uppercase">Default unstyled</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
													<label class="form-check-label" for="defaultCheck1">Default checkbox</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled="disabled" />
													<label class="form-check-label" for="defaultCheck2">Disabled checkbox</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Inline</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
													<label class="form-check-label" for="inlineCheckbox1">1</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
													<label class="form-check-label" for="inlineCheckbox2">2</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="disabled" />
													<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Bootstrap custom</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="form-check custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck1" />
													<label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
												</div>
												<div class="form-check custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled="disabled" />
													<label class="custom-control-label" for="customCheckDisabled">Check this (disabled) checkbox</label>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div class="card border-0 shadow-box demo-form-styled-checkboxes">
							<div class="card-header bg-1">
								<h5 class="mb-0">Styled Checkboxes</h5>
							</div>
							<div class="card-body">
								<form action=";" class="cozy">
									<fieldset>
										<legend class="bold small text-uppercase">Default style</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="checkbox">
													<input type="checkbox" id="exampleCheckStyled1" />
													<label for="exampleCheckStyled1">Check me out</label>
												</div>
												<div class="checkbox">
													<input type="checkbox" id="exampleCheckStyled2" />
													<label for="exampleCheckStyled2">Check me out</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Inline</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="checkbox form-check-inline checkbox-inline">
													<input type="checkbox" id="exampleCheckInlineStyled1" />
													<label for="exampleCheckInlineStyled1">1</label>
												</div>
												<div class="checkbox form-check-inline checkbox-inline">
													<input type="checkbox" id="exampleCheckInlineStyled2" />
													<label for="exampleCheckInlineStyled2">2</label>
												</div>
												<div class="checkbox form-check-inline checkbox-inline">
													<input type="checkbox" id="exampleCheckInlineStyled3" disabled="disabled" />
													<label for="exampleCheckInlineStyled3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Checked color</legend>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="checkbox checkbox-2">
															<input type="checkbox" id="exampleCheckColorStyled2" />
															<label for="exampleCheckColorStyled2">Style 2</label>
														</div>
														<div class="checkbox checkbox-3">
															<input type="checkbox" id="exampleCheckColorStyled3" />
															<label for="exampleCheckColorStyled3">Style 3</label>
														</div>
														<div class="checkbox checkbox-4">
															<input type="checkbox" id="exampleCheckColorStyled4" />
															<label for="exampleCheckColorStyled4">Style 4</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="checkbox checkbox-success">
															<input type="checkbox" id="exampleCheckColorStyledSuccess" />
															<label for="exampleCheckColorStyledSuccess">Style Success</label>
														</div>
														<div class="checkbox checkbox-warning">
															<input type="checkbox" id="exampleCheckColorStyledWarning" />
															<label for="exampleCheckColorStyledWarning">Style Warning</label>
														</div>
														<div class="checkbox checkbox-danger">
															<input type="checkbox" id="exampleCheckColorStyledDanger" />
															<label for="exampleCheckColorStyledDanger">Style Danger</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Outlined Style</legend>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="checkbox checkbox-2 checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlined2" />
															<label for="exampleCheckColorStyledOutlined2">Style 2</label>
														</div>
														<div class="checkbox checkbox-3 checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlined3" />
															<label for="exampleCheckColorStyledOutlined3">Style 3</label>
														</div>
														<div class="checkbox checkbox-4 checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlined4" />
															<label for="exampleCheckColorStyledOutlined4">Style 4</label>
														</div>
														<hr />
														<div class="checkbox checkbox-3 checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedBw3" />
															<label for="exampleCheckColorStyledOutlinedBw3">Border 2x</label>
														</div>
														<div class="checkbox checkbox-4 checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedBw4" />
															<label for="exampleCheckColorStyledOutlinedBw4">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="checkbox checkbox-success checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedSuccess" />
															<label for="exampleCheckColorStyledOutlinedSuccess">Style Success</label>
														</div>
														<div class="checkbox checkbox-warning checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedWarning" />
															<label for="exampleCheckColorStyledOutlinedWarning">Style Warning</label>
														</div>
														<div class="checkbox checkbox-danger checkbox-outlined">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedDanger" />
															<label for="exampleCheckColorStyledOutlinedDanger">Style Danger</label>
														</div>
														<hr />
														<div class="checkbox checkbox-warning checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedWarningBw" />
															<label for="exampleCheckColorStyledOutlinedWarningBw">Border 2x</label>
														</div>
														<div class="checkbox checkbox-danger checkbox-outlined bw-2">
															<input type="checkbox" id="exampleCheckColorStyledOutlinedDangerBw" />
															<label for="exampleCheckColorStyledOutlinedDangerBw">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Solid Style</legend>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="checkbox checkbox-2 checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolid2" />
															<label for="exampleCheckColorStyledSolid2">Style 2</label>
														</div>
														<div class="checkbox checkbox-3 checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolid3" />
															<label for="exampleCheckColorStyledSolid3">Style 3</label>
														</div>
														<div class="checkbox checkbox-4 checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolid4" />
															<label for="exampleCheckColorStyledSolid4">Style 4</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="checkbox checkbox-success checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolidSuccess" />
															<label for="exampleCheckColorStyledSolidSuccess">Style Success</label>
														</div>
														<div class="checkbox checkbox-warning checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolidWarning" />
															<label for="exampleCheckColorStyledSolidWarning">Style Warning</label>
														</div>
														<div class="checkbox checkbox-danger checkbox-solid">
															<input type="checkbox" id="exampleCheckColorStyledSolidDanger" />
															<label for="exampleCheckColorStyledSolidDanger">Style Danger</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
								<div class="bg-light b rounded p-4 form-group">
									<p class="mt-0 small">Checkboxes are set to a solid background by default when checked, you can change that behavior by adding <code>.inverted</code> css class to the main <code>.checkbox</code> element, that way the checkbox will remain outlined keeping the color of your preference.</p>
									<p>Make sure you have some elements checked and give it a try</p>
									<button class="btn btn-accent btn-toggle-checkbox-inverted" data-toggle="button">Toggle inverted</button>
								</div>
							</div>
						</div>
						<div class="card border-0 shadow-box">
							<div class="card-header bg-1">
								<h5 class="mb-0">Radios</h5>
							</div>
							<div class="card-body">
								<form action=";" class="cozy">
									<fieldset>
										<legend class="small bold-text uppercase">Default unstyle</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="checked" />
													<label class="form-check-label" for="exampleRadios1">Default radio</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
													<label class="form-check-label" for="exampleRadios2">Second default radio</label>
												</div>
												<div class="form-check">
													<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled="disabled" />
													<label class="form-check-label" for="exampleRadios3">Disabled radio</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="small bold text-uppercase">Inline</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
													<label class="form-check-label" for="inlineRadio1">1</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
													<label class="form-check-label" for="inlineRadio2">2</label>
												</div>
												<div class="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled="disabled" />
													<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Bootstrap custom</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="form-check custom-control custom-radio">
													<input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
													<label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
												</div>
												<div class="form-check custom-control custom-radio">
													<input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
													<label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
												</div>
												<div class="form-check custom-control custom-radio">
													<input type="radio" id="customRadioDisabled" name="customRadio" class="custom-control-input" disabled="disabled" />
													<label class="custom-control-label" for="customRadioDisabled">Toggle this (disabled) radio</label>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div class="card border-0 shadow-box">
							<div class="card-header bg-1">
								<h5 class="mb-0">Styled Radios</h5>
							</div>
							<div class="card-body">
								<form action=";" class="cozy">
									<fieldset>
										<legend class="bold small text-uppercase">Default style</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="radio">
													<input type="radio" id="exampleRadioStyled1" name="defaultStyleRadio" />
													<label for="exampleRadioStyled1">Check me out</label>
												</div>
												<div class="radio">
													<input type="radio" id="exampleRadioStyled2" name="defaultStyleRadio" />
													<label for="exampleRadioStyled2">Check me out</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Inline</legend>
										<div class="form-group">
											<div class="form-check-list">
												<div class="radio form-check-inline radio-inline">
													<input type="radio" id="exampleRadioInlineStyled1" name="inlineStyleRadio" />
													<label for="exampleRadioInlineStyled1">1</label>
												</div>
												<div class="radio form-check-inline radio-inline">
													<input type="radio" id="exampleRadioInlineStyled2" name="inlineStyleRadio" />
													<label for="exampleRadioInlineStyled2">2</label>
												</div>
												<div class="radio form-check-inline radio-inline">
													<input type="radio" id="exampleRadioInlineStyled3" name="inlineStyleRadio" disabled="disabled" />
													<label for="exampleRadioInlineStyled3">3 (disabled)</label>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Checked color</legend>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="radio radio-2">
															<input type="radio" id="exampleRadioColorStyled2" name="colorCheckStyleRadio" />
															<label for="exampleRadioColorStyled2">Style 2</label>
														</div>
														<div class="radio radio-3">
															<input type="radio" id="exampleRadioColorStyled3" name="colorCheckStyleRadio" />
															<label for="exampleRadioColorStyled3">Style 3</label>
														</div>
														<div class="radio radio-4">
															<input type="radio" id="exampleRadioColorStyled4" name="colorCheckStyleRadio" />
															<label for="exampleRadioColorStyled4">Style 4</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="radio radio-success">
															<input type="radio" id="exampleRadioColorStyledSuccess" name="colorCheckStyleRadio2" />
															<label for="exampleRadioColorStyledSuccess">Style Success</label>
														</div>
														<div class="radio radio-warning">
															<input type="radio" id="exampleRadioColorStyledWarning" name="colorCheckStyleRadio2" />
															<label for="exampleRadioColorStyledWarning">Style Warning</label>
														</div>
														<div class="radio radio-danger">
															<input type="radio" id="exampleRadioColorStyledDanger" name="colorCheckStyleRadio2" />
															<label for="exampleRadioColorStyledDanger">Style Danger</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<legend class="bold small text-uppercase">Outlined Style</legend>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="radio radio-2 radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlined2" name="colorOutlineStyleRadio" />
															<label for="exampleRadioColorStyledOutlined2">Style 2</label>
														</div>
														<div class="radio radio-3 radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlined3" name="colorOutlineStyleRadio" />
															<label for="exampleRadioColorStyledOutlined3">Style 3</label>
														</div>
														<div class="radio radio-4 radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlined4" name="colorOutlineStyleRadio" />
															<label for="exampleRadioColorStyledOutlined4">Style 4</label>
														</div>
														<hr />
														<div class="radio radio-3 radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedBw3" name="colorOutlineStyleRadio" />
															<label for="exampleRadioColorStyledOutlinedBw3">Border 2x</label>
														</div>
														<div class="radio radio-4 radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedBw4" name="colorOutlineStyleRadio" />
															<label for="exampleRadioColorStyledOutlinedBw4">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<div class="form-check-list">
														<div class="radio radio-success radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlinedSuccess" name="colorOutlineStyleRadio2" />
															<label for="exampleRadioColorStyledOutlinedSuccess">Style Success</label>
														</div>
														<div class="radio radio-warning radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlinedWarning" name="colorOutlineStyleRadio2" />
															<label for="exampleRadioColorStyledOutlinedWarning">Style Warning</label>
														</div>
														<div class="radio radio-danger radio-outlined">
															<input type="radio" id="exampleRadioColorStyledOutlinedDanger" name="colorOutlineStyleRadio2" />
															<label for="exampleRadioColorStyledOutlinedDanger">Style Danger</label>
														</div>
														<hr />
														<div class="radio radio-warning radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedWarningBw" name="colorOutlineStyleRadio2" />
															<label for="exampleRadioColorStyledOutlinedWarningBw">Border 2x</label>
														</div>
														<div class="radio radio-danger radio-outlined bw-2">
															<input type="radio" id="exampleRadioColorStyledOutlinedDangerBw" name="colorOutlineStyleRadio2" />
															<label for="exampleRadioColorStyledOutlinedDangerBw">Border 2x</label>
														</div>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<div class="card border-0 shadow-box">
							<div class="card-header bg-1">
								<h5 class="mb-0">Switch toggle</h5>
							</div>
							<div class="card-body">
								<p>Default theme colors</p>
								<form action=";" class="cozy">
									<div class="row">
										<div class="col-md-5 mr-md-auto">
											<fieldset>
												<legend class="small bold text-uppercase">Light theme</legend>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-cs-1" type="checkbox" />
														<label class="tgl-btn tgl-btn-1" for="tgl-light-cs-1"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 1</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-cs-2" type="checkbox" />
														<label class="tgl-btn tgl-btn-2" for="tgl-light-cs-2"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 2</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-cs-3" type="checkbox" />
														<label class="tgl-btn tgl-btn-3" for="tgl-light-cs-3"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 3</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-cs-4" type="checkbox" />
														<label class="tgl-btn tgl-btn-4" for="tgl-light-cs-4"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 4</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-cs-5" type="checkbox" />
														<label class="tgl-btn tgl-btn-5" for="tgl-light-cs-5"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 5</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-cs-6" type="checkbox" />
														<label class="tgl-btn tgl-btn-6" for="tgl-light-cs-6"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 6</p>
													</div>
												</div>
											</fieldset>
										</div>
										<div class="col-md-5">
											<fieldset>
												<legend class="small bold text-uppercase">iOs theme</legend>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-cs-1" type="checkbox" />
														<label class="tgl-btn tgl-btn-1" for="tgl-ios-cs-1"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 1</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-cs-2" type="checkbox" />
														<label class="tgl-btn tgl-btn-2" for="tgl-ios-cs-2"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 2</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-cs-3" type="checkbox" />
														<label class="tgl-btn tgl-btn-3" for="tgl-ios-cs-3"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 3</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-cs-4" type="checkbox" />
														<label class="tgl-btn tgl-btn-4" for="tgl-ios-cs-4"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 4</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-cs-5" type="checkbox" />
														<label class="tgl-btn tgl-btn-5" for="tgl-ios-cs-5"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 5</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-cs-6" type="checkbox" />
														<label class="tgl-btn tgl-btn-6" for="tgl-ios-cs-6"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">Color 6</p>
													</div>
												</div>
											</fieldset>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="card border-0 shadow-box">
							<div class="card-header bg-1">
								<h5 class="mb-0">Switch toggle</h5>
							</div>
							<div class="card-body">
								<p>Default Bootstrap colors</p>
								<form action=";" class="cozy">
									<div class="row">
										<div class="col-md-5 mr-md-auto">
											<fieldset>
												<legend class="small bold text-uppercase">Light theme</legend>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-1" type="checkbox" />
														<label class="tgl-btn tgl-btn-primary" for="tgl-light-bs-1"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">primary</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-2" type="checkbox" />
														<label class="tgl-btn tgl-btn-secondary" for="tgl-light-bs-2"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">secondary</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-3" type="checkbox" />
														<label class="tgl-btn tgl-btn-success" for="tgl-light-bs-3"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">success</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-4" type="checkbox" />
														<label class="tgl-btn tgl-btn-info" for="tgl-light-bs-4"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">info</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-5" type="checkbox" />
														<label class="tgl-btn tgl-btn-warning" for="tgl-light-bs-5"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">warning</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-6" type="checkbox" />
														<label class="tgl-btn tgl-btn-danger" for="tgl-light-bs-6"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">danger</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-7" type="checkbox" />
														<label class="tgl-btn tgl-btn-light" for="tgl-light-bs-7"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">light</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-light" id="tgl-light-bs-8" type="checkbox" />
														<label class="tgl-btn tgl-btn-dark" for="tgl-light-bs-8"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">dark</p>
													</div>
												</div>
											</fieldset>
										</div>
										<div class="col-md-5">
											<fieldset>
												<legend class="small bold text-uppercase">iOs theme</legend>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-1" type="checkbox" />
														<label class="tgl-btn tgl-btn-primary" for="tgl-ios-bs-1"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">primary</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-2" type="checkbox" />
														<label class="tgl-btn tgl-btn-secondary" for="tgl-ios-bs-2"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">secondary</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-3" type="checkbox" />
														<label class="tgl-btn tgl-btn-success" for="tgl-ios-bs-3"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">success</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-4" type="checkbox" />
														<label class="tgl-btn tgl-btn-info" for="tgl-ios-bs-4"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">info</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-5" type="checkbox" />
														<label class="tgl-btn tgl-btn-warning" for="tgl-ios-bs-5"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">warning</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-6" type="checkbox" />
														<label class="tgl-btn tgl-btn-danger" for="tgl-ios-bs-6"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">danger</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-7" type="checkbox" />
														<label class="tgl-btn tgl-btn-light" for="tgl-ios-bs-7"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">light</p>
													</div>
												</div>
												<div class="mb-3 d-flex justify-content-between align-items-center">
													<div class="form-group mb-0">
														<input class="tgl tgl-ios" id="tgl-ios-bs-8" type="checkbox" />
														<label class="tgl-btn tgl-btn-dark" for="tgl-ios-bs-8"></label>
													</div>
													<div class="mr-3">
														<p class="regular mb-0 text-capitalize">dark</p>
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
