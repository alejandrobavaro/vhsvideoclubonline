import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_MainPeliculaCard.scss';

const MainPeliculaCard = ({ pelicula }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`main-pelicula-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="main-pelicula-card__portada">
        <img src={pelicula.portada} alt={pelicula.titulo} />
        <div className="main-pelicula-card__info">
          <h3>{pelicula.titulo}</h3>
          <p>{pelicula.año} • {pelicula.genero}</p>
          <div className="main-pelicula-card__rating">
            {'★'.repeat(Math.round(pelicula.rating / 2))}
            {'☆'.repeat(5 - Math.round(pelicula.rating / 2))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPeliculaCard;