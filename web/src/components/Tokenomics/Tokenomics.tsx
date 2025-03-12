import React, { useState } from 'react';
import './Tokenomics.css';
import '../../styles/glassmorphism.css';

const Tokenomics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('distribution');
  
  // Token distribution data
  const distributionData = [
    { name: 'Community Treasury', percentage: 30, color: '#00966E' },
    { name: 'Ecosystem Growth', percentage: 25, color: '#33cc33' },
    { name: 'Team & Advisors', percentage: 15, color: '#ffff00' },
    { name: 'Private Sale', percentage: 10, color: '#ff9900' },
    { name: 'Public Sale', percentage: 10, color: '#ff6600' },
    { name: 'Liquidity', percentage: 5, color: '#cc33ff' },
    { name: 'Marketing', percentage: 5, color: '#3366ff' }
  ];
  
  // Token release schedule data
  const releaseSchedule = [
    { year: 2025, q1: 10, q2: 5, q3: 5, q4: 5 },
    { year: 2026, q1: 5, q2: 5, q3: 10, q4: 5 },
    { year: 2027, q1: 5, q2: 5, q3: 5, q4: 10 },
    { year: 2028, q1: 5, q2: 5, q3: 5, q4: 5 }
  ];
  
  // Token utility data
  const tokenUtility = [
    {
      title: 'Governance',
      description: 'Vote on proposals and participate in the decision-making process of NOVA Bulgaria.',
      icon: '🏛️'
    },
    {
      title: 'Staking',
      description: 'Stake tokens to earn rewards and secure the network.',
      icon: '🔒'
    },
    {
      title: 'Access',
      description: 'Access premium features and services within the NOVA Bulgaria ecosystem.',
      icon: '🔑'
    },
    {
      title: 'Payments',
      description: 'Use tokens for payments and transactions within the ecosystem.',
      icon: '💸'
    }
  ];
  
  // Token statistics
  const tokenStats = [
    { name: 'Total Supply', value: '1,000,000,000', icon: '📊' },
    { name: 'Initial Circulating Supply', value: '100,000,000', icon: '🔄' },
    { name: 'Initial Market Cap', value: '$10,000,000', icon: '💰' },
    { name: 'Token Type', value: 'ERC-20', icon: '⚙️' }
  ];
  
  return (
    <section id="tokenomics" className="tokenomics-section">
      <div className="responsive-container">
        <div className="section-header">
          <h2 className="gradient-text">Tokenomics</h2>
          <p className="section-subtitle">
            The NOVA Bulgaria token powers the ecosystem and enables governance, staking, and access to services.
          </p>
        </div>
        
        <div className="tokenomics-tabs">
          <button 
            className={`tab-button ${activeTab === 'distribution' ? 'active' : ''}`}
            onClick={() => setActiveTab('distribution')}
          >
            Distribution
          </button>
          <button 
            className={`tab-button ${activeTab === 'release' ? 'active' : ''}`}
            onClick={() => setActiveTab('release')}
          >
            Release Schedule
          </button>
          <button 
            className={`tab-button ${activeTab === 'utility' ? 'active' : ''}`}
            onClick={() => setActiveTab('utility')}
          >
            Token Utility
          </button>
        </div>
        
        <div className="tokenomics-content glass-card">
          {/* Distribution Tab */}
          {activeTab === 'distribution' && (
            <div className="distribution-content">
              <div className="distribution-chart">
                <div className="pie-chart">
                  {distributionData.map((item, index) => {
                    // Calculate the offset for each segment
                    const previousSegments = distributionData
                      .slice(0, index)
                      .reduce((acc, curr) => acc + curr.percentage, 0);
                    
                    return (
                      <div 
                        key={item.name}
                        className="pie-segment"
                        style={{
                          backgroundColor: item.color,
                          transform: `rotate(${previousSegments * 3.6}deg)`,
                          clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((item.percentage * 3.6) * Math.PI / 180)}% ${50 - 50 * Math.sin((item.percentage * 3.6) * Math.PI / 180)}%, 50% 50%)`
                        }}
                        data-percentage={`${item.percentage}%`}
                        data-name={item.name}
                      >
                        <span className="segment-tooltip">
                          {item.name}: {item.percentage}%
                        </span>
                      </div>
                    );
                  })}
                  <div className="pie-center">
                    <span className="token-symbol">NOVA</span>
                  </div>
                </div>
              </div>
              
              <div className="distribution-legend">
                {distributionData.map(item => (
                  <div key={item.name} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                    <div className="legend-info">
                      <span className="legend-name">{item.name}</span>
                      <span className="legend-percentage">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Release Schedule Tab */}
          {activeTab === 'release' && (
            <div className="release-content">
              <div className="release-chart">
                <div className="chart-header">
                  <div className="chart-year">Year</div>
                  <div className="chart-quarter">Q1</div>
                  <div className="chart-quarter">Q2</div>
                  <div className="chart-quarter">Q3</div>
                  <div className="chart-quarter">Q4</div>
                  <div className="chart-total">Total</div>
                </div>
                
                {releaseSchedule.map(year => {
                  const yearTotal = year.q1 + year.q2 + year.q3 + year.q4;
                  
                  return (
                    <div key={year.year} className="chart-row">
                      <div className="chart-year">{year.year}</div>
                      <div className="chart-quarter">
                        <div className="release-bar" style={{ height: `${year.q1 * 5}px` }}>
                          <span className="release-percentage">{year.q1}%</span>
                        </div>
                      </div>
                      <div className="chart-quarter">
                        <div className="release-bar" style={{ height: `${year.q2 * 5}px` }}>
                          <span className="release-percentage">{year.q2}%</span>
                        </div>
                      </div>
                      <div className="chart-quarter">
                        <div className="release-bar" style={{ height: `${year.q3 * 5}px` }}>
                          <span className="release-percentage">{year.q3}%</span>
                        </div>
                      </div>
                      <div className="chart-quarter">
                        <div className="release-bar" style={{ height: `${year.q4 * 5}px` }}>
                          <span className="release-percentage">{year.q4}%</span>
                        </div>
                      </div>
                      <div className="chart-total">{yearTotal}%</div>
                    </div>
                  );
                })}
                
                <div className="chart-footer">
                  <p>Total token release over 4 years: 100%</p>
                </div>
              </div>
              
              <div className="release-notes premium-glass-card">
                <h4>Token Release Notes</h4>
                <ul>
                  <li>Team & Advisor tokens are locked for 1 year, then vested over 3 years</li>
                  <li>Community Treasury tokens are released gradually over 4 years</li>
                  <li>Ecosystem Growth tokens are released based on milestones</li>
                  <li>Private Sale tokens have a 6-month cliff, then 18-month vesting</li>
                </ul>
              </div>
            </div>
          )}
          
          {/* Token Utility Tab */}
          {activeTab === 'utility' && (
            <div className="utility-content">
              <div className="utility-cards">
                {tokenUtility.map(item => (
                  <div key={item.title} className="utility-card premium-glass-card">
                    <div className="utility-icon">{item.icon}</div>
                    <h4 className="utility-title">{item.title}</h4>
                    <p className="utility-description">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="token-stats">
                <h4>Token Statistics</h4>
                <div className="stats-grid">
                  {tokenStats.map(stat => (
                    <div key={stat.name} className="stat-card glass-card">
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-info">
                        <span className="stat-name">{stat.name}</span>
                        <span className="stat-value">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
