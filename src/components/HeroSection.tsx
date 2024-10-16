 // src/HeroSection.tsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Correct import for FontAwesome arrow
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import HeroImage from './assets/HeroImage.png'; 


const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text */}
          <div className="col-lg-6 col-md-12 hero-text">
            <h1 className="animate-text">Find Your <br /><span className='dream'>Dream </span>  Land</h1>

            <div className="hero-subtext">
              {/* Repeated Arrow and Text */}
              {[...Array(3)].map((_, idx) => (
                <div className="arrow-text" key={idx}>
                  <div className="arrow-circle">
                    <FaArrowRight />
                  </div>
                  <p>Time is more valuable than money</p>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="hero-button">
              <button className="btn btn-primary">
                Get Started <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 hero-image">
            <img
              src= {HeroImage}
              alt="Dream Land"
              className="animate-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
