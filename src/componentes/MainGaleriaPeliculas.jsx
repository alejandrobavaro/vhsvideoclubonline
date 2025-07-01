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

  if (loading) return <div className="main-loading">CARGANDO CATÁLOGO...</div>;
  if (error) return <div className="main-error">ERROR: {error}</div>;

  return (
    <section className="main-galeria">
      <h2 className="main-galeria-title">CATÁLOGO COMPLETO</h2>
      <div className="main-galeria-grid">
        {peliculas.map(pelicula => (
          <div key={pelicula.id} className="main-pelicula-container">
            <MainPeliculaCard pelicula={pelicula} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainGaleriaPeliculas;