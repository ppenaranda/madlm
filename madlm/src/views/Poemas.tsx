import React, { useState } from 'react';
import './Poemas.css';

interface Poema {
  id: number;
  tags: string;
  titulo: string;
  autor: string;
  contenido: string;
  imagen: string;
  preview: string;
}

const Poemas: React.FC = () => {
  const [poemaSeleccionado, setPoemaSeleccionado] = useState<Poema | null>(null);

  const poemas: Poema[] = [
    {
      id: 1,
      tags: "ESPERANZA, RESISTENCIA, RENACER",
      titulo: "Hay vida más allá de los muros",
      autor: "Anónimo",
      contenido: `Dicen que aquí no crece nada,
      que el concreto es muerte,
      que los muros lo secan todo.
      
      Pero olvidan que hasta el silencio tiene grietas.
       Y en esas grietas sembramos.
       Y en esas semillas, florecemos.`,
      imagen: "🌿",
      preview: "Dicen que aquí no crece nada..."
    },
    {
      id: 2,
      tags: "SORORIDAD, UNIÓN, FLORECER",
      titulo: "Cuando florece una",
      autor: "Anónimo",
      contenido: `Nos miramos y nos reconocemos.
      Tus cicatrices hablan mi idioma,
      mis lagrimas entienden las tuyas.
      No estamos solas,
      cuando una florece,
      florecemos todas.`,
      imagen: "🤝",
      preview: "Nos miramos y nos reconocemos..."
    },
    {
      id: 3,
      tags: "IDENTIDAD, FUERZA, PLURALIDAD",
      titulo: "Ser mujer",
      autor: "Anónimo",
      contenido: `Soy muchas,
      soy hija, madre, hermana,
      soy herida y también medicina.
      Me hicieron creer que era pequeña,
      pero llevo dentro un océano.
      Soy todas las mujeres que me habitan,
      y todas florecen conmigo.
      `,
      imagen: "🌊",
      preview: "Soy muchas..."
    },
    {
      id: 4,
      tags: "DIGNIDAD, LIBERTAD, IDENTIDAD",
      titulo: "Ser mujer, privada de la libertad",
      autor: "Anónimo",
      contenido: `No soy solo un número,
      mi nombre sigue latiendo,
      mi historia no cabe en sus carpetas.
      Soy más que estas paredes.
      Soy mujer, soy vida.`,
      imagen: "🕊️",
      preview: "No soy solo un número..."
    },
    {
      id: 5,
      tags: "SORORIDAD, APOYO, RED",
      titulo: "Hermanar",
      autor: "Anónimo",
      contenido: `Tu fuerza sostiene la mía,
      mi voz levanta la tuya.
      Juntas tejemos una red 
      que ningún muro puede romper.`,
      imagen: "🫶",
      preview: "Tu fuerza sostiene la mía..."
    },
    {
      id: 6,
      tags: "RESILIENCIA, BROTE, FLORECER",
      titulo: "Clavel",
      autor: "Anónimo",
      contenido: `Soy raíz que insiste,
      soy brote en medio del concreto.
      Aunque todo me niegue,
      florezco.`,
      imagen: "🌸",
      preview: "Soy raíz que insiste..."
    }
  ];

  const abrirPoema = (poema: Poema) => {
    setPoemaSeleccionado(poema);
  };

  const cerrarPoema = () => {
    setPoemaSeleccionado(null);
  };

  return (
    <div className="poemas">
      <section className="hero-section">
        <div className="container">
          <h1>Poemas</h1>
          <p className="subtitle">Versos que inspiran y transforman</p>
        </div>
      </section>

      <section className="poemas-section">
        <div className="poemas-container">
          <div className="actividades-grid poemas-grid-like">
            {poemas.map((poema) => (
              <div 
                key={poema.id} 
                className="actividad-card poema-card-like"
                onClick={() => abrirPoema(poema)}
              >
                <div className="actividad-imagen">
                  <span className="emoji">{poema.imagen}</span>
                </div>
                <div className="actividad-contenido">
                  <div className="poema-tags">{poema.tags}</div>
                  <h3>{poema.titulo}</h3>
                  <p className="poema-preview">{poema.preview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {poemaSeleccionado && (
        <div className="modal-overlay" onClick={cerrarPoema}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={cerrarPoema}>×</button>
            <div className="modal-header">
              <div className="modal-tags">{poemaSeleccionado.tags}</div>
              <h2>{poemaSeleccionado.titulo}</h2>
              <p className="modal-autor">por {poemaSeleccionado.autor}</p>
            </div>
            <div className="modal-body">
              <pre className="poema-completo">{poemaSeleccionado.contenido}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Poemas;
