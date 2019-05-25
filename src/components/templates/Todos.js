import React from 'react'

export default function Todos({ item }) {
  return (
    <div>
      <li className="list-group-item px-0">
        <div className="media">
          <div className="checkbox circle mt-2 mr-2">
            <input type="checkbox" id={"note-" + item.id} />
            <label htmlFor={"note-" + item.id}></label>
          </div>

          <div className="media-body">
            <a href="javascript:void(0)" className="regular mb-0 collapsed" data-toggle="collapse" data-target={"#note-content-" + item.id}>
              {item.title}
            </a>
            <p className="small text-muted task-description">{item.description}</p>

            <div id={"note-content-" + item.id} className="collapse">
              <nav className="nav justify-content-start">
                <a href="javascript:void(0)" className="nav-link pl-0">
                  <i className="fas fa-pencil-alt"></i>
                </a>
                <a href="javascript:void(0)" className="nav-link">
                  <i className="fas fa-star"></i>
                </a>
                <a href="javascript:void(0)" className="nav-link">
                  <i className="fas text-danger fa-trash"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}
