import React from "react";
import Modal from "react-modal";
import '../assets/scss/_03-Componentes/_TiendaModalInicio.scss';

Modal.setAppElement("#root");

const TiendaModalInicio = ({ showModal, closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleClose}
      contentLabel="Promoción"
      className="BlockbusterModal"
      overlayClassName="BlockbusterOverlay"
      closeTimeoutMS={300}
    >
      <div className="film-strip-overlay"></div>
      
      <div className="film-strip-top"></div>
      
      <div className="blockbuster-modal-wrapper">
        <button onClick={handleClose} className="blockbuster-modal-close">
          ✕
        </button>
        
        <div className="blockbuster-modal-content">
          <h2 className="blockbuster-modal-title">¡OFERTAS EXCLUSIVAS!</h2>
          <p className="blockbuster-modal-subtitle">DESCUENTOS ESPECIALES EN PELÍCULAS</p>
          
          <div className="blockbuster-promo-list">
            <div className="blockbuster-promo-item">SUPER OFERTAS!</div>
            <div className="blockbuster-promo-item">BLU-RAYS 20% OFF!</div>
            <div className="blockbuster-promo-item">ENVÍOS A TODO EL PAÍS!</div>
            <div className="blockbuster-promo-item">PROMOCIONES ESPECIALES!</div>
          </div>
          
          <div className="blockbuster-divider"></div>
          
          <button onClick={handleClose} className="blockbuster-primary-btn">
            ¡VER CATÁLOGO!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TiendaModalInicio;