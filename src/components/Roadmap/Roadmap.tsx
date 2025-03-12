import React, { useState } from 'react';
import './Roadmap.css';
import '../../styles/glassmorphism.css';
import TokenReleaseChart from '../Tokenomics/TokenReleaseChart';

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState('phase1');

  const handlePhaseClick = (phase: string) => {
    setActivePhase(phase);
  };

  return (
    <div className="container mx-auto px-6">
      {/* Token Release Chart */}
      <TokenReleaseChart />
      
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">Development Roadmap</h2>
        <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Building a sovereign digital nation through strategic phases
        </p>
      </div>
      
      {/* Phase Navigation */}
      <div className="flex flex-wrap justify-center mb-10 gap-4">
        <button 
          className={`phase-button ${activePhase === 'phase1' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase1')}
        >
          <span className="phase-icon">🚀</span>
          <span className="phase-text">Phase 1<br/>Foundation</span>
          <span className="phase-time">0-6 Months</span>
        </button>
        
        <button 
          className={`phase-button ${activePhase === 'phase2' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase2')}
        >
          <span className="phase-icon">🛠</span>
          <span className="phase-text">Phase 2<br/>Infrastructure</span>
          <span className="phase-time">6-12 Months</span>
        </button>
        
        <button 
          className={`phase-button ${activePhase === 'phase3' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase3')}
        >
          <span className="phase-icon">🏛</span>
          <span className="phase-text">Phase 3<br/>Institutions</span>
          <span className="phase-time">12-24 Months</span>
        </button>
        
        <button 
          className={`phase-button ${activePhase === 'phase4' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase4')}
        >
          <span className="phase-icon">🌍</span>
          <span className="phase-text">Phase 4<br/>Global</span>
          <span className="phase-time">24+ Months</span>
        </button>
      </div>
      
      {/* Phase Content */}
      <div className="phase-content glassmorphism-dark p-8 rounded-lg">
        {activePhase === 'phase1' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🚀</span> Phase 1: Foundation & Blockchain Development
              <span className="ml-auto text-lg text-gray-300">0-6 Months</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>Forking Cosmos Blockchain</h4>
                </div>
                <p>Deploy a sovereign blockchain tailored for governance & economy</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>NFT-Based ID System</h4>
                </div>
                <p>Develop a prototype identity system for Proof of Contribution</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>Smart Contract Governance MVP</h4>
                </div>
                <p>Create the first blockchain-based voting system for transparent decision-making</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>Crowdfunding & Early Supporters</h4>
                </div>
                <p>Launch funding rounds to fuel development and community building</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>Community Formation & Whitepaper Release</h4>
                </div>
                <p>Establish a strong digital and real-world movement</p>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 'phase2' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🛠</span> Phase 2: Economic & Governance Infrastructure
              <span className="ml-auto text-lg text-gray-300">6-12 Months</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>BGL & BGL-S Token Launch</h4>
                </div>
                <p>Implement a hybrid economy with governance & stable tokens</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>Decentralized Treasury & Funding</h4>
                </div>
                <p>Allow citizen-backed projects with blockchain-based funding allocation</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>Smart Contract-Based Judiciary</h4>
                </div>
                <p>Develop blockchain courts & dispute resolution mechanisms</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>First Governance Votes & Law Proposals</h4>
                </div>
                <p>Citizens start participating in blockchain-based decision-making</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>Expansion of Digital Citizenship</h4>
                </div>
                <p>Open registration for more contributors & members worldwide</p>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 'phase3' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🏛</span> Phase 3: Institutional Development
              <span className="ml-auto text-lg text-gray-300">12-24 Months</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>Modular Blockchain-Based Institutions</h4>
                </div>
                <p>Implement independent blockchains for governance, security, economy, and infrastructure</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>Security & Law Enforcement System</h4>
                </div>
                <p>Deploy smart contract-based security & border enforcement solutions</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>Public Project Marketplace</h4>
                </div>
                <p>Enable bidding & funding for citizen-proposed projects (infrastructure, business, etc.)</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>Education & Skill-Based Governance</h4>
                </div>
                <p>Develop a system where expertise grants governance influence</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>First Fully Decentralized Budget Allocation</h4>
                </div>
                <p>Treasury funds are autonomously distributed via blockchain voting</p>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 'phase4' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🌍</span> Phase 4: Expansion & Global Recognition
              <span className="ml-auto text-lg text-gray-300">24+ Months</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>International Recognition & Alliances</h4>
                </div>
                <p>Gain recognition as a decentralized digital nation</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>Physical Settlements & Smart Cities</h4>
                </div>
                <p>Secure land or economic zones for real-world expansion</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>Interoperability with Other Blockchain Nations</h4>
                </div>
                <p>Collaborate with decentralized governance projects</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>Military & Defense Development</h4>
                </div>
                <p>Implement decentralized security measures to ensure sovereignty</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>Self-Sustaining Economy & Full Citizen Governance</h4>
                </div>
                <p>Achieve a completely functional decentralized state</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
