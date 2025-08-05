// src/App.tsx - Versión con debugging
import React, { useState } from 'react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Technologies from './components/technologies/Technologies';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };


  return (
    <div className="App">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <About />
      <Technologies />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;