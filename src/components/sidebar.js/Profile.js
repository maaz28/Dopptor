import React from 'react'
import design from '../../img/svg/design.svg';
import marketing from '../../img/svg/marketing.svg';
import mobile from '../../img/svg/mobile.svg';
import cloud from '../../img/svg/cloud.svg';

export default function Profile() {
  return (
    <>
      <ul className="list-unstyled d-flex justify-content-between text-left pt-3">
        <li>
          <p className="mb-0 small text-uppercase color-2">followers</p>
          <h4>2.7k</h4>
        </li>
        <li>
          <p className="mb-0 small text-uppercase color-2">friends</p>
          <h4>1.3k</h4>
        </li>
        <li>
          <p className="mb-0 small text-uppercase color-2">posts</p>
          <h4>451</h4>
        </li>
      </ul>
      <hr className="my-3" />
      <p className="regular text-uppercase">Favorite categories</p>
      <div className="row gap-y">
        <div className="col-6">
          <a className="btn btn-5 d-flex flex-column align-items-center py-4" href="">
            <i className="w-50">
              <img src={design} className="img-responsive" alt="" />
            </i>
            <p className="mb-0">Design</p>
          </a>
        </div>
        <div className="col-6">
          <a className="btn btn-4 d-flex flex-column align-items-center py-4" href="">
            <i className="w-50">
              <img src={marketing} className="img-responsive" alt="" />
            </i>
            <p className="mb-0">Marketing</p>
          </a>
        </div>
        <div className="col-6">
          <a className="btn btn-3 d-flex flex-column align-items-center py-4" href="">
            <i className="w-50">
              <img src={mobile} className="img-responsive" alt="" />
            </i>
            <p className="mb-0">Mobile</p>
          </a>
        </div>
        <div className="col-6">
          <a className="btn btn-danger d-flex flex-column align-items-center py-4" href="">
            <i className="w-50">
              <img src={cloud} className="img-responsive" alt="" />
            </i>
            <p className="mb-0">Cloud</p>
          </a>
        </div>
      </div>
      <hr className="my-3" />
      <p className="regular text-uppercase">Quick overview</p>
      <ul className="list-unstyled">
        <li className="stat">
          <p className="small d-flex justify-content-between mb-1">
            <span className="text-muted">Profile almost complete</span>
            <span className="bold text-success">75%</span>
          </p>
          <div className="progress progress-xs mb-4">
            <div className="progress-bar bg-success" style={{ width: "75%" }}></div>
          </div>
        </li>
        <li>
          <p className="small d-flex justify-content-between mb-1">
            <span className="text-muted">Tasks done</span>
            <span className="bold text-info">50%</span>
          </p>
          <div className="progress progress-xs mb-4">
            <div className="progress-bar bg-info" style={{ width: "50%" }}></div>
          </div>
        </li>
        <li>
          <p className="small d-flex justify-content-between mb-1">
            <span className="text-muted">You're running out of space</span>
            <span className="bold text-danger">94%</span>
          </p>
          <div className="progress progress-xs mb-4">
            <div className="progress-bar bg-danger" style={{ width: "94%" }}></div>
          </div>
        </li>
      </ul>
    </>
  )
}
