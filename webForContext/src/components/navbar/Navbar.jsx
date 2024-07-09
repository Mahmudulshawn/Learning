import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/Theme';


function Navbar() {

  const {toggleTheme, theme} = useContext(ThemeContext);

  return (
    <nav>
        <ul className='text-2xl flex gap-5 bg-[var(--bg)] justify-center py-5 shadow-lg shadow-black'>
          <li>
            <NavLink 
            to="/" 
            className={({isActive})=>`${isActive? 'text-red-500': 'text-[var(--text)]'}`}
            >Home</NavLink>
          </li>

          <li>
            <NavLink 
            to="/About"
            className={({isActive})=>`${isActive? 'text-red-500': 'text-[var(--text)]'}`}
            >About</NavLink>
          </li>

          <li>
          <NavLink 
          to="/Contact"
          className={({isActive})=>`${isActive? 'text-red-500': 'text-[var(--text)]'}`}
          >Contact</NavLink>
          </li>

          <div className="toggle">
            <div className='h-5 w-5 mx-1 text-[var(--text)] ' onClick={toggleTheme}>{theme}</div>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar;