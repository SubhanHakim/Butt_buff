import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Community from './components/Community';
import Gallery from './components/Gallery';
import TokenInfo from './components/TokenInfo';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior for the whole document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-body selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Marquee />
        <div id="community">
          <Community />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="token-info">
          <TokenInfo />
        </div>
        <div id="how-to-buy">
          <HowToBuy />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
