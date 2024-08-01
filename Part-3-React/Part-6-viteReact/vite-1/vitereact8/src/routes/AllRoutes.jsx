import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Test from "../pages/Test";
import Employee from "../pages/Employee";
// import Chakra from "../pages/Chakra";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="/charkra" element={<Chakra />} />  */}
      </Routes>
    </div>   
  );        
};

export default AllRoutes;
