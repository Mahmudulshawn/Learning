import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeContextProvider} from "./Contexts/ThemeContext.jsx"
import ThemeProvider from "./Providers/ThemeProvider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
