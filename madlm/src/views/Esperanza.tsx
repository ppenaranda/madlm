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
          <div className="download-container">
            <a
              className="download-btn"
              href="/downloads/libro_esperanza_mas_alla_de_los_muros.pdf"
              download
            >
              <span>📄</span>
              Descargar Libro en PDF
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Esperanza;
