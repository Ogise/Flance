import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    // Replace this with your sign-up logic (e.g., API call)
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        setCurrentUser({ email });
        resolve();
      }, 1000);
    });
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
