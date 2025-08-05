import React from 'react';
import { Globe, Code, Mail } from 'lucide-react';
import ProjectCard from '../projectCard/ProjectCard';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce",
      year: "2025",
      description: "E-commerce funcional con integración de frontend, backend y pasarela de pagos.",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Stripe API", "Docker", "GitHub Actions"],
      challenge: "Implementar un flujo de compra completo con carrito dinámico, generación de órdenes y pagos en línea.",
      solution: "Backend robusto con validaciones precisas, lógica modular y procesamiento seguro de pagos con Stripe.",
      icon: <Globe className="w-6 h-6 text-white" />,
      demoLink: "",
      codeLink: "https://github.com/wildbergerlopezk/ecommerce-nest-react-vite"
    },
    {
      id: 2,
      title: "Portafolio Elytech",
      year: "2025",
      description: "Landing page corporativa de Elytech, orientada a captación de clientes y presentación de servicios.",
      technologies: ["React", "Tailwind CSS", "Vite", "Netlify"],
      challenge: "Transmitir confianza y profesionalismo con un diseño moderno y enfocado en conversión.",
      solution: "Diseño limpio y profesional con elementos interactivos que mejoran la experiencia del usuario.",
      icon: <Code className="w-6 h-6 text-white" />,
      demoLink: "https://elytechpy.es/",
      codeLink: "https://github.com/wildbergerlopezk/elytech"
    },
    {
      id: 3,
      title: "Clínica Odontológica ",
      year: "2025",
      description: "Página web estática en HTML y CSS con formulario de contacto gestionado con Node JS.",
      technologies: ["HTML", "CSS", "Javascript", "Node.js", "Express", "NodeMailer"],
      challenge: "Crear una página simple y profesional con formulario funcional para recibir consultas.",
      solution: "Implementación de formulario con validación y envío de mensajes vía backend en Node.js.",
      icon: <Mail className="w-6 h-6 text-white" />,
      demoLink: "https://wildbergerlopezk.github.io/",
      codeLink: "https://github.com/wildbergerlopezk/wildbergerlopezk.github.io"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container-lg">
        <h2 className="section-title">
          Proyectos
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              year={project.year}
              description={project.description}
              technologies={project.technologies}
              challenge={project.challenge}
              solution={project.solution}
              icon={project.icon}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
