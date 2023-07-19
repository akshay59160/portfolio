import React from 'react'
import "./About.css";
import {Typography} from "@mui/material";
import akshay from "../../Images/akshay.png"

const About = () => {
  return <div className='about'>
  <div className='aboutContainer'>
    <Typography>The greatest error a programmer can make is to assume that the way they think is the way the 
    world works</Typography>
  </div>
  <div className='aboutContainer2'>
    <div>
      <img src={akshay} alt="aaa" className='aboutAvtar'/>
      <Typography variant='h4' 
      style={{margin:"1vmax 0", color:"black" }}
      >Akshay Raj</Typography>
      <Typography>Full Stack Devloper</Typography>
      {/* <Typography  style={{margin:"1vmax 0"}}>I am a Devloper</Typography> */}
    </div>
    <div><Typography
  style={{wordSpacing:"3px",
  lineHeight:"30px",
  letterSpacing:"2px",
  textAlign:"center",
  }}
  >Hello! My name is Akshay Raj, and I am a full-stack web developer specializing in React, MongoDB,
   and Express.js. With a passion for creating robust and dynamic web applications, 
   During my learning journey, I have completed several hands-on projects that showcase my ability to integrate the front-end (React) with the back-end
    (Express.js and MongoDB).</Typography>
  </div>
  </div>
  

  </div>
}

export default About
