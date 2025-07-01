import React, { useState, useEffect } from 'react';
import MainPeliculaCard from './MainPeliculaCard';
import '../assets/scss/_03-Componentes/_MainNovedades.scss';

const MainNovedades = () => {
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

  if (loading) return <div className="main-loading">CARGANDO NOVEDADES...</div>;
  if (error) return <div className="main-error">ERROR: {error}</div>;

  const novedades = peliculas.filter(pelicula => pelicula.novedad);

  return (
    <section className="main-novedades">
      <h2 className="main-novedades-title">NOVEDADES</h2>
      <div className="main-novedades-grid">
        {novedades.map(pelicula => (
          <div key={pelicula.id} className="main-pelicula-container">
            <MainPeliculaCard pelicula={pelicula} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainNovedades;