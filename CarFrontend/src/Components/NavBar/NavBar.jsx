import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav-ctn'>
      <div className='logo-ctn'>V CARS</div>
      <div className='list-ctn'>
        <button>Blog</button>
        <button>Offers</button>
        <button>Support</button>
        <button>About us</button>
      </div>
      <div className='login-ctn'><button className='login-btn'>Login/SignUp</button></div>
    </div>
  )
}

export default NavBar
