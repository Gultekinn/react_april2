import React, { useState } from 'react';
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

function Todo() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ul>
        {
          todos.map((elem) => (
            <TodoItem key={elem.id} id={elem.id} todos={todos} setTodos={setTodos} todo={elem.todo} done={elem.done} />
          ))
        }
      </ul>
    </>
  )
}

export default Todo
