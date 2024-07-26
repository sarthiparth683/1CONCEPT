
import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  
const a = "test-1";
  return (
    <AuthContext.Provider value={ a }>
      {children}
    </AuthContext.Provider>
  );
};
