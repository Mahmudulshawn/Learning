import { useState } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { ThemeContextProvider } from './context/Theme'
import ThemeProvider from './Providers/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <Navbar />
          <Outlet />
        </ThemeProvider>
      </ThemeContextProvider>
    </>
    
  )
}

export default App
