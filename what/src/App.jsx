import { useContext, useEffect, useState } from 'react'
import { TodoContextProvider } from './Contexts/TodoContext';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import { ThemeContext } from './Contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'


function App() {

  const [todos, setTodos] = useState([]);
  const {theme, toggleTheme} = useContext(ThemeContext);

  const addTodo = (todo) => {
    setTodos((prev)=> [ {id:Date.now(), ...todo}, ...prev]);
  }

  const deleteTodo = (id) => {
    setTodos( (prev) => prev.filter( (prevTodo) => prevTodo.id !== id ) );
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo }}>
      <div className="bg-[var(--bg)] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-[var(--text)]">
              <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <button 
                onClick={toggleTheme} 
                className='text-2xl'
                ><FontAwesomeIcon icon={faCircleHalfStroke} /></button>
              </div>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {
                    Array.isArray(todos) && todos.map( (todo) => (
                      <div key={todo.id} className='w-full'>
                        <TodoItem todo={todo}/>
                      </div>
                     ) )
                  }
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
