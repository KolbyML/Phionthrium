import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./styles.css"

const NavBar = () => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item direction="row" justifyContent="center" alignItems="center">
        <p>phiothrium</p>
      </Grid>
      <Grid item direction="row" justifyContent="center" alignItems="center">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </Grid>
    </Grid>
  );
};

export default NavBar;
