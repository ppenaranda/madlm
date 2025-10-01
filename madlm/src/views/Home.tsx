import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/src/assets/LogoMADLM-removebg-preview.png" alt="Logo" className="main-logo" />
            <div className="hero-text">
              <h2>Más Allá de los Muros</h2>
              <p>Un espacio para la justicia, la memoria y la transformación social.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Presentación</h2>
              <p>
                Somos una iniciativa que impulsa procesos de sanación, organización y justicia
                desde y para las comunidades. Trabajamos con metodologías restaurativas,
                memoria colectiva y pedagogías críticas para fortalecer el tejido social.
              </p>
            </div>
            <div className="intro-highlights">
              <div className="highlight">
                <h3>Misión</h3>
                <p>Acompañar procesos comunitarios que promuevan dignidad y reparación.</p>
              </div>
              <div className="highlight">
                <h3>Visión</h3>
                <p>Construir territorios donde la justicia sea una práctica cotidiana.</p>
              </div>
              <div className="highlight">
                <h3>Valores</h3>
                <p>Memoria, solidaridad, autonomía y corresponsabilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="areas">
        <div className="container">
          <h2>Áreas de trabajo</h2>
          <div className="areas-list">
            <div className="area-item">
              <span className="emoji">🕊️</span>
              <div>
                <h4>Justicia Restaurativa</h4>
                <p>Círculos, mediación y prácticas para la reparación del daño.</p>
              </div>
            </div>
            <div className="area-item">
              <span className="emoji">🧩</span>
              <div>
                <h4>Memoria y Pedagogías</h4>
                <p>Procesos educativos y de memoria para el reconocimiento y la acción.</p>
              </div>
            </div>
            <div className="area-item">
              <span className="emoji">🤝</span>
              <div>
                <h4>Organización Comunitaria</h4>
                <p>Herramientas para el cuidado colectivo y la autonomía territorial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h3>¿Te gustaría tejer con nosotras?</h3>
            <p>Conversemos y busquemos juntas las herramientas adecuadas para tu proceso.</p>
            <a className="btn-primary" href="/services">Explorar la Caja de Herramientas</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
