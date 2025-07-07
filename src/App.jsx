import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MobileViewNavbar from './Components/MobileViewNavbar'; // ✅ Import mobile navbar

import Home from './Components/Home';
import Skills from './Components/Skills';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

import MobileViewHome from './Components/MobileViewHome';
import MobileViewSkills from './Components/MobileViewSkills';
import MobileViewAchievements from './Components/MobileViewAchievements';
import MobileViewContact from './Components/MobileViewContact';
import MobileViewProjects from './Components/MobileViewProjects';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* ✅ Render navbar based on screen size */}
      {isMobile ? <MobileViewNavbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={isMobile ? <MobileViewHome /> : <Home />} />
        <Route path="/Skills" element={isMobile ? <MobileViewSkills /> : <Skills />} />
        <Route path="/Achievements" element={isMobile ? <MobileViewAchievements /> : <Achievements />} />
        <Route path="/Contact" element={isMobile ? <MobileViewContact /> : <Contact />} />
        <Route path="/Projects" element={isMobile?<MobileViewProjects/>:<Projects />} />
      </Routes>
    </>
  );
}

export default App;
