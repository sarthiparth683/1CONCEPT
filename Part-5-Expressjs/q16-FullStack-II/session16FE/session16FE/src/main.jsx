import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from "react-router-dom"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </createBrowserRouter>
)
