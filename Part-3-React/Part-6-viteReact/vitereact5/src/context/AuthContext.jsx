import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const login = () => {
    setIsloggedin(true);
  };
  const logout = () => {
    setIsloggedin(false);
  };

  const val = { isloggedin, login, logout };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};
