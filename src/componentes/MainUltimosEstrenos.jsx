import React, { useState, useEffect } from 'react';
import MainPeliculaCard from './MainPeliculaCard';
import '../assets/scss/_03-Componentes/_MainUltimosEstrenos.scss';

const MainUltimosEstrenos = () => {
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

  if (loading) return <div className="main-loading">CARGANDO ESTRENOS...</div>;
  if (error) return <div className="main-error">ERROR: {error}</div>;

  const ultimosEstrenos = [...peliculas]
    .sort((a, b) => new Date(b.fechaEstreno) - new Date(a.fechaEstreno))
    .slice(0, 4);

  return (
    <section className="main-ultimos-estrenos">
      <h2 className="main-ultimos-estrenos-title">ÚLTIMOS ESTRENOS</h2>
      <div className="main-ultimos-estrenos-grid">
        {ultimosEstrenos.map(pelicula => (
          <div key={pelicula.id} className="main-pelicula-container">
            <MainPeliculaCard pelicula={pelicula} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainUltimosEstrenos;