import React, { useState } from 'react';
import { FaArrowsRotate } from "react-icons/fa6";

const MobileView = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const flipHandler = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="block md:hidden relative w-full min-h-screen bg-[#010532] overflow-hidden justify-center items-center">
            {/* Mobile background image */}
            <img src="src\assets\home_page_bg.png.png" alt="bg" className="absolute top-0 left-0 w-full h-full object-cover z-0" />

            {/* Mobile profile image - at the top center */}
            <div className="relative z-10 flex justify-center pt-8 pb-6">
                <img
                    src="src\assets\Pratham 1.png"
                    alt="profile"
                    className="w-[250px] h-[270px] shadow-inner rounded-b-[125px]"
                />
            </div>

            {/* Mobile content box - below the profile image */}
            <div className="relative z-20 mb-8 w-10/12 px-[30px] justify-center items-center">
                {!isFlipped ? (
                    <div className="bg-gradient-to-br from-[#160B34] to-[#3D11B2] rounded-[40px] p-6 min-h-[350px] flex flex-col justify-between ">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-[#933DFF] text-[28px] font-extrabold font-[Manrope] leading-tight text-center">
                                Prathmesh<br />Wankhade.
                            </h1>
                            <p className="text-white text-[14px] font-normal font-[Manrope] text-center leading-relaxed">
                                I'm a Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
                            </p>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={flipHandler}
                                className="px-4 py-2 bg-gradient-to-br from-[#3E12B9] to-[#4C6FFF] 
                                            rounded-[12px] border border-[#C0C0C0] 
                                            text-white text-[11px] font-semibold font-[Manrope] 
                                            shadow-[0_0_10px_rgba(192,192,192,0.5)] transition duration-300 hover:shadow-[0_0_20px_rgba(192,192,192,0.7)] mb-[50px] my-[20px] mx-[20px]"
                            >
                                Learn more
                            </button>

                            
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-[#160B34] to-[#3D11B2] rounded-[40px] p-6 min-h-[350px] flex flex-col justify-between">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[#933DFF] text-[28px] font-extrabold font-[Manrope] leading-tight text-center">
                                Overview.
                            </h2>
                            <p className="text-white text-[12px] font-normal font-[Manrope] leading-relaxed text-justify w-11/12 mx-[10px]">
                                After entering university in the field of computer engineering, I developed an interest in programming. Strengthening algorithmic design in my mind, I began my journey with Android programming. Subsequently, I became interested in web and mobile development. With over 3 years of experience, I have collaborated with various companies on both full-time and project-based arrangements, successfully completing numerous projects. I am familiar with popular JavaScript frameworks and have a good command of React, React Native, and Next.js.
                            </p>
                        </div>

                        <div className="flex justify-end items-center mt-4">
                            <FaArrowsRotate 
                                className="cursor-pointer text-white hover:text-[#933DFF] transition-colors duration-300 text-lg absolute mb-[50px] mx-[20px]"
                                onClick={flipHandler} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileView;