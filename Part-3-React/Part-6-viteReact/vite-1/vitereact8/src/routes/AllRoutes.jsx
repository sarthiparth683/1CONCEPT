import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Employee from "../pages/Employee/Employee";
import Navbar from "../components/Navbar";
import Test from "../pages/Test";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route   path="test"  element={ <Test/> } />
      </Routes>
    </div>
  );
};

export default AllRoutes;
