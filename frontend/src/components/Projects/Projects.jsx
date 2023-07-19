import React from 'react'
import "./Projects.css";
import {Button, Typography} from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from  "@mui/icons-material";

import esl from "../../Images/esl.png";
import redux from "../../Images/redux.png";
import { useDispatch } from 'react-redux';
import { deleteTimeline, getUser } from '../../actions/user';

export const ProjectCard=({
    url,
    projectimage,
    projectTitle,
    description,
    technologies,
    isAdmin=false,
    id
})=>{
    const dispatch = useDispatch()
    const deleteHandler =async (id)=>{
        await dispatch(deleteTimeline(id));
        dispatch(getUser());
    };
    return (
        <>
        <a href={url} className='projectCard'>
            <div>
                <img src={projectimage} alt='project'/>
                <Typography variant='h5'>{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant='h4'>About Project</Typography>
                <Typography>{description}</Typography>
                <Typography variant='h6'>Tech Stack:{technologies}</Typography>
            </div>
        </a>
        {isAdmin && (
          <Button onClick={()=>deleteHandler(id)}>
             <Delete/>
          </Button>
               
           
        )}

        </>
    )
}

const Projects = () => {
    const projects=[
        {
            url:"https://akshayprojectsample1.netlify.app",
            imgSrc:redux,
            title:"Demo Ecommerce",
            desc:"I made this project while learning redux",
            tech:"HTML,CSS,JAVASCRIPT,REACT,REDUX"
        },
        {
            url:"https://a4networkbsl.netlify.app/",
            imgSrc:esl,
            title:"Paticipation in Hackathon",
            desc:"This project based booking online seat for inside and outside of any big campus this project is made by our group",
            tech:"HTML,CSS,JAVASCRIPT,REACT,EXPRESS.JS,MONGODB"
        },

    ];
  return (
    <div className='projects'>
    <Typography variant="h3">
        Projects <AiOutlineProject/>
    </Typography>
    <div className='projectsWrapper'>
        {
            projects.map((i)=>(
             <ProjectCard
                   url={i.url}
                   projectimage={i.imgSrc}
                   projectTitle={i.title}
                   description={i.desc}
                   technologies={i.tech}
                />
            ))
        }
    </div>
      
    </div>
  )
}

export default Projects
