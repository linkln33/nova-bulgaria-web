import React, { useEffect, useRef } from 'react';
import { QRCode } from 'react-qrcode-logo';
import useResizeObserver from '../../hooks/useResizeObserver';
import './NFTIdCard-html-style.css';

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

const NFTIdCardHtmlStyle: React.FC<NFTIdCardProps> = ({ 
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
      
      // Calculate the scale factor based on a max width of 400px (from the HTML version)
      let scaleFactor = Math.min(1, containerWidth / 400);
      
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
    <div ref={containerRef} className="flex justify-center">
      <div 
        ref={cardRef} 
        className="relative w-full max-w-md mx-auto h-64 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 nft-id-card"
      >
        {/* Card Background */}
        <div className="absolute inset-0 card-background"></div>
        
        {/* Holographic Effect */}
        <div className="absolute inset-0 opacity-30 holographic-effect"></div>
        
        {/* Logo */}
        <img src="/assets/images/logo.png" alt="NOVA Bulgaria" className="absolute top-4 left-4 h-10 w-auto" />
        
        {/* Citizenship Level */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold citizenship-badge">
          {userData.citizenshipLevel}
        </div>
        
        {/* Main Content */}
        <div className="absolute bottom-0 w-full p-4 text-white">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-bold mb-2">{userData.name}</h2>
              <div className="space-y-1 text-sm">
                <p>ID: {userData.id}</p>
                <p>DOB: {userData.dob}</p>
                <p>Nationality: {userData.nationality}</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between">
              {/* QR Code */}
              <div className="mb-2 w-20 h-20 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <QRCode
                  value={qrData}
                  size={80}
                  logoImage={flagImageUrl}
                  logoWidth={24}
                  logoHeight={14}
                  qrStyle="dots"
                  eyeRadius={5}
                  removeQrCodeBehindLogo={true}
                  logoPadding={2}
                  logoOpacity={1}
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  ecLevel="H"
                />
              </div>
              <div className="text-xs text-right">
                <p>Issued: {userData.issued}</p>
                <p>Expires: {userData.expires}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Security Features */}
        <div className="absolute bottom-2 left-4 text-[8px] text-white/50">
          {userData.walletAddress}
        </div>
        
        {/* Premium Holographic Border with X-pattern texture */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="pokemon-holo-border"></div>
          <div className="x-pattern"></div>
          <div className="distortion-layer"></div>
          <div className="sparkles"></div>
        </div>
      </div>
    </div>
  );
};

export default NFTIdCardHtmlStyle;
