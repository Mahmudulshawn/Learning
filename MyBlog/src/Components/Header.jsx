import React from 'react'
import logo from '../assets/logo.jpg'
import Button from './Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { useTheme } from '../Contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
function Header() {
  const { user, logoutUser } = useAuth()
  const { toggleTheme } = useTheme()
  const navigate = useNavigate()

  const logoutClick = () => {
    logoutUser()
    navigate('/login')
  }

  const signupClick = () => {
    navigate('/signup')
  }

  return (
    <nav className='bg-transparent backdrop-blur-3xl shadow-lg flex justify-between items-center sticky top-0 py-2 px-8  '>
      <div className="logo h-[5rem] w-[5rem] object-cover overflow-hidden content-center ">
        <img src={logo} 
        alt='logo'
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
        <li onClick={toggleTheme} className='text-xl cursor-pointer'><FontAwesomeIcon icon={faCircleHalfStroke} /></li>
      </ul>

      {user ? 
      (
      <Button onClick={logoutClick} children="Logout"/>
      ):
      (
      <Button onClick={signupClick} children="Signup" />
      )}

      </nav>
  )
}

export default Header