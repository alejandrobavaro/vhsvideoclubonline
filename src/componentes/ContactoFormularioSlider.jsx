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
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error:", error);
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
    fade: true
  };

  return (
    <div className="formulario-slider-container">
      <div className="formulario-slider-cinta"></div>
      
      <div className="formulario-slider-contenido">
        <div className="formulario-columna">
          <h2 className="formulario-titulo">CONTÁCTANOS</h2>
          
          <form
            className="contacto-formulario"
            action="https://formspree.io/f/xbjnlgzz"
            target="_blank"
            method="post"
          >
            <div className="formulario-grupo">
              <label htmlFor="nombre">
                <FaUser className="formulario-icono" /> NOMBRE:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Tu nombre..."
                required
              />
            </div>
            
            <div className="formulario-grupo">
              <label htmlFor="telefono">
                <FaPhone className="formulario-icono" /> TELÉFONO:
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="Tu teléfono..."
                required
              />
            </div>
            
            <div className="formulario-grupo">
              <label htmlFor="email">
                <FaEnvelope className="formulario-icono" /> EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu email..."
                required
              />
            </div>
            
            <div className="formulario-grupo">
              <label htmlFor="asunto">
                <FaComment className="formulario-icono" /> ASUNTO:
              </label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                placeholder="¿De qué quieres hablar?"
                required
              />
            </div>
            
            <div className="formulario-grupo">
              <label htmlFor="mensaje">
                <FaComment className="formulario-icono" /> MENSAJE:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            
            <button type="submit" className="formulario-boton">
              <span>ENVIAR MENSAJE</span>
              <FaPaperPlane className="boton-icono" />
            </button>
          </form>
        </div>

        <div className="slider-columna">
          <h2 className="slider-titulo">✧ NUESTRAS PELÍCULAS ✧</h2>
          
          <div className="gif-columna">
            <h2 className="gif-titulo">✧ VIDEOCLUB RETRO ✧</h2>
            
            <div className="gif-contenedor">
              <img 
                src="/img/09-gif/1.gif" 
                alt="Animación VHS retro"
                className="gif-animado"
              />
              <div className="gif-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoFormularioSlider;