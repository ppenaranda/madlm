import React, { useState } from 'react';
import './Services.css';

interface Actividad {
  id: number;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagen: string;
  pdfPath: string;
}

const Services: React.FC = () => {
  const [actividadSeleccionada, setActividadSeleccionada] = useState<Actividad | null>(null);

  const actividades: Actividad[] = [
    {
      id: 1,
      nombre: "Deconstruyendo Imaginarios",
      descripcionCorta: "Metodología inspirada en el Teatro del Oprimido que convierte el arte escénico en herramienta de conciencia y cambio social.",
      descripcionLarga: "Inspirada en el Teatro del Oprimido, esta metodología convierte el arte escénico en una herramienta de conciencia y cambio social. Los participantes representan escenas que revelan los imaginarios y estructuras de poder que sostienen la exclusión, para luego transformarlas colectivamente desde el cuerpo, la palabra y la acción. Deconstruyendo Imaginarios trata de transformar la opresión en conciencia y la conciencia en acción: convertir el cuerpo, la voz y la escena en instrumentos de liberación, donde el arte se vuelve un medio para imaginar y practicar otros modos de justicia y de vida.",
      imagen: "🎭",
      pdfPath: "/downloads/deconstruyendo_imaginarios.pdf"
    },
    {
      id: 2,
      nombre: "Pido la Palabra",
      descripcionCorta: "Experiencia colectiva de diálogo y transformación a través de cartas que abordan temas de justicia, poder y reconciliación.",
      descripcionLarga: "Más que un juego, es una experiencia colectiva de diálogo y transformación. Esta metodología propone un recorrido reflexivo a través de cartas que abordan temas como la justicia, el poder, la reconciliación y el cuidado. Pido la Palabra trata, sobre todo, de recuperar el valor del diálogo como acto político y afectivo, donde hablar y escuchar se convierten en caminos hacia la reparación y el fortalecimiento del tejido social.",
      imagen: "🗣️",
      pdfPath: "/downloads/pido_la_palabra.pdf"
    },
    {
      id: 3,
      nombre: "Esperanza, más allá de los muros",
      descripcionCorta: "Metodología vivencial que combina narración simbólica, tejido y reflexión colectiva para fortalecer la empatía y los vínculos.",
      descripcionLarga: "Metodología vivencial que combina la narración simbólica, el tejido y la reflexión colectiva para fortalecer la empatía y los vínculos entre mujeres privadas de la libertad. A través de la historia de Esperanza y de la creación artesanal de pulseras, las participantes conectan con sus emociones, valores y fortalezas, reconociendo que la libertad también se construye en el interior. Este proceso busca tejer esperanza más allá del encierro, floreciendo desde la solidaridad y el encuentro humano.",
      imagen: "🧶",
      pdfPath: "/downloads/esperanza_mas_alla_de_los_muros.pdf"
    },
    {
      id: 4,
      nombre: "Semillas que nos sostienen",
      descripcionCorta: "Metodología que parte de la metáfora de la siembra para invitar a sembrar compromisos colectivos de cuidado y justicia.",
      descripcionLarga: "Esta metodología parte de la metáfora de la siembra para invitar a sembrar compromisos colectivos de cuidado, justicia y empatía. A través de símbolos como la tierra, las flores y las semillas, las participantes reflexionan sobre la importancia de sostener lo que florece desde la palabra y la acción compartida. Es un ejercicio que cultiva la esperanza y la corresponsabilidad, recordando que toda transformación social germina cuando el cuidado se vuelve un acto común.",
      imagen: "🌱",
      pdfPath: "/downloads/semillas_que_nos_sostienen.pdf"
    }
  ];

  const abrirActividad = (actividad: Actividad) => {
    setActividadSeleccionada(actividad);
  };

  const cerrarActividad = () => {
    setActividadSeleccionada(null);
  };

  const descargarPDF = async (pdfPath: string, nombre: string) => {
    try {
      const res = await fetch(pdfPath, { method: 'HEAD' });
      if (!res.ok) {
        alert('El archivo PDF no está disponible aún. Por favor, verifica que exista en la carpeta public.');
        return;
      }
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = `${nombre}.pdf`;
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      alert('No fue posible acceder al PDF. Revisa tu conexión o la ruta del archivo.');
    }
  };

  return (
    <div className="mochila-andariega">
      <section className="hero-section">
        <div className="container">
          <h1>Mochila Andariega</h1>
          <div className="hero-description">
            <p>
              La Mochila Andariega es una estrategia socioeducativa que camina con las voces de las mujeres privadas de la libertad y con todas aquellas que creen en la posibilidad de florecer más allá del castigo. En su interior habitan metodologías, narrativas y herramientas creadas colectivamente, que buscan sembrar otras formas de justicia: una justicia del cuidado, del encuentro y de la dignidad.
            </p>
            <p>
              Cada elemento de esta mochila —cuentos, poemas, cartas, dinámicas, materiales pedagógicos— ha sido tejido desde el cuidado, el diálogo y la esperanza. La Mochila Andariega no lleva respuestas, sino preguntas que invitan a pensar(se) y a transformar los vínculos que sostenemos como sociedad.
            </p>
            <p>
              Más que un recurso, es una caminante: viaja de mano en mano, de territorio en territorio, llevando consigo historias, saberes y afectos que germinan en nuevos espacios de cuidado. Su propósito es abrir grietas en los muros simbólicos y materiales, cultivar la reflexión crítica y movilizar acciones colectivas que dignifiquen la vida.
            </p>
            <p>
              Porque toda transformación comienza cuando nos atrevemos a conspirar juntxs, la Mochila Andariega nos recuerda que el camino hacia la libertad y la justicia también se siembra.
            </p>
          </div>
        </div>
      </section>


      <section className="actividades-section">
        <div className="container">
          <div className="actividades-grid">
            {actividades.map((actividad) => (
              <button
                type="button"
                key={actividad.id}
                className="actividad-card"
                onClick={() => abrirActividad(actividad)}
                aria-label={`Abrir actividad ${actividad.nombre}`}
              >
                <div className="actividad-imagen">
                  <span className="emoji">{actividad.imagen}</span>
                </div>
                <div className="actividad-contenido">
                  <h3>{actividad.nombre}</h3>
                  <p>{actividad.descripcionCorta}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para mostrar la actividad completa */}
      {actividadSeleccionada && (
        <div className="modal-overlay" onClick={cerrarActividad}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={cerrarActividad}>×</button>
            <div className="modal-header">
              <div className="modal-imagen">
                <span className="emoji">{actividadSeleccionada.imagen}</span>
              </div>
              <h2>{actividadSeleccionada.nombre}</h2>
            </div>
            <div className="modal-body">
              <p className="descripcion-larga">{actividadSeleccionada.descripcionLarga}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="descargar-btn"
                onClick={() => descargarPDF(actividadSeleccionada.pdfPath, actividadSeleccionada.nombre)}
              >
                📄 Descargar PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
