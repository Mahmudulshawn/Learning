import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
        id:1,
        todo: 'task',
        completed: false,
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.Provider;