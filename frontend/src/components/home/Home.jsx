import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from "three";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../Images/moon.png";
import venusImage from "../../Images/venus.png";
import bg from "../../Images/bg.png";
import {Typography} from "@mui/material"
import TimeLine from "../Timeline/TimeLine"
import html from "../../Images/html.png";
import c from "../../Images/c.png";
import dsa from "../../Images/dsa.png";
import js from "../../Images/js.png";
import mongodb from "../../Images/mongodb.png";
import react from "../../Images/react.png";
import { Link } from 'react-router-dom';
import{
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs
} from "react-icons/si"
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { MouseOutlined } from '@mui/icons-material';

const Home = () => {

  useEffect(()=>{

    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(bg);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas= document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({canvas});
   

    //color: 0xffffff
     const moonGeometry = new THREE.SphereGeometry(2,64,64);
     const moonMaterial = new THREE.MeshStandardMaterial( { map:moonTexture } );
     const moon = new THREE.Mesh( moonGeometry, moonMaterial );

     const venusGeometry = new THREE.SphereGeometry(3,64,64);
     const venusMaterial = new THREE.MeshBasicMaterial( { map:venusTexture } );
     const venus = new THREE.Mesh( venusGeometry, venusMaterial );
    

 const pointLight=new THREE.PointLight(0xffffff,1);
 const pointLight2=new THREE.PointLight(0xffffff,0.1);
    pointLight.position.set(8,5,5);
    pointLight2.position.set(-8,-5,-5);


    // const lightHelper= new THREE.PointLightHelper(pointLight);
    
   
    // const controls = new OrbitControls(camera , renderer.domElement);
    scene.add(moon); 
    scene.add(venus);
    // scene.add(lightHelper);
   scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    venus.position.set(8,5,5);
    camera.position.set(4,4,8);

    const constSpeed=0.01;
    window.addEventListener("mousemove",(e)=>{
      if(e.clientX <= window.innerWidth/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y +=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y +=constSpeed;
      }
      if(e.clientX > window.innerWidth/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y -=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y -=constSpeed;
      }
      if(e.clientY > window.innerHeight/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y +=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y +=constSpeed;
      }
      if(e.clientY <= window.innerHeight/2){
        moon.rotation.x -=constSpeed;
        moon.rotation.y -=constSpeed;
        venus.rotation.x -=constSpeed;
        venus.rotation.y -=constSpeed;
      }
    })

    
    const animate =()=>{
      requestAnimationFrame(animate);
      moon.rotation.y+=0.01;
      venus.rotation.y+=0.01;
      renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.render(scene,camera);
    }
    animate();
    
  return  window.addEventListener("scroll",()=>{
      camera.rotation.z=window.scrollY*0.001
      camera.rotation.y=window.scrollY*0.003

      // const skillsBox = document.getElementsByClassName("homeSkillsBox")
      // if(window.scrollY>1500){
      //   skillsBox.style.animation="homeSkillsBoxAnimationOn"
      // }

    })

  },[]);

  return (
    <div className="home">
    <canvas className='homeCanvas'></canvas>
    <div className='homeCanvasContainer'>
      <Typography variant='h1'>
        <p>A</p>
        <p>K</p>
        <p>S</p>
        <p>H</p>
        <p>A</p>
        <p>Y</p>
      </Typography>

      <div className='homeCanvaBox'>
      <Typography variant='h2'>WEB</Typography>
        <Typography variant='h2'>DEVELOPER</Typography>
        <Typography variant='h2'>STUDENT</Typography>
        <Typography variant='h2'>OF</Typography>
        <Typography variant='h2'>BIT SINDRI</Typography>
        
      </div>
      <Link to="/projects">VIEW  WORK</Link>
    </div>
    <div className='homeScrollBtn'>
      <MouseOutlined/>
    </div>

    <div className='homeContainer'>
    <Typography variant='h3'>TIMELINE</Typography>
    <TimeLine timelines={[1,2,3,4]} />
    </div>

    <div className='homeSkills'>
    <Typography variant='h3'>SKILLS</Typography>
      <div className='homeCubeSkills'>
      <div className='homeCubeSkillsFaces homeCubeSkillsFace1'>
        <img src={c}/>
      </div>

      <div className='homeCubeSkillsFaces homeCubeSkillsFace2'>
        <img src={dsa}/>
      </div>

      <div className='homeCubeSkillsFaces homeCubeSkillsFace3'>
        <img src={html}/>
      </div>

      <div className='homeCubeSkillsFaces homeCubeSkillsFace4'>
        <img src={react}/>
      </div>

      <div className='homeCubeSkillsFaces homeCubeSkillsFace5'>
        <img src={js}/>
      </div>

      <div className='homeCubeSkillsFaces homeCubeSkillsFace6'>
        <img src={mongodb}/>
      </div>

      </div>
      <div className='cubeShadow'></div>
      <div className='homeSkillsBox'>
  <SiCplusplus/>
   <SiReact/>
  <SiJavascript/>
  <SiMongodb/>
  <SiNodedotjs/>
  <SiExpress/>
  <SiCss3/>
  <SiHtml5/>
  <SiThreedotjs/>
      </div>
    </div>
    <div className='homeYoutube'>
      <Typography variant='h3'>FREE RESOURCES</Typography>
      <div className='homeYoutubeWrapper'>
        <YoutubeCard img={c} title="C++ STL" url="https://www.youtube.com/watch?v=WgMPrLX-zsA" />
        <YoutubeCard img={dsa} title="Full DSA " url="https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"/>
        <YoutubeCard img={react} title="REACT" url="https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ" />
        <YoutubeCard img={mongodb} title="Backend by thapa" url="https://www.youtube.com/watch?v=IIpiLZGTWuo&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"/>
      </div>
    </div>

   </div>
  );
};

export default Home
