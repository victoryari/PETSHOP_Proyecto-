import React, { useState, useRef } from "react";
import examen from '../img/examen.mp4';
import banho from '../img/baño.mp4';    
import guarderia from '../img/guarderia.mp4';

const ServiciosDestacados = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const servicios = [
    {
      id: 1,
      video: examen,
      titulo: "Exámenes Veterinarios",
      descripcion: "Chequeos completos y diagnósticos precisos para la salud de tu mascota",
      caracteristicas: ["Consulta especializada", "Diagnóstico avanzado", "Prevención de enfermedades"]
    },
    {
      id: 2,
      video: banho,
      titulo: "Baño y Peluquería",
      descripcion: "Servicios de higiene y belleza para que tu mascota luzca espectacular",
      caracteristicas: ["Baño terapéutico", "Corte de pelo", "Limpieza dental"]
    },
    {
      id: 3,
      video: guarderia,
      titulo: "Guardería Canina",
      descripcion: "Cuidado profesional mientras estás fuera de casa",
      caracteristicas: ["Espacios amplios", "Actividades recreativas", "Atención 24/7"]
    }
  ];

  const handleVideoPlay = (index) => {
    if (activeVideo !== null && activeVideo !== index) {
      videoRefs.current[activeVideo].pause();
    }
    setActiveVideo(index);
  };

  const handleVideoPause = (index) => {
    if (activeVideo === index) {
      setActiveVideo(null);
    }
  };

  return (
    <section className="servicios-destacados">
      <div className="container">
        <div className="servicios-header">
          <h2 className="servicios-titulo">Servicios Destacados</h2>
          <p className="servicios-subtitulo">Cuidado profesional para tu mejor amigo</p>
        </div>
        
        <div className="grid-servicios">
          {servicios.map((servicio, index) => (
            <div key={servicio.id} className="servicio-card">
              <div className="video-container">
                <video 
                  ref={el => videoRefs.current[index] = el}
                  className="servicio-video"
                  onPlay={() => handleVideoPlay(index)}
                  onPause={() => handleVideoPause(index)}
                  muted
                  loop
                >
                  <source src={servicio.video} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
                <div className="video-overlay">
                  <button 
                    className="play-btn"
                    onClick={() => {
                      if (videoRefs.current[index].paused) {
                        videoRefs.current[index].play();
                      } else {
                        videoRefs.current[index].pause();
                      }
                    }}
                  >
                    {videoRefs.current[index]?.paused ? '▶' : '⏸'}
                  </button>
                </div>
              </div>
              
              <div className="servicio-info">
                <h3 className="servicio-nombre">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
                
                <ul className="servicio-caracteristicas">
                  {servicio.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="caracteristica-item">
                      <span className="caracteristica-icon">✓</span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                
                <button className="btn-servicio">
                  Más Información
                  <span className="btn-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosDestacados;