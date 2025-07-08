import React, { useState, useEffect } from 'react';
import { FaArrowsRotate } from "react-icons/fa6";
import './flip.css';

// ✅ Import all local images
import bgImage from '../assets/home_page_bg.png.png';
import profileImage from '../assets/Pratham 1.png';

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animateEntry, setAnimateEntry] = useState(false);

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setTimeout(() => setAnimateEntry(true), 100); // short delay for a smooth entrance
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-[#010532] overflow-hidden shadow-[0px_24px_54.9px_rgba(0,0,0,0.75)] bg-cover bg-no-repeat bg-center justify-between"
      style={{ backgroundImage: "url(https://placehold.co/1440x862)" }}
    >

      {/* ✅ Background image */}
      <img
        src={bgImage}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Top profile image */}
      <img
        src={profileImage}
        alt="profile"
        className={`absolute top-16 right-[5%] w-[636px] h-[665px] shadow-inner rounded-b-[318px] z-10 mx-[40px] mt-[60px] transition-all duration-1000 ease-out ${
          animateEntry ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      />

      {/* Flip Container */}
      <div
        className={`absolute top-[243px] left-[63px] w-[633px] h-[480px] perspective my-[-60px] mx-[80px] mt-[0px] z-20 transition-all duration-1000 ease-out ${
          animateEntry ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div
          className={`relative w-full h-full preserve-3d transition-transform-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT SIDE */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#160B34] to-[#3D11B2] rounded-[100px] overflow-hidden">
            <div className="absolute top-[83px] left-[86px] flex flex-col gap-[30px] w-[491px]">
              <div className="flex flex-col gap-8 my-[-30px]">
                <h1
                  className="text-[64px] font-extrabold font-Manrope leading-tight"
                  style={{
                    backgroundImage: 'linear-gradient(to bottom right, #933DFF, #09B4D5)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Prathmesh<br />Wankhade.
                </h1>
                <p className="text-white">
                  I'm a Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
                </p>
              </div>
            </div>

            <div className="absolute top-[400px] left-[86px]">
              <button
                onClick={flipHandler}
                className="px-5 py-2 bg-gradient-to-br from-[#3E12B9] to-[#4C6FFF] 
                  rounded-[15px] border border-[#C0C0C0] 
                  text-white text-[12px] font-semibold font-[Manrope] 
                  shadow-[0_0_10px_rgba(192,192,192,0.5)] transition duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.7)] w-[104px] h-[30px]"
              >
                Learn more
              </button>
            </div>

            <FaArrowsRotate
              alt="arrow"
              className="absolute top-[402px] left-[536px] cursor-pointer text-white w-[34px] h-[20px]"
              onClick={flipHandler}
            />
          </div>

          {/* BACK SIDE */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-[#160B34] to-[#3D11B2] rounded-[100px] flex justify-center items-center px-10">
            <div className="flex flex-col gap-8 w-[491px] mt-[-90px]">
              <h2
                className="text-[64px] font-extrabold font-Manrope leading-tight"
                style={{
                  backgroundImage: 'linear-gradient(to bottom right, #933DFF, #09B4D5)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Overview.
              </h2>
              <p className="text-white text-[16px] font-normal font-[Manrope] my-[-20px]">
                After entering university in the field of computer engineering, I developed an interest in programming. Strengthening algorithmic design in my mind, I began my journey with Android programming. Subsequently, I became interested in web and mobile development. With over 3 years of experience, I have collaborated with various companies on both full-time and project-based arrangements, successfully completing numerous projects. I am familiar with popular JavaScript frameworks and have a good command of React, React Native, and Next.js.
              </p>
            </div>

            <FaArrowsRotate
              alt="arrow"
              className="absolute top-[402px] left-[536px] cursor-pointer text-white w-[34px] h-[20px]"
              onClick={flipHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
