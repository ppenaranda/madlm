import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.',
      icon: '💻',
      features: ['React & TypeScript', 'Diseño Responsivo', 'Optimización SEO']
    },
    {
      title: 'Diseño UI/UX',
      description: 'Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia del usuario.',
      icon: '🎨',
      features: ['Prototipado', 'Diseño de Interfaces', 'Experiencia de Usuario']
    },
    {
      title: 'Consultoría Técnica',
      description: 'Ofrecemos asesoramiento especializado para optimizar tu presencia digital.',
      icon: '🔧',
      features: ['Análisis Técnico', 'Optimización', 'Mejores Prácticas']
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Soluciones completas para tu presencia digital</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Más Información</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>Nuestro Proceso</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consulta</h3>
              <p>Analizamos tus necesidades y objetivos</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Diseño</h3>
              <p>Creamos un diseño personalizado para ti</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Desarrollo</h3>
              <p>Implementamos la solución con calidad</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Entrega</h3>
              <p>Lanzamos tu proyecto y te damos soporte</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
