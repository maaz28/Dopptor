import React from 'react'

export default function Notifications({item}) {
  return (
    <a href="#" className="list-group-item list-group-item-action d-flex align-items-center">
      <span className={"text-"+item.status}>
        <i className={"icon fas fa-"+item.icon}></i>
      </span>

      <p className="small bold mb-0 d-flex flex-column">
        <span>{ item.description }</span>
        <span className="text-muted small">{item.time }</span>
      </p>
    </a>
  )
}
