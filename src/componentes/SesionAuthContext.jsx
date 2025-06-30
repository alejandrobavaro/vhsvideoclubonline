import React, { createContext, useReducer, useContext } from 'react';
import '../assets/scss/_03-Componentes/_SesionLoginRegister.scss';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    case 'REGISTER':
      return { ...state, isAuthenticated: true, user: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false, user: null });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div className="blockbuster-auth-system">
        {children}
      </div>
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };