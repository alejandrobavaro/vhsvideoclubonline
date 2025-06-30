import React, { useState, useEffect } from 'react';
import MainPeliculaCard from './MainPeliculaCard';
import '../assets/scss/_03-Componentes/_MainGaleriaPeliculas.scss';

const MainGaleriaPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await fetch('/peliculas.json');
        if (!response.ok) throw new Error('Error al cargar películas');
        const data = await response.json();
        setPeliculas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPeliculas();
  }, []);

  if (loading) return <div className="loading">CARGANDO CATÁLOGO...</div>;
  if (error) return <div className="error">ERROR: {error}</div>;

  return (
    <section className="main-galeria-peliculas">
      <h2 className="main-galeria-peliculas__titulo">CATÁLOGO COMPLETO</h2>
      <div className="main-galeria-peliculas__grid">
        {peliculas.map(pelicula => (
          <MainPeliculaCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </section>
  );
};

export default MainGaleriaPeliculas;