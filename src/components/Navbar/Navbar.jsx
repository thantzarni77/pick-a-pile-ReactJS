import React from "react";
import logo from "../../../public/img/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="title">Pick a Pile</div>
    </div>
  );
};

export default Navbar;
