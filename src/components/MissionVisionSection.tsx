import React from 'react';
import './MissionVisionSection.css';
import  MissionBackground from './assets/MissionBackground.png'; // Update with your background image path
import  GroupIcons from './assets/GroupIcons.png'; // Update with your icon path
 
const MissionVisionSection: React.FC = () => {
  return (
    <section className="mission-vision-section" >
       
      <div className="container">
     
        <div className="row">

          {/* First Column: Mission and Vision */}
          <div className="col-lg-6 col-md-12">
          <img className="image" src={ MissionBackground} alt="Icon 4" />
            <div className="mission-box">
              <div className="circle-label-1">1</div>
              <h3 className="box-title">OUR MISSION</h3>
              <p>
                To be a premium provider of real estate services to individuals and corporate bodies, providing value for our clients through innovation, integrity, and bringing honor to God.
              </p>
            </div>

            <div className="vision-box mt-4">
              <div className="circle-label-2">2</div>
              <h3 className="box-title">OUR VISION</h3>
              <p>
                To deliver to our clients the highest level of real estate services through maintained Professionalism, Integrity, Honesty, and Fairness.
              </p>
            </div>
          </div>

          {/* Second Column: About Us Card */}
          <div className="col-lg-6 col-md-12">
            <div className="about-us-card">
              <h3>ABOUT US</h3>
              <p className="About-Us-Lead"  >
                Real Assets Limited is a limited liability company. It was established as a result of a partnership between Multibility Ventures and YIM investments, which started as a sole proprietorship in Accra, Ghana.
              </p>

              <img className="Image" src={GroupIcons} alt="Icon 4" />
              <button className="btn btn-primary mt-4">CONNECT WITH US</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
