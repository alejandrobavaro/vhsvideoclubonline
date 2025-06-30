import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser, FaPhone, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import "../assets/scss/_03-Componentes/_ContactoFormularioSlider.scss";

const ContactoFormularioSlider = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: 'cubic-bezier(0.47, 0, 0.745, 0.715)'
  };

  return (
    <div className="vhs-contact-form-slider">
      <div className="vhs-tape-top"></div>
      
      <div className="vhs-form-slider-container">
        {/* Formulario de contacto */}
        <div className="vhs-form-column">
          <h2 className="vhs-form-title">
            <span className="vhs-title-bg">CONTÁCTANOS</span>
          </h2>
          
          <form
            className="vhs-contact-form"
            action="https://formspree.io/f/xbjnlgzz"
            target="_blank"
            method="post"
          >
            <div className="vhs-form-group">
              <label htmlFor="nombre">
                <FaUser className="vhs-form-icon" /> NOMBRE:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre..."
                required
              />
            </div>
            
            <div className="vhs-form-group">
              <label htmlFor="telefono">
                <FaPhone className="vhs-form-icon" /> TELÉFONO:
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Tu teléfono..."
                required
              />
            </div>
            
            <div className="vhs-form-group">
              <label htmlFor="email">
                <FaEnvelope className="vhs-form-icon" /> EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu email..."
                required
              />
            </div>
            
            <div className="vhs-form-group">
              <label htmlFor="asunto">
                <FaComment className="vhs-form-icon" /> ASUNTO:
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="¿De qué quieres hablar?"
                required
              />
            </div>
            
            <div className="vhs-form-group">
              <label htmlFor="mensaje">
                <FaComment className="vhs-form-icon" /> MENSAJE:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="vhs-submit-btn">
              <span className="vhs-btn-text">ENVIAR MENSAJE</span>
              <FaPaperPlane className="vhs-btn-icon" />
            </button>
          </form>
        </div>

        {/* Carrusel de películas */}
        <div className="vhs-slider-column">
          <h2 className="vhs-slider-title">
            <span className="vhs-title-icon">✧</span> NUESTRAS PELÍCULAS <span className="vhs-title-icon">✧</span>
          </h2>
          
          <div className="vhs-gif-column">
          <h2 className="vhs-gif-title">
            <span className="vhs-title-icon">✧</span> VIDEOCLUB RETRO <span className="vhs-title-icon">✧</span>
          </h2>
          
          <div className="vhs-gif-container">
            <img 
              src="../../public/img/09-gif/1.gif" 
              alt="Animación de alquiler VHS retro"
              className="vhs-animated-gif"
            />
            <div className="vhs-gif-overlay"></div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactoFormularioSlider;