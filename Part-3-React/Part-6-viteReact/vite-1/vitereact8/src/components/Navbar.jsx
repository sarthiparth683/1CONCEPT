import React from "react";
// import Navlink here
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let Links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/employee",
      name: "Employee",
    },
    {
      path: "/test",
      name: "Login",
    },
    {
      path: "/Test",
      name: "Test",
    },
  ];

  const activeStyle = {
    color: "red",
    textDecoration: "none",
    fontSize: "20px",
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "20px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        background: "lightgreen",
        alignItems: "center",
      }}
    >
      <p>Employee Management Application</p>
      <div style={{ display: "flex", gap: "50px" }}>
        {Links.map((el) => {
          return (
            <NavLink
              key={el.path}
              to={el.path}
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            >
              {el.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
