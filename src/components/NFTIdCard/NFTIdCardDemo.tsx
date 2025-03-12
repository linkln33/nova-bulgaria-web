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
    <div className="w-full max-w-[700px]">
      <NFTIdCard userData={userData} />
    </div>
  );
};

export default NFTIdCardDemo;
