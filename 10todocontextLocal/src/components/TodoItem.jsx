import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({todo}) {
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const [isEditable, setIsEditable] = useState(false)

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className={`${todo.completed ? "" : ""}`} >
      <input type="checkbox" className='curosor-pointer' checked={todo.completed} onChange={toggleCompleted} />
      <input type="text" className={`${isEditable ? "" : ""}`} value={todoMsg} readOnly={!isEditable} onChange={(e) => setTodoMsg(e.target.value)} />
      <button className='' onClick={() => {if(todo.completed) return
        if (isEditable) {
          editTodo()
        }else setIsEditable((prev) => !prev)
      }} disabled={todo.completed}>{isEditable ? "save" : "edit"}</button>
      <button className='' onClick={() => deleteTodo(todo.id)}>delete</button>
    </div>
  )
}

export default TodoItem