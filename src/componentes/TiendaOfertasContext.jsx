import React, { createContext, useContext, useEffect, useState } from 'react';

const TiendaOfertasContext = createContext();

export const OfertasProvider = ({ children }) => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await fetch('/productos.json');
        const productos = await response.json();
        
        // Seleccionar 4 productos al azar para ofertas
        const shuffled = [...productos].sort(() => 0.5 - Math.random());
        const selectedOfertas = shuffled.slice(0, 4).map(p => p.id);
        
        setOfertas(selectedOfertas);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        // Ofertas por defecto
        setOfertas([1, 2, 3, 4]);
      }
    };

    fetchOfertas();
  }, []);

  return (
    <TiendaOfertasContext.Provider value={{ ofertas }}>
      {children}
    </TiendaOfertasContext.Provider>
  );
};

export const useOfertas = () => useContext(TiendaOfertasContext);