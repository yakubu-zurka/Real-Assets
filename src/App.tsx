 // src/App.tsx
import React from 'react';
import Navbar from './components/Navbar.tsx';
import  HeroSection from './components/HeroSection.tsx';
import  WelcomeSection from './components/WelcomeSection.tsx';
import  ServiceSection from './components/ServiceSection.tsx';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ServiceSection />
      {/* Other components will go here */}
    </div>
  );
};

export default App;
