import React, { useState, useEffect } from 'react';
import './NFTDemo.css';

interface Achievement {
  id: string;
  name: string;
  icon: string;
}

interface NFT {
  id: string;
  name: string;
  level: string;
  mintDate: string;
}

const NFTDemo: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [userNFTs, setUserNFTs] = useState<NFT[]>([]);
  const [showMintControls, setShowMintControls] = useState(false);
  const [showUserNFTs, setShowUserNFTs] = useState(false);

  // Simulate connecting wallet
  const connectWallet = (walletType: 'keplr' | 'metamask') => {
    console.log(`Connecting to ${walletType}...`);
    // In a real app, we would connect to the wallet here
    setWalletConnected(true);
    
    // Check if user has NFTs after connecting
    if (Math.random() > 0.5) {
      // Simulate user having NFTs
      setUserNFTs([
        {
          id: 'BG-2025-0001',
          name: 'Иван Иванов',
          level: 'Gold',
          mintDate: '2025-02-19'
        }
      ]);
      setShowUserNFTs(true);
    }
  };

  // Simulate starting the quiz
  const startQuiz = () => {
    console.log('Starting citizenship quiz...');
    // In a real app, we would show the quiz UI here
    
    // Simulate quiz completion after 2 seconds
    setTimeout(() => {
      const score = Math.floor(Math.random() * 41) + 60; // Random score between 60-100
      setQuizScore(score);
      
      // Generate random achievements based on score
      const possibleAchievements = [
        { id: 'history', name: 'History Expert', icon: '📚' },
        { id: 'tech', name: 'Tech Savvy', icon: '💻' },
        { id: 'culture', name: 'Cultural Knowledge', icon: '🎭' },
        { id: 'economics', name: 'Economics Guru', icon: '📈' },
        { id: 'governance', name: 'Governance Pro', icon: '⚖️' }
      ];
      
      // Select random achievements based on score
      const numAchievements = Math.floor(score / 20);
      const selectedAchievements = possibleAchievements
        .sort(() => 0.5 - Math.random())
        .slice(0, numAchievements);
      
      setAchievements(selectedAchievements);
      setQuizCompleted(true);
      setShowMintControls(true);
    }, 2000);
  };

  // Simulate minting an NFT
  const mintNFT = () => {
    console.log('Minting NFT...');
    // In a real app, we would call the blockchain to mint the NFT
    
    // Simulate minting success
    setTimeout(() => {
      const newNFT = {
        id: `BG-2025-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
        name: 'Иван Иванов',
        level: quizScore >= 80 ? 'Gold' : 'Silver',
        mintDate: new Date().toISOString().split('T')[0]
      };
      
      setUserNFTs([...userNFTs, newNFT]);
      setShowUserNFTs(true);
      setQuizCompleted(false);
      setShowMintControls(false);
    }, 1500);
  };

  return (
    <section className="py-16 relative overflow-hidden" id="nft-demo">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent4)]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Self-sovereign identity (SSI)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* NFT Preview */}
              <div className="space-y-4" id="nft-preview">
                {/* NFT preview will be dynamically inserted here */}
                <div className="flex justify-center items-center h-full">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="relative h-64 rounded-xl overflow-hidden nft-id-card">
                      {/* Card Background */}
                      <div className="absolute inset-0 bg-[#C7FAD2]">
                        {/* ID Card Texture Pattern */}
                        <div className="absolute inset-0 id-card-texture"></div>
                      </div>

                      {/* Holographic Border */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Top Edge */}
                        <div className="absolute top-0 left-0 right-0 h-2 holographic-edge-h"></div>
                        
                        {/* Bottom Edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-2 holographic-edge-h"></div>
                        
                        {/* Left Edge */}
                        <div className="absolute top-0 left-0 bottom-0 w-2 holographic-edge-v"></div>
                        
                        {/* Right Edge */}
                        <div className="absolute top-0 right-0 bottom-0 w-2 holographic-edge-v"></div>
                      </div>
                      
                      {/* Passport Photo Area */}
                      <div className="absolute top-4 left-4 w-28 h-36 bg-white rounded-lg overflow-hidden border-2 border-[#85D4A4] shadow-lg">
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Header with National Title */}
                      <div className="absolute top-4 left-36 right-4">
                        <div className="text-center">
                          <h3 className="text-sm font-bold text-[#00966E] mb-0.5">NATIONAL REPUBLIC</h3>
                          <h3 className="text-sm font-bold text-[#00966E]">OF BULGARIA</h3>
                        </div>
                      </div>

                      {/* Logo in bottom right */}
                      <div className="absolute bottom-4 right-4">
                        <img src="/assets/images/coat-of-arms.png" alt="NOVA Bulgaria" className="h-12 w-auto" />
                      </div>

                      {/* Member Name */}
                      <div className="absolute top-44 left-4 right-4">
                        <h2 className="text-2xl font-bold text-[#00966E]">Иван Иванов</h2>
                        <div className="mt-2 text-sm text-[#00966E] font-medium break-all">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</div>
                        <div className="mt-2 flex justify-start">
                          <div className="h-16 w-16 bg-white flex items-center justify-center">
                            <div className="text-xs text-gray-400">QR Code</div>
                          </div>
                        </div>
                      </div>

                      {/* Citizenship Level */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg">
                        Gold
                      </div>

                      {/* Security Features */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <div className="w-16 h-4 bg-gradient-to-r from-[#00966E] to-[#85D4A4] rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* NFT Details & Controls */}
              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--primary)]">Connect Wallet</h3>
                  <div className="space-y-2">
                    <button 
                      className="btn btn-primary w-full mb-2"
                      onClick={() => connectWallet('keplr')}
                      disabled={walletConnected}
                    >
                      Connect with Keplr
                    </button>
                    <button 
                      className="btn btn-secondary w-full"
                      onClick={() => connectWallet('metamask')}
                      disabled={walletConnected}
                    >
                      Connect with MetaMask
                    </button>
                  </div>
                </div>

                {!quizCompleted && !showMintControls && (
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--accent4)]">Get Your Digital ID</h3>
                    <p className="text-sm text-gray-300 mb-4">Take a short quiz to verify your understanding of NOVA Bulgaria and earn your Digital Citizenship NFT.</p>
                    <button 
                      className="btn btn-accent w-full"
                      onClick={startQuiz}
                      disabled={!walletConnected}
                    >
                      Start Citizenship Quiz
                    </button>
                  </div>
                )}

                {showMintControls && (
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--primary)]">Mint Your Digital ID</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-400">Quiz Score</label>
                        <input 
                          type="number" 
                          value={quizScore} 
                          className="w-full bg-black bg-opacity-50 rounded px-3 py-2 mt-1" 
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">Achievements</label>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {achievements.map(achievement => (
                            <div 
                              key={achievement.id} 
                              className="px-2 py-1 rounded-full text-xs bg-[var(--primary)] bg-opacity-20 text-[var(--primary)]"
                            >
                              {achievement.icon} {achievement.name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <button 
                        className="btn btn-primary w-full"
                        onClick={mintNFT}
                        disabled={!walletConnected || quizScore < 60}
                      >
                        Mint Digital ID
                      </button>
                    </div>
                  </div>
                )}

                {showUserNFTs && userNFTs.length > 0 && (
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--primary)]">Your Digital IDs</h3>
                    <div className="space-y-2">
                      {userNFTs.map(nft => (
                        <div 
                          key={nft.id} 
                          className="p-2 rounded bg-black bg-opacity-30 border border-[var(--primary)] border-opacity-30"
                        >
                          <div className="flex justify-between">
                            <span className="font-semibold">{nft.name}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--primary)] bg-opacity-20 text-[var(--primary)]">
                              {nft.level}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            ID: {nft.id} • Minted: {nft.mintDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="glass rounded-xl p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--accent4)]">Digital Identity NFT</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Name:</span>
                      <span className="font-semibold">Иван Иванов</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">ID:</span>
                      <span className="font-mono">BG-2025-0001</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">DOB:</span>
                      <span>1990-01-01</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Nationality:</span>
                      <span>NOVA Bulgarian</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Citizenship Level:</span>
                      <span className="text-yellow-400">Gold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Social Score:</span>
                      <span>785</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTDemo;
