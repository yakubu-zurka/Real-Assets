 // src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine if the current page is "About Us"
  const isAboutPage = location.pathname === '/about';

  return (
    <nav className={`navbar ${isAboutPage ? 'transparent-navbar' : 'solid-background'}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Real Asset Logo" />
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={isAboutPage ? 'active' : ''}>About Us</Link>
          </li>
          <li>
            <Link to="#services" className={location.hash === '#services' ? 'active' : ''}>Services</Link>
          </li>
          <li>
            <Link to="#why-real-asset" className={location.hash === '#why-real-asset' ? 'active' : ''}>Why Real Asset</Link>
          </li>
          <li>
            <Link to="#for-sale" className={location.hash === '#for-sale' ? 'active' : ''}>For Sale</Link>
          </li>
          <li>
            <Link to="#contact" className={location.hash === '#contact' ? 'active' : ''}>Talk To Us</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <span className="close-icon">X</span> : <span className="open-icon">☰</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
