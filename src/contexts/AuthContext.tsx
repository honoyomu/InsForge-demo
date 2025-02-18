import React, { createContext, useContext, useEffect, useState } from 'react';
import { isAuthenticated, handleAuthRedirect, logout } from '../utils/auth';

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for auth redirect and token in URL
    const hasRedirectedWithToken = handleAuthRedirect();
    
    // Update auth state
    setIsLoggedIn(isAuthenticated());
    setLoading(false);
  }, []);

  const value = {
    isLoggedIn,
    loading,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 