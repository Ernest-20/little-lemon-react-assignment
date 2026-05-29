import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="/booking">Book a Table</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;