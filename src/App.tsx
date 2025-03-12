import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import NavbarUpdated from '@components/Navbar/NavbarUpdated';
import HeroUpdated from '@components/Hero/HeroUpdated';
import Vision from '@components/Vision/Vision';
import NFTIdCardDemo from '@components/NFTIdCard/NFTIdCardDemo';
import SSIInfoCard from '@components/NFTIdCard/SSIInfoCard';
import Tokenomics from '@components/Tokenomics/Tokenomics';
import LionheartFund from '@components/LionheartFund/LionheartFund';
import Roadmap from '@components/Roadmap/Roadmap';
import Footer from '@components/Footer/Footer';
import Problem from '@components/Problem/Problem';
import './styles/index.css';

const App: React.FC = () => {
  // State for active section (for highlighting in navbar)
  const [activeSection, setActiveSection] = useState('hero');

  // Effect for handling scroll and updating active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'nft-id', 'lionheart', 'tokenomics', 'roadmap', 'vision'];
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
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation/Navbar with fixed position, logo, mobile menu, and language selector */}
        <NavbarUpdated activeSection={activeSection} />

        <main>
          {/* Hero Section with blur effects, gradient overlays, and animated elements */}
          <section id="hero" className="relative">
            <HeroUpdated />
          </section>

          {/* Problem Section */}
          <section id="problem" className="pt-16 pb-16 relative">
            <Problem />
          </section>

          {/* NFT ID System Section with card on left and info on right */}
          <section id="nft-id" className="pt-16 pb-16 relative">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">National NFT ID System</h2>
                <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Every citizen of NOVA Bulgaria receives a unique soulbound NFT ID card that serves as their digital identity within our ecosystem.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
                {/* NFT ID Card on the left */}
                <div className="flex justify-center items-center w-full max-w-[700px]">
                  <NFTIdCardDemo />
                </div>
                
                {/* SSI Info Card on the right */}
                <div className="flex justify-center items-center w-full max-w-[700px]">
                  <SSIInfoCard />
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
          </section>
          
          {/* Lionheart Fund Section */}
          <section id="lionheart" className="pt-16 pb-16 relative">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">Lionheart Fund: Igniting Bulgaria's Digital Rebirth</h2>
                <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A Nation of Lions Shall Never Kneel
                </p>
              </div>
              <LionheartFund />
            </div>
          </section>

          {/* Tokenomics Section */}
          <section id="tokenomics" className="pt-16 pb-16 relative">
            <Tokenomics />
          </section>
          
          {/* Roadmap Section */}
          <section id="roadmap" className="pt-16 pb-16 relative">
            <Roadmap />
          </section>
          
          {/* Vision Section */}
          <section id="vision" className="pt-16 pb-16 relative">
            <Vision />
          </section>
          
          {/* Footer with social media links and copyright */}
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
