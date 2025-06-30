import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../assets/scss/_03-Componentes/_TiendaCarritoCompra.scss";

const TiendaCarritoCompra = ({ cart = [], removeFromCart, handlePagar, updateProductQuantity }) => {
  const [localCart, setLocalCart] = useState(cart);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const total = localCart.reduce((sum, product) => sum + (product.precio * (product.quantity || 1)), 0);

  const handleComprar = () => {
    setIsPaying(true);
    new Audio('/sounds/cash-register.mp3').play().catch(console.error);
    
    setTimeout(() => {
      handlePagar();
      setIsPaying(false);
      Swal.fire({
        title: "¡COMPRA EXITOSA!",
        text: "TU PEDIDO ESTÁ EN CAMINO",
        icon: "success",
        background: "rgba(10, 26, 58, 0.95)",
        color: "#ffd100",
        confirmButtonText: "¡GENIAL!",
        confirmButtonColor: "#122b5a"
      });
    }, 2000);
  };

  const handleQuantityChange = (id, delta) => {
    new Audio('/sounds/knob-turn.mp3').play().catch(console.error);
    
    setLocalCart(prevCart => {
      return prevCart.map(product => 
        product.id === id
          ? { ...product, quantity: Math.max(1, (product.quantity || 1) + delta) }
          : product
      );
    });
    updateProductQuantity(id, (localCart.find(product => product.id === id)?.quantity || 1) + delta);
  };

  return (
    <div className="cart-container">
      <div className="cart-tape"></div>
      
      <section className="cart-header">
        <h1 className="cart-title">
          <span>◉</span> CARRITO DE COMPRAS <span>◉</span>
        </h1>
      </section>

      <div className="cart-content">
        <div className="cart-summary">
          <h3 className="summary-title">RESUMEN DE COMPRA</h3>

          <div className="cart-details">
            <div className="total-info">
              <p>TOTAL: <span>${total.toFixed(2)}</span></p>
              <p>PRODUCTOS: <span>{localCart.length}</span></p>
            </div>

            <ul className="product-list">
              {localCart.map((product) => (
                <li key={product.id} className="product-item">
                  <div className="image-container">
                    <img
                      src={product.imagenes[0]}
                      alt={product.nombre}
                      className="product-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/img/default-vinyl.png"; 
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <span className="product-name">{product.nombre}</span>
                    <div className="price-quantity">
                      <span className="product-price">${(product.precio || 0).toFixed(2)}</span>
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          −
                        </button>
                        <span className="quantity-display">
                          {product.quantity || 1}
                        </span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      new Audio('/sounds/record-scratch.mp3').play().catch(console.error);
                      removeFromCart(product.id);
                    }}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="checkout-section">
              <button 
                onClick={handleComprar} 
                className={`checkout-btn ${isPaying ? 'processing' : ''}`}
                disabled={isPaying || localCart.length === 0}
              >
                {isPaying ? "PROCESANDO..." : "REALIZAR PAGO"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaCarritoCompra;