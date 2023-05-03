import React from 'react'

function TodoItem({ id, todo, done, todos, setTodos }) {

  const handleDone = () => {
    const newTodos = todos.map((elem) => {
      if (elem.id === id) {
        elem.done = !elem.done
      }
      return elem;
    })
    console.log(newTodos)
    setTodos(newTodos)
  }
  return (
    <li>
      {todo}
      <input type="checkbox" checked={done} onChange={handleDone} />
    </li>
  )
}

export default TodoItem
