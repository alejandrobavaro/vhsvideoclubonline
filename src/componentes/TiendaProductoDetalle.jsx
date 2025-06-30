import React from "react";
import '../assets/scss/_03-Componentes/_TiendaProductoDetalle.scss';

const TiendaProductoDetalle = ({ producto }) => {
  if (!producto) return null;

  return (
    <div className="blockbuster-product-detail">
      <div className="film-strip-top"></div>
      
      <h4 className="blockbuster-detail-title">
        <span className="film-icon">🎬</span> DETALLES DE LA PELÍCULA <span className="film-icon">🎬</span>
      </h4>
      
      <div className="blockbuster-detail-content">
        {/* Marco estilo carrete de película */}
        <div className="detail-movie-frame">
          <img 
            src={producto.imagenes[0] || '/img/default-movie.png'} 
            alt={producto.nombre} 
            className="detail-product-image"
          />
          <div className="film-reel"></div>
        </div>
        
        <div className="blockbuster-detail-info">
          <div className="detail-item">
            <span className="detail-label">TÍTULO:</span> 
            <span className="detail-value">{producto.nombre}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">PRECIO:</span> 
            <span className="detail-value blockbuster-price">${producto.precio.toFixed(2)}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">GÉNERO:</span> 
            <span className="detail-value">{producto.categoria}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-label">SINOPSIS:</span> 
            <span className="detail-value blockbuster-description">{producto.descripcion}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaProductoDetalle;