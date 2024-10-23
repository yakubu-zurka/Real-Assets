 // src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import WelcomeSection from './components/WelcomeSection.tsx';
import ServiceSection from './components/ServiceSection.tsx';
import WhyRealAssetsSection from './components/WhyRealAssetsSection.tsx';
import LocationSection from './components/LocationSection.tsx';
import Footer from './components/Footer.tsx';
import AboutUs from './components/AboutUs.tsx';  // Import About Us page


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route, which includes all your existing sections */}
        <Route path="/" element={
          <>
            <HeroSection />
            <WelcomeSection />
            <ServiceSection />
            <WhyRealAssetsSection />
            <LocationSection />
            <Footer />
          </>
        } />
        
        {/* About Us page route */}
        <Route path="/about" element={

          <>
           <AboutUs />
                
          </>
        } />  
      </Routes>
    </Router>
  );
};

export default App;
