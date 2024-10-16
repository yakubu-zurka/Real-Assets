 // src/App.tsx
import React from 'react';
import Navbar from './components/Navbar.tsx';
import  HeroSection from './components/HeroSection.tsx';
import  WelcomeSection from './components/WelcomeSection.tsx';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      {/* Other components will go here */}
    </div>
  );
};

export default App;
