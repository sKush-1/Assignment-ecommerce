import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import { jwtDecode } from 'jwt-decode';

const Home = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const storedData = jwtDecode(token);
          setUser(storedData);
        } catch (error) {
          console.error('Invalid token', error);
          localStorage.removeItem('token');
        }
      }
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1>Welcome {user?.sub}</h1>
    </div>
  )
}

export default Home
