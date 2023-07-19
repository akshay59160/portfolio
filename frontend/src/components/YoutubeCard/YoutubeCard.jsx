import React from 'react';
import "./YoutubeCard.css";
import { Button, Typography } from '@mui/material';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteYoutube, getUser } from '../../actions/user';

const YoutubeCard = ({url,title,img,isAdmin=false,id}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id)=>{
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
};
  return (
    <div className='youtubeCard'>
    <a href={url} target='blank'>
        <img src={img}alt="video"/>
        <Typography>{title}</Typography>
    </a>
    {
      isAdmin && (
        <Button onClick={()=>deleteHandler(id)} ><FaTrash/></Button>
      )
    }
      
    </div>
  ) 
}

export default YoutubeCard;
