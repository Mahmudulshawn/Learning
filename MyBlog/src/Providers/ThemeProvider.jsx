import React from 'react'
import {useTheme} from '../Contexts/ThemeContext'

function ThemeProvider({children}) {
    const { theme } = useTheme()
  return (
    <div className={`min-h-screen bg-[var(--bg)] text-[var(--text)] ${theme}`}>
        {children}
    </div>
  )
}

export default ThemeProvider