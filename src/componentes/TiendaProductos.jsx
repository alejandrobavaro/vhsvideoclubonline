import React, { useState } from 'react';
import TiendaImgAgrandar from './TiendaImgAgrandar';
import { useOfertas } from './TiendaOfertasContext';
import '../assets/scss/_03-Componentes/_TiendaProductos.scss';

function TiendaProductos({ products, addToCart, handleShowDetalle, searchQuery, selectedCategory }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ofertas } = useOfertas();

  const openImageModal = (images, index) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="blockbuster-products-grid">
      {products.map((product) => (
        <div key={product.id} className="blockbuster-product-card">
          {ofertas.includes(product.id) && (
            <div className="blockbuster-offer-tag">
              <span className="offer-text">¡OFERTA!</span>
              <span className="offer-percent">30% OFF</span>
            </div>
          )}
          
          <div className="movie-product-frame" onClick={() => openImageModal(product.imagenes, 0)}>
            <img
              src={product.imagenes[0] || '/img/default-movie.png'}
              alt={product.nombre}
              className="blockbuster-product-image"
            />
            <div className="film-reel-corner"></div>
          </div>
          
          <h5 className="blockbuster-product-title">{product.nombre}</h5>
          
          <div className="blockbuster-price-container">
            <h4 className="blockbuster-product-price">
              ${product.precio.toFixed(2)}
            </h4>
            {ofertas.includes(product.id) && (
              <span className="blockbuster-original-price">${(product.precio / 0.7).toFixed(2)}</span>
            )}
          </div>
          
          <button
            className="blockbuster-add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            AÑADIR AL CARRITO
          </button>
        </div>
      ))}
      
      {isModalOpen && (
        <TiendaImgAgrandar
          images={selectedImages}
          isOpen={isModalOpen}
          closeModal={closeImageModal}
        />
      )}
    </div>
  );
}

export default TiendaProductos;