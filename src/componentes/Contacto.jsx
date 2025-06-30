import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaPaypal } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <div className="vhs-contact-container">
      <div className="vhs-tape-top"></div>
      
      <h1 className="vhs-contact-title">CONTACTA AL VIDEOCLUB</h1>
      <div className="vhs-divider">
        <span className="vhs-divider-icon">✧✧✧</span>
      </div>

      <div className="vhs-contact-grid">
        <div className="vhs-logo-column">
          <div className="vhs-logo-main">
            <img
              src="/img/02-logos/logovhsvideoclibonline1.png"
              alt="VHS Videoclub"
              className="vhs-main-logo"
            />
          </div>
          
          <div className="vhs-logos-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className={`vhs-logo-item logo-${item}`}
              >
                <div className="vhs-logo-frame">
                  <img
                    src={`/img/vhs-icon-${item}.png`}
                    alt={`Icono ${item}`}
                    className="vhs-logo-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vhs-contact-column">
          <h2 className="vhs-contact-subtitle">NUESTRAS REDES</h2>
          
          <div className="vhs-contact-items">
            {[
              {
                icon: <FaFacebook className="vhs-contact-icon" />,
                text: "Facebook",
                url: "https://www.facebook.com/vhsvideoclub"
              },
              {
                icon: <FaInstagram className="vhs-contact-icon" />,
                text: "Instagram",
                url: "https://www.instagram.com/vhsvideoclub"
              },
              {
                icon: <FaYoutube className="vhs-contact-icon" />,
                text: "YouTube",
                url: "https://www.youtube.com/vhsvideoclub"
              },
              {
                icon: <FaSpotify className="vhs-contact-icon" />,
                text: "Spotify",
                url: "https://open.spotify.com/vhsvideoclub"
              },
              {
                icon: <MdEmail className="vhs-contact-icon" />,
                text: "Escríbenos",
                url: "mailto:contacto@vhsvideoclub.com"
              },
              {
                icon: <FaPaypal className="vhs-contact-icon" />,
                text: "Colabora con nosotros",
                url: "https://www.paypal.com/vhsvideoclub"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="vhs-contact-item"
              >
                {item.icon}
                <span>{item.text}</span>
                <div className="vhs-hover-effect"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="vhs-overlay"></div>
    </div>
  );
};

export default Contacto;