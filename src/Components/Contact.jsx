import React from 'react'
import bgImage from '../assets/bg.png.png';
import { FaSquareInstagram } from "react-icons/fa6";
import { Github, Instagram, Linkedin } from 'lucide-react';
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";



const Contact = () => {
  function instaHandler() {
    window.open('https://www.instagram.com/', '_blank');
  }

  function Githandler() {
    window.open('https://github.com/Prathamesh170305', '_blank');
  }

  function LinkedInHandler() {
    window.open('https://www.linkedin.com/in/prathamesh-wankhade/', '_blank');
  }

  function GmailHandler() {
    window.open('https://mail.google.com/', '_blank');
  }

  return (
    <div className="min-h-screen bg-[#010532] relative overflow-hidden pt-16 flex">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 w-11/12">
        <div className="bg-white bg-opacity-10 w-[750px] h-[700px] mt-[130px] mx-[40px] relative rounded-[50px] relative justify-center items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          {/* heading */}
          <div>
            <p className="absolute text-white text-[1.2rem]  font-mono mx-[70px] mt-[80px]">
              Get in Touch
            </p>
            <h1 className='text-white mx-[65px] text-[2.75rem] mt-[100px] absolute font-bold font-mono'>
              Contact.
            </h1>
          </div>
          <br />
          {/* Instagram */}
          <div className=' absolute mt-[170px] w-[700px] jsutify-center items-center mx-[70px]'>
            <h2 className='text-white'>Instagram Handle</h2>
            <div className='flex'>
              <Instagram className='text-white' onClick={instaHandler} />
              <p className='text-white mt-[0px] mx-[10px] text-[1.2rem]'>_aree_pratham_</p>
            </div>
          </div>
          {/* {Github} */}
          <div className=' absolute mt-[290px] w-[700px] jsutify-center items-center mx-[70px]'>
            <h2 className='text-white'>Github Account</h2>
            <div className='flex'>
              <Github className='text-white h-[30px] w-[30px]' onClick={Githandler} />
              <p className='text-white mt-[0px] mx-[10px] text-[1.2rem]'>Prathamesh170305</p>
            </div>
          </div>
          {/* linkedin */}
          <div className=' absolute mt-[420px] w-[700px] jsutify-center items-center mx-[70px]'>
            <h2 className='text-white'>LinkedIn Handle</h2>
            <div className='flex'>
              <Linkedin className='text-white h-[30px] w-[30px]' onClick={LinkedInHandler} />
              <p className='text-white mt-[5px] mx-[10px] text-[1.2rem]'>Prathamesh Wankhde</p>
            </div>
          </div>
          {/* Gmail */}
          <div className=' absolute mt-[550px] w-[700px] jsutify-center items-center mx-[70px]'>
            <h2 className='text-white'>Gmail Account</h2>
            <div className='flex'>
              <CgMail className='text-white h-[30px] w-[30px]' onClick={GmailHandler} />
              <p className='text-white mt-[5px] mx-[10px] text-[1.2rem]'>wankhadeprathamesh17@gmail.com</p>
            </div>
          </div>
          {/* Conatact Number */}
          <div className=' absolute mt-[170px] w-[700px] jsutify-center items-center mx-[400px]'>
            <h2 className='text-white'>Contact Number</h2>
            <div className='flex'>
              <FaPhone className='text-white h-[25px] w-[25px]' />
              <p className='text-white mt-[0px] mx-[10px] text-[1.2rem]'>7378356674</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[130px] mx-[50px]'>
        <img src="src\assets\Contact.png" alt="" />
      </div>
    </div>
  )
}

export default Contact