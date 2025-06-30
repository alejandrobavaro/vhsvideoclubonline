import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./SesionAuthContext";
import { BiUser, BiUserPlus, BiLogOut } from "react-icons/bi";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const { state, dispatch } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showSearch = location.pathname === "/tienda" || location.pathname === "/musica";

  return (
    <header className={`vhs-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="vhs-header-top-bar"></div>
      
      <div className="vhs-header-container">
        <Link to="/" className="vhs-logo">
          <img
            src="/img/02-logos/logovhsvideoclibonline1.png"
            alt="VHS Videoclub Logo"
            className="vhs-logo-img"
            loading="lazy"
          />
        </Link>

        {showSearch && (
          <div className="vhs-search-container">
            <input
              type="search"
              className="vhs-search"
              placeholder={location.pathname === "/tienda" ? "BUSCAR PELÍCULAS..." : "BUSCAR MÚSICA..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar"
            />
          </div>
        )}

        <nav className={`vhs-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="vhs-nav-main-links">
            <Link to="/" className="vhs-nav-link">INICIO</Link>
            <Link to="/videoclub" className="vhs-nav-link">VIDEOCLUB</Link>
            <Link to="/contacto" className="vhs-nav-link">CONTACTO</Link>
            <Link to="/tienda" className="vhs-nav-link">TIENDA</Link>
          </div>
          
          <div className="vhs-nav-auth-links">
            {state.isAuthenticated ? (
              <>
                <button 
                  className="vhs-btn-logout" 
                  onClick={() => dispatch({ type: "LOGOUT" })}
                >
                  CERRAR SESIÓN
                </button>
                <Link 
                  to="/account" 
                  className="vhs-btn-auth" 
                  title="Mi cuenta"
                >
                  <BiUser className="vhs-auth-icon" />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="vhs-btn-login">INICIAR SESIÓN</Link>
                <Link to="/register" className="vhs-btn-register">REGISTRARSE</Link>
                <Link to="/login" className="vhs-btn-auth" title="Iniciar sesión">
                  <BiUser className="vhs-auth-icon" />
                </Link>
                <Link to="/register" className="vhs-btn-auth" title="Registrarse">
                  <BiUserPlus className="vhs-auth-icon" />
                </Link>
              </>
            )}
          </div>
        </nav>

        <button 
          className={`vhs-menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span className="vhs-menu-line"></span>
          <span className="vhs-menu-line"></span>
          <span className="vhs-menu-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;