import React from 'react';
import './TechCard.css';

interface TechCardProps {
  name: string;
  description: string;
  icon: string;
}

const TechCard: React.FC<TechCardProps> = ({ name, description, icon }) => {
  return (
    <div className="tech-item">
      <div className="tech-icon">
        <img src={icon} alt={`${name} logo`} />
      </div>

      <div className="tech-info">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TechCard;