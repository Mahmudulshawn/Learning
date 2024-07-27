import React,{ useState } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet, useNavigate} from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      {/* <Outlet/> */}
      <Footer/>
    </>
  )
}

export default App
