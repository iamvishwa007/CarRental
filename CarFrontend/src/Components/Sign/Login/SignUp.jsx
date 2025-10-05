import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () =>{
  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[phone_number,setPhonenumber]=useState('');
  const[password,setPassword]=useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const[passerror,setPassError]=useState(false);
  const [passStrongError, setPassStrongError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const handleSubmit=(e)=>{
   e.preventDefault();
     if (!passerror && !passStrongError && !emailError && !phoneError) 
    {
      const userData = { name, username, email, phone_number, password };
      console.log('Form submitted:', userData);
      const savve=async () => {
        await axios.post("http://localhost:8080/api/users/add",userData)
        .then(()=>{
            alert("Sign Up Successful! Redirecting to Login...");
            setName('');
            setUsername('');
            setEmail('');
            setPhonenumber('');
            setPassword('');
            setConfirmPassword('');
            setPassError(false);
            setPassStrongError(false);
            setEmailError(false);
            setPhoneError(false);
            navigate('/Login')
        })
        .catch((e)=>{
            console.log("error in uploadting datas");
        })

      }
      savve();
    }
  }
  return (
    <div className='outer-ctn'>
        <div className='inner-ctn'>
           <h2>Sign Up</h2>
            <form className='middle-ctn' onSubmit={handleSubmit}>
            <div className='center-ctn'>
            <div>
            <div className='input-ctn'>
            <label>Name</label>
            <input type='text'
                placeholder='Enter the Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
            />
           </div>
           <div className='input-ctn'>
            <label>User Name</label>
            <input type='text'
                placeholder='Enter the userName'
                value={username}
                onChange={(e)=>{setUsername(e.target.value.trim())}}
                required
            />
           </div>
           <div className='input-ctn'>
            <label>Email</label>
            <input type='email'
                placeholder='Enter the Email'
                value={email}
                onChange={(e)=>{
                 const val = e.target.value;
                 setEmail(val);
                 setEmailError(!/^\S+@\S+\.\S+$/.test(val));    
                }}
                required
            />
            {emailError && <h5 style={{ color: 'red' }}>Invalid email format</h5>}
           </div>
           </div>
           <div>
           <div className='input-ctn'>
            <label>Phone Number</label>
            <input type='tel'
                placeholder='Enter the phonenumber'
                value={phone_number}
                onChange={(e)=>{
                     const val = e.target.value;
                     setPhonenumber(val);
                     setPhoneError(!/^[6-9]\d{9}$/.test(val));
                    }}
                required
            />
            {phoneError && <h5 style={{ color: 'red' }}>Invalid email phonenumber</h5>}
            </div>
           <div className='input-ctn'>
            <label>Create Password</label>
            <input type='password'
                placeholder='Enter the create Password'
                value={password}
                onChange={(e)=>{
                    const val=e.target.value;
                     setPassword(val);
                     setPassStrongError(!passwordRegex.test(val));
                     
                }}
                required
            />
            {passStrongError && (
                  <h5 style={{ color: 'red' }}>
                    Password must be at least 6 characters, contain an uppercase letter, a number, and a special character
                  </h5>
                )}
           </div>
           <div className='input-ctn'>
            <label>Confirm Password</label>
            <input type='password'
                placeholder='Enter the confirm Password'
                value={confirmPassword}
                onChange={(e)=>{
                    const val=e.target.value
                    setConfirmPassword(val)
                    setPassError(val!==password)
                }}
                required
            />
           {!passerror && confirmPassword && <h5 style={{color: 'green'}}>Passwords match!</h5>}
           {passerror && <h5 style={{color: 'red'}}>Passwords do not match</h5>}
           </div>
           </div>
           </div>
           <button type='submit' disabled={passerror || emailError || phoneError}>Sign Up</button>
           </form>
           <div className='bottom-ctn'><h4>If you already have an account click the | <button onClick={()=>{navigate("/login")}}>Login</button></h4>
           </div>
        </div>
    </div>
  )
}
export default SignUp
