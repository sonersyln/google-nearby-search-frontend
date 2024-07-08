import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/" onClick={handleLogoClick} className="logo-link">
            <img src={logo} alt="Logo" className="logo-image" />
            <h1>Nearby Places Finder</h1>
          </a>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a
            href="https://github.com/sonersyln"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sonerseylan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
