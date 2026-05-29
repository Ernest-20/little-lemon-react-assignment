import React from "react";
import logo from "./assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon logo" className="logo" />
      <h1>Little Lemon Restaurant</h1>
    </header>
  );
}

export default Header;