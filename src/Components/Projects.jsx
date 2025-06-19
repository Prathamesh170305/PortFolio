import React from 'react';
import bgImage from '../assets/bg.png.png';
import { FaArrowsRotate } from 'react-icons/fa6';

const Projects = () => {
  // Array of projects data
  const projects = [
    {
      id: 1,
      title: "Air Booking System(Backend)",
      description: "Developed a scalable microservice-based backend for an airline booking system, handling core functionalities like flight search, booking, and ticket management",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link:"https://github.com/Prathamesh170305/AirLineBookingSystem-FlightandSearch"
    },
    {
      id: 2,
      title: "Social Media App (Backend)",
      description: "Engineered the backend of a Twitter-like social media platform enabling seamless interaction, media sharing, and engagement features",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link:"https://github.com/Prathamesh170305/Twitter_application"
    },
    {
      id: 3,
      title: "Chat-Analyzer (Machine Learning)",
      description: "Developed an ML-powered Chat Analyzer that extracts insights from WhatsApp chats, providing sentiment analysis, message patterns, and user behavior trends",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link:"https://github.com/Prathamesh170305/Chat_Analyzer_App"
    },
    {
      id: 4,
      title: "E.L.S.A ( Emotional Support Chat-Bot) ( AI based)",
      description: "Developed an AI-powered Emotion Support Chatbot that provides mental and emotional assistance by analyzing user input and offering personalized responses",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link:"https://github.com/Prathamesh170305/Mental_Health_Bot_PBL"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my work and skills, built with React and Tailwind CSS.",
      accentColor: "#933DFF",
      gradientFrom: "#160B34",
      gradientTo: "#3D11B2",
      Link:""
    },


  ];

  const flipHandler = (projectId) => {
    console.log(`Learn more clicked for project ${projectId}!`);
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
              className="w-full max-w-[500px] h-[350px] rounded-[60px] overflow-hidden shadow-lg p-8 relative z-20 text-white font-manrope flex flex-col justify-between"
              style={{
                background: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientTo})`
              }}
            >
              <div className="flex flex-col gap-6 relative">
                <h1
                  className="text-[36px] font-extrabold leading-tight mx-[20px] py-[20px]"
                  style={{ color: project.accentColor }}
                >
                  {project.title}
                </h1>
                <div className='absolute mt-[190px]'>
                  <p className="text-sm break-words text-blue-200 w-11/12 mx-[20px] mt-[1px] justify-center items-center">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => flipHandler(project.id)}
                  className="px-4 py-2 rounded-lg border border-[#C0C0C0] text-white text-sm font-semibold shadow-md hover:shadow-lg transition mx-[20px] relative translate-y-[-50px]"
                  style={{
                    background: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientTo})`
                  }}
                >
                  Learn more
                </button>
                <FaArrowsRotate className="cursor-pointer" size={20} />
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;