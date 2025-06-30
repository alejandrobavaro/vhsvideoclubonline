import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SesionAuthContext';
import LoadingSpinner from './SesionLoadingSpinner';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: { email } });
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="blockbuster-auth-container">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="blockbuster-login-card">
          <div className="film-strip-border">
            <div className="card-content">
              <h2 className="card-title">ACCESO VIP</h2>
              <div className="card-image">
                <img src="/img/blockbuster-logo.png" alt="Blockbuster Logo" />
              </div>
              <form onSubmit={handleLogin} className="blockbuster-auth-form">
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
                  <label>CONTRASEÑA</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="blockbuster-input"
                    required
                  />
                </div>
                <button type="submit" className="blockbuster-button">
                  INICIAR SESIÓN
                </button>
              </form>
              <div className="card-footer">
                EXCLUSIVO PARA CLIENTES REGISTRADOS
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;