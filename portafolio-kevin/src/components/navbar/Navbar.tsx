import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'services', label: 'Servicios' },
  { id: 'contact', label: 'Contacto' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const handleCloseSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-brand" onClick={() => handleNavClick('home')}>
            Kevin Olaf Wildberger Lopez
          </a>

          <div className="navbar-nav desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay para cerrar al click fuera */}
      {isMenuOpen && <div className="sidebar-overlay" onClick={handleCloseSidebar}></div>}

      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        {/* Botón X dentro del sidebar */}
        <button
          className="sidebar-close-btn"
          onClick={handleCloseSidebar}
          aria-label="Cerrar menú"
        >
          <X size={24} />
        </button>

        <div className="sidebar-content">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
