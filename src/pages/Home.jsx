import React from 'react'
import Navbar from "../components/Navbar"
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const user = jwtDecode(localStorage.getItem('token'));

  return (
    <div>
      <Navbar></Navbar>
      <h1>Welcome {user?.sub}</h1>
    </div>
  )
}

export default Home
