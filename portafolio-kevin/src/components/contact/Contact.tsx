import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">
          Contacto
        </h2>
        <p className="contact-description">
          ¿Tienes una idea, proyecto o empresa que necesita una solución tecnológica?
        </p>

        <div className="contact-methods">
          <a
            href="mailto:businesswildberger@gmail.com"
            className="contact-method"
          >
            <Mail className="contact-method-icon" />
            <span>businesswildberger@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-olaf-wildberger-lópez-2a25a3186"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="contact-method-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/wildbergerlopezk"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="contact-method-icon" />
            <span>GitHub</span>
          </a>

          <a
            href="/KevinWildbergerCV.pdf"
            download
            className="contact-method"
          >
            <FileText className="contact-method-icon" />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
