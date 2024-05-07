import React from "react";
import logo from "../logo.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={classes.Navbar}>
        <img src={logo} alt="logo" />
      </nav>
    </header>
  );
};

export default Navbar;
