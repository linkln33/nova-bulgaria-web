import React from 'react';
import './Vision.css';
import '../../styles/glassmorphism.css';

const Vision: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="vision-container glassmorphism-dark">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">Our Vision</h2>
          <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Card - NOVA Bulgaria Concept */}
          <div className="vision-card p-8 rounded-2xl backdrop-blur-md bg-[rgba(0,26,21,0.7)] border border-[rgba(0,255,170,0.2)] hover:border-[rgba(0,255,170,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">The NOVA Bulgaria Concept</h3>
            <div className="space-y-4 text-white">
              <p>
                NOVA BULGARIA is a sovereign digital nation blockchain project built on Cosmos SDK. It represents a revolutionary approach to rebuilding a nation through decentralized technology and direct democracy.
              </p>
              <p>
                The project is powered by the Bulgarian Lion (BGL) token with a total supply of 1 trillion tokens distributed over 100 years, supporting both core traditional sectors and innovative new sectors through a meritocratic governance system.
              </p>
              <p>
                At the heart of NOVA BULGARIA is the Proof of Contribution (PoC) consensus mechanism, which rewards citizens based on their valuable contributions to the nation rather than just financial stake or computing power.
              </p>
            </div>
          </div>

          {/* Right Card - National NFT ID System */}
          <div className="vision-card p-8 rounded-2xl backdrop-blur-md bg-[rgba(0,26,21,0.7)] border border-[rgba(0,255,170,0.2)] hover:border-[rgba(0,255,170,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">National NFT ID System</h3>
            <div className="space-y-4 text-white">
              <p>
                The foundation of citizenship in NOVA BULGARIA is our innovative National NFT ID System, which uses soulbound NFTs that cannot be transferred or sold.
              </p>
              <p>
                Each citizen receives a unique digital identity after passing a foundational knowledge exam covering Bulgarian history, language, and culture. This NFT ID serves as proof of citizenship and enables participation in governance.
              </p>
              <p>
                The system provides self-sovereign identity (SSI), giving users complete control over their personal information while enabling secure verification for national services and governance participation.
              </p>
              <p>
                Citizens with NFT IDs can vote on proposals, contribute to projects, earn token rewards, and access all community resources and benefits.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
    </div>
  );
};

export default Vision;
