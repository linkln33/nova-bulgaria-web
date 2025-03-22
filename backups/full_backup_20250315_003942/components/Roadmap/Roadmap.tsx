import React, { useState } from 'react';
import './Roadmap.css';
import '../../styles/glassmorphism.css';
import TokenReleaseChart from '../Tokenomics/TokenReleaseChart';
import { useLanguage } from '../../context/LanguageContext';

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState('phase1');
  const { t } = useLanguage();

  const handlePhaseClick = (phase: string) => {
    setActivePhase(phase);
  };

  return (
    <div className="container mx-auto px-6">
      {/* Token Release Chart */}
      <TokenReleaseChart />
      
      <div className="text-center mb-12" id="development-roadmap">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('roadmap.title', 'Development Roadmap')}</h2>
        <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('roadmap.subtitle', 'Building a sovereign digital nation through strategic phases')}
        </p>
      </div>
      
      {/* Phase Navigation */}
      <div className="flex flex-wrap justify-center mb-10 gap-4">
        <button 
          className={`phase-button ${activePhase === 'phase1' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase1')}
        >
          <span className="phase-icon">🚀</span>
          <span className="phase-text">{t('roadmap.phase1.name', 'Phase 1')}<br/>{t('roadmap.phase1.shortTitle', 'Foundation')}</span>
          <span className="phase-time">{t('roadmap.phase1.timeframe', '0-6 Months')}</span>
        </button>
        
        <button 
          className={`phase-button ${activePhase === 'phase2' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase2')}
        >
          <span className="phase-icon">🛠</span>
          <span className="phase-text">{t('roadmap.phase2.name', 'Phase 2')}<br/>{t('roadmap.phase2.shortTitle', 'Infrastructure')}</span>
          <span className="phase-time">{t('roadmap.phase2.timeframe', '6-12 Months')}</span>
        </button>
        
        <button 
          className={`phase-button ${activePhase === 'phase3' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase3')}
        >
          <span className="phase-icon">🏛</span>
          <span className="phase-text">{t('roadmap.phase3.name', 'Phase 3')}<br/>{t('roadmap.phase3.shortTitle', 'Institutions')}</span>
          <span className="phase-time">{t('roadmap.phase3.timeframe', '12-24 Months')}</span>
        </button>
        
        <button 
          className={`phase-button ${activePhase === 'phase4' ? 'active' : ''}`}
          onClick={() => handlePhaseClick('phase4')}
        >
          <span className="phase-icon">🌍</span>
          <span className="phase-text">{t('roadmap.phase4.name', 'Phase 4')}<br/>{t('roadmap.phase4.shortTitle', 'Global')}</span>
          <span className="phase-time">{t('roadmap.phase4.timeframe', '24+ Months')}</span>
        </button>
      </div>
      
      {/* Phase Content */}
      <div className="phase-content glassmorphism-dark p-8 rounded-lg">
        {activePhase === 'phase1' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🚀</span> {t('roadmap.phase1.title', 'Phase 1: Foundation & Blockchain Development')}
              <span className="ml-auto text-lg text-gray-300">{t('roadmap.phase1.timeframe', '0-6 Months')}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>{t('roadmap.phase1.milestone1.title', 'Forking Cosmos Blockchain')}</h4>
                </div>
                <p>{t('roadmap.phase1.milestone1.description', 'Deploy a sovereign blockchain tailored for governance & economy')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>{t('roadmap.phase1.milestone2.title', 'NFT-Based ID System')}</h4>
                </div>
                <p>{t('roadmap.phase1.milestone2.description', 'Develop a prototype identity system for Proof of Contribution')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>{t('roadmap.phase1.milestone3.title', 'Smart Contract Governance MVP')}</h4>
                </div>
                <p>{t('roadmap.phase1.milestone3.description', 'Create the first blockchain-based voting system for transparent decision-making')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>{t('roadmap.phase1.milestone4.title', 'Crowdfunding & Early Supporters')}</h4>
                </div>
                <p>{t('roadmap.phase1.milestone4.description', 'Launch funding rounds to fuel development and community building')}</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">✅</span>
                  <h4>{t('roadmap.phase1.milestone5.title', 'Community Formation & Whitepaper Release')}</h4>
                </div>
                <p>{t('roadmap.phase1.milestone5.description', 'Establish a strong digital and real-world movement')}</p>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 'phase2' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🛠</span> {t('roadmap.phase2.title', 'Phase 2: Economic & Governance Infrastructure')}
              <span className="ml-auto text-lg text-gray-300">{t('roadmap.phase2.timeframe', '6-12 Months')}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>{t('roadmap.phase2.milestone1.title', 'BGL & BGL-S Token Launch')}</h4>
                </div>
                <p>{t('roadmap.phase2.milestone1.description', 'Implement a hybrid economy with governance & stable tokens')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>{t('roadmap.phase2.milestone2.title', 'Decentralized Treasury & Funding')}</h4>
                </div>
                <p>{t('roadmap.phase2.milestone2.description', 'Allow citizen-backed projects with blockchain-based funding allocation')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>{t('roadmap.phase2.milestone3.title', 'Smart Contract-Based Judiciary')}</h4>
                </div>
                <p>{t('roadmap.phase2.milestone3.description', 'Develop blockchain courts & dispute resolution mechanisms')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>{t('roadmap.phase2.milestone4.title', 'First Governance Votes & Law Proposals')}</h4>
                </div>
                <p>{t('roadmap.phase2.milestone4.description', 'Citizens start participating in blockchain-based decision-making')}</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">🔹</span>
                  <h4>{t('roadmap.phase2.milestone5.title', 'Expansion of Digital Citizenship')}</h4>
                </div>
                <p>{t('roadmap.phase2.milestone5.description', 'Open registration for more contributors & members worldwide')}</p>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 'phase3' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🏛</span> {t('roadmap.phase3.title', 'Phase 3: Institutional Development')}
              <span className="ml-auto text-lg text-gray-300">{t('roadmap.phase3.timeframe', '12-24 Months')}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>{t('roadmap.phase3.milestone1.title', 'Modular Blockchain-Based Institutions')}</h4>
                </div>
                <p>{t('roadmap.phase3.milestone1.description', 'Implement independent blockchains for governance, security, economy, and infrastructure')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>{t('roadmap.phase3.milestone2.title', 'Security & Law Enforcement System')}</h4>
                </div>
                <p>{t('roadmap.phase3.milestone2.description', 'Deploy smart contract-based security & border enforcement solutions')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>{t('roadmap.phase3.milestone3.title', 'Public Project Marketplace')}</h4>
                </div>
                <p>{t('roadmap.phase3.milestone3.description', 'Enable bidding & funding for citizen-proposed projects (infrastructure, business, etc.)')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>{t('roadmap.phase3.milestone4.title', 'Education & Skill-Based Governance')}</h4>
                </div>
                <p>{t('roadmap.phase3.milestone4.description', 'Develop a system where expertise grants governance influence')}</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">⚡</span>
                  <h4>{t('roadmap.phase3.milestone5.title', 'First Fully Decentralized Budget Allocation')}</h4>
                </div>
                <p>{t('roadmap.phase3.milestone5.description', 'Treasury funds are autonomously distributed via blockchain voting')}</p>
              </div>
            </div>
          </div>
        )}
        
        {activePhase === 'phase4' && (
          <div className="phase-details">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa] flex items-center">
              <span className="mr-2">🌍</span> {t('roadmap.phase4.title', 'Phase 4: Expansion & Global Recognition')}
              <span className="ml-auto text-lg text-gray-300">{t('roadmap.phase4.timeframe', '24+ Months')}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>{t('roadmap.phase4.milestone1.title', 'International Recognition & Alliances')}</h4>
                </div>
                <p>{t('roadmap.phase4.milestone1.description', 'Gain recognition as a decentralized digital nation')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>{t('roadmap.phase4.milestone2.title', 'Physical Settlements & Smart Cities')}</h4>
                </div>
                <p>{t('roadmap.phase4.milestone2.description', 'Secure land or economic zones for real-world expansion')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>{t('roadmap.phase4.milestone3.title', 'Interoperability with Other Blockchain Nations')}</h4>
                </div>
                <p>{t('roadmap.phase4.milestone3.description', 'Collaborate with decentralized governance projects')}</p>
              </div>
              
              <div className="milestone-card">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>{t('roadmap.phase4.milestone4.title', 'Global Diplomatic Presence')}</h4>
                </div>
                <p>{t('roadmap.phase4.milestone4.description', 'Establish virtual embassies & international relations')}</p>
              </div>
              
              <div className="milestone-card md:col-span-2">
                <div className="milestone-header">
                  <span className="milestone-check">🌎</span>
                  <h4>{t('roadmap.phase4.milestone5.title', 'Full Economic Independence')}</h4>
                </div>
                <p>{t('roadmap.phase4.milestone5.description', 'Create a self-sustaining economy with global trade agreements')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
