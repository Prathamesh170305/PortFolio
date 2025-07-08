import React from 'react';
import bgImage from '../assets/bg.png.png';
import { FaSquareInstagram, FaPhone } from "react-icons/fa6";
import { Github, Instagram, Linkedin } from 'lucide-react';
import { CgMail } from "react-icons/cg";
import './Contact.css';
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
    <div className="min-h-screen bg-[#010532] relative overflow-hidden pt-16 flex">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 w-11/12">
        <div className="bg-white bg-opacity-10 w-[750px] h-[700px] mt-[120px] mx-[40px] rounded-[50px] justify-center items-center animate-fade-slide" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div>
            {/* Heading */}
            <p className="absolute text-white text-[1.2rem] font-mono mx-[70px] mt-[60px] animate-fade-slide" style={{ animationDelay: '0.1s' }}>
              Get in Touch
            </p>
            <h1 className="text-white mx-[65px] text-[2.75rem] mt-[80px] absolute font-bold font-mono animate-fade-slide" style={{ animationDelay: '0.2s' }}>
              Contact.
            </h1>

            {/* Instagram */}
            <div className='absolute mt-[150px] w-[700px] justify-center items-center mx-[70px] animate-fade-slide' style={{ animationDelay: '0.3s' }}>
              <h2 className='text-white'>Instagram Handle</h2>
              <div className='flex'>
                <Instagram className='text-white' onClick={instaHandler} />
                <p className='text-white mx-[10px] text-[1.2rem]'>_aree_pratham_</p>
              </div>
            </div>

            {/* GitHub */}
            <div className='absolute mt-[270px] w-[700px] justify-center items-center mx-[70px] animate-fade-slide' style={{ animationDelay: '0.4s' }}>
              <h2 className='text-white'>GitHub Account</h2>
              <div className='flex'>
                <Github className='text-white h-[30px] w-[30px]' onClick={Githandler} />
                <p className='text-white mx-[10px] text-[1.2rem]'>Prathamesh170305</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className='absolute mt-[400px] w-[700px] justify-center items-center mx-[70px] animate-fade-slide' style={{ animationDelay: '0.5s' }}>
              <h2 className='text-white'>LinkedIn Handle</h2>
              <div className='flex'>
                <Linkedin className='text-white h-[30px] w-[30px]' onClick={LinkedInHandler} />
                <p className='text-white mx-[10px] text-[1.2rem]'>Prathamesh Wankhde</p>
              </div>
            </div>

            {/* Gmail */}
            <div className='absolute mt-[530px] w-[700px] justify-center items-center mx-[70px] animate-fade-slide' style={{ animationDelay: '0.6s' }}>
              <h2 className='text-white'>Gmail Account</h2>
              <div className='flex'>
                <CgMail className='text-white h-[30px] w-[30px]' onClick={GmailHandler} />
                <p className='text-white mx-[10px] text-[1.2rem]'>wankhadeprathamesh17@gmail.com</p>
              </div>
            </div>

            {/* Contact Number */}
            <div className='absolute mt-[150px] w-[700px] justify-center items-center mx-[400px] animate-fade-slide' style={{ animationDelay: '0.7s' }}>
              <h2 className='text-white'>Contact Number</h2>
              <div className='flex'>
                <FaPhone className='text-white h-[25px] w-[25px]' />
                <p className='text-white mx-[10px] text-[1.2rem] mt-[0px]'>7378356674</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Image */}
      <div className='mt-[130px] mx-[50px] animate-fade-slide' style={{ animationDelay: '0.8s' }}>
        <img src={footerImage} alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
