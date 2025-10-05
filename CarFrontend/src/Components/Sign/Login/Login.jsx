import React, { useContext } from 'react'
import './SignUp.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();

  const handleSubmit=()=>{

  }
  return (
    <div className='outer-ctn'>
        <div className='inner-ctn'>
           <h2>Login</h2>
            <form className='middle-ctn' onSubmit={handleSubmit}>
           <div className='input-ctn'>
            <label>User Name</label>
            <input type='text'
                placeholder='Enter the userName'
                required
            />
           </div>
           <div className='input-ctn'>
            <label>Password</label>
            <input type='password'
                placeholder='Enter the Password'
                required
            />
           </div>
           <button type='submit'>Login</button>
           </form>
           <div className='bottom-ctn'><h4>If you don't have account click the | <button onClick={()=>{navigate("/signup")}}>Sign Up</button></h4>
           </div>
        </div>
    </div>
  )
}

export default Login
