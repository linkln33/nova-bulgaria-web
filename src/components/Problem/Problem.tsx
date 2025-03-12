import React, { useState } from 'react';
import './Problem.css';

const Problem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('problem');

  return (
    <div className="problem-container">
      <div className="vision-header">
        <h1 className="vision-title">Vision for the Future</h1>
        <p className="vision-subtitle">Rebuilding Bulgaria as a digital nation for all citizens</p>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'problem' ? 'active' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
          The Problem
        </button>
        <button 
          className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
          onClick={() => setActiveTab('vision')}
        >
          Our Vision
        </button>
        <button 
          className={`tab-button ${activeTab === 'works' ? 'active' : ''}`}
          onClick={() => setActiveTab('works')}
        >
          How It Works
        </button>
        <button 
          className={`tab-button ${activeTab === 'citizen' ? 'active' : ''}`}
          onClick={() => setActiveTab('citizen')}
        >
          Citizen Power
        </button>
      </div>

      <div className="content-panel">
        <h2 className="section-title">Why Bulgaria Needs Change</h2>
        
        <p className="section-description">
          Bulgaria today faces serious challenges that affect the daily lives of its citizens. 
          For decades, the same problems have persisted despite promises of change from traditional political parties.
        </p>
        
        <div className="problems-grid">
          <div className="problem-card political">
            <h3>Political Problems</h3>
            <ul>
              <li>Government decisions favor the wealthy and connected</li>
              <li>Citizens have little say in important decisions</li>
              <li>Young people leave Bulgaria for better opportunities</li>
            </ul>
          </div>
          
          <div className="problem-card environmental">
            <h3>Environmental Issues</h3>
            <ul>
              <li>Beautiful natural resources are being damaged</li>
              <li>Pollution affects our health and quality of life</li>
              <li>Short-term profit is prioritized over long-term health</li>
            </ul>
          </div>
        </div>
        
        <div className="new-approach">
          <h3>A New Approach</h3>
          <p>
            What if we could rebuild Bulgaria from the ground up? NOVA BULGARIA is a completely new way of 
            thinking about our nation - one where citizens make the decisions, where transparency is 
            guaranteed by technology, and where your contribution to society determines your influence, 
            not your connections or wealth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
