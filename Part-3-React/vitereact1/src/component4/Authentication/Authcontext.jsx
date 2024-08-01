import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ childern }) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsloggenIn(false);
  };

  return (
    <AuthContextProvider value={{ isloggenIn, login, logout }}>
      {children}
    </AuthContextProvider>
  );
};
