import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token is present in localStorage
    const token = localStorage.getItem('token');

    if (token) {
      // If token exists, set the user as authenticated
      setIsAuthenticated(true);
      setUser({ token }); // You can keep user details if needed
      // navigate("/dashboard"); // Navigate to dashboard if authenticated
    } else {
      setIsAuthenticated(false);
    }
  }, [navigate]); // This will run once when the component mounts

  const login = (token, userData) => {
    localStorage.setItem('token', token); // Store token in localStorage
    setUser({ ...userData, token });
    setIsAuthenticated(true);
    navigate("/dashboard"); // Navigate to dashboard on login
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    setUser(null);
    setIsAuthenticated(false);
    navigate("/"); // Redirect to home or login page
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
