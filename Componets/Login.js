import React from 'react'
import chatapplogo from  "../images/chatapplogo.jpeg"
import "./mainstyle.css";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Login() {
  return (
    <div className='login-container'>
        <div className='image-container'>
        <img src={chatapplogo} alt="logo" className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p className='login-box-paragraph'>            
              Login into your account</p>
              <TextField id="standard-basic" 
              label="Enter the user name" 
              variant="outlined" />

              <TextField id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              />


              <Button variant="outlined">Login</Button>
        </div>
      
    </div>
  )
}
