import { useState, useContext } from 'react'

import { ThemeContext } from './Contexts/Theme';

function App() {

  const {theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button className='bg-[var(--btn)] text-[var(--text)] rounded-md p-5 text-3xl ' onClick={toggleTheme}>
        {theme}
      </button>
    </>
  )
}

export default App
