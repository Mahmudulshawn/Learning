import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext';

function TodoItem({todo}) {

    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { deleteTodo } = useTodo();

  return (
    <div className='flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-[var(--text)]'>
        <input
            type="text"
            className='outline-none w-full bg-transparent rounded-lg'
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly
        />
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm  justify-center items-center shrink-0 text-[var(--text)]"
            onClick={() => deleteTodo(todo.id)}
        >
            Delete
        </button>
    </div>
  )
}

export default TodoItem