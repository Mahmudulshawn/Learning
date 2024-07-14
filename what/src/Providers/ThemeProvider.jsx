import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

function ThemeProvider({children}) {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`bg-[var(--bg)] text-[var(--text)] ${theme}`}>
        {children}
    </div>
  )
}

export default ThemeProvider