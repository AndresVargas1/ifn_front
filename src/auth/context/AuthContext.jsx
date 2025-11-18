import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

/**
 * Provides authentication state and actions to children.
 *
 * Stores a simple object with an identification and jwt token when logged in.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  /**
   * Store the authentication token and user identification.
   * @param {{jwt: string, identificacion: string}} payload
   */
  const login = ({ jwt, identificacion }) => {
    setUser({ identificacion });
    setToken(jwt);
    // Persist token in localStorage if desired:
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('identificacion', identificacion);
  };

  /**
   * Clear all authentication state.
   */
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('jwt');
    localStorage.removeItem('identificacion');
  };

  const value = {
    user,
    token,
    isAuthenticated: Boolean(token),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to read the authentication context.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}