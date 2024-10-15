 // src/Navbar.tsx
import React, { useState } from 'react';
import './Navbar.css';  // We'll add custom styles in this file
import logo from './assets/logo.png';  

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  // State for the hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
         <img src={logo} alt="Real Asset Logo" />
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-real-asset">Why Real Asset</a></li>
          <li><a href="#for-sale">For Sale</a></li>
          <li><a href="#contact">Talk To Us</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <span className="close-icon">X</span> : <span className="open-icon">☰</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
