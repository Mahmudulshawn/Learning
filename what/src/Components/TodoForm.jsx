import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        addTodo({todo});
        setTodo("");
    }

  return (
    <div>
        <form onSubmit={add} className='flex'>
            <input 
            type="text"
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
            placeholder='Write your Todo...'
            value={todo}
            onChange={ (e) => setTodo(e.target.value) }
            />
            <button type='submit' className='rounded-r-lg px-3 py-1 bg-[var(--button)] text-[var(--text)] shrink-0'> Add </button>
        </form>
    </div>
  )
}

export default TodoForm