import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MobileViewNavbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/Skills' },
        { name: 'Projects', path: '/Projects' },
        { name: 'Achievements', path: '/Achievements' },
        { name: 'Contact', path: '/Contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Fixed Bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2e] opacity-70 h-[70px] flex flex-col justify-center items-center px-4 shadow-lg w-[100%]" style={{ backdropFilter: 'blur(10px)', fontFamily: 'Poppins, sans-serif' }}>
                <div className="text-white text-xl font-bold mb-2">Portfolio</div>
                <button
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ position: 'absolute', right: '20px', top: '20px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}
                >
                    {menuOpen ? <X
                        size={28}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // translucent bg
                            borderRadius: '12px',
                            padding: '6px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        className="hover:scale-110 hover:bg-white hover:text-black"
                    />
                        : <Menu size={24} />}
                </button>
            </div>

            {/* Fullscreen Overlay Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-[#1a1f2e] opacity-95 flex flex-col justify-center items-center transition-all duration-300 w-[100%] h-[30%] animate-slide-in " style={{ backdropFilter: 'blur(10px)', fontFamily: 'Poppins, sans-serif' }}>
                    {/* Close button in top right */}
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}

                        style={{ position: 'absolute', right: '20px', top: '20px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}
                    >
                        <X
                            size={28}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)', // subtle translucent bg
                                borderRadius: '9999px', // full-rounded (circle)
                                padding: '6px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                color: 'white',
                            }}
                            className="hover:scale-110 hover:bg-white hover:text-black"
                        />

                    </button>

                    {/* Navigation Items Container */}
                    <div className="bg-black rounded-3xl p-6 flex flex-col items-center gap-[10px] shadow-2xl animate-fade-in" style={{ width: '90%', maxWidth: '600px' }}>
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 no-underline shadow-md min-w-[200px] text-center ${isActive(item.path)
                                    ? 'bg-white text-gray-900 transform scale-105'
                                    : 'bg-[#2a3441] text-gray-300 hover:bg-[#3a4551] hover:text-white hover:transform hover:scale-105'
                                    }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-30"></div>
                    <div className="absolute top-32 right-12 w-1 h-1 bg-white rounded-full opacity-40"></div>
                    <div className="absolute bottom-24 left-8 w-3 h-3 bg-white rounded-full opacity-20"></div>
                    <div className="absolute bottom-40 right-16 w-1.5 h-1.5 bg-white rounded-full opacity-35"></div>
                </div>
            )}

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
        </>
    );
};

export default MobileViewNavbar;