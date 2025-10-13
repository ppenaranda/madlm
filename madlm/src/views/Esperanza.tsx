import React from 'react';
import EsperanzaImg from '../assets/Esperanza_no_bg.png';
import './Esperanza.css';

const Esperanza: React.FC = () => {
  return (
    <div className="esperanza">
      <section className="hero-section">
        <div className="container">
          <h1>Esperanza</h1>
          <p className="subtitle">Entre las grietas del encierro, germinó una historia que aprendió a caminar libre, y allí donde la sombra parecía eterna, la palabra se hizo raíz y floreció Esperanza. Una mujer que brota de quienes, incluso entre muros, siguen eligiendo florecer.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Esperanza más allá de los muros</h2>
              <p>
                "Esperanza más allá de los muros" es un relato colectivo que nace en el corazón del encierro, 
                pero cuya voz trasciende los barrotes, las fronteras y los silencios impuestos. Fue tejido por 
                mujeres privadas de la libertad que, a través de la palabra, encontraron un camino para 
                reconstruirse, para imaginar, para florecer.
              </p>
              <p>
                En cada página germina la fuerza de quienes se negaron a que el encierro definiera su historia. 
                Sus voces, entrelazadas, narran la posibilidad de reinventar la vida, de hallar luz en medio 
                del concreto y de transformar la herida en raíz.
              </p>
              <p>
                Pero "Esperanza" no es solo un personaje: es un gesto político y afectivo, una metáfora de la 
                potencia humana para resistir, crear y cuidar. La esperanza aquí no es pasiva; es una práctica 
                viva que se teje en lo cotidiano, en lo colectivo y en el deseo de construir un mundo donde la 
                justicia florezca desde el cuidado.
              </p>
              <p>
                Leer esta historia es abrir una grieta en el muro y dejar pasar la luz. Es acompañar a las 
                mujeres que la escribieron en su viaje hacia la libertad simbólica: esa que se alcanza cuando 
                nos atrevemos a imaginar que otra forma de existir —más digna, más justa, más amorosa— es posible.
              </p>
              <p>
                <em>Porque la esperanza no se encierra, se transforma.</em><br/>
                <em>Porque florecer también es un acto de resistencia.</em>
              </p>
            </div>
            <div className="story-image">
              <img src={EsperanzaImg} alt="Esperanza" className="esperanza-photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>El sentido de la Esperanza</h2>
          <p className="slogan">No se espera, se construye.</p>
          <div className="values-content">
            <div className="values-text">
              <p>
                La esperanza no es una ilusión ni una espera pasiva: es una fuerza que se rehace en la acción.
                Resignificar la esperanza implica comprender que no basta con sentirla —hay que cultivarla, 
                defenderla y construir las condiciones para que florezca.
              </p>
              <p>
                Las mujeres que dieron vida a este relato la transformaron en una práctica colectiva: un acto 
                de responsabilidad frente a sí mismas, frente a las otras y frente a una sociedad que aún debe 
                reparar, incluir y cuidar. Su esperanza no ignora la realidad, la enfrenta. No niega el dolor, 
                lo convierte en semilla.
              </p>
              <p>
                Porque la esperanza no florece sola: necesita del compromiso individual y de la acción 
                institucional, de políticas que abracen la vida y de comunidades que se reconozcan 
                interdependientes. Esperanza, entonces, es insistir, cuidar y transformar lo que duele.
                Es imaginar juntas un mundo donde la justicia se teja desde el cuidado y la dignidad.
              </p>
            </div>
          </div>
          <div className="download-container">
            <button className="download-btn">
              <span>📄</span>
              Descargar Libro en PDF
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Esperanza;
