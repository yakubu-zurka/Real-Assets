import React from 'react';
import './Footer.css';  // Create a separate CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';  // Replace with the actual logo path
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Pre-Footer Box */}
      <div className="pre-footer">
        <p>Need a loan to purchase a piece of land?</p>
        <button className="loan-btn">Get “ASAASE” Loan</button>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            {/* Logo and Social Media */}
            <div className="col-lg-6 col-md-12">
              <img src={logo} alt="Real Asset Logo" className="footer-logo" />
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-end align-items-center social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>

          {/* Footer Links and Information */}
          <div className="row footer-content">
            {/* First Column */}
            <div className="col-lg-4 col-md-12">
              <p>
                Real Assets Limited is a limited liability company. 
                It was established as a result of a partnership 
                between Multibility Ventures and YIM investments 
                which started as a sole proprietorship in Accra, Ghana. 
                The company in a strategic partnership is poised to 
                deliver superior service to its valued customers.
              </p>
            </div>

            {/* Second Column - Quick Links */}
            <div className="col-lg-4 col-md-12">
              <h5>Quick Links</h5>
              <ul className="quick-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/why-real-estate">Why Real Estate</a></li>
              </ul>
            </div>

            {/* Third Column - Connect With Us */}
            <div className="col-lg-4 col-md-12">
              <h5>Connect With Us</h5>
              <div className="contact-info">
                <FaMapMarkerAlt />
                <p>123 Street Name, Accra, Ghana</p>
              </div>
              <div className="contact-info">
                <FaPhoneAlt />
                <p>+233 123 456 789</p>
              </div>
              <div className="contact-info">
                <FaEnvelope />
                <p>info@realassets.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row footer-bottom">
            <div className="col-lg-6 col-md-12">
              <p>© Real Assets Limited. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-end">
              <p>Powered by COLDSiS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
