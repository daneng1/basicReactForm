import React from "react";
// import { Link } from "react-router-dom";
import NavBar from "../Navbar";

export default function About () {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
      <NavBar/>
      <p>Hello</p>
    </div>
  )
}