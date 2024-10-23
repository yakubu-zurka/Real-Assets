import React from 'react';
import './HistorySection.css';
import historyImage from './assets/HistoryImage.png'; // Update with the path to your provided image

const HistorySection: React.FC = () => {
  return (
    <section className="history-section">
      <div className="container">
        <div className="row align-items-center">
          {/* First Column: Text Content */}
          <div className="col-lg-6 col-md-12 text-column">
            <h2 className="heading">OUR HISTORY<hr className="yellow-line" /></h2>

            <h4 className="subheading">Real Assets Limited is a limited <br /> liability company.</h4>
            <p className="history-text">
              It was established as a result of a partnership between Multibility Ventures and YIM
              Investments which started as a sole proprietorship in Accra, Ghana. <br /><br />
              The company, in a strategic partnership, is poised to deliver superior service to its
              valued customer. As a strategic plan to boost their operational capacity, Multibility
              Ventures and YIM Investments went into a partnership resulting in REAL ASSETS LIMITED. 
              The results of the partnership will bring superior benefits to its valued customers. <br /><br />
              Real Assets Limited started operations in early 2016. Most importantly, we are duly
              incorporated with the Registrar General Department of Ghana. To date, it has over 1000
              acres of litigation-free lands that will come serviced, un-serviced, registered, or yet
              to be registered.
            </p>
          </div>

          {/* Second Column: Image */}
          <div className="col-lg-6 col-md-12 image-column">
            <img src={historyImage} alt="Our History" className="history-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
