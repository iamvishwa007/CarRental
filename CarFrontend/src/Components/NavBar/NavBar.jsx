import React, { useContext, useState } from 'react'
import './NavBar.css'
import { FaUserCircle } from 'react-icons/fa'

import {useNavigate} from "react-router-dom"



const NavBar = ({}) => 
  {
  const navigate=useNavigate();
  const[user,setUser]=useState();
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
        {user?
        (    <div className='user-info'>
              <FaUserCircle className='user-icon' />
              <span>{user.username}</span>
            </div>)
        :(
           <button className='login-btn' onClick={()=>{navigate("/Login")}}>
              Login / SignUp
            </button>
        )}
        </div>
    </div>
)
}
export default NavBar;
