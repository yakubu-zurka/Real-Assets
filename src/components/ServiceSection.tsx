// src/ServicesSection.tsx
import React from 'react';
import './ServiceSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import   services from './assets/services.png'; 
import   buyingguide from './assets/buyingguide.png'; 
import   RealBanner from './assets/RealBanner.png'; 

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="section-title">What We Do</h2>
          <hr className="underline" />
          <p className="quote">"When one door closes, buy another <br /> one and open it yourself"</p>
        </div>

        {/* Cards Row */}
        <div className="row justify-content-center">
          {/* First Card */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-container">
            <div className="card service-card">
              <img src= {services} alt="Our Services" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Our Services</h5>
                <p className="card-text">
                  We strive to provide an excellent service in terms of quality of work, timely delivery, professional behaviour, customer service, and value for money.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-container">
            <div className="card service-card">
              <img src = {buyingguide} alt="House/Land Buying Guide" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">House/Land Buying Guide</h5>
                <p className="card-text">
                  Buying Land from Real Assets is a dream come true. Land acquisition from real assets is secure, easy, and best of all guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-container">
            <div className="card service-card">
              <img src= {RealBanner} alt="Commercials" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Commercials</h5>
                <p className="card-text">Real Asset Ghana LMD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
