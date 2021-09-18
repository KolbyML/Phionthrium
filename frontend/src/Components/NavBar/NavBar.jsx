import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./styles.css"

export const NavBar = () => {
  return (
    <nav className="navbar">
      <HashLink to="/#" title="phionthrium">phion<u>thrium</u></HashLink>
      <div className="navItems">
          <HashLink title="Home" to="/#" >Home</HashLink>
          <HashLink title="About" to="/#about" >About</HashLink>
          <HashLink title="Login" to="/Login" >Login</HashLink>
      </div>
    </nav>
  );
};
