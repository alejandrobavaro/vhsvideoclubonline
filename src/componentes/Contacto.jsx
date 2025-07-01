import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaPaypal } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  const redes = [
    {
      icon: <FaFacebook className="contacto-icono" size={24} />,
      text: "Facebook",
      url: "https://www.facebook.com/vhsvideoclub"
    },
    {
      icon: <FaInstagram className="contacto-icono" size={24} />,
      text: "Instagram",
      url: "https://www.instagram.com/vhsvideoclub"
    },
    {
      icon: <FaYoutube className="contacto-icono" size={24} />,
      text: "YouTube",
      url: "https://www.youtube.com/vhsvideoclub"
    },
    {
      icon: <FaSpotify className="contacto-icono" size={24} />,
      text: "Spotify",
      url: "https://open.spotify.com/vhsvideoclub"
    },
    {
      icon: <MdEmail className="contacto-icono" size={24} />,
      text: "Escríbenos",
      url: "mailto:contacto@vhsvideoclub.com"
    },
    {
      icon: <FaPaypal className="contacto-icono" size={24} />,
      text: "Colabora",
      url: "https://www.paypal.com/vhsvideoclub"
    }
  ];

  return (
    <div className="contacto-contenedor">
      <h1 className="contacto-titulo">CONTACTA AL VIDEOCLUB</h1>
      <div className="contacto-divisor">
        <span>✧✧✧</span>
      </div>

      <div className="contacto-contenido">
        <div className="contacto-columna-logo">
          <div className="contacto-logo-principal">
            <img
              src="/img/02-logos/logovhsvideoclibonline1.png"
              alt="VHS Videoclub"
              className="contacto-logo-imagen"
            />
          </div>
        </div>

        <div className="contacto-columna-redes">
          <h2 className="contacto-subtitulo">NUESTRAS REDES</h2>
          
          <div className="contacto-lista-redes">
            {redes.map((red, index) => (
              <a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-enlace-red"
              >
                {red.icon}
                <span className="contacto-texto-red">{red.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;