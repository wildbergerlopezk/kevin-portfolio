import React from 'react';
import TechCard from '../techCard/TechCard';
import { Server, Monitor } from 'lucide-react';
import './Technologies.css';

const Technologies: React.FC = () => {
  const backendTechs = [
    { name: "NodeJS", description: "Entorno de ejecución para JavaScript del lado del servidor", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlMcp4s9QpJM5TiV3n8IOwgVp3tP5270vjQ&s" },
    { name: "NestJS", description: "Framework modular basado en Node JS y TypeScript", icon: "https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png" },
    { name: "TypeScript", description: "Tipado estático para mayor robustez y mantenibilidad", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "PostgreSQL", description: "Base de datos relacional potente y confiable", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" },
    { name: "Prisma ORM", description: "Mapeo de datos eficiente y moderno", icon: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png" },
    { name: "Docker", description: "Contenedores para despliegue aislado y reproducible", icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" }
  ];

  const frontendTechs = [
    { name: "React", description: "Librería para interfaces y componentes reutilizables", icon: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" },
    { name: "TypeScript", description: "Tipado estático en frontend para coherencia completa", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Vite", description: "Build tool ultra rápida para desarrollo y producción", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" },
    { name: "HTML", description: "Para páginas estáticas o casos simples", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425" },
    { name: "CSS", description: "Para diseños unicos", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png" },
    { name: "JavaScript", description: "Comportamientos interactivos en páginas estáticas", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s" }
  ];

  return (
    <section id="technologies" className="technologies">
      <div className="container-lg">
        <h2 className="section-title">Tecnologías utilizadas</h2>

        <div className="tech-grid">
          <div className="tech-category">
            <div className="tech-category-header">
              <Server size={24} />
              <h3 className="tech-category-title">Backend</h3>
            </div>
            <div className="tech-list">
              {backendTechs.map((tech, index) => (
                <TechCard
                  key={index}
                  name={tech.name}
                  description={tech.description}
                  icon={tech.icon}
                />
              ))}
            </div>
          </div>

          <div className="tech-category">
            <div className="tech-category-header">
              <Monitor size={24} />
              <h3 className="tech-category-title">Frontend</h3>
            </div>
            <div className="tech-list">
              {frontendTechs.map((tech, index) => (
                <TechCard
                  key={index}
                  name={tech.name}
                  description={tech.description}
                  icon={tech.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
