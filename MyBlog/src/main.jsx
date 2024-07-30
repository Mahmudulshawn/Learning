import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Posts from './Pages/Posts.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import { AuthContextProvider } from './utils/AuthContext.jsx'
import ThemeProvider from './Providers/ThemeProvider.jsx'
import { ThemeContextProvider } from './Contexts/ThemeContext.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children:
      [
        {
          path: '/home',
          element:(
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          )
        },
        {
          path: '/about',
          element:(
            <ProtectedRoute>
              <About/>
            </ProtectedRoute>
          )
        },
        {
          path: '/contact',
          element:(
            <ProtectedRoute>
              <Contact/>
            </ProtectedRoute>
          )
        },
        {
          path: '/posts',
          element:(
            <ProtectedRoute>
              <Posts/>
            </ProtectedRoute>
          )
        },
        {
          path:'/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '*',
          element: <p>Not Found!</p>,
        },
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <ThemeProvider>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
