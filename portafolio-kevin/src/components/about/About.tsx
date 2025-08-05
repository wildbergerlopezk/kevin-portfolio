import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">
          Sobre mí
        </h2>
        <div className="about-text-container">
          <p className="about-text">
            Soy un desarrollador de software paraguayo con enfoque en soluciones reales y escalables. 
            Fundé <span className="about-highlight">Elytech Software and Solutions</span>, donde lidero el desarrollo 
            de plataformas web y móviles orientadas a negocios modernos.
          </p>
          <p className="about-text">
            Actualmente estudio Ciencias Informáticas en la UNA y me formo de manera autodidacta en áreas como desarrollo full stack, 
            inteligencia artificial y automatización. 
          </p>
          <p className="about-text">
            Me apasionan la tecnología, los negocios y el alto rendimiento. Mi enfoque está en crear soluciones que 
            generen ingresos recurrentes, escalen de forma sostenible y aporten verdadero valor a empresas y usuarios. 
            <span className="about-highlight"> Trabajo con velocidad, visión estratégica y ejecución precisa.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
