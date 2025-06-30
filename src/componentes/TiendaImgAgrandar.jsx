import React, { useState } from 'react';
import '../assets/scss/_03-Componentes/_TiendaImgAgrandar.scss';

function TiendaImgAgrandar({ images, isOpen, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="blockbuster-modal-overlay" onClick={closeModal}>
      <div className="film-strip-overlay"></div>
      
      <div className="blockbuster-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="film-strip-top"></div>
        
        <span className="blockbuster-close-button" onClick={closeModal}>
          ✕
        </span>
        
        <div className="movie-frame">
          <img 
            src={images[currentImageIndex]} 
            className="blockbuster-modal-image" 
            alt="Película" 
          />
          <div className="film-reel"></div>
        </div>
        
        <button className="blockbuster-prev-button" onClick={handlePrevImage}>
          ◀
        </button>
        <button className="blockbuster-next-button" onClick={handleNextImage}>
          ▶
        </button>
        
        <div className="image-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

export default TiendaImgAgrandar;