import React, { createContext, useState } from "react";

// 1
export const ThemeContext = createContext();

// 2
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

//   3
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
