import React, { useEffect, useRef } from 'react';
import { QRCode } from 'react-qrcode-logo';
import useResizeObserver from '../../hooks/useResizeObserver';
import './NFTIdCard.css';

interface NFTIdCardProps {
  userData?: {
    name: string;
    id: string;
    dob: string;
    nationality: string;
    issued: string;
    expires: string;
    walletAddress: string;
    citizenshipLevel: string;
    socialScore: number;
    rank: string;
    expertise: string;
  };
}

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
  const qrContainerRef = useRef<HTMLDivElement>(null);
  
  // Original card width for scaling calculations
  const originalWidth = 700;

  // QR code data
  const qrData = JSON.stringify({
    id: userData.id,
    name: userData.name,
    citizenship: userData.citizenshipLevel
  });

  // Bulgarian flag image for QR code center logo
  const flagImageUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAxOCI+PHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjYiIGZpbGw9IiNmZmYiLz48cmVjdCB5PSI2IiB3aWR0aD0iMzAiIGhlaWdodD0iNiIgZmlsbD0iIzAwOTY2RSIvPjxyZWN0IHk9IjEyIiB3aWR0aD0iMzAiIGhlaWdodD0iNiIgZmlsbD0iI0Q2MjYxMiIvPjwvc3ZnPg==";

  // Scale the ID card for mobile responsiveness
  const scaleIdCard = () => {
    if (containerRef.current && cardRef.current) {
      // Get the current container width
      const containerWidth = containerRef.current.clientWidth;
      
      // Calculate the scale factor
      let scaleFactor = Math.min(1, containerWidth / originalWidth);
      
      // Apply the transform scale to the ID card
      cardRef.current.style.transform = `scale(${scaleFactor})`;
      
      // Adjust the container height to accommodate the scaled card
      const originalHeight = cardRef.current.offsetHeight / scaleFactor;
      containerRef.current.style.height = `${originalHeight * scaleFactor}px`;
      
      // Ensure the card is centered after scaling
      cardRef.current.style.transformOrigin = 'center top';
    }
  };

  // Use custom resize observer hook
  useResizeObserver(containerRef, scaleIdCard);

  useEffect(() => {
    // Apply initial scaling
    scaleIdCard();
    
    // Re-apply scaling when window is resized
    window.addEventListener('resize', scaleIdCard);
    
    return () => {
      window.removeEventListener('resize', scaleIdCard);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center h-[300px] sm:h-[442px]">
      {/* NFT ID Card */}
      <div 
        ref={cardRef} 
        className="w-full max-w-[700px] h-full glass rounded-xl relative shadow-2xl overflow-hidden" 
        style={{ background: '#001a15' }}
      >
        {/* Holographic Border - Pokemon card style */}
        <div className="holographic-border">
          <div className="holographic-texture"></div>
        </div>

        {/* Card Inner Content */}
        <div className="p-6">
          {/* Photo Area */}
          <div className="absolute top-[5%] left-[5%] w-[25%] h-[45%] glass rounded-lg border-2 border-[var(--primary)] flex items-center justify-center">
            <svg className="w-3/4 h-3/4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>

          {/* Header */}
          <div className="absolute top-[5%] left-[32%] right-[5%] flex flex-col items-end">
            <div className="flex items-center">
              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--primary)]">NATIONAL REPUBLIC OF BULGARIA</h3>
              {/* Bulgarian Flag */}
              <div className="flex flex-col ml-2 h-[1.25em] justify-center">
                <div className="w-8 h-[0.425em] bg-white"></div>
                <div className="w-8 h-[0.425em] bg-green-600"></div>
                <div className="w-8 h-[0.425em] bg-red-600"></div>
              </div>
            </div>
            {/* Subtitle */}
            <p className="text-xs italic text-gray-300 mt-1 text-center">Self-sovereign identity SSID</p>
          </div>

          {/* Additional Features */}
          <div className="absolute top-[25%] left-[32%] right-[5%] flex flex-row gap-2 justify-center">
            {/* Social Score */}
            <div className="glass p-2 rounded-lg border border-[var(--primary)] text-center" style={{ width: '150px' }}>
              <div className="text-xs text-gray-300">Social Score</div>
              <div className="text-lg font-bold text-[var(--primary)]">{userData.socialScore}</div>
            </div>
            {/* Rank */}
            <div className="glass p-2 rounded-lg border border-[var(--primary)] text-center" style={{ width: '150px' }}>
              <div className="text-xs text-gray-300">Rank</div>
              <div className="text-lg font-bold text-[var(--primary)]">{userData.rank}</div>
            </div>
            {/* Expertise */}
            <div className="glass p-2 rounded-lg border border-[var(--primary)] text-center" style={{ width: '150px' }}>
              <div className="text-xs text-gray-300">Expertise</div>
              <div className="text-lg font-bold text-[var(--primary)]">{userData.expertise}</div>
            </div>
          </div>

          {/* Name and Wallet Address */}
          <div className="absolute top-[53%] left-[5%] w-[60%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)]">{userData.name}</h2>
            {/* Wallet Address */}
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-[var(--primary)] font-mono break-all">{userData.walletAddress}</div>
          </div>

          {/* QR Code - Fixed to show complete QR code */}
          <div 
            ref={qrContainerRef}
            className="absolute bottom-[5%] left-[5%] w-[15%] aspect-square bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
          >
            <QRCode
              value={qrData}
              size={105} // Fixed size that will fit in the container
              logoImage={flagImageUrl}
              logoWidth={30}
              logoHeight={18}
              qrStyle="dots"
              eyeRadius={5}
              removeQrCodeBehindLogo={true}
              logoPadding={2}
              logoOpacity={1}
              bgColor="#FFFFFF"
              fgColor="#000000"
              ecLevel="H"
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          </div>

          {/* Logo */}
          <div className="absolute bottom-6 right-6">
            <img src="/assets/images/logo.png" alt="NOVA Bulgaria Logo" className="w-16 h-16 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTIdCard;
