import React, { useContext, useState } from 'react'
import './SignUp.css'
import {useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  
  const handleSubmit=async(e)=>{
     e.preventDefault();
  if (!username.trim() || !password.trim()) {
    alert("Please enter both username and password.");
    return;
  }
   try{
       const res=await axios.post("http://localhost:8080/api/users/login",{
        username:username,
        password:password
       })
       if(res.data){
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Login successful!");
        navigate('/'); 
       }
   }catch(err){
     alert("Invalid username or password!");
     console.error("Error during login:", err);
     setPassword('');
     setUsername('');

   }
   
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
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
            />
           </div>
           <div className='input-ctn'>
            <label>Password</label>
            <input type='password'
                placeholder='Enter the Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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
