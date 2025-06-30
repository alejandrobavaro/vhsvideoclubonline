import React from 'react';
import MainNovedades from './MainNovedades';
import MainUltimosEstrenos from './MainUltimosEstrenos';
import MainGaleriaPeliculas from './MainGaleriaPeliculas';
import '../assets/scss/_03-Componentes/_MainContent.scss';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="main-content__banner">
        <h1 className="main-content__titulo">VIDEOCLUB VHS</h1>
        <p className="main-content__subtitulo">TU EXPERIENCIA RETRO DE CINE</p>
      </div>

      <MainNovedades />
      <MainUltimosEstrenos />
      <MainGaleriaPeliculas />
    </main>
  );
};

export default MainContent;