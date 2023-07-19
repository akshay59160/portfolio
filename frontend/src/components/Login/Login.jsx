import React, { useState } from 'react'
import "./login.css";
import { Button, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { login } from '../../actions/user';

const Login = () => {
const [email,setEmail] = useState("");
const [password,setPassword]=useState("");

const dispatch = useDispatch();


    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(login(email,password));
    }
  return (
    <div className='login'>
    <div className='loginContainer'>
    <form className='loginForm' onSubmit={submitHandler}>
        <Typography variant='h4'>
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight:"1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
        </Typography>

        <div>
            <input
            type='email'
            required
            placeholder='@gmail.com'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
             <input
            type='password'
            placeholder='password'
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type='submit' variant='contained'>
                Login
            </Button>
        </div>
    </form>

    </div>
      
    </div>
  )
}

export default Login
