import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("¡LAS CONTRASEÑAS NO COINCIDEN!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'REGISTER', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="blockbuster-auth-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="blockbuster-register-card">
          <div className="card-header">
            <h2>ÚNETE AL CLUB</h2>
            <div className="film-strip-decoration"></div>
          </div>
          <div className="card-image">
            <img src="/img/blockbuster-logo.png" alt="Blockbuster Logo" />
          </div>
          <form onSubmit={handleRegister} className="blockbuster-auth-form">
            <div className="form-group">
              <label>CORREO ELECTRÓNICO</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="blockbuster-input"
                required
              />
            </div>
            <div className="form-group">
              <label>CREA TU CONTRASEÑA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="blockbuster-input"
                required
              />
            </div>
            <div className="form-group">
              <label>CONFIRMA TU CONTRASEÑA</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="blockbuster-input"
                required
              />
            </div>
            <button type="submit" className="blockbuster-button">
              REGISTRARSE
            </button>
          </form>
          <div className="card-footer">
            ¡RECIBE OFERTAS EXCLUSIVAS!
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;