import React, { useEffect, useState } from 'react';
import { Code, Award, Trophy, GraduationCap } from 'lucide-react';
import bgImage from '../assets/bg.png.png';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    title: 'LeetCode',
    description: 'Solved 400+ LeetCode problems, demonstrating strong problem-solving and algorithmic skills.',
    icon: <Code className="w-6 h-6" />,
    position: "left",
  },
  {
    id: 2,
    title: 'CodeChef',
    description: 'Achieved a 2-star rating on CodeChef, reflecting consistent performance in competitive programming.(Max Rating:1560)',
    icon: <Trophy className="w-6 h-6" />,
    position: "right",
  },
  {
    id: 3,
    title: 'CGPA',
    description: 'Maintained an exceptional 9.70 CGPA, showcasing dedication to academic excellence.',
    icon: <GraduationCap className="w-6 h-6" />,
    position: "left",
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Completed advanced data analytics certification with distinction, mastering statistical analysis and visualization techniques.',
    icon: <Award className="w-6 h-6" />,
    position: "right",
  }
];

const Achievements = () => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCardIndex((prev) => {
        if (prev < achievements.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#010532] relative overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[2000px] bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20 w-11/12">
        <div className="text-center mb-20">
          <h1 className="text-[40px] font-extrabold text-white mb-4 font-manrope mt-[120px] h-[40px]">
            Achievements.
          </h1>
          <p className="text-white font-mono">
            Development so far and seeking more increasing boundaries
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative z-10 max-w-full mx-auto px-4 space-y-20">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-white z-0 h-[1000px] " style={{ backgroundColor: 'white' }} />

          {/* Timeline Items */}
          {achievements.map((item, idx) => {
            const shouldShow = idx <= visibleCardIndex;
            return (
              <div
                key={item.id}
                className={`flex items-center justify-between w-full ${item.position === 'left' ? 'flex-row' : 'flex-row-reverse'
                  } ${shouldShow ? 'timeline-card' : 'invisible'}`}
              >
                {/* Card */}
                <div
                  className="w-[300px] h-[150px] rounded-[35px] overflow-hidden shadow-lg p-8 relative text-white font-manrope flex flex-col justify-between gap-[1px]"
                  style={{
                    background: `linear-gradient(to bottom right, #160B34, #3D11B2)`
                  }}
                >
                  <h2 className="font-semibold text-purple-300 px-[10px] justify-center h-[50px]" style={{ fontSize: '20px' }}>
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed w-11/12 px-[10px] mb-[30px] mx-[10px]" style={{ fontSize: '9px' }}>
                    {item.description}
                  </p>
                </div>

                {/* Line */}
                <div className={`w-[50px] h-[2px] bg-white rounded-full ${!shouldShow && 'invisible'}`} style={{ backgroundColor: 'white' }} />

                {/* Icon */}
                <div className="w-[100px] h-[50px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg flex text-white z-10 justify-center items-center" style={{ backgroundColor: 'black' }}>
                  <p className="justify-center absolute">{item.icon}</p>
                </div>

                {/* Empty space for spacing */}
                <div className="w-full md:w-5/12" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010532] to-transparent" />
    </div>
  );
};

export default Achievements;
