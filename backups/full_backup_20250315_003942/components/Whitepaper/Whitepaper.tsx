import React, { useState } from 'react';
import './Whitepaper.css';
import '../../styles/glassmorphism.css';

const Whitepaper: React.FC = () => {
  const [activeTab, setActiveTab] = useState('problem');
  
  const tabs = [
    { id: 'problem', label: 'The Problem' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'technology', label: 'Technology' },
    { id: 'governance', label: 'Governance' }
  ];
  
  return (
    <section id="whitepaper" className="whitepaper-section">
      <div className="responsive-container">
        <div className="section-header">
          <h2 className="gradient-text">Whitepaper</h2>
          <p className="section-subtitle">
            Explore the vision, technology, and governance model of NOVA Bulgaria.
          </p>
        </div>
        
        <div className="whitepaper-container">
          <div className="whitepaper-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`whitepaper-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="whitepaper-content premium-glass-card">
            {/* The Problem Tab */}
            {activeTab === 'problem' && (
              <div className="tab-content">
                <h3 className="content-title">The Crisis of Modern Nation-States</h3>
                
                <div className="content-grid">
                  <div className="content-card glass-card">
                    <h4>Political Crisis</h4>
                    <p>
                      Modern nation-states face unprecedented challenges with corruption, inefficient bureaucracy, 
                      and declining trust in institutions. Citizens feel increasingly disconnected from 
                      decision-making processes, leading to political apathy and social unrest.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Economic Inequality</h4>
                    <p>
                      Traditional economic systems have led to extreme wealth concentration, with the gap between 
                      rich and poor widening dramatically. Financial systems remain opaque and inaccessible to many, 
                      perpetuating cycles of poverty and exclusion.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Youth Exodus</h4>
                    <p>
                      Young people are increasingly leaving their home countries in search of better opportunities, 
                      leading to brain drain and demographic challenges. This exodus threatens the long-term 
                      sustainability of many nations, particularly in Eastern Europe.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Identity and Sovereignty</h4>
                    <p>
                      In the digital age, personal identity and data sovereignty have become critical issues. 
                      Citizens have little control over their digital identities, with governments and corporations 
                      holding excessive power over personal information.
                    </p>
                  </div>
                </div>
                
                <div className="content-quote">
                  <blockquote>
                    "The nation-state as we know it is becoming obsolete; it is too small for the big problems 
                    and too big for the small ones."
                  </blockquote>
                  <cite>— Daniel Bell</cite>
                </div>
              </div>
            )}
            
            {/* Vision Tab */}
            {activeTab === 'vision' && (
              <div className="tab-content">
                <h3 className="content-title">A New Paradigm of Governance</h3>
                
                <div className="vision-statement premium-glass-card">
                  <p>
                    NOVA Bulgaria envisions a borderless, digital nation built on blockchain technology, 
                    where citizens have true self-sovereignty, transparent governance, and equal economic opportunity.
                  </p>
                </div>
                
                <div className="content-grid">
                  <div className="content-card glass-card">
                    <h4>Digital Sovereignty</h4>
                    <p>
                      NOVA Bulgaria will establish a new model of citizenship based on digital identity and 
                      self-sovereignty. Citizens will have complete control over their personal data while 
                      participating in a global community united by shared values rather than geography.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Transparent Governance</h4>
                    <p>
                      Our governance model leverages blockchain technology to ensure complete transparency, 
                      with all decisions and transactions recorded immutably. Citizens participate directly 
                      in decision-making through secure digital voting and proposal systems.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Economic Renaissance</h4>
                    <p>
                      NOVA Bulgaria will create a new economic system that distributes wealth more equitably, 
                      provides universal basic income to citizens, and fosters innovation through decentralized 
                      funding mechanisms and collaborative economic models.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Cultural Revival</h4>
                    <p>
                      While embracing global citizenship, NOVA Bulgaria will preserve and celebrate Bulgarian 
                      cultural heritage, creating digital museums, supporting artists, and fostering cultural 
                      exchange in both physical and virtual spaces.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-preview">
                  <h4>Vision Timeline</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content glass-card">
                        <h5>2025-2030</h5>
                        <p>Foundation Phase: Establish digital infrastructure, initial citizenship, and governance systems</p>
                      </div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content glass-card">
                        <h5>2030-2040</h5>
                        <p>Growth Phase: Expand citizenship, develop economic systems, and establish diplomatic relations</p>
                      </div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content glass-card">
                        <h5>2040-2050</h5>
                        <p>Maturity Phase: Achieve full recognition, implement comprehensive social systems, and global impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Technology Tab */}
            {activeTab === 'technology' && (
              <div className="tab-content">
                <h3 className="content-title">Blockchain Infrastructure</h3>
                
                <div className="tech-overview">
                  <div className="tech-diagram premium-glass-card">
                    <div className="diagram-node central">
                      <span>NOVA Core</span>
                    </div>
                    <div className="diagram-connections">
                      <div className="diagram-node">
                        <span>Identity</span>
                      </div>
                      <div className="diagram-node">
                        <span>Governance</span>
                      </div>
                      <div className="diagram-node">
                        <span>Treasury</span>
                      </div>
                      <div className="diagram-node">
                        <span>Services</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tech-description">
                    <p>
                      NOVA Bulgaria is built on a multi-layered blockchain architecture that combines 
                      security, scalability, and interoperability. Our technology stack leverages the best 
                      of existing blockchain protocols while introducing innovative solutions for digital 
                      governance and identity management.
                    </p>
                  </div>
                </div>
                
                <div className="content-grid">
                  <div className="content-card glass-card">
                    <h4>Self-Sovereign Identity</h4>
                    <p>
                      Our identity system uses zero-knowledge proofs and decentralized identifiers (DIDs) to 
                      give citizens complete control over their personal data. The NFT ID card serves as a 
                      visual representation of citizenship while the underlying cryptographic system ensures 
                      privacy and security.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Consensus Mechanism</h4>
                    <p>
                      NOVA Bulgaria employs a hybrid consensus mechanism combining Delegated Proof of Stake 
                      with reputation-based validation. This approach ensures energy efficiency while 
                      maintaining security and enabling high transaction throughput for governance operations.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Smart Contract Framework</h4>
                    <p>
                      Our governance and economic systems are powered by a sophisticated smart contract 
                      framework that enables transparent decision-making, automated treasury management, 
                      and programmable policies that adapt to changing conditions.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Interoperability</h4>
                    <p>
                      NOVA Bulgaria is designed to interact seamlessly with other blockchain networks and 
                      traditional systems through cross-chain bridges and API integrations, ensuring citizens 
                      can participate in the broader digital economy.
                    </p>
                  </div>
                </div>
                
                <div className="tech-security premium-glass-card">
                  <h4>Security & Privacy</h4>
                  <p>
                    Security is paramount in NOVA Bulgaria's design. Our systems undergo rigorous auditing, 
                    implement multiple layers of encryption, and follow privacy-by-design principles to protect 
                    citizen data and assets. Regular security updates and bug bounty programs ensure the 
                    platform remains resilient against emerging threats.
                  </p>
                </div>
              </div>
            )}
            
            {/* Governance Tab */}
            {activeTab === 'governance' && (
              <div className="tab-content">
                <h3 className="content-title">Liquid Democratic Model</h3>
                
                <div className="governance-overview premium-glass-card">
                  <p>
                    NOVA Bulgaria implements a liquid democracy model that combines the best aspects of 
                    direct and representative democracy. Citizens can vote directly on proposals or delegate 
                    their voting power to trusted representatives for specific domains, creating a flexible 
                    and responsive governance system.
                  </p>
                </div>
                
                <div className="content-grid">
                  <div className="content-card glass-card">
                    <h4>Proposal System</h4>
                    <p>
                      Any citizen can submit proposals for consideration by the community. Proposals go through 
                      a structured process of discussion, refinement, and voting, with multiple stages to ensure 
                      thorough evaluation and prevent hasty decisions.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Voting Mechanisms</h4>
                    <p>
                      Voting power is determined by a combination of token holdings and reputation scores, 
                      with quadratic voting implemented to prevent wealth concentration. Special provisions 
                      ensure that minority voices are heard and considered in decision-making.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Council Structure</h4>
                    <p>
                      Specialized councils oversee different aspects of NOVA Bulgaria, such as technology, 
                      economics, and culture. Council members are elected by citizens and serve limited terms, 
                      with transparent performance metrics and recall mechanisms.
                    </p>
                  </div>
                  
                  <div className="content-card glass-card">
                    <h4>Constitutional Framework</h4>
                    <p>
                      NOVA Bulgaria operates under a digital constitution that defines core values, citizen 
                      rights, and governance procedures. The constitution can evolve through a deliberate 
                      amendment process that requires supermajority support.
                    </p>
                  </div>
                </div>
                
                <div className="governance-diagram">
                  <h4>Governance Flow</h4>
                  <div className="flow-diagram premium-glass-card">
                    <div className="flow-step">
                      <div className="flow-number">1</div>
                      <div className="flow-text">Proposal Submission</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <div className="flow-number">2</div>
                      <div className="flow-text">Community Discussion</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <div className="flow-number">3</div>
                      <div className="flow-text">Council Review</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <div className="flow-number">4</div>
                      <div className="flow-text">Citizen Voting</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">
                      <div className="flow-number">5</div>
                      <div className="flow-text">Implementation</div>
                    </div>
                  </div>
                </div>
                
                <div className="governance-quote">
                  <blockquote>
                    "The true strength of our governance model lies in its adaptability and its unwavering 
                    commitment to transparency, fairness, and citizen empowerment."
                  </blockquote>
                  <cite>— NOVA Bulgaria Founding Document</cite>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;
