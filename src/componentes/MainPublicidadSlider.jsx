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
      <div className="vhs-arrow next" onClick={onClick}>
        <span>❯</span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="vhs-arrow prev" onClick={onClick}>
        <span>❮</span>
      </div>
    );
  }

  if (loading) {
    return <div className="vhs-loading">CARGANDO OFERTAS...</div>;
  }

  return (
    <div className="vhs-publicidad-container">
      <div className="vhs-tape-top"></div>
      
      <div className="vhs-slider-wrapper">
        <h2 className="vhs-section-title">
          <span className="vhs-title-bg">OFERTAS ESPECIALES</span>
        </h2>
        
        <div className="vhs-main-slider">
          <Slider {...settings}>
            {productos.map((producto) => (
              <div key={producto.id} className="vhs-slide">
                <div className="vhs-slide-content">
                  <img
                    src={producto.imagenes[0]}
                    alt={producto.nombre}
                    className="vhs-slide-image"
                  />
                  <div className="vhs-price-tag">
                    <span className="vhs-price-text">${producto.precio.toLocaleString()}</span>
                  </div>
                  <div className="vhs-sticker">OFERTA</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <h3 className="vhs-mini-title">NUESTROS TÍTULOS DESTACADOS</h3>
        <div className="vhs-thumbnails">
          {productos.map((producto) => (
            <div key={producto.id} className="vhs-thumbnail">
              <img
                src={producto.imagenes[0]}
                alt={producto.nombre}
                className="vhs-thumbnail-image"
              />
              <div className="vhs-badge">NUEVO</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPublicidadSlider;