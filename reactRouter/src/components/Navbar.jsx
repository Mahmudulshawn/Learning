import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex gap-6 bg-teal-700 justify-center py-[1rem] text-2xl'>
          <li><NavLink 
          to="/"
          className={({isActive})=>
            `${isActive ? "text-red-600" : "text-white"}`
          }
          >Home</NavLink>
          </li>

          <li><NavLink to="/about" className={({isActive})=>
            `${isActive ? "text-red-600" : "text-white"}`
          }>About</NavLink></li>

          <li><NavLink to="/contact" className={({isActive})=>
            `${isActive ? "text-red-600" : "text-white"}`
          }>Contact</NavLink></li>
        </ul>
  
    </nav>

  )
}
