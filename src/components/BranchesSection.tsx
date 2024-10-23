import React from 'react';
import './BranchesSection.css';

const BranchesSection: React.FC = () => {
  return (
    <section className="branches-section">
      <div className="container">
        <h2 className=" Branches-section-heading ">BRANCHES</h2>
        
        <div className="row justify-content-center">
          {/* First Row */}
          <div className="col-lg-4 col-md-6 col-sm-12 branch-box">
            <div className="branch-content">
              <h4>Adjiringanor <br /> (Head Office)</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 branch-box">
            <div className="branch-content">
              <h4>Nungua</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 branch-box">
            <div className="branch-content">
              <h4>Madina</h4>
            </div>
          </div>

          {/* Second Row */}
          <div className="col-lg-4 col-md-6 col-sm-12 branch-box">
            <div className="branch-content">
              <h4>Kasoa</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 branch-box">
            <div className="branch-content">
              <h4>Ashaiman</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 branch-box">
            <div className="branch-content">
              <h4>Atedaka</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
