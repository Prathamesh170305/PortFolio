import React from 'react';
import { Code, Award, Trophy, Star, GraduationCap, Target } from 'lucide-react';
import bgImage from '../assets/bg.png.png';

const achievements = [
  {
    id: 1,
    title: 'LeetCode',
    description: 'Solved 300+ LeetCode problems, demonstrating strong problem-solving and algorithmic skills.',
    icon: <Code className="w-6 h-6" />,
    position: "left",
  },
  {
    id: 2,
    title: 'CodeChef',
    description: 'Achieved a 2-star rating on CodeChef, reflecting consistent performance in competitive programming.',
    icon: <Trophy className="w-6 h-6" />,
    position: "right",
  },
  {
    id: 3,
    title: 'CGPA',
    description: 'Maintained an exceptional 9.80 CGPA, showcasing dedication to academic excellence.',
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
  return (
    <div className="min-h-screen bg-[#010532] relative overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[2000px] bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Star className="w-1 h-1 text-white opacity-60 fill-current" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 w-11/12">
        <div className="text-center mb-20">
          <h1 className="text-[70px] font-extrabold text-white mb-4 font-manrope mt-[120px] h-[40px]">
            Achievements.
          </h1>
          <p className="text-white font-mono">
            Development so far and seeking more increasing boundaries
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-20 w-[750px]">

          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-white z-0 h-[1000px] " style={{ backgroundColor: 'white' }} />

          {/* Timeline Items */}
          {achievements.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center justify-between w-full ${item.position === "left" ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Card */}
              <div className="w-[700px] h-[250px] rounded-[60px] overflow-hidden shadow-lg p-8 relative text-white font-manrope flex flex-col justify-between"
                style={{
                  background: `linear-gradient(to bottom right, #160B34, #3D11B2)`
                }}>
                <h3 className="text-3xl font-semibold text-purple-300 mb-2 px-[30px] mt-[50px]" style={{ fontSize: 'xx-large' }}>{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed w-11/12 px-[30px] mb-[50px]">{item.description}</p>
              </div>
              <div className='w-[50px] h-[2px] bg-white rounded-full ' style={{ backgroundColor: 'white' }}></div>
              {/* Icon in Center */}
              < div className="w-[100px] h-[50px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg flex text-white z-10 justify-center items-center" style={{backgroundColor:'black'}} >
                <p className='justify-center absolute'>{item.icon}</p>
              </div>

              {/* Empty space for spacing alignment */}
              <div className="w-full md:w-5/12" />
            </div>
          ))}
        </div>

      </div >
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010532] to-transparent"></div>
    </div >
  );
};

export default Achievements;
