import { useContext, createContext } from "react";


export const TodoContext = createContext(
    {
    todos:[
        {
            id:1,
            todo:'task1',
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    }
);

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

