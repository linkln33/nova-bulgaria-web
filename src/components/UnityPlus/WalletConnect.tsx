import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './WalletConnect.css';

interface WalletConnectProps {
  onConnect: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect }) => {
  const { t } = useLanguage();
  const [nftId, setNftId] = useState('');
  const [activeTab, setActiveTab] = useState('wallet');
  const [isLoading, setIsLoading] = useState(false);

  const handleWalletConnect = () => {
    setIsLoading(true);
    // Simulate wallet connection
    setTimeout(() => {
      setIsLoading(false);
      onConnect();
    }, 1500);
  };

  const handleNftIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nftId.trim() === '') return;
    
    setIsLoading(true);
    // Simulate NFT ID verification
    setTimeout(() => {
      setIsLoading(false);
      onConnect();
    }, 1500);
  };

  return (
    <div className="wallet-connect">
      <div className="connect-tabs">
        <button 
          className={`connect-tab ${activeTab === 'wallet' ? 'active' : ''}`}
          onClick={() => setActiveTab('wallet')}
        >
          {t('unityPlus.connect.wallet', 'Connect Wallet')}
        </button>
        <button 
          className={`connect-tab ${activeTab === 'nft' ? 'active' : ''}`}
          onClick={() => setActiveTab('nft')}
        >
          {t('unityPlus.connect.nftId', 'NFT ID')}
        </button>
      </div>

      <div className="connect-content">
        {activeTab === 'wallet' ? (
          <div className="wallet-options">
            <p className="wallet-description">
              {t('unityPlus.connect.walletDescription', 'Connect your wallet to access Unity+ governance features.')}
            </p>
            
            <div className="wallet-buttons">
              <button 
                className="wallet-button metamask"
                onClick={handleWalletConnect}
                disabled={isLoading}
              >
                <span className="wallet-icon">🦊</span>
                MetaMask
              </button>
              
              <button 
                className="wallet-button coinbase"
                onClick={handleWalletConnect}
                disabled={isLoading}
              >
                <span className="wallet-icon">💰</span>
                Coinbase
              </button>
              
              <button 
                className="wallet-button walletconnect"
                onClick={handleWalletConnect}
                disabled={isLoading}
              >
                <span className="wallet-icon">🔗</span>
                WalletConnect
              </button>
            </div>
            
            {isLoading && (
              <div className="loading-indicator">
                <div className="spinner"></div>
                <p>{t('unityPlus.connect.connecting', 'Connecting...')}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="nft-login">
            <p className="nft-description">
              {t('unityPlus.connect.nftDescription', 'Enter your NFT ID to access Unity+ governance features.')}
            </p>
            
            <form onSubmit={handleNftIdSubmit} className="nft-form">
              <input
                type="text"
                placeholder={t('unityPlus.connect.nftPlaceholder', 'BG-NFT-XXXX')}
                value={nftId}
                onChange={(e) => setNftId(e.target.value)}
                className="nft-input"
                disabled={isLoading}
              />
              
              <button 
                type="submit" 
                className="nft-submit"
                disabled={isLoading || nftId.trim() === ''}
              >
                {t('unityPlus.connect.verify', 'Verify')}
              </button>
            </form>
            
            {isLoading && (
              <div className="loading-indicator">
                <div className="spinner"></div>
                <p>{t('unityPlus.connect.verifying', 'Verifying...')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
