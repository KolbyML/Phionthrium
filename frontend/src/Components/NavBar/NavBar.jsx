import React, { useContext } from "react";
import { HashLink } from 'react-router-hash-link';
import { PublicKeyContext } from "../../App";
import "./styles.css"


export const NavBar = () => {
  const {publicKey} = useContext(PublicKeyContext)
  return (
    <nav className="navbar">
      <HashLink to="/#" title="phionthrium"><img width="26px" className="navIcon" src="https://raw.githubusercontent.com/Zeyu-Li/Phionthrium/main/frontend/public/logo.svg" alt="logo" /> phion<u>thrium</u></HashLink>
      <div className="navItems">
          <HashLink title="Home" to="/#" >Home</HashLink>
          <HashLink title="About" to="/#about" >About</HashLink>
          <HashLink title="New Project" to="/new">New Project</HashLink>
          {
            publicKey ? <></> :
            <HashLink title="Login" to="/Login" >Login</HashLink>
        }
      </div>
    </nav>
  );
};
