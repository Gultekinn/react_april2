import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddTodo({ setTodos, todos }) {
    const [todoToAdd, setTooToAdd] = useState("")
    const handleAdd = () => {
        const newTodo = {
            id: uuidv4(),
            todo: todoToAdd,
            done: false
        }
        setTodos([...todos, newTodo])
        setTooToAdd("")
    }
    return (
        <>
            <input type="text" placeholder="add todo" value={todoToAdd} onChange={(e) => setTooToAdd(e.target.value)} />
            <button onClick={handleAdd}>Save</button>

        </>
    )
}

export default AddTodo
