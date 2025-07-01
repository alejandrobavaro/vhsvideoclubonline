import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="vhs-footer">
      <div className="vhs-footer-top">
        <div className="vhs-footer-logo">
          <img 
            src="/img/02-logos/logovhsvideoclibonline1.png" 
            alt="VHS Videoclub Logo" 
            className="vhs-logo-img"
            loading="lazy"
          />
        </div>

        <div className="vhs-footer-links">
          <div className="vhs-link-section">
            <h3 className="vhs-section-title">CONTACTO</h3>
            <div className="vhs-contact-info">
              <a href="#" className="vhs-contact-link">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Av. Películas 1234</span>
              </a>
              <a href="tel:+1234567890" className="vhs-contact-link">
                <i className="bi bi-telephone-fill"></i>
                <span>(123) 456-7890</span>
              </a>
              <div className="vhs-contact-link">
                <i className="bi bi-clock-fill"></i>
                <span>10AM - 10PM</span>
              </div>
            </div>
          </div>

          <div className="vhs-link-section">
            <h3 className="vhs-section-title">ENLACES</h3>
            <nav className="vhs-nav-links">
              <Link to="/about" className="vhs-nav-link">NOSOTROS</Link>
              <Link to="/terms" className="vhs-nav-link">TÉRMINOS</Link>
              <Link to="/privacy" className="vhs-nav-link">PRIVACIDAD</Link>
              <Link to="/contact" className="vhs-nav-link">CONTACTO</Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="vhs-footer-social">
        <div className="vhs-social-links">
          <a href="https://www.instagram.com" className="vhs-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com" className="vhs-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="vhs-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.youtube.com" className="vhs-social-icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>

      <div className="vhs-footer-bottom">
        <p className="vhs-copyright">
          © {new Date().getFullYear()}  TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="vhs-credits">
          <a href="https://alejandrobavaro.github.io/gondraworld-dev/" target="_blank" rel="noopener noreferrer">GONDRA WORLD DEV</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;