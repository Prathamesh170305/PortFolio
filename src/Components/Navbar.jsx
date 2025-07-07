import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/Skills' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Achievements', path: '/Achievements' },
    { name: 'Contact', path: '/Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2e] shadow-lg w-100/100 h-[70px] justify-center items-center opacity-70">
      <div className="w-full h-16 flex items-center justify-between px-8 mt-[18px]">

        {/* Center Navigation Pills */}
        <div className="flex-1 flex justify-center gap-[40px]">
          <div className="bg-[black] rounded-full p-1 flex items-center gap-[70px] text-white h-[30px] w-[700px] justify-center h-[40px]">
            {navItems.map((item) => (

              <Link
                key={item.name}
                to={item.path}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-white opacity-70 no-underline ${isActive(item.path)
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-[#3a4551]'
                  }`}
              >
                {item.name}
              </Link>

            ))}
          </div>
        </div>

        {/* Social Icons
        <div className="flex items-center gap-[10px]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-[#2a3441] rounded-full"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-[#2a3441] rounded-full"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-[#2a3441] rounded-full"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;