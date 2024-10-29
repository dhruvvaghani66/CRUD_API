import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Shopping App</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>
    </div>
  );
};

export default Navbar;
