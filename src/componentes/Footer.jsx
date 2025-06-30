import React from "react";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="bb-footer">
      <div className="bb-footer-stripes"></div>
      
      <div className="bb-footer-content">
        {/* Logo izquierdo */}
        <div className="bb-footer-logo">
          <div className="bb-logo-frame">
            <img 
              src="/img/02-logos/logoheader1-izquierda.png" 
              alt="Logo Blockbuster" 
              className="bb-logo-img"
            />
          </div>
        </div>

        {/* Sección central */}
        <div className="bb-footer-center">
          <h3 className="bb-footer-title">
            <span className="bb-title-text">SÍGUENOS</span>
          </h3>
          
          <div className="bb-social-buttons">
            <a href="#" className="bb-social-btn">
              <i className="bi bi-geo-alt-fill"></i>
              <span>Av. Películas 1234</span>
            </a>
            <a href="#" className="bb-social-btn">
              <i className="bi bi-telephone-fill"></i>
              <span>(123) 456-7890</span>
            </a>
            <a href="#" className="bb-social-btn">
              <i className="bi bi-clock-fill"></i>
              <span>10AM - 10PM</span>
            </a>
          </div>
          
          <div className="bb-social-icons">
            <a href="https://www.instagram.com" className="bb-social-icon instagram" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
              <span className="bb-social-tooltip">Instagram</span>
            </a>
            <a href="https://www.facebook.com" className="bb-social-icon facebook" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
              <span className="bb-social-tooltip">Facebook</span>
            </a>
            <a href="https://www.twitter.com" className="bb-social-icon twitter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
              <span className="bb-social-tooltip">Twitter</span>
            </a>
            <a href="https://www.youtube.com" className="bb-social-icon youtube" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
              <span className="bb-social-tooltip">YouTube</span>
            </a>
          </div>
        </div>

        {/* Logo derecho */}
        <div className="bb-footer-logo">
          <div className="bb-logo-frame">
            <img 
              src="/img/02-logos/logoheader2-derecha.png" 
              alt="Logo VHS" 
              className="bb-logo-img"
            />
          </div>
        </div>
      </div>

      <div className="bb-footer-bottom">
        <div className="bb-copyright">
          © {new Date().getFullYear()} VHS VIDEO CLUB - TODOS LOS DERECHOS RESERVADOS
          <span className="bb-dev-credit">
            Desarrollado por <a href="https://alejandrobavaro.github.io/gondraworld-dev/" target="_blank" rel="noopener noreferrer">GONDRA WORLD DEV</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;