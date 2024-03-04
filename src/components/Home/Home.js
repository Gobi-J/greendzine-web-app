import React, { useState } from "react";
import "./style.css";
import Dashboard from "./Dashboard";
import Users from "../User/Users";
import { FaHome, FaUser } from "react-icons/fa";
import contact from "../../assets/Group 46.png";
import imag from "../../assets/moptro logo.png";

const Home = () => {
  const [isHome, setIsHome] = useState(true);
  return (
    <div className="home-page">
      <img className="contact" src={contact} alt="Contact Us" />
      <div className="logo-image">
        <img src={imag} className="image-logo" alt="logo" />
        <span className="indi">4</span>
      </div>
      {isHome ? <Dashboard /> : <Users />}
      <nav>
        <div
          className={`nav-item ${isHome ? "active" : ""}`}
          onClick={() => setIsHome(true)}
        >
          <FaHome />
        </div>
        <div
          className={`nav-item ${!isHome ? "active" : ""}`}
          onClick={() => setIsHome(false)}
        >
          <FaUser />
        </div>
      </nav>
    </div>
  );
};

export default Home;
