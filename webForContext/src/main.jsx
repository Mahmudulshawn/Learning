import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: "/About",
      element: <About/>,
    },
    {
      path: '/Contact',
      element: <Contact/>,
    },
    {
      path: '*',
      element: <h1>Page Not Found</h1>,
    },
  ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
