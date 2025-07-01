import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/_03-Componentes/_Videoclub.scss';

const Videoclub = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "PULP FICTION",
      year: 1994,
      genre: "CRIME/DRAMA",
      poster: "/img/05-img-portadas/id13-portada1a.png",
      rating: 4.8
    },
    {
      id: 2,
      title: "THE MATRIX",
      year: 1999,
      genre: "SCI-FI/ACTION",
      poster: "/img/05-img-portadas/id14-portada1a.png",
      rating: 4.7
    },
    {
      id: 3,
      title: "JURASSIC PARK",
      year: 1993,
      genre: "ADVENTURE/SCI-FI",
      poster: "/img/05-img-portadas/id15-portada1a.png",
      rating: 4.6
    },
    {
      id: 4,
      title: "BACK TO THE FUTURE",
      year: 1985,
      genre: "SCI-FI/COMEDY",
      poster: "/img/05-img-portadas/id16-portada1a.png",
      rating: 4.9
    }
  ];

  const categories = [
    { name: "CULT CLASSICS", count: 124 },
    { name: "80s HITS", count: 89 },
    { name: "90s GEMS", count: 112 },
    { name: "SCI-FI", count: 76 },
    { name: "HORROR", count: 65 },
    { name: "ACTION", count: 93 }
  ];

  return (
    <div className="videoclub-container">
      <section className="videoclub-section">
        <h3 className="videoclub-section-title">ESTRENOS</h3>
        <div className="videoclub-movies-container">
          {featuredMovies.map(movie => (
            <div key={movie.id} className="videoclub-movie-item">
              <div className="videoclub-movie-image-container">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="videoclub-movie-image"
                  loading="lazy"
                />
                <div className="videoclub-movie-overlay">
                  <button className="videoclub-play-button">
                    <i className="bi bi-play-fill"></i>
                  </button>
                  <div className="videoclub-movie-info">
                    <span className="videoclub-movie-rating">
                      <i className="bi bi-star-fill"></i> {movie.rating}
                    </span>
                    <span className="videoclub-movie-year">{movie.year}</span>
                  </div>
                </div>
              </div>
              <div className="videoclub-movie-details">
                <h4 className="videoclub-movie-title">{movie.title}</h4>
                <p className="videoclub-movie-genre">{movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="videoclub-section">
        <h3 className="videoclub-section-title">BUSCAR POR CATEGORIAS</h3>
        <div className="videoclub-categories-container">
          {categories.map((category, index) => (
            <div key={index} className="videoclub-category-item">
              <h4 className="videoclub-category-name">{category.name}</h4>
              <p className="videoclub-category-count">{category.count} TITULOS</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Videoclub;