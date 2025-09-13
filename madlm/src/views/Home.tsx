import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Mi Sitio Web</h1>
          <p>Una página web moderna y responsiva construida con React</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explorar</button>
            <button className="btn btn-secondary">Saber Más</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Características Principales</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Rápido</h3>
              <p>Optimizado para un rendimiento excepcional y tiempos de carga rápidos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsivo</h3>
              <p>Diseño adaptativo que se ve perfecto en todos los dispositivos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Moderno</h3>
              <p>Interfaz de usuario elegante y contemporánea.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
