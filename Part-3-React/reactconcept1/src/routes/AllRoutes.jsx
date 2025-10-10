import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route
          path="/contact"
          element={
            <ProtectedRoutes>
              <h1>Contact page</h1>
            </ProtectedRoutes>
          }
        />
        <Route path="/about" element={<h1>About page</h1>} />
        <Route
          path="/login"
          element={<h1 className="text-2xl">Login page</h1>}
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
