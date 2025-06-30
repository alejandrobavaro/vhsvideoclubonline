import React, { useEffect, useState } from 'react';
import TiendaProductos from './TiendaProductos'; 
import { OfertasProvider } from './TiendaOfertasContext'; 
import '../assets/scss/_03-Componentes/_TiendaProductosLista.scss'; 

const TiendaProductosLista = ({ onEncargar }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <OfertasProvider>
      <div className="blockbuster-products-container">
        {isLoading ? (
          <div className="blockbuster-loading">
            <div className="film-reel-spinner"></div>
            <p>CARGANDO CATÁLOGO...</p>
          </div>
        ) : (
          <TiendaProductos 
            products={productos} 
            onEncargar={onEncargar} 
          />
        )}
      </div>
    </OfertasProvider>
  );
};

export default TiendaProductosLista;