import React from "react";
import { NavLink } from "react-router";
const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <nav>
        <NavLink to="/" style={{ margin: "10px", fontSize: "25px" }}>
          Home
        </NavLink>
        <NavLink to="/login" style={{ margin: "10px", fontSize: "25px" }}>
          Login
        </NavLink>
        <NavLink to="/signup" style={{ margin: "10px", fontSize: "25px" }}>
          SignUp
        </NavLink>
      </nav>
    </div>
  );
};

export default App;
