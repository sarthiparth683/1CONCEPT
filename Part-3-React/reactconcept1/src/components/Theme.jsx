import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div>
      <h1>Theme: {}</h1>
      <button
        onClick={toggle}
        className="bg-red-500 p-4 rounded-full cursor-pointer"
      >
        Switch to {theme === "light" ? "dark" : "light"}{" "}
      </button>
    </div>
  );
};

export default Theme;
