import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">HoYoLAB</div>
        <div className="header-tab-wrapper">
          <a href="#" className="active">Home</a>
          <a href="#">Interest Group</a>
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Check In" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div className="nav-icons">
          <FaBell />
          <FaUser title="Profile" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
