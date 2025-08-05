import React from 'react';
import { Globe, Settings, Code, MessageSquare, Cpu, Zap } from 'lucide-react';
import ServiceCard from '../serviceCard/ServiceCard';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Desarrollo de sitios web",
      description: "E-commerce,Landing pages, páginas corporativas"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Sistemas de gestión",
      description: "Automatiza procesos clave con ERP y CRM integrados"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Automatización de procesos",
      description: "Soluciones con inteligencia artificial"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultorías",
      description: "Guía técnica y estratégica para validar, construir y escalar tu producto"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Soporte y mantenimiento",
      description: "Actualizaciones, corrección de bugs y optimización"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Desarrollo de software a medida",
      description: "Soluciones personalizadas para optimizar tu negocio"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">
          Servicios
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
