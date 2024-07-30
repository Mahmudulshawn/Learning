import React from 'react'
import logo from '../assets/logo.jpg'
import Button from './Button'
import {Navigate, NavLink, useNavigate} from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { useTheme } from '../Contexts/ThemeContext'
function Header() {
  const {user} = useAuth()
  const {theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signup')
  }

  return (
    <nav className='bg-transparent backdrop:blur-lg shadow-lg flex justify-between items-center sticky top-0 py-2 px-8  '>
      <div className="logo h-[5rem] w-[5rem] object-cover overflow-hidden content-center hover:skew-y-3 ">
        <img src={logo} 
        className='rounded-full'
        />
      </div>
      <ul className='flex items-center justify-evenly gap-8 content-center text-[var(--text)] '>
        <li className='hover:text-red-600 hover:scale-125 '>
          <NavLink to="home">Home</NavLink>
        </li>
        <li className='hover:text-red-600 hover:scale-125 '>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li className='hover:text-red-600 hover:scale-125 '>
          <NavLink to="about">About</NavLink>
        </li>
        <li className='hover:text-red-600 hover:scale-125 '>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li onClick={toggleTheme}>{theme}</li>
      </ul>

      {user ? 
      (
      <Button children="Logout" className='bg-indigo-600 text-[var(--text)] shadow-lg shadow-indigo-600/50 rounded-lg p-2.5 hover:bg-indigo-500 '/>
      ):
      (
      <Button onClick={handleClick} children="Signup" className='bg-indigo-600 text-[var(--text)] shadow-lg shadow-indigo-600/50 rounded-lg p-2.5 hover:bg-indigo-500 '/>
      )}

      </nav>
  )
}

export default Header