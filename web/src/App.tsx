import React, { useState, useEffect } from 'react';
import NavbarUpdated from '@components/Navbar/NavbarUpdated';
import HeroUpdated from '@components/Hero/HeroUpdated';
import Introduction from '@components/Introduction/Introduction';
import NFTIdCardDemo from '@components/NFTIdCard/NFTIdCardDemo';
import Tokenomics from '@components/Tokenomics/Tokenomics';
import Roadmap from '@components/Roadmap/Roadmap';
import Footer from '@components/Footer/Footer';
import './styles/index.css';

const App: React.FC = () => {
  // State for active section (for highlighting in navbar)
  const [activeSection, setActiveSection] = useState('hero');

  // Effect for handling scroll and updating active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'vision', 'governance', 'technology', 'development'];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation/Navbar with fixed position, logo, mobile menu, and language selector */}
      <NavbarUpdated activeSection={activeSection} />

      <main>
        {/* Hero Section with blur effects, gradient overlays, and animated elements */}
        <section id="hero">
          <HeroUpdated />
        </section>

        {/* Vision Section with tabbed interface for Political Crisis, Youth Crisis, Vision */}
        <section id="vision" className="pt-24 pb-24 relative">
          <Introduction />
        </section>

        {/* Governance Section with premium holographic border and QR code */}
        <section id="governance" className="pt-24 pb-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary)]">National NFT ID System</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every citizen of NOVA Bulgaria receives a unique soulbound NFT ID card that serves as their digital identity within our ecosystem.
              </p>
            </div>
            
            <div className="flex justify-center items-center relative z-20">
              {/* NFT ID Card Container with holographic border and QR code */}
              <NFTIdCardDemo />
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Self-Sovereign Identity Card */}
              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-[var(--primary)] border-opacity-20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Self-Sovereign Identity</h3>
                <p className="text-gray-300">
                  Complete control over your personal information while enabling secure verification for national services and governance participation.
                </p>
              </div>
              
              {/* Soulbound NFT Card */}
              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-[var(--primary)] border-opacity-20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Soulbound NFT</h3>
                <p className="text-gray-300">
                  Your NFT ID cannot be transferred or sold, ensuring the integrity of our citizenship system and governance participation.
                </p>
              </div>
              
              {/* Governance Access Card */}
              <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl border border-[var(--primary)] border-opacity-20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">Governance Access</h3>
                <p className="text-gray-300">
                  Your ID card enables participation in governance, voting on proposals, and contributing to the future of NOVA Bulgaria.
                </p>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--primary)] opacity-5 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-[var(--primary)] opacity-5 -z-10"></div>
        </section>

        {/* Technology Section with charts and token distribution */}
        <section id="technology" className="pt-24 pb-24 relative">
          <Tokenomics />
        </section>

        {/* Development Section with timeline navigation */}
        <section id="development" className="pt-24 pb-24 relative">
          <Roadmap />
        </section>
        
        {/* Footer with social media links and copyright */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
