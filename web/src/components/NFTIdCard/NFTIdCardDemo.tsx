import React from 'react';
import NFTIdCard from './NFTIdCard';

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
      <h1 className="text-3xl font-bold text-center text-[var(--primary)] mb-8">NOVA Bulgaria NFT ID Card</h1>
      
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <NFTIdCard userData={userData} />
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Features:</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>Premium holographic border with sophisticated animations</li>
              <li>Multiple animation layers with different timings</li>
              <li>Enhanced information display with social score and rank</li>
              <li>QR code with Bulgarian flag centered for better scanning</li>
              <li>Glassmorphism effects for modern look</li>
              <li>Responsive design that scales properly on all devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTIdCardDemo;
