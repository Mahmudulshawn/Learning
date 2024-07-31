import React, { useEffect, useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {user, loginUser } = useAuth()

  const handleSubmit = (e) => {
    // TODO: Implement login logic
    e.preventDefault()
    const userInfo = {email, password}
    loginUser(userInfo)
    navigate('/')
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  },[])
  
  return (
    <div className="container min-w-full min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className='bg-transparent backdrop-blur-3xl h-[25rem] w-[30rem] flex flex-col items-center justify-center border rounded-md shadow-lg' >
        <h1 className='text-3xl font-bold  '>Log In</h1>
        <Input 
        type='text' 
        value={email} 
        placeholder='Enter your email...'
        onChange={(e) => {setEmail(e.target.value)}}
        />

        <Input 
        type='password' 
        value={password} 
        placeholder='Enter your password...'
        onChange={(e) => {setPassword(e.target.value)}}
        />
        <Button 
        type='submit'
        className='h-[3rem] w-[5rem] bg-indigo-600 rounded-lg text-white  '
        >
          Log In
        </Button>

        <p className='text-sm text-center mt-4'>Don't have an account? <span className='text-blue-600'><NavLink to='/signup'>Sign Up</NavLink></span></p>
      </form>
    </div>
  )
}

export default Login