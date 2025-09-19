import React from "react";
import "../App.css";
// ********************

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        Start<span className="highlight">IT</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
