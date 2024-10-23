import React from 'react';
import './CoreValuesSection.css';
import checkMark from './assets/checkMark.png'; // Update with the path to your yellow checkmark image
import  coreValuesImage from './assets/coreValuesImage.png'; // Update with the path to your provided image

const CoreValuesSection: React.FC = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="row align-items-center">
          {/* First Column: Text Content */}
          <div className="col-lg-6 col-md-12 text-column">
            <h2 className="core-heading">OUR CORE VALUES</h2>
            <p className="description">
              Underlying all of our work as well as our vision, mission, and strategies are, our core values are:
            </p>

            <ul className="core-values-list">
              <li>
                <img src={checkMark} alt="Check Mark" className="check-icon" />
                Integrity
              </li>
              <li>
                <img src={checkMark} alt="Check Mark" className="check-icon" />
                Clients centered service
              </li>
              <li>
                <img src={checkMark} alt="Check Mark" className="check-icon" />
                Team work
              </li>
              <li>
                <img src={checkMark} alt="Check Mark" className="check-icon" />
                Respect
              </li>
              <li>
                <img src={checkMark} alt="Check Mark" className="check-icon" />
                Excellence
              </li>
            </ul>
          </div>

          {/* Second Column: Image */}
          <div className="col-lg-6 col-md-12 image-column">
            <img src={coreValuesImage} alt="Core Values" className="core-values-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
