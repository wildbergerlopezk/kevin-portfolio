import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css'

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  challenge: string;
  solution: string;
  icon: React.ReactNode;
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  description,
  technologies,
  challenge,
  solution,
  icon,
  demoLink,
  codeLink
}) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-icon">
          {icon}
        </div>
        <div>
          <h3 className="project-title">{title}</h3>
          <span className="project-year">{year}</span>
        </div>
      </div>
      
      <p className="project-description">{description}</p>
      
      <div className="project-technologies">
        <p className="project-technologies-label">Tecnologías:</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-details">
        <p className="project-detail">
          <span className="project-detail-label">Retos:</span> {challenge}
        </p>
        <p className="project-detail">
          <span className="project-detail-label">Solución:</span> {solution}
        </p>
      </div>
      
      <div className="project-links">
        <a href={demoLink} className="project-link">
          <ExternalLink size={16} />
          Ver
        </a>
        <a href={codeLink} className="project-link secondary">
          <Github size={16} />
          Ver código
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;