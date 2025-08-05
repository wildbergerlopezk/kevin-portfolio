import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-link-container">
          <a 
            href="https://elytech.com.py" 
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            elytechpy.com
          </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} Kevin Olaf Wildberger López. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;