import React from 'react'
import '../style.css'
import { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
const handleSubmit = () => {
  // Update todos first
  setTodos((todos) => [
    ...todos,
    {
      text: input,
      id: Math.floor(Math.random() * 10)
    }
  ])
  // Then clear the input field
  setInput("")
}

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className='container'>
      <input type='text' placeholder='New Todo' value={input} onChange={e => setInput(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
      <ul className='todos-list'>
        {todos.map((t) => (
          <li className='todo' key={t.id}>
            <span>{t.text}</span>
            <button className='close' onClick={() => removeTodo(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
