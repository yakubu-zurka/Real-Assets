import React from 'react';
import './WhyRealAssetsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Icons (replace with your actual paths)
import PayIcon from './assets/PayIcon.png';
import LocationIcon from './assets/LocationIcon.png';
import BankIcon from './assets/BankIcon.png';
import LitigationIcon from './assets/LitigationIcon.png';
import ServiceIcon from './assets/ServiceIcon.png';
import ConsultationIcon from './assets/ConsultationIcon.png';

const WhyRealAssetsSection: React.FC = () => {
  return (
    <section className="why-real-assets-section">
      <div className="container">
        {/* Title */}
        <div className="text-center">
          <h2 className="section-title">WHY CHOOSE REAL ASSETS</h2>
          <p className="section-description">
            We provide serviced lands with full access to potable water, electricity, access roads <br />that link to major roads, as well as other social amenities.
          </p>
        </div>

        {/* Rows with Icons and Descriptions */}
        <div className="row">
          {/* First Row */}
          <div className="col-md-6">
            <div className="feature-box">
              <div id='circle1' className="icon-circle">
                <img src={PayIcon} alt="Pay in Installments" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Pay In Installments</h5>
                <p>Access loans to finance the purchasing <br />of lands at very low rates and repay back <br /> in installments.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-box">
              <div id='circle2' className="icon-circle">
                <img src={LocationIcon} alt="Prime Locations" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Prime Locations</h5>
                <p> Full access to potable water, electricity, <br />
                and more</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-md-6">
            <div  className="feature-box">
              <div id='circle3' className="icon-circle">
                <img src={BankIcon} alt="Bank Guarantee" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Bank Guarantee</h5>
                <p>For upfront payments made from its <br /> bankers HFC Bank Limited.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-box">
              <div id='circle4'className="icon-circle">
                <img src={LitigationIcon} alt="Litigation Free Lands" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Litigation Free Lands</h5>
                <p>Own registered and titled litigation-free <br /> lands for either residential or commercial <br /> development.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="row">
          <div className="col-md-6">
            <div className="feature-box">
              <div id='circle5' className="icon-circle">
                <img src={ServiceIcon} alt="High Quality Service" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">High Quality Service</h5>
                <p>Timely delivery, professional behaviour, <br /> customer service and value for money.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-box">
              <div id='circle6' className="icon-circle">
                <img src={ConsultationIcon} alt="Consultations" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Consultations</h5>
                <p>Advisory and Consultancy, Investigation <br /> and background checks on lands and <br /> landowners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRealAssetsSection;
