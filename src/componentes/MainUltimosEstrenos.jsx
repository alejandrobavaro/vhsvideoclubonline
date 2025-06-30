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

  if (loading) return <div className="loading">CARGANDO ESTRENOS...</div>;
  if (error) return <div className="error">ERROR: {error}</div>;

  const ultimosEstrenos = [...peliculas]
    .sort((a, b) => new Date(b.fechaEstreno) - new Date(a.fechaEstreno))
    .slice(0, 4);

  return (
    <section className="main-ultimos-estrenos">
      <h2 className="main-ultimos-estrenos__titulo">ÚLTIMOS ESTRENOS</h2>
      <div className="main-ultimos-estrenos__grid">
        {ultimosEstrenos.map(pelicula => (
          <MainPeliculaCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </section>
  );
};

export default MainUltimosEstrenos;