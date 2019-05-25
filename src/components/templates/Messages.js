import React from 'react'

export default function Messages({ item }) {
  return (
    <a href="#" className="list-group-item list-group-item-action">
      <div className="media">
        <img src={item.from.picture} className="rounded-circle mr-3 shadow" alt="" />

        <div className="media-body small">
          <p className="mb-0 d-flex w-100 justify-content-between">
            <span className="bold mb-1 text-capitalize">{item.from.name}</span>
            <small className="color-3">{item.time}</small>
          </p>

          <p className="small color-2 alpha-5 mb-0">{item.message}</p>
        </div>
      </div>
    </a>
  )
}
