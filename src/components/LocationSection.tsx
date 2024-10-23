import React from 'react';
import './LocationSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/img1.png';  // Left Image
import img2 from './assets/img2.png';  // First row - first column
import img3 from './assets/img3.png';  // First row - second column
import img4 from './assets/img4.png';  // Second row - first column
import img5 from './assets/img5.png';  // Second row - second column

const LocationSection = () => {
  return (
    <section className="selection-location">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">HOT SELLING LOCATIONS</h2>
        <p className="section-subtitle">Reasonably priced lands at prime locations</p>

        {/* Images Row */}
        <div className="row">
          {/* Left Large Image */}
          <div className="col-lg-6 col-md-12 col-sm-12 large-image">
            <img src={img1} alt="Location 1" className="img-fluid" />
            <div className="info-box">
              <h5> East Legon Hills</h5>
              <p> 50 acres of Land</p>
            </div>
          </div>

          {/* Right Small Images */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              {/* First Row - Two Small Images */}
              <div className="col-6 small-image">
                <img src={img2} alt="Location 2" className="img-fluid" />
                <div className="info-box">
                  <h5> Shai Hills</h5>
                  <p> Over 300 acres of Land</p>
                </div>
              </div>
              <div className="col-6 small-image">
                <img src={img3} alt="Location 3" className="img-fluid" />
                <div className="info-box">
                  <h5> Dawhenya</h5>
                  <p> Over 115 acres of Land</p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Second Row - Two Small Images */}
              <div className="col-6 small-image">
                <img src={img4} alt="Location 4" className="img-fluid" />
                <div className="info-box">
                  <h5> Asebi</h5>
                  <p> 30 acres of Land</p>
                </div>
              </div>
              <div className="col-6 small-image">
                <img src={img5} alt="Location 5" className="img-fluid" />
                <div className="info-box">
                  <h5> Wedokum</h5>
                  <p> 30 acres of Land</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls text-center">
          <button className="control-btn">{"<"}</button>
          <button className="control-btn">{">"}</button>
        </div>
     </div>

        <div className="Container-pre-footer">
            {/* Pre-Footer Box */}
          <div className="pre-footer">
            <p>Need a loan to purchase a piece of land?</p>
            <button className="loan-btn">Get “ASAASE” Loan</button>
          </div>
        </div>
    </section>
  );
};

export default LocationSection;
