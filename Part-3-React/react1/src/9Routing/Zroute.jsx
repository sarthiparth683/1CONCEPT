// import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import About from './About'
import User from './User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import styles from './style.module.css';

function Zroute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
  ])

  return (
    <>  
      <RouterProvider router={router} />
    </>
  )
}

export default Zroute