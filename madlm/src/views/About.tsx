import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>Acerca de Nosotros</h1>
          <p>Conoce más sobre nuestra historia y misión</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>
                Somos una empresa dedicada a crear experiencias web excepcionales. 
                Desde nuestros inicios, nos hemos comprometido con la innovación 
                y la excelencia en cada proyecto que desarrollamos.
              </p>
              <p>
                Nuestro equipo está formado por profesionales apasionados por la 
                tecnología y el diseño, trabajando juntos para ofrecer soluciones 
                que superen las expectativas de nuestros clientes.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Imagen del equipo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de mejorar y evolucionar.</p>
            </div>
            <div className="value-card">
              <h3>Calidad</h3>
              <p>Nos comprometemos a entregar productos de la más alta calidad.</p>
            </div>
            <div className="value-card">
              <h3>Colaboración</h3>
              <p>Trabajamos en equipo para lograr resultados excepcionales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
