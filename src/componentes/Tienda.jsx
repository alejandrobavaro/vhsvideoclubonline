import React, { useState, useEffect } from "react";
import Toastify from "toastify-js";
import Swal from "sweetalert2";
import ProductosTienda from "./TiendaProductos";
import TiendaCarritoMini2 from "./TiendaCarritoMini2";
import TiendaProductoDetalle from "./TiendaProductoDetalle";
import TiendaModalInicio from "./TiendaModalInicio";
import { useOfertas } from "./TiendaOfertasContext";
import '../assets/scss/_03-Componentes/_Tienda.scss';

function Tienda({ cart, setCart, addToCart, removeFromCart, searchQuery, setSearchQuery }) {
  const [products, setProducts] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showModal, setShowModal] = useState(true);
  const { ofertas } = useOfertas();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([{
          id: 1,
          nombre: "Featured Product",
          precio: 9999,
          imagenes: ["/img/default-movie.png"],
          categoria: "dvd",
          descripcion: "Monthly featured movie"
        }]);
      }
    };
    cargarProductos();
  }, []);

  const handleShowDetalle = (producto) => {
    setDetalle(producto);
    new Audio('/sounds/vhs-insert.mp3').play().catch(console.error);
  };

  const handleAddToCart = (producto) => {
    addToCart(producto);
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
    
    Toastify({
      text: `✧ ${producto.nombre.toUpperCase()} ADDED TO CART ✧`,
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        background: "rgba(10, 26, 58, 0.95)",
        color: "#ffd100",
        border: "2px solid #ffd100",
        boxShadow: "0 0 15px rgba(255, 209, 0, 0.7)",
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase"
      }
    }).showToast();
  };

  const handleClearCart = () => {
    Swal.fire({
      title: 'EMPTY CART?',
      text: "THIS WILL REMOVE ALL ITEMS!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#122b5a',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'CONFIRM',
      cancelButtonText: 'CANCEL',
      background: 'rgba(10, 26, 58, 0.98)',
      color: '#ffd100'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Toastify({
          text: "✧ CART EMPTIED ✧",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          style: {
            background: "rgba(255, 0, 0, 0.8)",
            color: "#ffffff",
            border: "2px solid #ffd100",
            boxShadow: "0 0 15px rgba(255, 0, 0, 0.7)"
          }
        }).showToast();
      }
    });
  };

  const filteredProducts = products.filter(product =>
    product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'Todos' || product.categoria === selectedCategory)
  );

  return (
    <div className={`tienda-container ${isPlaying ? 'pulse-effect' : ''}`}>
      <div className="tape-decoration"></div>
      
      <div className="tienda-content">
        <ProductosTienda
          products={filteredProducts}
          addToCart={handleAddToCart}
          handleShowDetalle={handleShowDetalle}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        
        <TiendaCarritoMini2
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={handleClearCart}
        />
        
        {detalle && (
          <TiendaProductoDetalle 
            producto={detalle} 
            onClose={() => setDetalle(null)} 
          />
        )}
        
        {showModal && (
          <TiendaModalInicio 
            showModal={showModal} 
            closeModal={() => setShowModal(false)} 
          />
        )}
      </div>
    </div>
  );
}

export default Tienda;