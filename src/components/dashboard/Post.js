import React from 'react'

export default function Post() {
  return (
    <div className="col-lg-4 d-flex">
      <div className="shadow-box overlay gradient gradient-34 alpha-8 image-background cover center-bottom" style={{ backgroundImage: "url(https://picsum.photos/600/300/?random&gravity=east)" }}>
        <div className="content">
          <div className="card-body">
            <h4 className="mb-5 color-1 light">Day most engaged post</h4>
            <img src="https://picsum.photos/600/300/?random&gravity=east" alt="" className="img-responsive rounded shadow" />
            <nav className="nav mb-5 mt-3">
              <a href="javascript:void(0)" className="color-1 nav-link pl-0">
                <i className="pe pe-7s-like font-md mr-2"></i>
                <span className="small bold">3,751</span>
              </a>
              <a href="javascript:void(0)" className="color-1 nav-link">
                <i className="pe pe-7s-comment font-md mr-2"></i>
                <span className="small bold">274</span>
              </a>
            </nav>
            <p className="color-1 alpha-5 small">
              <i className="mr-2 far fa-clock"></i> Jul 10, 2018 @ 03:54 pm</p>
            <p className="color-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci blanditiis consequatur cupiditate dolor, eius eos esse expedita harum, laudantium modi odit officia possimus quis reiciendis tempore voluptates! Aspernatur, maiores.</p>
            <nav className="d-flex flex-wrap flex-row align-items-center mt-5">
              <i
                className="fas fa-tag color-1 mr-4"></i>
              <a href="javascript:void(0)" className="small bold text-success mr-3">development</a>
              <a href="javascript:void(0)" className="small bold text-info mr-3">software</a>
              <a href="javascript:void(0)" className="small bold text-danger mr-3">startup</a>
              <a href="javascript:void(0)" className="small bold text-warning mr-3">dashboard</a>
              <a href="javascript:void(0)" className="small bold text-light mr-3">marketing</a>
              <a href="javascript:void(0)" className="small bold text-info mr-3">social</a>
              <a href="javascript:void(0)" className="small bold color-5 mr-3">app</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
