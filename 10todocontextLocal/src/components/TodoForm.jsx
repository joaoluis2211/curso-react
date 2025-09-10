import React, { useState } from 'react'
import {useTodo} from '../contexts/index'
function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({todo, completed: false})
    setTodo("")
}
  return (
    <form onSubmit={add} className=''>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className='' placeholder='Write Todo...'/>
        <button type='submit' className=''>Add</button>
    </form>
  )
}

export default TodoForm