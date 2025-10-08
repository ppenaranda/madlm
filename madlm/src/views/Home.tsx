import React from 'react';
import logo from '../assets/LogoMADLM_Lila_no_bg.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img src={logo} alt="Logo" className="main-logo" />
            <div className="hero-text">
              <h2>“Porque aún entre muros, la vida florece” </h2>
              <p>Florecer es un acto de valentía, de cuidado y de resistencia.
¿Estás listo para cruzar los muros y sembrar con nosotras una justicia que florece?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Más allá de los Muros</h2>
              <p>
              Más allá de los muros es un espacio digital que nace del proyecto del mismo nombre: una apuesta por la transformación social, la inclusión y la esperanza junto a las mujeres privadas de la libertad del Complejo Carcelario y Penitenciario de Cúcuta, Norte de Santander.
Aquí encontrarás los caminos, voces y creaciones que germinaron en este proceso: metodologías vivas, narrativas de resistencia y semillas de cuidado que siguen floreciendo más allá del encierro.
Este sitio web es una invitación a conspirar juntos, a co-construir una justicia del cuidado, a escuchar las historias que habitan tras los muros y a reconocer que toda transformación comienza en lo colectivo.
              </p>
            </div>
            <div className="intro-highlights">
              <div className="highlight">
                <div className="highlight-header">
                  <h3>¿Por qué Más allá de los muros?</h3>
                  <div className="highlight-preview">
                    <p>Más allá de los muros surge como una respuesta ética, poética y política frente a las realidades que viven las mujeres privadas de la libertad...</p>
                  </div>
                </div>
                <div className="highlight-full">
                  <p>Más allá de los muros surge como una respuesta ética, poética y política frente a las realidades que viven las mujeres privadas de la libertad. Nace del deseo de transformar la mirada social sobre el encierro, de cuestionar las lógicas del castigo y de sembrar esperanza en los territorios donde la exclusión parece tener raíces profundas. Este proyecto reconoce que los muros no solo son de concreto, también existen en los imaginarios, los prejuicios y las formas de relación que separan y jerarquizan. Por eso, ir más allá es un acto de resistencia y cuidado: significa abrir grietas para que florezca la vida, la empatía y la justicia del cuidado. Así, Más allá de los muros no es solo un nombre, sino una metáfora de florecimiento social, un camino para reconocer la dignidad, la creatividad y la capacidad transformadora de las mujeres que, aún en contextos de encierro, siguen cultivando esperanza y construyendo comunidad.</p>
                </div>
              </div>
              
              <div className="highlight">
                <div className="highlight-header">
                  <h3>Sembrar Juntos</h3>
                  <div className="highlight-preview">
                    <p>Más allá de los muros nació en un espacio de encierro, pero su sentido se expande en libertad...</p>
                  </div>
                </div>
                <div className="highlight-full">
                  <p>Más allá de los muros nació en un espacio de encierro, pero su sentido se expande en libertad: en cada territorio, en cada encuentro y en cada gesto de cuidado que hace florecer la esperanza. Esta página es una siembra abierta. Cada estrategia, poema o historia aquí compartida es una semilla lista para ser llevada a otros territorios, para seguir creciendo en manos de quienes creen en una justicia del cuidado y en una sociedad que florece con todas y todos.</p>
                </div>
              </div>
              
              <div className="highlight">
                <div className="highlight-header">
                  <h3>Florecer Juntos</h3>
                  <div className="highlight-preview">
                    <p>Más allá de los muros no busca respuestas finales, sino seguir tejiendo preguntas...</p>
                  </div>
                </div>
                <div className="highlight-full">
                  <p>Más allá de los muros no busca respuestas finales, sino seguir tejiendo preguntas, encuentros y acciones que nos recuerden que toda semilla necesita del cuidado para florecer. Que este espacio siga siendo tierra fértil para imaginar, cuidar y construir una sociedad donde la vida florezca en todas sus formas. Que las voces que germinaron entre muros sigan abriendo grietas en la indiferencia y fortaleciendo raíces de cuidado, justicia y vida digna. Porque toda transformación comienza cuando nos atrevemos a conspirar juntas. Gracias por estar aquí y creer en la justicia del cuidado, en el florecimiento social y en la fuerza de lo colectivo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h3>Conoce la Mochila Andariega</h3>
            <p>Aquí podrás descargar, adaptar y replicar las estrategias que nacieron del encuentro con las mujeres privadas de la libertad: actividades, metodologías y herramientas para la inclusión, la reflexión y la transformación social.</p>
            <Link className="btn-primary" to="/services">Ir a la Mochila Andariega</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
