import React from 'react';
import './Esperanza.css';

const Esperanza: React.FC = () => {
  return (
    <div className="esperanza">
      <section className="hero-section">
        <div className="container">
          <h1>Esperanza</h1>
          <p className="subtitle">Una historia de fortaleza y resiliencia</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>La Historia de una Mujer</h2>
              <p>
                En un rincón olvidado de la ciudad, donde las calles guardan secretos 
                y los muros escuchan historias, vivía una mujer cuya vida se tejía 
                entre la adversidad y la esperanza.
              </p>
              <p>
                Su nombre era Esperanza, no por casualidad, sino porque cada amanecer 
                traía consigo la promesa de un nuevo comienzo. A pesar de las 
                circunstancias que la rodeaban, ella nunca perdió la fe en que 
                un mundo mejor era posible.
              </p>
              <p>
                Su historia nos enseña que la esperanza no es solo un sentimiento, 
                sino una fuerza transformadora que nos permite ver más allá de 
                los muros que nos rodean y soñar con un futuro donde la justicia 
                social y la dignidad humana sean realidades tangibles.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🌅</span>
                <p>Imagen de Esperanza</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Los Valores de Esperanza</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Resiliencia</h3>
              <p>La capacidad de levantarse después de cada caída, más fuerte y sabia.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Solidaridad</h3>
              <p>El compromiso de caminar juntos hacia un futuro más justo.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Esperanza</h3>
              <p>La luz que nos guía incluso en los momentos más oscuros.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Esperanza;
