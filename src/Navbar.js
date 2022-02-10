import React from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
  return (
    <div style={{ marginTop: "20px"}}>
      <Link to="/about" style={{ margin: "10px", color: "blue", fontSize: "20px", textDecoration: "none"}}>About</Link>
      <Link to="/" style={{ margin: "10px", color: "blue", fontSize: "20px", textDecoration: "none"}}>Home</Link>
    </div>
  )
}