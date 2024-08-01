import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetails from "../pages/ProductDetails";
import PrivateRotes from "./PrivateRotes";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivateRotes>
              <Products />
            </PrivateRotes>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRotes>
              <ProductDetails />
            </PrivateRotes>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
