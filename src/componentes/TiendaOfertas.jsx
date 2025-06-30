import React from 'react';
import { useOfertas } from './TiendaOfertasContext';
import '../assets/scss/_03-Componentes/_TiendaOfertas.scss';

const TiendaOfertas = ({ producto, onEncargar }) => {
  const { id, nombre, precio, imagenes } = producto;
  const { ofertas } = useOfertas();

  const isOferta = ofertas.includes(id);
  const precioOriginal = isOferta ? Math.round(precio / 0.7) : precio;

  const handleEncargarClick = () => {
    onEncargar(id);
  };

  return (
    <div className="blockbuster-product-card">
      {isOferta && (
        <div className="blockbuster-offer-tag">
          <span className="offer-text">OFERTA</span>
          <span className="offer-percent">30%</span>
        </div>
      )}
      
      <div className="blockbuster-product-frame">
        <img
          src={imagenes[0] || '/img/default-movie.png'}
          alt={nombre}
          className="blockbuster-product-image"
        />
        <div className="film-strip-effect"></div>
      </div>
      
      <h5 className="blockbuster-product-title">{nombre}</h5>
      
      <div className="blockbuster-price-container">
        <h4 className="blockbuster-product-price">
          ${precio.toLocaleString()}
        </h4>
        {isOferta && (
          <span className="blockbuster-original-price">${precioOriginal.toLocaleString()}</span>
        )}
      </div>
      
      {onEncargar && (
        <button
          className="blockbuster-order-button"
          onClick={handleEncargarClick}
        >
          ALQUILAR
          <span className="button-highlight"></span>
        </button>
      )}
    </div>
  );
};

export default TiendaOfertas;