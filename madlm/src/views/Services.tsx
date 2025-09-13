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
  const [tipoSeleccionado, setTipoSeleccionado] = useState<'tipo1' | 'tipo2'>('tipo1');
  const [actividadSeleccionada, setActividadSeleccionada] = useState<Actividad | null>(null);

  const actividadesTipo1: Actividad[] = [
    {
      id: 1,
      nombre: "Círculo de Paz",
      descripcionCorta: "Herramienta para facilitar diálogos restaurativos en comunidades.",
      descripcionLarga: "El Círculo de Paz es una metodología poderosa que permite crear espacios seguros para el diálogo, la reflexión y la resolución de conflictos. Esta actividad promueve la participación equitativa, el respeto mutuo y la construcción de consensos. Es especialmente útil en contextos comunitarios donde se busca fortalecer los lazos sociales y abordar tensiones de manera constructiva.",
      imagen: "🕊️",
      pdfPath: "/downloads/tipo1/circulo-de-paz.pdf"
    },
    {
      id: 2,
      nombre: "Mediación Escolar",
      descripcionCorta: "Proceso de resolución de conflictos entre estudiantes con apoyo de pares.",
      descripcionLarga: "La Mediación Escolar es un proceso donde estudiantes capacitados ayudan a sus compañeros a resolver conflictos de manera pacífica. Esta herramienta no solo resuelve disputas específicas, sino que también enseña habilidades de comunicación, empatía y resolución de problemas que durarán toda la vida. Fortalece el clima escolar y reduce la violencia.",
      imagen: "🎓",
      pdfPath: "/downloads/tipo1/mediacion-escolar.pdf"
    },
    {
      id: 3,
      nombre: "Justicia Restaurativa Familiar",
      descripcionCorta: "Enfoque para abordar conflictos familiares desde la reparación y el diálogo.",
      descripcionLarga: "La Justicia Restaurativa Familiar ofrece un marco para abordar conflictos familiares centrándose en la reparación del daño, la responsabilidad y la reconstrucción de relaciones. Este enfoque reconoce que las familias son sistemas complejos donde cada miembro tiene necesidades y perspectivas únicas que deben ser escuchadas y validadas.",
      imagen: "👨‍👩‍👧‍👦",
      pdfPath: "/downloads/tipo1/justicia-restaurativa-familiar.pdf"
    },
    {
      id: 4,
      nombre: "Círculo de Responsabilidad",
      descripcionCorta: "Metodología para abordar comportamientos dañinos desde la responsabilidad personal.",
      descripcionLarga: "El Círculo de Responsabilidad es una herramienta diseñada para abordar comportamientos que han causado daño, centrándose en la responsabilidad personal, la comprensión del impacto y la reparación. Este proceso permite que todas las partes involucradas expresen sus experiencias y trabajen juntas hacia la sanación y la prevención futura.",
      imagen: "⚖️",
      pdfPath: "/downloads/tipo1/circulo-responsabilidad.pdf"
    }
  ];

  const actividadesTipo2: Actividad[] = [
    {
      id: 5,
      nombre: "Constelaciones Familiares",
      descripcionCorta: "Herramienta sistémica para explorar dinámicas familiares y patrones generacionales.",
      descripcionLarga: "Las Constelaciones Familiares son una metodología que permite visualizar y comprender las dinámicas familiares ocultas que influyen en el comportamiento actual. A través de representaciones espaciales, se pueden identificar patrones generacionales, lealtades invisibles y bloqueos que afectan las relaciones familiares y personales.",
      imagen: "🌳",
      pdfPath: "/downloads/tipo2/constelaciones-familiares.pdf"
    },
    {
      id: 6,
      nombre: "Terapia Narrativa",
      descripcionCorta: "Enfoque que utiliza las historias personales para la sanación y transformación.",
      descripcionLarga: "La Terapia Narrativa se basa en la idea de que las personas construyen su identidad a través de las historias que cuentan sobre sí mismas. Este enfoque ayuda a reescribir narrativas problemáticas, descubrir historias alternativas de fortaleza y resistencia, y empoderar a las personas para que se conviertan en autores activos de sus propias vidas.",
      imagen: "📖",
      pdfPath: "/downloads/tipo2/terapia-narrativa.pdf"
    },
    {
      id: 7,
      nombre: "Mindfulness Comunitario",
      descripcionCorta: "Prácticas de atención plena aplicadas a contextos grupales y comunitarios.",
      descripcionLarga: "El Mindfulness Comunitario adapta las prácticas de atención plena para contextos grupales, promoviendo la conexión, la empatía y la compasión colectiva. Estas prácticas ayudan a las comunidades a desarrollar mayor conciencia de sí mismas, mejorar la comunicación y crear espacios de sanación compartida.",
      imagen: "🧘‍♀️",
      pdfPath: "/downloads/tipo2/mindfulness-comunitario.pdf"
    },
    {
      id: 8,
      nombre: "Arte Terapia Grupal",
      descripcionCorta: "Uso del arte como medio de expresión y sanación en contextos grupales.",
      descripcionLarga: "El Arte Terapia Grupal utiliza procesos creativos para facilitar la expresión, la comunicación y la sanación en contextos grupales. A través de diversas formas artísticas, los participantes pueden explorar emociones, procesar experiencias traumáticas y construir conexiones significativas con otros, todo en un ambiente seguro y no verbal.",
      imagen: "🎨",
      pdfPath: "/downloads/tipo2/arte-terapia-grupal.pdf"
    }
  ];

  const actividadesActuales = tipoSeleccionado === 'tipo1' ? actividadesTipo1 : actividadesTipo2;

  const abrirActividad = (actividad: Actividad) => {
    setActividadSeleccionada(actividad);
  };

  const cerrarActividad = () => {
    setActividadSeleccionada(null);
  };

  const descargarPDF = (pdfPath: string, nombre: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${nombre}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="caja-herramientas">
      <section className="hero-section">
        <div className="container">
          <h1>Caja de Herramientas</h1>
          <p>Recursos y metodologías para la transformación social</p>
        </div>
      </section>

      <section className="toggle-section">
        <div className="container">
          <div className="toggle-container">
            <button 
              className={`toggle-btn ${tipoSeleccionado === 'tipo1' ? 'active' : ''}`}
              onClick={() => setTipoSeleccionado('tipo1')}
            >
              Tipo 1
            </button>
            <button 
              className={`toggle-btn ${tipoSeleccionado === 'tipo2' ? 'active' : ''}`}
              onClick={() => setTipoSeleccionado('tipo2')}
            >
              Tipo 2
            </button>
          </div>
        </div>
      </section>

      <section className="actividades-section">
        <div className="container">
          <div className="actividades-grid">
            {actividadesActuales.map((actividad) => (
              <div 
                key={actividad.id} 
                className="actividad-card"
                onClick={() => abrirActividad(actividad)}
              >
                <div className="actividad-imagen">
                  <span className="emoji">{actividad.imagen}</span>
                </div>
                <div className="actividad-contenido">
                  <h3>{actividad.nombre}</h3>
                  <p>{actividad.descripcionCorta}</p>
                </div>
              </div>
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
