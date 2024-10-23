 // src/components/AboutUs.tsx
import React from 'react';
import './AboutUs.css';  // Import the CSS file
import background from './assets/background.png';  // Background image for the hero section
import Footer from './Footer.tsx';  // Reuse Footer component for About Us page
import  MissionVisionSection from './MissionVisionSection.tsx';
import  CoreValuesSection  from './CoreValuesSection.tsx';
import  HistorySection  from './HistorySection.tsx';
import  TeamSection  from './TeamSection.tsx';
import  BranchesSection  from './BranchesSection.tsx';


const AboutUs: React.FC = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div
        className="about-hero-section"
        style={{ backgroundImage: `url(${background})` }}  // Background image
      >
        <div className="overlay"></div> {/* Dark overlay */}
        <div className="hero-content">
          <div className="semicircle-container">
          <div className="semicircle-top"></div>
          <div className="about-us-text">ABOUT US</div>
          <div className="semicircle-bottom"></div>
       </div>

           
        </div>
      </div>

      {/* Additional content can go here */}
      <MissionVisionSection/> 
      < CoreValuesSection/> 
      < HistorySection/> 
      < TeamSection/>
      < BranchesSection/>
      <Footer />
    </div>
  );
};

export default AboutUs;
