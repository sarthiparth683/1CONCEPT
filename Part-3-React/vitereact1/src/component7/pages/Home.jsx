import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  // const handleCheckUser = () => {
  //   navigate("/products");
  // };
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <Navigate  to={"/products"} />
  }

  return (
    <div>
      <h1> Home</h1>
      {/* <button onClick={handleCheckUser}>Check User</button> */}
    </div>
  );
};

export default Home;
