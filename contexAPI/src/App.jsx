import { useState } from 'react'
import './App.css'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Profile />
    </>
  )
}

export default App
