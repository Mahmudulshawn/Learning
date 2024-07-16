import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/todoSlice';


function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <> 
        <h2>Todos</h2>
        <ul className='list-none'>
            {Array.isArray(todos) && todos.map((todo) => (
                <li key={todo.id} className='flex gap-3'>
                    <div className='bg-teal-300'>{todo.text}</div>
                    <button onClick={() => dispatch(removeTodo(todo.id))} className='bg-red-500 p-2 rounded-md shrink-0'>X</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Todos