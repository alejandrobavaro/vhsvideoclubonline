import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_MainPeliculaCard.scss';

const MainPeliculaCard = ({ pelicula }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`main-pelicula-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={pelicula.portada} 
        alt={pelicula.titulo} 
        className="main-pelicula-image"
        loading="lazy"
      />
      <div className="main-pelicula-overlay">
        <div className="main-pelicula-info">
          <h3>{pelicula.titulo}</h3>
          <p>{pelicula.año} • {pelicula.genero}</p>
          <div className="main-pelicula-rating">
            {'★'.repeat(Math.round(pelicula.rating / 2))}
            {'☆'.repeat(5 - Math.round(pelicula.rating / 2))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPeliculaCard;