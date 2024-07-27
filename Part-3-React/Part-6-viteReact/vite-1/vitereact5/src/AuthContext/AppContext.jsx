import React, { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ Children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return <AppContext.Provider value={{theme, toggleTheme}}>{Children}</AppContext.Provider>;
};
   