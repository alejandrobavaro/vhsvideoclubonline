import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useOfertas } from "./TiendaOfertasContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/_03-Componentes/_MainPublicidadSlider.scss';

const MainPublicidadSlider = () => {
  const { ofertas } = useOfertas();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        
        let productosOfertas = productos.filter((producto) =>
          ofertas.includes(producto.id)
        );
        
        if (productosOfertas.length === 0) {
          const shuffled = [...productos].sort(() => 0.5 - Math.random());
          productosOfertas = shuffled.slice(0, 4);
        }
        
        setProductos(productosOfertas);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setProductos([
          {
            id: 1,
            nombre: "Producto destacado",
            precio: 9999,
            imagenes: ["/img/default-movie.png"],
            categoria: "dvd",
            descripcion: "Película destacada del mes"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [ofertas]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="vhs-slider-arrow next" onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="vhs-slider-arrow prev" onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  }

  if (loading) {
    return <div className="vhs-loading">CARGANDO OFERTAS...</div>;
  }

  return (
    <section className="vhs-publicidad">
      <div className="vhs-publicidad-header">
        <h2 className="vhs-publicidad-title">OFERTAS ESPECIALES</h2>
        <div className="vhs-divider"></div>
      </div>
      
      <div className="vhs-slider-container">
        <Slider {...settings}>
          {productos.map((producto) => (
            <div key={producto.id} className="vhs-slide-item">
              <div className="vhs-slide-content">
                <img
                  src={producto.imagenes[0]}
                  alt={producto.nombre}
                  className="vhs-slide-img"
                  loading="lazy"
                />
                <div className="vhs-slide-info">
                  <h3 className="vhs-slide-name">{producto.nombre}</h3>
                  <p className="vhs-slide-desc">{producto.descripcion}</p>
                  <div className="vhs-slide-price">${producto.precio.toLocaleString()}</div>
                </div>
                <div className="vhs-slide-badge">OFERTA</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="vhs-thumbnails-container">
        <h3 className="vhs-thumbnails-title">TÍTULOS DESTACADOS</h3>
        <div className="vhs-thumbnails-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="vhs-thumbnail-item">
              <img
                src={producto.imagenes[0]}
                alt={producto.nombre}
                className="vhs-thumbnail-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPublicidadSlider;