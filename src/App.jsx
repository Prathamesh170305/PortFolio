import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import MobileViewHome from './Components/MobileViewHome';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar className="bg-white shadow-md p-4 w-full" />
      <Routes>
        <Route path="/" element={isMobile ? <MobileViewHome /> : <Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
