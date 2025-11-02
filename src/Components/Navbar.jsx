import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">CuteCart 🛍️</h2>
      <div className="links">
        <Link to="/">Products 🧺</Link>
        <Link to="/cart">Cart 🛒({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
