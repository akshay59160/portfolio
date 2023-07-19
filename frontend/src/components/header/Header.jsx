import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return <ReactNavbar

        logo="https://www.lunapic.com/editor/premade/transparent.gif"
        // burgerColor="crimson"
        // navColor1="#fff5f5"
        // burgerColorHover="#900"
        // logoWidth="50%"
        // logoHoverColor="crimson"
        // link1Size="1.2rem"
        // link1Color="#121212"
        // link1Padding="1vmax"
        // link1ColorHover="crimson"
        // nav2justifyContent="flex-end"
        // link1Margin="1vmax"
        // link2Margin="0"
        // link3Margin="0"
        // link4Margin="1vmax"
        // nav3justifyContent="flex-start"
        // link1Text="Home"
        // link1Family="sans-serif"
        // link2Text="Products"
        // link3Text="About Us"
        // link4Text="Contact Us"
        // nav4justifyContent="flex-start"
        // searchIconMargin="0.5vmax"
        // cartIconMargin="1vmax"
        // profileIconMargin="0.5vmax"
        // searchIconColor="#121212"
        // cartIconColor="#121212"
        // profileIconColor="#121212"
        // searchIconColorHover="crimson"
        // cartIconColorHover="crimson"
        // profileIconColorHover="crimson"
        navColor1="white"
        navColor2="rgb(38,38,69)"
        burgerColor="crimson"
        // burgerColor="hs1(250,100%,75%)""hs1(219,48%,8%)""HSL(250,100%,75%)""hs1(250,100%,75%)"
        burgerColorHover="red"
        logoWidth="250px"
        logoHoverColor="hs1(250,100%,75%)"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        // nav4justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        // link5Text="Login"#224952
       
        link1Url="/"
        link2Url="/about"
        link3Url="/projects"
        link4Url="/contact"
        link5Url="/login"
        link1ColorHover="white"
        link1Color="blueviolet"
        link1Size="1.5rem"
        link1padding="3vmax"
       profileIcon={true}
       ProfileIconElement={FaUserAlt}
        profileIconColor="blueviolet"
        profileIconColorHover="white"




  />
}

export default Header
