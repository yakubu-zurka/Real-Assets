// src/WelcomeSection.tsx
import React from 'react';
import './WelcomeSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  maninhouse from './assets/maninhouse.png'; 



const WelcomeSection: React.FC = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Text and Circles */}
          <div className="col-lg-6 col-md-12 welcome-text">
            {/* Welcome Message */}
            <h2 className="welcome-message">WELCOME TO REAL ASSETS</h2>

            {/* Description */}
            <p className="description">
              A member of the Multibility Group of Companies. REAL ASSETS LIMITED is one of the best and trusted real estate companies in Ghana. We represent a notable success with 20 years of experience in the Industry and over 1,000 CUSTOMERS (both Individuals and Companies). It is our aim to exceed the ordinary Ghanaian's expectation in asset acquisition by offering a wide range of products including:
            </p>

            {/* Circles with Numbers */}
            <div className="row circles">
              {/* First Row */}
              <div className="col-6 circle-text">
                <div className="circle">1</div>
                <p>LITIGATION FREE LANDS</p>
              </div>
              <div className="col-6 circle-text">
                <div className="circle">2</div>
                <p>COMPLETED HOUSES for sale</p>
              </div>

              {/* Second Row */}
              <div className="col-6 circle-text">
                <div className="circle">3</div>
                <p>UNCOMPLETED HOUSES for sale</p>
              </div>
              <div className="col-6 circle-text">
                <div className="circle">4</div>
                <p>ADVISORY SERVICES on land related issues</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 welcome-image">
            <img src={maninhouse} alt="Real Assets" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
