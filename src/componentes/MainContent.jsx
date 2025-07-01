import React from 'react';
import MainNovedades from './MainNovedades';
import MainUltimosEstrenos from './MainUltimosEstrenos';
import MainGaleriaPeliculas from './MainGaleriaPeliculas';
import '../assets/scss/_03-Componentes/_MainContent.scss';

const MainContent = () => {
  return (
    <main className="main-content">
      <MainNovedades />
      <MainUltimosEstrenos />
      <MainGaleriaPeliculas />
    </main>
  );
};

export default MainContent;