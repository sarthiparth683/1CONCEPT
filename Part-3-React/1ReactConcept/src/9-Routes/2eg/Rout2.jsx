import React from "react";
import HomePage from "./pages/HomePage";
import Accessories from "./pages/Accessories";
import KidsClothing from "./pages/KidsClothing";
import BoysClothing from "./pages/BoysClothing";
import GirlsClothing from "./pages/GirlsClothing";
import BabyClothing from "./pages/BabyClothing";
import Outerwear from "./pages/Outerwear";
import Playwear from "./pages/Playwear";
import Sleepwear from "./pages/Sleepwear";
import Footwear from "./pages/Footwear";
import MensClothing from "./pages/MensClothing";
import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";

const dynamicCategories = [
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" },
];

function MainNavigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/kids-clothing">Kids Clothing</Link>
      <Link to="/mens-clothing">Men's Clothing</Link>
      {dynamicCategories.map((item) => {
        return (
          <Link key={item.id} to={`/${item.id}`}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

function KidsNavigation() {
  return (
    <nav>
      <NavLink to="/kids-clothing/boys-clothing">Boys' Clothing</NavLink>
      <NavLink to="/kids-clothing/girls-clothing">Girls' Clothing</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active Hi" : "Bye Bye")}
        to="/kids-clothing/baby-clothing"
        end
      >
        Baby Clothing
      </NavLink>
    </nav>
  );
}

function BabyClothingNavigation() {
  return (
    <nav>
      <Link to="/kids-clothing/baby-clothing/outerwear">Outerwear</Link>
      <Link to="/kids-clothing/baby-clothing/playwear">Playwear</Link>
      <Link to="sleepwear">Sleepwear</Link>
      <Link to=".">.back</Link>
      <Link to="..">..back</Link>
    </nav>
  );
}

function KidsClothingLayout() {
  return (
    <>
      <KidsNavigation />
      <Outlet /> {/* This will render the nested routes */}
    </>
  );
}

function BabyClothingLayout() {
  return (
    <>
      <BabyClothingNavigation />
      <Outlet context="Hi from Baby Clothing Layout!" />{" "}
      {/* This will render the nested routes */}
    </>
  );
}

export default function Rout2() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accessories" element={<Accessories />}>
          <Route path=":accessoryid" element={<Accessories />} />
        </Route>
        <Route path="/kids-clothing" element={<KidsClothingLayout />}>
          <Route path="" element={<KidsClothing />} />
          <Route path="boys-clothing" element={<BoysClothing />} />
          <Route path="girls-clothing" element={<GirlsClothing />} />
          <Route path="baby-clothing" element={<BabyClothingLayout />}>
            <Route index={true} element={<BabyClothing />} />
            {/* <Route path="" element={<BabyClothing />} /> */}
            <Route path="outerwear" element={<Outerwear />} />
            <Route path="playwear" element={<Playwear />} />
            <Route path="sleepwear" element={<Sleepwear />} />
          </Route>
        </Route>
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/mens-clothing/*" element={<MensClothing />} />
        {/* <Route path="*" element={<h1>404</h1>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
