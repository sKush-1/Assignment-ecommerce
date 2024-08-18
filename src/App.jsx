import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Products from './pages/Products'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },

    {
      path: "/sign-up",
      element: <Register></Register>
    },

    {
      path: "/sign-in",
      element: <SignIn></SignIn>
    },

    {
      path: "/products",
      element: <Products></Products>
    }
  ])
  return (
    <>
    <div className="App">
      
     <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
