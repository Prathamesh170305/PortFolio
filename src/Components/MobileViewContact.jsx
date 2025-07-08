import React from 'react'
import bgImage from '../assets/bg.png.png';
import { FaSquareInstagram } from "react-icons/fa6";
import { Github, Instagram, Linkedin } from 'lucide-react';
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import footerImage from '../assets/Contact.png';


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
    <div className="min-h-screen bg-[#010532] absolute overflow-hidden pt-16 flex flex-col w-full ">
      {/* Background Image */}
      <div
        className="relative inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 w-11/12 flex flex-col justify-center items-center">
        <div className="bg-white bg-opacity-10 w-[330px] h-[525px] mt-[130px] relative rounded-[20px] relative justify-center items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          {/* heading */}
          <div>
            <p className="absolute text-white mx-[24px] text-[0.8rem] font-mono mt-[40px]">
              Get in Touch
            </p>
            <h1 className='text-white mx-[22px] text-[1.75rem] mt-[50px] absolute font-bold font-mono'>
              Contact.
            </h1>
          </div>
          <br />
          {/* Instagram */}
          <div className=' absolute mt-[100px] w-[700px] jsutify-center items-center mx-[24px]'>
            <h2 className='text-white text-[1.2rem]'>Instagram Handle</h2>
            <div className='flex'>
              <Instagram className='text-white h-[20px] w-[20px] mt-[-12px]' onClick={instaHandler} />
              <p className='text-white mt-[-12px] mx-[10px] text-[1rem]'>@_aree_pratham_</p>
            </div>
          </div>
          {/* {Github} */}
          <div className=' absolute mt-[175px] w-[700px] jsutify-center items-center mx-[24px]'>
            <h2 className='text-white text-[1.2rem]'>Github Account</h2>
            <div className='flex'>
              <Github className='text-white h-[20px] w-[20px] mt-[-12px]' onClick={Githandler} />
              <p className='text-white mx-[10px] text-[1rem] mt-[-12px]'>Prathamesh170305</p>
            </div>
          </div>
          {/* linkedin */}
          <div className=' absolute mt-[250px] w-[700px] jsutify-center items-center mx-[24px]'>
            <h2 className='text-white text-[1.2rem]'>LinkedIn Handle</h2>
            <div className='flex'>
              <Linkedin className='text-white h-[20px] w-[20px] mt-[-12px]' onClick={LinkedInHandler} />
              <p className='text-white mt-[-11px] mx-[10px] text-[1rem]'>Prathamesh Wankhde</p>
            </div>
          </div>
          {/* Gmail */}
          <div className=' absolute mt-[325px] w-[700px] jsutify-center items-center mx-[24px]'>
            <h2 className='text-white text-[1.2rem]'>Gmail Account</h2>
            <div className='flex'>
              <CgMail className='text-white h-[20px] w-[20px] mt-[-12px]' onClick={GmailHandler} />
              <p className='text-white mt-[-11px] mx-[10px] text-[0.9rem]'>wankhadeprathamesh17@gmail.com</p>
            </div>
          </div>
          {/* Conatact Number */}
          <div className=' absolute mt-[400px] w-[700px] jsutify-center items-center mx-[24px]'>
            <h2 className='text-white text-[1.2rem]'>Contact Number</h2>
            <div className='flex'>
              <FaPhone className='text-white h-[13px] w-[13px] mt-[-10px] mx-[2px]' />
              <p className='text-white mt-[-12px] mx-[10px] text-[1rem]'>7378356674</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[40px] mb-[20px] mx-[24px] justify-center items-center'>
        <img className="h-[380px] w-[350px] justify-center items-center"src={footerImage} alt="" />
      </div>
    </div>
  )
}

export default Contact