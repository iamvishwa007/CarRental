import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { FaUserCircle } from 'react-icons/fa'

import {useNavigate} from "react-router-dom"



const NavBar = ({}) => 
  {
  const navigate=useNavigate();
  const[user,setUser]=useState(null);
 
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
  };


  return (
    <div className='nav-ctn'>
      <div className='logo-ctn'>V CARS</div>
      <div className='list-ctn'>
        <button>Blog</button>
        <button>Offers</button>
        <button>Support</button>
        <button>About us</button>
      </div>
      <div className='login-ctn'>
  {user ? (
    <div className='user-info'>
      <FaUserCircle className='user-icon' />
      <span className='username'>{user.username}</span>
      <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <button className='login-btn' onClick={() => {navigate("/Login")}}>
      Login / Sign Up
    </button>
  )}
</div>
    </div>
)
}
export default NavBar;
