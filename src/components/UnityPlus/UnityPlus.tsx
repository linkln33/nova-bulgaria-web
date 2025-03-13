import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './UnityPlus.css';
import SectorSelection from './SectorSelection';
import ProposalFeed from './ProposalFeed';
import TaskBoard from './TaskBoard';
import UserProfile from './UserProfile';
import WalletConnect from './WalletConnect';
import Elections from './Elections';

// Define the user profile interface
interface UserProfileType {
  nftId: string;
  name: string;
  pocScore: number;
  expertise: string[];
  rank: string;
  followedSectors: string[];
  walletBalance: {
    [key: string]: number;
  };
}

const UnityPlus: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('feed');
  const [isConnected, setIsConnected] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileType | null>(null);

  // Mock function to simulate wallet connection
  const handleConnect = () => {
    setIsConnected(true);
    // Mock user profile data
    setUserProfile({
      nftId: 'BG-NFT-1234',
      name: 'Alexander Petrov',
      pocScore: 78,
      expertise: ['Economy', 'Technology'],
      rank: 'Citizen',
      followedSectors: ['Economy', 'Technology', 'Healthcare'],
      walletBalance: {
        BGL: 1250,
        'BGL-TECH': 320,
        'BGL-HEALTH': 150
      }
    });
  };

  return (
    <div className="unity-plus-container">
      <div className="unity-plus-header">
        <h1 className="unity-plus-title">Unity+</h1>
        <p className="unity-plus-subtitle">{t('unityPlus.subtitle', 'The Social-Governance Super App')}</p>
      </div>

      {!isConnected ? (
        <div className="unity-plus-login">
          <div className="login-card">
            <h2>{t('unityPlus.welcome', 'Welcome to Unity+')}</h2>
            <p>{t('unityPlus.loginDescription', 'Experience the Future')}</p>
            <WalletConnect onConnect={handleConnect} />
            <button className="explore-button">
              {t('unityPlus.explore', 'Explore Unity+')}
            </button>
          </div>
        </div>
      ) : (
        <div className="unity-plus-dashboard">
          <div className="unity-plus-sidebar">
            {userProfile && <UserProfile profile={userProfile} />}
          </div>
          <div className="unity-plus-main">
            <div className="unity-plus-tabs">
              <button 
                className={`tab-button ${activeTab === 'feed' ? 'active' : ''}`}
                onClick={() => setActiveTab('feed')}
              >
                {t('unityPlus.tabs.feed', 'Feed')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'sectors' ? 'active' : ''}`}
                onClick={() => setActiveTab('sectors')}
              >
                {t('unityPlus.tabs.sectors', 'Sectors')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'tasks' ? 'active' : ''}`}
                onClick={() => setActiveTab('tasks')}
              >
                {t('unityPlus.tabs.tasks', 'Tasks')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'elections' ? 'active' : ''}`}
                onClick={() => setActiveTab('elections')}
              >
                {t('unityPlus.tabs.elections', 'Elections')}
              </button>
              <button 
                className={`tab-button ${activeTab === 'wallet' ? 'active' : ''}`}
                onClick={() => setActiveTab('wallet')}
              >
                {t('unityPlus.tabs.wallet', 'Wallet')}
              </button>
            </div>
            <div className="unity-plus-content">
              {activeTab === 'feed' && userProfile && <ProposalFeed userProfile={userProfile} />}
              {activeTab === 'sectors' && userProfile && <SectorSelection userProfile={userProfile} />}
              {activeTab === 'tasks' && userProfile && <TaskBoard userProfile={userProfile} />}
              {activeTab === 'elections' && userProfile && <Elections userProfile={userProfile} />}
              {activeTab === 'wallet' && userProfile && (
                <div className="wallet-info">
                  <h3>{t('unityPlus.wallet.title', 'Your Wallet')}</h3>
                  <div className="token-balances">
                    <div className="token-item">
                      <span className="token-name">BGL</span>
                      <span className="token-value">{userProfile.walletBalance.BGL}</span>
                    </div>
                    <div className="token-item">
                      <span className="token-name">BGL-TECH</span>
                      <span className="token-value">{userProfile.walletBalance['BGL-TECH']}</span>
                    </div>
                    <div className="token-item">
                      <span className="token-name">BGL-HEALTH</span>
                      <span className="token-value">{userProfile.walletBalance['BGL-HEALTH']}</span>
                    </div>
                  </div>
                  <div className="wallet-actions">
                    <button className="wallet-button">
                      {t('unityPlus.wallet.stake', 'Stake Tokens')}
                    </button>
                    <button className="wallet-button">
                      {t('unityPlus.wallet.transfer', 'Transfer')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnityPlus;
