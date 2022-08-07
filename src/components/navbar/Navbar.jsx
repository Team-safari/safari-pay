import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <h1>SafariPay</h1>
        </Link>
        <div className="nav_items">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Contact us</Link>
        </div>
        <div className="nav_cta">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
