import React from 'react';
import './LionheartFund.css';
import '../../styles/glassmorphism.css';

const LionheartFund: React.FC = () => {
  return (
    <div className="lionheart-container glassmorphism-dark">
      <div className="lionheart-header">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Your Contribution is Your Legacy, Let's Raise a Nation</h2>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <p className="stat-title">Total Bulgarians Worldwide</p>
          <h3 className="stat-value">Over 33 Million</h3>
        </div>
        
        <div className="stat-card">
          <p className="stat-title">Joined Nova Bulgaria</p>
          <h3 className="stat-value">10,000+</h3>
        </div>
        
        <div className="stat-card">
          <p className="stat-title">Total Contributed</p>
          <h3 className="stat-value">$578,000</h3>
        </div>
      </div>

      <div className="details-container">
        <div className="details-card">
          <h4 className="details-title">Seed Round Details</h4>
          <ul className="details-list">
            <li>20 Million BGL Tokens Available</li>
            <li>Soft Cap: $2 Million</li>
            <li>Hard Cap: $20 Million</li>
          </ul>
        </div>
        
        <div className="details-card">
          <h4 className="details-title">Early Staking Benefits</h4>
          <ul className="details-list">
            <li>First Access to BGL Token Staking</li>
            <li>Maximum Staking Rewards</li>
            <li>Founding Member Status</li>
          </ul>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(578000 / 2000000) * 100}%` }}></div>
        </div>
        <div className="progress-labels">
          <span className="raised">$578,000 Raised</span>
          <span className="cap">$2,000,000 Soft Cap</span>
        </div>
      </div>

      <div className="action-buttons">
        <a href="#whitepaper" className="whitepaper-btn">
          <span className="btn-title">Read Our Whitepaper</span>
          <span className="btn-subtitle">Learn about our vision, technology, and governance model</span>
        </a>
        
        <a href="#contribute" className="contribute-btn">
          <span className="btn-title">Contribute Now</span>
          <span className="btn-subtitle">Become a founding member and secure your BGL tokens</span>
        </a>
      </div>
    </div>
  );
};

export default LionheartFund;
