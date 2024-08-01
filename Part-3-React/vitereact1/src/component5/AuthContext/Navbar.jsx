import React from "react";
import { useContext } from "react";
import AuthContext from '..\src\context\AuthContext.jsx'

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <p>Navbar</p>
      <button onClick={logout}>Logout</button>
      <button onClick={toggleTheme}>
        ToggleTheme: {theme ? "light" : "dark"}
      </button>
    </div>
  );
};
   
export default Navbar;
