import React from 'react';
import './SSIInfoCard.css';

const SSIInfoCard: React.FC = () => {
  return (
    <div className="w-full max-w-[700px]">
      <div className="ssi-info-card-container">
        <div className="ssi-info-card">
          <h2 className="text-2xl font-bold mb-4 text-[#00ffaa]">Self-sovereign identity (SSI)</h2>
          <p className="text-white mb-6">
            Self-sovereign identity (SSI) is a form of digital identity that the user has complete control over. 
            This means that the user decides who sees what information and when.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
            <div className="apply-section">
              <h3 className="text-xl font-semibold mb-3 text-[#00ffaa]">How to Apply</h3>
              <ul className="space-y-2 text-white mb-4">
                <li>Complete Knowledge Test</li>
                <li>Submit Documentation</li>
                <li>Pass Identity Verification</li>
              </ul>
              <p className="text-sm text-gray-300 mb-4">Start your application process</p>
              <button className="w-full bg-[#00ffaa] text-black py-3 rounded-md font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                APPLY NOW
              </button>
            </div>

            <div className="benefits-section">
              <h3 className="text-xl font-semibold mb-3 text-[#00ffaa]">Benefits</h3>
              <ul className="space-y-2 text-white mb-4">
                <li>Governance Rights</li>
                <li>Token Rewards</li>
                <li>Community Access</li>
              </ul>
              <p className="text-sm text-gray-300 mb-4">Read our detailed whitepaper</p>
              <button className="w-full border-2 border-[#00ffaa] text-white py-3 rounded-md font-bold hover:bg-[rgba(0,255,170,0.1)] transition-all duration-300 transform hover:scale-105">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSIInfoCard;
