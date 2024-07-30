import React from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { NavLink } from'react-router-dom'

function Signup() {
  return (
    <div className="container min-w-full min-h-screen flex justify-center items-center">
      <form className='bg-transparent backdrop-blur-3xl h-[30rem] w-[30rem] flex flex-col items-center justify-center border rounded-md shadow-lg' >
        <h1 className='text-3xl font-bold  '>Sign Up</h1>
        <Input type='email' placeholder='Enter your email...'/>
        <Input type='text' placeholder='Enter your name...'/>
        <Input type='password' placeholder='Enter your password...'/>
        <Button className='h-[3rem] w-[5rem] bg-indigo-600 rounded-lg text-white '>Sign Up</Button>
      </form>
    </div>
  )
}

export default Signup