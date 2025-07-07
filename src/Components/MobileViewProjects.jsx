import React from 'react';
import bgImage from '../assets/bg.png.png';
import { FaArrowsRotate } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import './Projects.css';


const Projects = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);


  // Array of projects data
  const projects = [
    {
      id: 1,
      title: "Air Booking System",
      description: "Developed a scalable microservice-based backend for an airline booking system, handling core functionalities like flight search, booking, and ticket management",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link: "https://github.com/Prathamesh170305/AirLineBookingSystem-FlightandSearch"
    },
    {
      id: 2,
      title: "Social Media App (Backend)",
      description: "Engineered the backend of a Twitter-like social media platform enabling seamless interaction, media sharing, and engagement features",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link: "https://github.com/Prathamesh170305/Twitter_application"
    },
    {
      id: 3,
      title: "Chat-Analyzer (ML)",
      description: "Developed an ML-powered Chat Analyzer that extracts insights from WhatsApp chats, providing sentiment analysis, message patterns, and user behavior trends",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link: "https://github.com/Prathamesh170305/Chat_Analyzer_App"
    },
    {
      id: 4,
      title: "E.L.S.A ( Emotional Support Chat-Bot) ",
      description: "Developed an AI-powered Emotion Support Chatbot that provides mental and emotional assistance by analyzing user input and offering personalized responses",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link: "https://github.com/Prathamesh170305/Mental_Health_Bot_PBL"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my work and skills, built with React and Tailwind CSS.",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link: "https://github.com/Prathamesh170305/PortFolio"
    },


  ];

  const clickHandler = (projectLink) => {
    window.open(`${projectLink}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#010532] relative overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 w-11/12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-[70px] font-extrabold text-white mb-6 font-manrope mt-[150px]">
            Projects.
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap gap-[10px] justify-items-center justify-center w-full">

          {projects.map((project) => (

            <div
              key={project.id}
              className={`w-full max-w-[500px] h-[350px] rounded-[60px] overflow-hidden shadow-lg p-8 relative z-20 text-white font-manrope flex flex-col justify-between project-card ${animate ? 'animate-in' : ''}`}
              style={{
                background: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientTo})`,
                transitionDelay: `${project.id * 100}ms`,
              }}
            >


              <div className="flex flex-col gap-6 relative">
                <h1
                  className="text-[36px] font-extrabold leading-tight mx-[40px] py-[20px] relative"
                  style={{ color: project.accentColor ,fontSize:'1.8rem', textAlign: 'center', lineHeight: '1.2' ,width: '60%',alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  {project.title}
                </h1>
                <br />
                <div className='absolute mt-[190px]'>
                  <p className="text-sm break-words text-blue-200 w-[400px] mx-[40px] mt-[1px] justify-center items-center relative" style={{ fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.2' ,alignContent:'center',alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' ,width:'80%',marginTop:'0px'}}>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-[10px]">
                <button
                  onClick={() => clickHandler(project.Link)}
                  className="px-5 py-2 bg-gradient-to-br from-[#3E12B9] to-[#4C6FFF] 
                                        rounded-[15px] border border-[#C0C0C0] 
                                        text-white text-[12px] font-semibold font-[Manrope] 
                                        shadow-[0_0_10px_rgba(192,192,192,0.5)] transition duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.7)] w-[104px] h-[30px] mb-[40px] mx-[40px]"
                >
                  GitHub Repo
                </button>
                {/* <FaArrowsRotate className="cursor-pointer mx-[40px]" size={20} /> */}
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;