import React from 'react';
import '../assets/scss/_03-Componentes/_TiendaCarritoMini1.scss';

function TiendaCarritoMini1({ items, total }) {
  return (
    <div className="blockbuster-mini-cart">
      <div className="film-strip-top"></div>
      
      <h2 className="blockbuster-cart-title">
        <span className="film-icon">🎬</span> CARRITO <span className="film-icon">🎬</span>
      </h2>
      
      {items.length === 0 ? (
        <p className="blockbuster-empty-cart">¡VACÍO! AÑADE PELÍCULAS</p>
      ) : (
        <>
          <ul className="blockbuster-mini-list">
            {items.slice(0, 3).map((item, index) => {
              const price = typeof item.precio === 'number' ? item.precio.toFixed(2) : '0.00';
              
              return (
                <li key={index} className="blockbuster-mini-item">
                  <div className="product-image-container">
                    <img
                      src={item.imagen || '/img/default-movie.png'}
                      alt={item.nombre || 'Película'}
                      className="blockbuster-product-image"
                    />
                  </div>
                  <span className="blockbuster-product-name">{item.nombre || 'Película'}</span>
                  <span className="blockbuster-product-price">${price}</span>
                </li>
              );
            })}
          </ul>
          <p className="blockbuster-total">
            TOTAL: <span className="blockbuster-neon">${typeof total === 'number' ? total.toFixed(2) : '0.00'}</span>
          </p>
          <button className="blockbuster-view-more">
            VER MÁS <span className="blockbuster-blink">»</span>
          </button>
        </>
      )}
      
      <div className="film-strip-bottom"></div>
    </div>
  );
}

export default TiendaCarritoMini1;