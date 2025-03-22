import React, { useRef, useEffect } from 'react';
import useQRCode from '../../hooks/useQRCode';
import useCardScaling from '../../hooks/useCardScaling';
import './ModernNFTIdCard.css';

interface NFTIdCardProps {
  userData?: {
    name: string;
    id: string;
    dob?: string;
    nationality?: string;
    issued?: string;
    expires?: string;
    walletAddress: string;
    citizenshipLevel: string;
    socialScore?: number;
    rank?: string;
    expertise?: string;
  };
}

/**
 * Modern NFT ID Card Component
 * 
 * A React component that displays a modern holographic NFT ID card for NOVA Bulgaria citizens.
 * Features:
 * - Modern glass morphism design
 * - Transform-based scaling for mobile responsiveness
 * - QR code with essential identity info
 */
const NFTIdCard: React.FC<NFTIdCardProps> = ({ 
  userData = {
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
  }
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<HTMLDivElement>(null);
  
  // Original card width for scaling calculations
  const originalWidth = 700;

  // Generate QR code with essential identity info
  const qrCodeData = JSON.stringify({
    id: userData.id,
    name: userData.name,
    citizenship: userData.citizenshipLevel
  });

  // Clear QR code container before generating a new one
  useEffect(() => {
    if (qrCodeRef.current) {
      qrCodeRef.current.innerHTML = '';
    }
  }, []);

  // Use custom hook for QR code generation
  useQRCode(qrCodeRef, {
    text: qrCodeData,
    width: 80,
    height: 80,
    colorDark: "#ffffff",
    colorLight: "#00000000" // Transparent background
  });

  // Use custom hook for card scaling
  useCardScaling(containerRef, cardRef, {
    originalWidth,
    transformOrigin: 'center top'
  });

  return (
    <div ref={containerRef} className="flex justify-center h-[300px] sm:h-[442px]">
      {/* Modern NFT ID Card */}
      <div 
        ref={cardRef} 
        className="w-full max-w-[700px] h-full rounded-xl relative shadow-2xl overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(0, 26, 21, 0.9), rgba(0, 10, 8, 0.95))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 150, 110, 0.3)'
        }}
      >
        {/* Animated Border */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(45deg, rgba(0, 150, 110, 0.3), rgba(0, 200, 150, 0.1), rgba(0, 150, 110, 0.3))',
          backgroundSize: '200% 200%',
          animation: 'gradientBorder 8s ease infinite',
          opacity: 0.6,
          borderRadius: 'inherit',
          zIndex: 1
        }}></div>

        {/* Card Inner Content */}
        <div className="p-6 relative z-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-black font-bold text-xs">
                NOVA
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-[var(--primary)]">NATIONAL REPUBLIC OF BULGARIA</h3>
                <p className="text-xs text-gray-400">Self-sovereign identity (SSI)</p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-bold" style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              color: '#000'
            }}>
              {userData.citizenshipLevel}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - User Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-1">{userData.name}</h2>
                <p className="text-[var(--primary)] font-medium">{userData.id}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Date of Birth</p>
                  <p className="text-white">{userData.dob}</p>
                </div>
                <div>
                  <p className="text-gray-400">Nationality</p>
                  <p className="text-white">{userData.nationality}</p>
                </div>
                <div>
                  <p className="text-gray-400">Issued</p>
                  <p className="text-white">{userData.issued}</p>
                </div>
                <div>
                  <p className="text-gray-400">Expires</p>
                  <p className="text-white">{userData.expires}</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-xs">Wallet Address</p>
                <p className="text-xs text-gray-300 font-mono break-all">{userData.walletAddress}</p>
              </div>
            </div>
            
            {/* Right Column - QR and Stats */}
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* QR Code */}
              <div 
                ref={qrCodeRef}
                className="w-32 h-32 rounded-lg border border-[var(--primary)] flex items-center justify-center overflow-hidden bg-black/30"
                style={{ padding: '0.5rem' }}
              ></div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {userData.socialScore && (
                  <div className="p-3 rounded-lg text-center" style={{
                    background: 'rgba(0, 150, 110, 0.1)',
                    border: '1px solid rgba(0, 150, 110, 0.3)'
                  }}>
                    <p className="text-gray-400 text-xs">Social Score</p>
                    <p className="text-[var(--primary)] font-bold">{userData.socialScore}</p>
                  </div>
                )}
                
                {userData.rank && (
                  <div className="p-3 rounded-lg text-center" style={{
                    background: 'rgba(0, 150, 110, 0.1)',
                    border: '1px solid rgba(0, 150, 110, 0.3)'
                  }}>
                    <p className="text-gray-400 text-xs">Rank</p>
                    <p className="text-[var(--primary)] font-bold">{userData.rank}</p>
                  </div>
                )}
                
                {userData.expertise && (
                  <div className="p-3 rounded-lg text-center" style={{
                    background: 'rgba(0, 150, 110, 0.1)',
                    border: '1px solid rgba(0, 150, 110, 0.3)'
                  }}>
                    <p className="text-gray-400 text-xs">Expertise</p>
                    <p className="text-[var(--primary)] font-bold">{userData.expertise}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Pattern */}
        <div className="absolute bottom-2 right-4 opacity-30">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 8.954 8.954 0 20 0H100C111.046 0 120 8.954 120 20C120 31.046 111.046 40 100 40H20C8.954 40 0 31.046 0 20Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="120" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00966E" />
                <stop offset="1" stopColor="#004D38" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Bulgarian Flag Element */}
        <div className="absolute top-6 right-24 flex flex-col h-4 w-6 overflow-hidden rounded-sm">
          <div className="w-full h-1/3 bg-white"></div>
          <div className="w-full h-1/3 bg-green-600"></div>
          <div className="w-full h-1/3 bg-red-600"></div>
        </div>
      </div>
      
      {/* Add keyframes for the animated border */}
      <style jsx>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default NFTIdCard;
