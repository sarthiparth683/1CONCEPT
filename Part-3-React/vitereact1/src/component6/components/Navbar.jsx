import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { auth, Logout } = useContext(AuthContext);
  return (
    <div>
      <p> Navbar</p>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Navbar;
 