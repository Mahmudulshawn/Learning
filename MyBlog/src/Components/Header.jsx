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
        <li onClick={toggleTheme} className='text-xl'><FontAwesomeIcon icon={faCircleHalfStroke} /></li>
      </ul>

      {user ? 
      (
      <Button onClick={logoutClick} children="Logout" className='bg-indigo-600 text-[var(--text)] shadow-lg shadow-indigo-600/50 rounded-lg p-2.5 hover:bg-indigo-500 '/>
      ):
      (
      <Button onClick={signupClick} children="Signup" className='bg-indigo-600 text-[var(--text)] shadow-lg shadow-indigo-600/50 rounded-lg p-2.5 hover:bg-indigo-500 '/>
      )}

      </nav>
  )
}

export default Header