import React from 'react'
import Navbar from './../components/navbar'
import { FaLinkedin, FaGithub } from "react-icons/fa";

import css from './../assets/css.png'
import figma from './../assets/figma.png'
import firebase from './../assets/Firebase.png'
import html from './../assets/html.png'
import node from './../assets/node.png'
import jave from './../assets/java.png'
import react from './../assets/react.png'
import spring from './../assets/spring.png'


export default function Home() {
  return (
    <>
      <Navbar pname="home" colorLink="#1F271B" />

      <div className = "flex justify-between items-center pt-30 px-40">

        {/* left container */}
        <div className = "flex flex-col gap-3 pl-20">
          <span className = "text-white font-bold text-5xl">Full Stack Developer !</span>
          <span className = "text-white font-bold text-3xl">Phanuwat Torsrisakul</span>
          <span className = "text-white">I am a full stack developer with a passion for creating </span>
          <span className = "text-white">based in Thailand</span>
          <div className = "flex gap-5 pt-5">
            <FaLinkedin className = "text-white text-2xl" />
            <FaGithub className = "text-white text-2xl" />
          </div>
        </div>

        {/* right container */}
        <div>
          <img src = "https://i5.walmartimages.com/seo/New-Anime-GUGUGAGA-Penguin-Figure-Plush-Toys-Cute-Penguin-Costume-Girl_6b739ffb-3bdb-4586-a471-7ea53f1603f1.c79da4f4b29f682014a54eb025e4d27e.jpeg" alt="Profile Image" 

            className = "w-150 h-150 rounded-full object-cover"
          />
        </div>

        
      </div>

      {/* text */}

      <div className = "flex justify-center items-center pt-10">
        <span className = "text-white text-3xl font-bold pl-20 pt-10">My Tech Stack</span>
      </div>

        {/* image tech stack */}
        <div className = "flex gap-6 pt-10 pb-10 justify-center items-center">
          <img src = {html} alt="HTML" />
          <img src = {css} alt="CSS" />
          <img src = {node} alt="Node.js" />
          <img src = {react} alt="React" />
          <img src = {spring} alt="Spring" />
          <img src = {jave} alt="Java" />
          <img src = {figma} alt="Figma" />
          <img src = {firebase} alt="Firebase" />
        </div>
    </>
  )
}
