import React from 'react';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const LoadingSpinner = () => {
  return (
    <div className="blockbuster-loading-spinner">
      <div className="film-reel-spinner">
        <div className="film-strip"></div>
        <div className="reel-center"></div>
      </div>
      <p className="loading-text">CARGANDO...</p>
    </div>
  );
};

export default LoadingSpinner;