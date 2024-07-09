import { createContext, useState, useEffect } from "react";



export const ThemeContext = createContext();


const getTheme = () => {
    const themeValue = localStorage.getItem('theme');
    return themeValue || 'light';
}

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(()=> getTheme());


    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light' );
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])


    return (<ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>);
}