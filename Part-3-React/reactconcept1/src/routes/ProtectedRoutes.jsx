import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuth = true;
  if (!isAuth) return <Navigate to={"/login"} />;
  return children;
};

export default ProtectedRoutes;
