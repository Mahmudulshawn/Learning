import React, { useState, useEffect } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { useAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const navigate = useNavigate()
  const { user, registerUser } = useAuth()


  useEffect(() => {
    if (user) {
      navigate('/')
    }
  },[])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (password1 !== password2) {
      alert("Passwords do not match!")
      return
    }
    const userInfo = { name, email, password1, password2 }
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
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}}
        placeholder='Enter your email...'
        />

        <Input 
        type='text' 
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        placeholder='Enter your name...'
        />

        <Input 
        type='password' 
        value={password1}
        onChange={(e) => {setPassword1(e.target.value)}}
        placeholder='Enter your password...'
        />

        <Input 
        type='password' 
        value={password2}
        onChange={(e) => {setPassword2(e.target.value)}}
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