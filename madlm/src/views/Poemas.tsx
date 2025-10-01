import React, { useState } from 'react';
import './Poemas.css';

interface Poema {
  id: number;
  tags: string;
  titulo: string;
  autor: string;
  contenido: string;
  fecha: string;
  imagen: string;
  preview: string;
}

const Poemas: React.FC = () => {
  const [poemaSeleccionado, setPoemaSeleccionado] = useState<Poema | null>(null);

  const poemas: Poema[] = [
    {
      id: 1,
      tags: "ESPERANZA, RESISTENCIA, LIBERTAD",
      titulo: "MÁS ALLÁ DE LOS MUROS",
      autor: "Anónimo",
      contenido: `En las sombras de la ciudad,
donde el silencio habla más fuerte,
hay almas que buscan la verdad,
más allá de los muros de la muerte.

Entre ladrillos y cemento,
donde la esperanza se esconde,
nace un nuevo pensamiento,
que en libertad se responde.

No hay muro que pueda contener,
el sueño de un mundo mejor,
donde todos puedan crecer,
con amor y sin temor.

En cada grieta que se abre,
en cada voz que se alza,
la justicia se labra,
con paciencia y con calma.`,
      fecha: "NOVIEMBRE 02",
      imagen: "🌅",
      preview: "En las sombras de la ciudad, donde el silencio habla más fuerte, hay almas que buscan la verdad..."
    },
    {
      id: 2,
      tags: "JUSTICIA, LUCHA, TRANSFORMACIÓN",
      titulo: "LA ESPERANZA QUE FLORECE",
      autor: "Anónimo",
      contenido: `En el jardín de la resistencia,
donde crecen las flores de la lucha,
cada pétalo es una experiencia,
que en el corazón se escucha.

La esperanza no se marchita,
aunque el invierno sea cruel,
ella siempre se agita,
como un fuego eterno y fiel.

En cada semilla plantada,
hay un futuro que nacerá,
en cada lucha librada,
la justicia triunfará.

Las raíces de la memoria,
alimentan el presente,
y en cada historia,
se escribe un futuro diferente.`,
      fecha: "SEPTIEMBRE 09",
      imagen: "🌱",
      preview: "En el jardín de la resistencia, donde crecen las flores de la lucha, cada pétalo es una experiencia..."
    },
    {
      id: 3,
      tags: "UNIDAD, SOLIDARIDAD, PUEBLO",
      titulo: "VOCES DEL PUEBLO",
      autor: "Anónimo",
      contenido: `Las voces del pueblo resuenan,
en cada calle y en cada plaza,
sus palabras no se condenan,
porque la verdad se abraza.

Desde las montañas hasta el mar,
desde el campo hasta la urbe,
el pueblo sabe luchar,
porque en su alma se conserva.

La unidad es su fuerza,
la solidaridad su escudo,
y en la lucha más feroz,
siempre emerge el pueblo puro.

En cada mano extendida,
en cada abrazo sincero,
se construye la vida,
con amor verdadero.`,
      fecha: "NOVIEMBRE 02",
      imagen: "🤝",
      preview: "Las voces del pueblo resuenan, en cada calle y en cada plaza, sus palabras no se condenan..."
    },
    {
      id: 4,
      tags: "AMOR, PAZ, TRANSFORMACIÓN",
      titulo: "LA LETRA CON AMOR, SI ENTRA",
      autor: "Anónimo",
      contenido: `"La justicia es el aspecto que tiene el amor en público" - Cornel West

Escribiendo este poema, me encontré con una verdad profunda:
el amor no es solo sentimiento, es acción transformadora.

En cada palabra escrita con amor,
hay una semilla de cambio,
en cada verso que se inspira,
hay un mundo que se arregla.

La justicia no es castigo,
es amor en movimiento,
es la fuerza que nos guía,
hacia un mejor entendimiento.

Cuando escribimos con amor,
las letras cobran vida,
y en cada página,
se escribe una nueva partida.`,
      fecha: "OCTUBRE 15",
      imagen: "💝",
      preview: "Escribiendo este poema, me encontré con una verdad profunda: el amor no es solo sentimiento..."
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
                  <div className="poema-footer">
                    <span className="fecha">{poema.fecha}</span>
                  </div>
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
            <div className="modal-footer">
              <span className="modal-fecha">{poemaSeleccionado.fecha}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Poemas;
