import React, { useState, useEffect } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { user, registerUser } = useAuth()


  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  },[])


  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = {name, email, password}
    registerUser(userInfo)
  }


  return (
    <div className="container min-w-full min-h-screen flex justify-center items-center">
      <form 
      onSubmit={handleSubmit}
      className='bg-transparent backdrop-blur-3xl h-[30rem] w-[30rem] flex flex-col items-center justify-center border rounded-md shadow-lg' 
      >

        <h1 className='text-3xl font-bold  '>Sign Up</h1>

        <Input 
        type='text' 
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        placeholder='Enter your name...'
        />

        <Input 
        type='email' 
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}}
        placeholder='Enter your email...'
        />

        <Input 
        type='password' 
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        placeholder='Enter your password...'
        />

        <Button 
        type='submit'
        className='h-[3rem] w-[5rem] bg-indigo-600 rounded-lg text-white '
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default Signup