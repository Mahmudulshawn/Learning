import React, { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function ThemeProvider({children}) {

    const {theme} = useContext(ThemeContext);

  return (
    <div className={`bg-[var(--bg)] text-[var(--text)] ${theme}`}>
        {children}
    </div>
  )
}
