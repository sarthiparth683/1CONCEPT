import React from "react";
import ThemeToggler from "./Components/ThemeToggler";
import UserProfile from "./Components/UserProfile";
import "./Style/style.css";

const App = () => {
  return (
    <div>
      <h1>React Multiple Contexts - how to use more than one context example</h1>
      <ThemeToggler />
      <UserProfile />
    </div>
  );
};

export default App;
