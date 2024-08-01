import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const Links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/login",
      name: "Login",
    },
    {
      path: "/products",
      name: "Products",
    },
  ];
  const inactive = {
    color: "black",
    textDecoraiton: "none",
  };
  const active = {
    color: "blue",
    textDecoraiton: "none",
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
      <p> CAP-11 Application </p>
      <div style={{ display: "flex", gap: "20px" }}>
        {Links.map((el) => {
          return (
            <NavLink
              style={({ isActive }) => (isActive ? active : inactive)}
              to={el.path}
              key={el.name}
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
