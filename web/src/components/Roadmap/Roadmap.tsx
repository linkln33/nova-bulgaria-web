import React, { useState } from 'react';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState('foundation');

  const handlePhaseClick = (phase: string) => {
    setActivePhase(phase);
  };

  return (
    <section id="roadmap" className="py-12 bg-gradient-to-b from-[#1a1a1a] to-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 gradient-text">NOVA BULGARIA Roadmap</h2>
        <p className="text-lg text-center text-gray-300 mb-8 max-w-3xl mx-auto">A century-long vision with 1 Trillion BGL distributed over 100 years</p>
        
        {/* Timeline Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#2a2a2a] rounded-full p-1 shadow-lg">
            <button 
              className={`roadmap-tab ${activePhase === 'foundation' ? 'active' : ''}`} 
              onClick={() => handlePhaseClick('foundation')}
            >
              Foundation<br/>(2025-2044)
            </button>
            <button 
              className={`roadmap-tab ${activePhase === 'development' ? 'active' : ''}`} 
              onClick={() => handlePhaseClick('development')}
            >
              Development<br/>(2045-2084)
            </button>
            <button 
              className={`roadmap-tab ${activePhase === 'expansion' ? 'active' : ''}`} 
              onClick={() => handlePhaseClick('expansion')}
            >
              Expansion & Peak<br/>(2085-2124)
            </button>
          </div>
        </div>
        
        {/* Roadmap Content */}
        {activePhase === 'foundation' && (
          <div className="roadmap-content-container">
            <div className="glass p-6 rounded-xl border-t-4 border-[var(--primary)] hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
              <h4 className="text-xl font-semibold mb-3 text-[var(--primary)]">Foundation Phase (2025-2044)</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Initial funding: Reserve Fund (20%): 200B BGL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>National Growth Fund (80%): 800B BGL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Launch of NOVA BULGARIA blockchain on Cosmos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Implementation of NFT-based digital ID system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Development of Proof-of-Contribution consensus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Launch of initial core sector parachains</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {activePhase === 'development' && (
          <div className="roadmap-content-container">
            <div className="glass p-6 rounded-xl border-t-4 border-[var(--accent1)] hover:shadow-[0_0_15px_rgba(var(--accent1-rgb),0.3)]">
              <h4 className="text-xl font-semibold mb-3 text-[var(--accent1)]">Development Phase (2045-2084)</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[var(--accent1)] mr-2">•</span>
                  <span>Third Decade: 0.3% annual (3B BGL/year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent1)] mr-2">•</span>
                  <span>Fourth Decade: 0.5% annual (5B BGL/year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent1)] mr-2">•</span>
                  <span>Focus on technological advancement and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent1)] mr-2">•</span>
                  <span>Expansion of global influence and partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent1)] mr-2">•</span>
                  <span>Integration with global blockchain networks</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {activePhase === 'expansion' && (
          <div className="roadmap-content-container">
            <div className="glass p-6 rounded-xl border-t-4 border-[var(--primary)] hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
              <h4 className="text-xl font-semibold mb-3 text-[var(--primary)]">Expansion & Peak Phase (2085-2124)</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Seventh Decade: 1.5% annual (15B BGL/year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Eighth Decade: 2.0% annual (20B BGL/year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Ninth Decade: 2.5% annual (25B BGL/year)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Global expansion and influence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span>Advanced technological integration</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Roadmap;
