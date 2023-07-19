import React from 'react';
import "./Footer.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsGithub,BsInstagram,BsLinkedin,BsYoutube } from "react-icons/bs"

const Footer = () => {
  return <div className='footer'>
  <div>
  <Typography variant='h5'>About Us</Typography>
    <Typography >
        Hey, my name is Akshay Raj.
        Iam a Full-Stack Devloper with React
    </Typography>
    <Link to="/contact" className='footerContactBtn'>
        <Typography>Contact Us</Typography>
    </Link>
  </div>
  <div>
    <Typography variant='h6'>Social Media</Typography>
      <a href='https://github.com/akshay59160' target='blank'>
        <BsGithub/>
      </a>
      <a href='https://www.youtube.com/@univquestknowledge8505' target='blank'>
        <BsYoutube/>
      </a>
      <a href='https://www.instagram.com/akshayraj9074/' target='blank'>
        <BsInstagram/>
      </a>
      <a href='https://www.linkedin.com/in/akshay-raj-45aa12283/' target='blank'>
        <BsLinkedin/>
      </a>
  </div>
  
  </div>
}

export default Footer
