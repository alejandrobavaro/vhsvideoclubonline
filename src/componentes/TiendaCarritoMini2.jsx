import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { BsArrowsCollapse, BsArrowsExpand, BsCart4 } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_TiendaCarritoMini2.scss";
import "../assets/scss/_01-General/_SweetAlert.scss";

const TiendaCarritoMini2 = ({ cart, removeFromCart, clearCart }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [localCart, setLocalCart] = useState(cart);
  const location = useLocation();
  const total = localCart.reduce((sum, product) => sum + product.precio * (product.quantity || 1), 0);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handlePurchaseClick = () => {
    if (localCart.length === 0) {
      Swal.fire({
        title: "¡CARRITO VACÍO!",
        text: "AÑADE PELÍCULAS PRIMERO",
        icon: "error",
        background: "#0a1a3a",
        color: "#ffd100",
        confirmButtonText: "ACEPTAR",
        customClass: {
          popup: "blockbuster-swal-popup",
          title: "blockbuster-swal-title",
          confirmButton: "blockbuster-swal-button",
          icon: "blockbuster-swal-icon"
        },
        buttonsStyling: false,
        iconHtml: '✕',
      });
      return;
    }
  };

  return (
    <div className={`blockbuster-floating-cart ${isMinimized ? "minimized" : ""}`}>
      <div className="film-strip"></div>
      
      {location.pathname.startsWith("/tienda") && !isMinimized && (
        <div className="blockbuster-cart-header">
          <div className="blockbuster-cart-total">
            <span className="blockbuster-total-label">TOTAL</span>
            <span className="blockbuster-total-amount">${total.toFixed(2)}</span>
          </div>

          <div className="blockbuster-cart-count">
            <BsCart4 className="blockbuster-cart-icon" />
            <span className="blockbuster-items-count">{localCart.length}</span>
          </div>
        </div>
      )}
      
      <div className="blockbuster-cart-actions">
        <Link to="/carrito" className="blockbuster-cart-link">
          <button
            className={`blockbuster-checkout-btn ${isMinimized ? "minimized" : ""}`}
            onClick={handlePurchaseClick}
            disabled={localCart.length === 0}
          >
            {isMinimized ? (
              <span className="minimized-icon">🎬</span>
            ) : (
              "IR A PAGAR"
            )}
          </button>
        </Link>
        <button
          className="blockbuster-toggle-btn"
          onClick={() => setIsMinimized((prevState) => !prevState)}
        >
          {isMinimized ? <BsArrowsExpand className="toggle-icon" /> : <BsArrowsCollapse className="toggle-icon" />}
        </button>
      </div>
    </div>
  );
};

export default TiendaCarritoMini2;