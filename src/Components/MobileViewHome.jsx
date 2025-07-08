import React, { useState, useEffect } from 'react';
import { FaArrowsRotate } from "react-icons/fa6";
import './flip.css';

// ✅ Import local images properly
import bgImage from '../assets/home_page_bg.png.png';
import profileImage from '../assets/Pratham 1.png';

const MobileView = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [animateEntry, setAnimateEntry] = useState(false);

    const flipHandler = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {
        const timer = setTimeout(() => setAnimateEntry(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="block md:hidden relative w-full min-h-screen bg-[#010532] overflow-hidden">
            {/* Background image */}
            <img
                src={bgImage}
                alt="bg"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Profile image */}
            <div className={`relative z-10 flex justify-center pt-8 pb-6 mt-[180px] transition-all duration-1000 ${animateEntry ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                <img
                    src={profileImage}
                    alt="profile"
                    className="w-[230px] h-[250px] shadow-inner rounded-b-[125px]"
                />
            </div>

            {/* Flip Card Container */}
            <div className={`relative z-20 mb-8 px-[30px] transition-all duration-1000 ${animateEntry ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="mobile-flip-container w-full h-[370px]">
                    <div className={`mobile-flip-card ${isFlipped ? 'flipped' : ''}`}>
                        {/* Front Side */}
                        <div className="mobile-flip-front bg-gradient-to-br from-[#160B34] to-[#3D11B2] p-6 flex flex-col justify-between rounded-[40px] h-full">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-[40px] font-extrabold font-Manrope leading-tight text-center"
                                    style={{
                                        backgroundImage: 'linear-gradient(to bottom right, #933DFF, #09B4D5)',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                    }}>
                                    Prathmesh<br />Wankhade.
                                </h1>
                                <p className="text-white text-[14px] font-[Manrope] text-center leading-relaxed" style={{ fontSize: '0.9rem',maxWidth: '80%',alignContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                                    I'm a Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
                                </p>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={flipHandler}
                                    className="px-4 py-2 bg-gradient-to-br from-[#3E12B9] to-[#4C6FFF] rounded-[12px] border border-[#C0C0C0] text-white text-[11px] font-semibold font-[Manrope] shadow-[0_0_10px_rgba(192,192,192,0.5)] transition duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.7)]"
                                    style={{ width: '100px', height: '36px' ,marginBottom: '10px', marginRight: '10px' }}
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>

                        {/* Back Side */}
                        <div className="mobile-flip-back bg-gradient-to-br from-[#160B34] to-[#3D11B2] p-6 flex flex-col justify-between rounded-[40px] h-full">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-[#933DFF] text-[28px] font-extrabold font-[Manrope] text-center">Overview.</h2>
                                <p className="text-white text-[12px] font-[Manrope] leading-relaxed text-justify"
                                    style={{ fontSize: '0.8rem', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                                    After entering university in the field of computer engineering, I developed an interest in programming. Strengthening algorithmic design in my mind, I began my journey with Android programming. Subsequently, I became interested in web and mobile development. With over 3 years of experience, I have collaborated with various companies on both full-time and project-based arrangements, successfully completing numerous projects. I am familiar with popular JavaScript frameworks and have a good command of React, React Native, and Next.js.
                                </p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <FaArrowsRotate
                                    className="cursor-pointer text-white hover:text-[#933DFF] transition-colors duration-300 text-lg"
                                    style={{ marginRight: '10px', marginBottom: '10px' }}
                                    onClick={flipHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileView;
