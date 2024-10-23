import React from 'react';
import './TeamSection.css';
import yacubImage from './assets/yacubImage.png';  // Replace with actual image paths
import atsuImage from './assets/atsuImage.png';    // Replace with actual image paths
import lydiaImage from './assets/lydiaImage.png';  // Replace with actual image paths

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-heading">OUR MANAGEMENT TEAM</h2>

        <div className="row justify-content-center">
          {/* First Team Member */}
          <div className="col-lg-4 col-md-6 col-sm-12 team-member">
            <div className="team-img-container">
              <img src={yacubImage} alt="Mr. Yacub Adzagey" className="team-img" />
            </div>
            <h4 className="team-name">Mr. Yacub Adzagey</h4>
            <p className="team-position">Managing Director</p>
          </div>

          {/* Second Team Member */}
          <div className="col-lg-4 col-md-6 col-sm-12 team-member">
            <div className="team-img-container">
              <img src={atsuImage} alt="Mr. Atsu Klugah" className="team-img" />
            </div>
            <h4 className="team-name">Mr. Atsu Klugah</h4>
            <p className="team-position">Director</p>
          </div>

          {/* Third Team Member */}
          <div className="col-lg-4 col-md-6 col-sm-12 team-member">
            <div className="team-img-container">
              <img src={lydiaImage} alt="Ms. Lydia Mensah" className="team-img" />
            </div>
            <h4 className="team-name">Lydia Mensah</h4>
            <p className="team-position">Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
