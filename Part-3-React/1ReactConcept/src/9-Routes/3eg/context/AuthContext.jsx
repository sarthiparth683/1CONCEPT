import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const initState = { isAuth: false, token: null };
  const [auth, setAuth] = useState(initState);
  const [loading, setLoading] = useState(false);

  const login = (token) => {
    setAuth({
      ...auth,
      isAuth: true,
      token: token,
    });
  };
  
  const logout = () => {
    setAuth(initState);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, setLoading, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
