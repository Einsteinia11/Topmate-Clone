import React from 'react'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/home-page/HeroSection';
import Section1 from '../components/home-page/Section1';

function Home() {
  return (
    <div className="h-screen bg-[#0D0D0D]">
      <div className="">
        <div className="fixed top-0 left-0 w-full z-50 ">
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <Section1 />
      <div className="w-2 h-7"></div>
    </div>
  );
}

export default Home