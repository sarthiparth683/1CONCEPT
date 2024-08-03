import React, { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ Children }) => {
  const test = "Test-11";
  return <AppContext.Provider value={{ test }}>{Children}</AppContext.Provider>;
};
