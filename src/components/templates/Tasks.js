import React from 'react'

export default function Tasks({ item }) {
  return (
    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
      <small className="task d-flex w-100 justify-content-between">
        {item.description}
        <span className={"bold text-" + item.status}>{item.percentage} %</span>
      </small>

      <div className="progress progress-xs">
        <div className={"progress-bar bg-" + item.status} style={{ width: item.percentage }}></div>
      </div>
    </a>
  )
}