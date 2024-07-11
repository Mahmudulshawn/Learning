import React from 'react'
import { ThemeContext } from '../Contexts/Theme';
import { useContext } from 'react';


function ThemeProvider({children}) {

    const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen flex justify-center items-center bg-[var(--bg)] text-[var(--text)] ${theme} `}>
        {children}
    </div>
  )
}

export default ThemeProvider