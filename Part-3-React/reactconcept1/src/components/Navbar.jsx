import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <div className="flex gap-4 bg-red-100 w-fit">
      {links.map((el) => {
        return (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            key={el.name}
            to={el.path}
          >
            {el.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
