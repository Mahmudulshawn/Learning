import React from 'react'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'
function Footer() {
  return (
    <div className='px-8 shadow bg-transparent backdrop-blur-3xl border border-black/10'>
      <div className='flex justify-between items-center'>
        <div className='logo h-[5rem] w-[5rem] content-center '>
          <img
          src={logo}
          alt="logo"
          className='rounded-full'
          />
        </div>
      
        <div className='second '>
          <ul className='flex flex-col items-center justify-evenly gap-4 content-center '>
            <li className='hover:text-red-600 hover:scale-125 mt-4 '>
              <NavLink to="home">Home</NavLink>
            </li>
            <li className='hover:text-red-600 hover:scale-125 '>
              <NavLink to="posts">Posts</NavLink>
            </li>
            <li className='hover:text-red-600 hover:scale-125 '>
              <NavLink to="about">About</NavLink>
            </li>
            <li className='hover:text-red-600 hover:scale-125 mb-2 '>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className='socials flex gap-1'>
          <img 
          className=' h-[2rem] w-[2rem] '
          src={youtube} 
          alt="socials" />

          <img 
          className=' h-[2rem] w-[2rem] '
          src={instagram} 
          alt="socials" />

          <img 
          className=' h-[2rem] w-[2rem] '
          src={facebook} 
          alt="socials" />

          <img 
          className=' h-[2rem] w-[2rem] '
          src={tiktok} 
          alt="socials" />
        </div>
      </div>

      <div className='text-center py-2'>
        <p>�� 2023 My Website. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer