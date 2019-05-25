import React from 'react'

export default function Settings() {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item px-0">
        <h4 className="small bold mb-4">Email settings</h4>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <div className="mr-3">
            <p className="regular mb-0 color-5">Automatic response</p>
            <p className="color-2 mb-0 small">(Experimental) Configure an automated response</p>
          </div>
          <div className="form-group mb-0">
            <input className="tgl tgl-light" id="tgl-1" type="checkbox" />
            <label className="tgl-btn tgl-btn-4" htmlFor="tgl-1"></label>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <div className="mr-3">
            <p className="regular mb-0 color-5">Daily summary emails</p>
            <p className="color-2 mb-0 small">Send me a daily summary of all my activity</p>
          </div>
          <div className="form-group mb-0">
            <input className="tgl tgl-light" id="tgl-2" type="checkbox" defaultChecked="checked" />
            <label className="tgl-btn tgl-btn-4" htmlFor="tgl-2"></label>
          </div>
        </div>
      </li>
      <li className="list-group-item px-0">
        <h4 className="small bold mb-4">Personal settings</h4>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <p className="regular mb-0 color-5 mr-3">Other can view my status</p>
          <div className="form-group mb-0">
            <input className="tgl tgl-light" id="tgl-3" type="checkbox" />
            <label className="tgl-btn tgl-btn-4" htmlFor="tgl-3"></label>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <p className="regular mb-0 color-5 mr-3">Allow remote access</p>
          <div className="form-group mb-0">
            <input className="tgl tgl-light" id="tgl-4" type="checkbox" defaultChecked="checked" />
            <label className="tgl-btn tgl-btn-4" htmlFor="tgl-4"></label>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <p className="regular mb-0 color-5 mr-3">Automatic signing</p>
          <div className="form-group mb-0">
            <input className="tgl tgl-light" id="tgl-5" type="checkbox" />
            <label className="tgl-btn tgl-btn-4" htmlFor="tgl-5"></label>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <p className="regular mb-0 color-5 mr-3">Clear cache on log off</p>
          <div className="form-group mb-0">
            <input className="tgl tgl-light" id="tgl-6" type="checkbox" defaultChecked="checked" />
            <label className="tgl-btn tgl-btn-4" htmlFor="tgl-6"></label>
          </div>
        </div>
      </li>
    </ul>
  )
}
