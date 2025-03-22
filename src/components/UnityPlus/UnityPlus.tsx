import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useUnityPlus } from '../../context/UnityPlusContext';
import './UnityPlus.css';
import SectorSelection from './SectorSelection';
import ProposalFeed from './ProposalFeed';
import TaskBoard from './TaskBoard';
import UserProfile from './UserProfile';
import WalletConnect from './WalletConnect';
import Elections from './Elections';
import Wallet from './Wallet';

const UnityPlus: React.FC = () => {
  const { t } = useLanguage();
  const { 
    isUnityPlusDashboardOpen, 
    activeTab, 
    setActiveTab, 
    isConnected, 
    userProfile, 
    handleConnect,
    openUnityPlusDashboard
  } = useUnityPlus();

  // Check if we should automatically open the dashboard and set the active tab
  useEffect(() => {
    // Check if redirected from onboarding with active tab preference
    const activeTabFromStorage = localStorage.getItem('unity_plus_active_tab');
    const nftData = localStorage.getItem('nova_nft_data');
    
    if (nftData && activeTabFromStorage) {
      // Open the dashboard if it's not already open
      if (!isUnityPlusDashboardOpen) {
        openUnityPlusDashboard();
      }
      
      // Automatically connect wallet if not already connected
      if (!isConnected) {
        handleConnect();
      }
      
      // Set the active tab (usually 'wallet' after NFT minting)
      setActiveTab(activeTabFromStorage);
      
      // Clear the localStorage values after using them
      localStorage.removeItem('unity_plus_active_tab');
    }
  }, [isUnityPlusDashboardOpen, openUnityPlusDashboard, setActiveTab, isConnected, handleConnect]);

  return (
    <div className="unity-plus-container">
      <div className="unity-plus-header">
        <h1 className="unity-plus-title">Unity+</h1>
        <p className="unity-plus-subtitle">{t('unityPlus.subtitle', 'The Social-Governance Super App')}</p>
      </div>

      {!isUnityPlusDashboardOpen ? (
        <div className="unity-plus-intro">
          <div className="intro-card">
            <h2>{t('unityPlus.intro.title', 'Welcome to Unity+')}</h2>
            <p>{t('unityPlus.intro.description', 'The Social-Governance Super App for the new digital nation.')}</p>
            <p>{t('unityPlus.intro.features', 'Participate in governance, vote in elections, complete tasks, and earn tokens.')}</p>
            <button 
              className="start-button"
              onClick={() => openUnityPlusDashboard()}
            >
              {t('unityPlus.intro.start', 'START HERE')}
            </button>
          </div>
        </div>
      ) : (
        !isConnected ? (
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
                {activeTab === 'wallet' && userProfile && <Wallet userProfile={userProfile} />}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default UnityPlus;
