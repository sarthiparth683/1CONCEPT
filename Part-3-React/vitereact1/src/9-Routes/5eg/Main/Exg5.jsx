import React from "react";
import style from "./style.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Comp1 from "../Components/Comp1";
import Comp2 from "../Components/Comp2";
import Comp3 from "../Components/Comp3";
import Comp4 from "../Components/Comp4";

const Exg5 = () => {
  return (
    <Router>
      <div>
        <h3>Components in different folder</h3>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <li>
              <Link to="/" className={style.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={style.navItem}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Comp1" className={style.navItem}>
                Comp1
              </Link>
            </li>
            <li>
              <Link to="/Comp2" className={style.navItem}>
                Comp2
              </Link>
            </li>
            <li>
              <Link to="/Comp3" className={style.navItem}>
                Comp3
              </Link>
            </li>
            <li>
              <Link to="/Comp4" className={style.navItem}>
                Comp4 .........
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Comp1" element={<Comp1 />} />
          <Route path="/Comp2" element={<Comp2 />} />
          <Route path="/Comp3" element={<Comp3 />} />
          <Route path="/Comp4" element={<Comp4 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Exg5;
