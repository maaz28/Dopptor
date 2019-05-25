import React from 'react'
import Messages from '../templates/Messages';
import MessageData from '../../data/messages.json'
export default function Users() {
  return (
    <>
      <form className="form">
        <div className="input-group clean-group mb-3">
          <input type="text" className="form-control" placeholder="Search user ..." name="q" />
          <div className="input-group-append">
            <button className="btn btn-1" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="list-group list-group-flush load-content aside--users-list">
        {MessageData.map((item, i) => (
          <Messages item={item} key = {i}/>
        ))}
      </div>
    </>
  )
}
