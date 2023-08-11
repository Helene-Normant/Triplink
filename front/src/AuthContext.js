import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const login = () => {
    setUserLoggedIn(true);
  };

  const logout = () => {
    setUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}