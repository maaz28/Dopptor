import React from 'react'
import Todos from '../templates/Todos';
import TodoData from '../../data/todos.json';

export default function Todo() {
  return (
    <ul className="list-group list-group-flush load-content aside--todo-list">
      {TodoData.map((item, i) => (
        <Todos item={item} key={i} />
      ))} 
    </ul>
  )
}
