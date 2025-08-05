import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-bg-elements">
        <div className="hero-bg-element-1"></div>
        <div className="hero-bg-element-2"></div>
      </div>

      <div className="hero-content">
        <div className="hero-profile">
          <div className="hero-profile-container">
            <div className="hero-profile-img">
              <img 
                src="https://i.ibb.co/2YvhzLtZ/Kevin-Profile-Pic.jpg"
                alt="Kevin Olaf Wildberger López"
              />
            </div>
            <div className="hero-profile-overlay"></div>
          </div>
        </div>
        
        <h1 className="hero-title">
          Kevin Olaf Wildberger Lopez
        </h1>
        <p className="hero-subtitle">
          Desarrollador Full Stack | Fundador de Elytech | Freelancer
        </p>
        <p className="hero-description">
          Construyo software funcional y escalable para ayudar a emprendedores y empresas a crecer en la era digital.
        </p>
        
        <div className="hero-actions">
          <button
            onClick={() => onNavigate('projects')}
            className="btn-primary"
          >
            Ver Proyectos
            <ExternalLink size={20} />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-secondary"
          >
            Contáctame
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={() => onNavigate('about')}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;