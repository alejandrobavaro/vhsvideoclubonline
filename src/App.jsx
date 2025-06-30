import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import Contacto from './componentes/Contacto';
import ContactoFormularioSlider from './componentes/ContactoFormularioSlider';
import PublicidadDebajo from './componentes/MainPublicidadSlider';
import Footer from './componentes/Footer';
import Tienda from './componentes/Tienda';
import CarritoCompleto from './componentes/TiendaCarritoCompra';
import { OfertasProvider } from './componentes/TiendaOfertasContext';
import { AuthProvider } from './componentes/SesionAuthContext';
import Login from './componentes/SesionLogin';
import Register from './componentes/SesionRegistrate';
import Logout from './componentes/SesionLogout';

import MainWhatsappIcon from './componentes/MainWhatsappIcon';
import '../src/assets/scss/_01-General/_BodyIndexApp.scss';

function App() {
  const [productCart, setProductCart] = useState([]);
  const [musicCart, setMusicCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRewinding, setIsRewinding] = useState(false);

  const addProductToCart = (product) => {
    setProductCart([...productCart, product]);
    playVhsEffect();
  };

  const removeProductFromCart = (id) => {
    setProductCart(productCart.filter((product) => product.id !== id));
  };



  const playVhsEffect = () => {
    setIsRewinding(true);
    const audio = new Audio('/sounds/vhs-rewind.mp3');
    audio.play();
    setTimeout(() => setIsRewinding(false), 1000);
  };

  const showVhsAlert = (title, html, confirmText, cancelText) => {
    return Swal.fire({
      title: `<span class="vhs-alert-title">${title}</span>`,
      html: `<div class="vhs-alert-content">${html}</div>`,
      imageUrl: '/img/blockbuster-logo.png',
      imageWidth: 200,
      imageAlt: 'Blockbuster Logo',
      background: '#001a4d',
      color: '#fff',
      showCancelButton: true,
      confirmButtonColor: '#ffd800',
      cancelButtonColor: '#ff0000',
      confirmButtonText: `<span class="vhs-alert-button">${confirmText}</span>`,
      cancelButtonText: `<span class="vhs-alert-button">${cancelText}</span>`,
      customClass: {
        popup: 'vhs-popup',
        title: 'vhs-title',
        content: 'vhs-content',
        confirmButton: 'vhs-button',
        cancelButton: 'vhs-button',
        actions: 'vhs-actions'
      },
      focusConfirm: false,
      buttonsStyling: false
    });
  };

  const handlePagar = () => {
    showVhsAlert(
      '¡ALQUILER CONFIRMADO!',
      'TU PELÍCULA SERÁ ENVIADA<br>¿LISTO PARA EL CHECKOUT?',
      'CONFIRMAR',
      'CANCELAR'
    ).then((result) => {
      if (result.isConfirmed) {
        window.open('https://www.paypal.com/paypalme/alegondramusic?country.x=AR&locale.x=es_XC', '_blank');
      }
    });
  };

  return (
    <Router>
      <AuthProvider>
        <OfertasProvider>
          <div className={`vhs-container ${isRewinding ? 'rewinding' : ''}`}>
       
            
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            
            <div className="vhs-divider"></div>
            
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/contacto" element={<><Contacto /><ContactoFormularioSlider /></>} />
              <Route path="/tienda" element={
                <Tienda 
                  setCart={setProductCart} 
                  cart={productCart} 
                  addToCart={addProductToCart} 
                  removeFromCart={removeProductFromCart} 
                  searchQuery={searchQuery} 
                  setSearchQuery={setSearchQuery} 
                />
              } />
              <Route path="/carrito" element={
                <CarritoCompleto 
                  cart={productCart} 
                  removeFromCart={removeProductFromCart} 
                  handlePagar={handlePagar} 
                />
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
 
            </Routes>
            
            <div className="vhs-divider">
              <div className="vhs-tape"></div>
            </div>
            
            <PublicidadDebajo />
            <Footer />
            <MainWhatsappIcon />
          </div>
        </OfertasProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;