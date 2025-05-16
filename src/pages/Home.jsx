import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/home-page/HeroSection';

function Home() {
  return (
    <div className="h-screen">
      <div className="bg-[#0D0D0D]">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default Home