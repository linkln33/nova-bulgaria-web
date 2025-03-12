import React from 'react';
import NFTIdCard from './NFTIdCard';
import NFTIdCardHtmlStyle from './NFTIdCard-html-style';

const NFTIdCardDemo: React.FC = () => {
  // Sample user data
  const userData = {
    name: "Иван Иванов",
    id: "BG-2025-0001",
    dob: "1990-01-01",
    nationality: "NOVA Bulgarian",
    issued: "2025-02-19",
    expires: "2030-02-19",
    walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    citizenshipLevel: "Gold",
    socialScore: 785,
    rank: "Citizen",
    expertise: "Technology"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">NFT ID Card Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-center text-[var(--primary)] mb-4">HTML-Style Version</h2>
          <NFTIdCardHtmlStyle userData={userData} />
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Features:</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Compact design matching the original HTML</li>
              <li>Holographic effect with natural color transitions</li>
              <li>X-pattern texture with distortion effects</li>
              <li>QR code with Bulgarian flag centered</li>
              <li>Responsive scaling for all devices</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-center text-[var(--primary)] mb-4">Enhanced React Version</h2>
          <NFTIdCard userData={userData} />
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Features:</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Premium holographic border with sophisticated animations</li>
              <li>Multiple animation layers with different timings</li>
              <li>Enhanced information display with social score and rank</li>
              <li>Larger QR code for better scanning</li>
              <li>Glassmorphism effects for modern look</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <button 
          className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          onClick={() => {
            // You could add functionality to switch between versions in your app
            alert('You can implement switching between card versions in your main app!');
          }}
        >
          Select Preferred Version
        </button>
      </div>
    </div>
  );
};

export default NFTIdCardDemo;
