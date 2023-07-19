import React, { useState } from 'react';
import "./contact.css";
import { Button,Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { contactUs } from '../../actions/user';

const Contact = () => {
    const [name,setNmae]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const dispatch = useDispatch();

    const contactFormHandler = (e)=>{
        e.preventDefault();
        dispatch(contactUs(name,email,message))
        
    }
    const sendMessage=()=> {
      // Get the input element
      const input = document.getElementsByClassName('contactContainerForm');
    
      
    
      // Send the message (perform the necessary logic)
    
      // Clear the input field
      input.value = {};
    }
   
  return (
   
    <div className='contact'>
    <div className='contactRightBar'></div>
    <div className='contactContainer'>
        <form className='contactContainerForm' onSubmit={contactFormHandler}>
        <Typography variant='h4'>Contact Us</Typography>
            <input 
            type='text'
             placeholder='Name'
             required
             value={name} 
             onChange={(e)=>setNmae(e.target.value)}
             />
            <input
             type='email' 
             placeholder='@gmail.com'
             required
             value={email} 
             onChange={(e)=>setEmail(e.target.value)}
            />

            <textarea
             placeholder='message' 
             cols='30'
              rows='10'
              required
            value={message} 
             onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
            <Button variant="contained" type="submit" onclick={()=>sendMessage()}>Send</Button>
        </form>
    </div>
      
    </div>
  )
}

export default Contact
