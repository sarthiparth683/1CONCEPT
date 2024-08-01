import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const login = () => {
    setIsloggedin(true);
  };
  const logout = () => {
    setIsloggedin(false);
  };

  const test = "Test-1";

  const val = { isloggedin, login, logout, test };
  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};
