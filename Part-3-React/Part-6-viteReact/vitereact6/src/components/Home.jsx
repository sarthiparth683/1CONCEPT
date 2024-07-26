import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";

const Home = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <h4>Token: {auth.token}</h4>
    </div>
  );
};

export default Home;
  