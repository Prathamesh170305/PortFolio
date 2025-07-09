import React, { useEffect, useState } from 'react';
import { Database } from 'lucide-react';
import { IoLogoPython } from "react-icons/io5";
import { SiJavascript, SiMongodb, SiNextdotjs, SiReact } from 'react-icons/si';

// Importing images and background
import bgImage from '../assets/bg.png.png';
import dataStructureImg from '../assets/hierarchical.png';
import problemSolvingImg from '../assets/icons8-problem-solving-64.png';
import cLangImg from '../assets/icons8-c-programming-48.png';
import mlAlgoImg from '../assets/deep-learning.png';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Trigger after a short delay
  }, []);



  const skills = [
    {
      name: 'C++',
      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" style={{ height: 100, width: 100 }}>
        <path fill="#00549d" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#0086d4" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#0075c0" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M31 21H33V27H31zM38 21H40V27H38z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M29 23H35V25H29zM36 23H42V25H36z" clip-rule="evenodd"></path>
        </svg>,
    },
    {
      name: 'SQL',
      icon: <Database className="w-50 h-20" style={{ height: 100, width: 100 }} />,
    },
    {
      name: 'Python',
      icon: <IoLogoPython style={{ height: 100, width: 100 }} />,
    },
    {
      name: 'Data Structure',
      icon: <img src={dataStructureImg} alt="Data Structure" style={{ height: 100, width: 100 }} />,
    },
    {
      name: 'Problem Solving',
      icon: <img src={problemSolvingImg} alt="Problem Solving" style={{ height: 100, width: 100 }} />,
    },
    {
      name: 'C',
      icon: <img src={cLangImg} alt="C" style={{ height: 100, width: 100 }} />,
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript style={{ height: 100, width: 100, color: '#f7df1e' }} />,
    },
    {
      name: 'React.js',
      icon: <SiReact style={{ height: 100, width: 100, color: '#61dafb' }} />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs style={{ height: 100, width: 100 }} />,
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb style={{ height: 100, width: 100, color: '#4DB33D' }} />,
    },
    {
      name: 'ML Algorithms',
      icon: <img src={mlAlgoImg} alt="ML" style={{ height: 100, width: 100 }} />,
    },
  ];


  return (
    <div className="min-h-screen bg-[#010532] relative overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20 my-[250px] mt-[200px]">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-800 ease-out ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
          <h1 className={`text-6xl font-extrabold text-white mb-6 font-manrope ${animate ? 'animate-bounce-once' : ''
            }`}>
            Skills.
          </h1>

          <p className={`text-6xl font-extrabold text-white mb-6 font-manrope ${animate ? 'animate-bounce-once' : ''
            }`} style={{ font: 'bold', fontSize: 25 }}>
            "Continuously learning and adapting to new tech trends in web and AI development."
          </p>
          <br />
          <br />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-between gap-12 max-w-6xl mx-auto w-[1200px] gap-[40px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-10 group cursor-pointer transition-all duration-500 ease-out transform ${animate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon Container */}
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 text-white" style={{

              }}>
                {skill.icon}
              </div>


              {/* Skill Name Badge */}
              <div
                className="min-w-[120px] h-16 rounded-xl flex items-center justify-center px-4 transition-all duration-300 group-hover:shadow-lg my-[30px]"
                style={{
                  background: `linear-gradient(to bottom right, #160B34, #3D11B2)`,
                  boxShadow: '-5px -5px 15px rgba(255, 255, 255, 0.5)',
                  borderRadius: '10px',
                  borderColor: 'white'
                }}
              >
                <span className="text-white text-xl font-extrabold  text-center leading-6 h-[60px] w-[150px] flex" style={{ fontSize: 23, justifyContent: 'center', alignItems: 'center', fontFamily: "Manrope" }}>
                  <p className='items-center justify-center flex'>{skill.name}</p>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-50" />
      </div>
    </div >
  );
};

export default Skills;