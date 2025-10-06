import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/src/assets/LogoMADLM_Lila_no_bg.png" alt="Logo" className="main-logo" />
            <div className="hero-text">
              <h2>Más Allá de los Muros</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nulla nec lorem dictum.</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula non nisi
                consequat bibendum. Nullam a dolor sit amet urna ultricies congue. Sed ac justo sed
                lectus gravida dapibus. Praesent volutpat, nisl id efficitur interdum, nunc arcu
                bibendum lacus, eu pulvinar justo risus ut massa.
              </p>
            </div>
            <div className="intro-highlights">
              <div className="highlight">
                <h3>Lorem 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="highlight">
                <h3>Lorem 2</h3>
                <p>Morbi luctus, nibh ac placerat aliquet, justo arcu finibus arcu.</p>
              </div>
              <div className="highlight">
                <h3>Lorem 3</h3>
                <p>Phasellus vitae mauris vitae purus aliquet facilisis.</p>
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
                <h4>Lorem area 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="area-item">
              <span className="emoji">🧩</span>
              <div>
                <h4>Lorem area 2</h4>
                <p>Integer consectetur, eros nec suscipit faucibus, nunc augue dictum nisl.</p>
              </div>
            </div>
            <div className="area-item">
              <span className="emoji">🤝</span>
              <div>
                <h4>Lorem area 3</h4>
                <p>Aliquam feugiat, nisl eu dapibus iaculis, urna augue luctus nulla.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h3>Conoce la Caja de Herramientas</h3>
            <p>Explora recursos metodológicos y materiales complementarios del proyecto.</p>
            <Link className="btn-primary" to="/services">Ir a la Caja de Herramientas</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
