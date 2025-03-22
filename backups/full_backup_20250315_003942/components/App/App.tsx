import React from 'react';
import './App.css';
import '../../styles/glassmorphism.css';

// Import all components
import NavbarGlass from '../Navbar/NavbarGlass';
import HeroGlass from '../Hero/HeroGlass';
import Introduction from '../Introduction/Introduction';
import NFTIdCardSimple from '../NFTIdCard/NFTIdCardSimple';
import Roadmap from '../Roadmap/Roadmap';
import Tokenomics from '../Tokenomics/Tokenomics';
import NFTDemo from '../NFTDemo/NFTDemo';
import Whitepaper from '../Whitepaper/Whitepaper';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  // Sample user data for NFT ID Card
  const userData = {
    id: "BG-2025-0001",
    name: "Ivan Petrov",
    citizenship: "Digital Citizen",
    issueDate: "2025-01-01",
    expiryDate: "2030-01-01",
    status: "Active",
    level: "Founding Member"
  };

  return (
    <div className="app">
      {/* Background Elements */}
      <div className="app-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
      </div>
      
      {/* Navbar */}
      <NavbarGlass />
      
      {/* Hero Section */}
      <HeroGlass />
      
      {/* Introduction Section */}
      <section id="introduction" className="section">
        <div className="responsive-container">
          <div className="section-header">
            <h2 className="gradient-text">Introduction</h2>
            <p className="section-subtitle">
              Learn about the vision and purpose behind NOVA Bulgaria
            </p>
          </div>
          <Introduction />
        </div>
      </section>
      
      {/* NFT ID Card Section */}
      <section id="nft-id" className="section">
        <div className="responsive-container">
          <div className="section-header">
            <h2 className="gradient-text">Digital Identity</h2>
            <p className="section-subtitle">
              Your sovereign digital identity in NOVA Bulgaria
            </p>
          </div>
          
          <div className="nft-id-container">
            <div className="nft-id-card">
              <NFTIdCardSimple userData={userData} />
            </div>
            
            <div className="nft-id-info premium-glass-card">
              <h3>Self-Sovereign Digital Identity</h3>
              <p>
                Your NOVA Bulgaria NFT ID Card is more than just a digital document - it's your 
                sovereign identity in the digital nation. Unlike traditional IDs controlled by 
                governments, you own and control your digital identity.
              </p>
              
              <div className="id-features">
                <div className="feature">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-text">
                    <h4>Privacy-First</h4>
                    <p>Your data is encrypted and only accessible with your permission</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">🌐</div>
                  <div className="feature-text">
                    <h4>Global Recognition</h4>
                    <p>Your digital identity is recognized across the NOVA ecosystem</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">🔄</div>
                  <div className="feature-text">
                    <h4>Verifiable Credentials</h4>
                    <p>Securely prove your identity without revealing personal information</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-text">
                    <h4>Instant Verification</h4>
                    <p>QR code enables quick verification of your citizenship status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tokenomics Section */}
      <Tokenomics />
      
      {/* Roadmap Section */}
      <section id="roadmap" className="section">
        <div className="responsive-container">
          <div className="section-header">
            <h2 className="gradient-text">Roadmap</h2>
            <p className="section-subtitle">
              The journey to building NOVA Bulgaria
            </p>
          </div>
          <Roadmap />
        </div>
      </section>
      
      {/* NFT Demo Section */}
      <section id="nft-demo" className="section">
        <div className="responsive-container">
          <div className="section-header">
            <h2 className="gradient-text">Get Citizenship</h2>
            <p className="section-subtitle">
              Become a digital citizen of NOVA Bulgaria
            </p>
          </div>
          <NFTDemo />
        </div>
      </section>
      
      {/* Whitepaper Section */}
      <Whitepaper />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
