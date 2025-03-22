import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the user profile interface
export interface UserProfileType {
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

interface UnityPlusContextType {
  isUnityPlusDashboardOpen: boolean;
  openUnityPlusDashboard: () => void;
  closeUnityPlusDashboard: () => void;
  isConnected: boolean;
  userProfile: UserProfileType | null;
  handleConnect: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const UnityPlusContext = createContext<UnityPlusContextType | undefined>(undefined);

export const useUnityPlus = (): UnityPlusContextType => {
  const context = useContext(UnityPlusContext);
  if (!context) {
    throw new Error('useUnityPlus must be used within a UnityPlusProvider');
  }
  return context;
};

interface UnityPlusProviderProps {
  children: ReactNode;
}

export const UnityPlusProvider: React.FC<UnityPlusProviderProps> = ({ children }) => {
  const [isUnityPlusDashboardOpen, setIsUnityPlusDashboardOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfileType | null>(null);
  const [activeTab, setActiveTab] = useState('feed');

  // Check for NFT data on initial load
  useEffect(() => {
    const nftDataString = localStorage.getItem('nova_nft_data');
    if (nftDataString) {
      // If we have NFT data, we should auto-connect
      handleConnect();
    }
  }, []);

  const openUnityPlusDashboard = () => {
    // Scroll to Unity+ section first
    const unityPlusSection = document.getElementById('unity-plus');
    if (unityPlusSection) {
      unityPlusSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsUnityPlusDashboardOpen(true);
  };

  const closeUnityPlusDashboard = () => {
    setIsUnityPlusDashboardOpen(false);
  };

  // Mock function to simulate wallet connection
  const handleConnect = () => {
    setIsConnected(true);
    
    // Check if we have NFT data from the onboarding process
    const nftDataString = localStorage.getItem('nova_nft_data');
    
    if (nftDataString) {
      try {
        // Parse the NFT data from localStorage
        const nftData = JSON.parse(nftDataString);
        
        // Create user profile from NFT data
        setUserProfile({
          nftId: nftData.id || 'BG-NFT-1234',
          name: nftData.name || 'Alexander Petrov',
          pocScore: nftData.socialScore || 78,
          expertise: nftData.expertise ? [nftData.expertise] : ['Economy', 'Technology'],
          rank: nftData.rank || 'Citizen',
          followedSectors: ['Economy', 'Technology', 'Healthcare'],
          walletBalance: {
            BGL: nftData.earnedBGL || 1250,
            'BGL-TECH': 320,
            'BGL-HEALTH': 150
          }
        });
        
        // Clear the NFT data from localStorage after using it
        localStorage.removeItem('nova_nft_data');
      } catch (error) {
        console.error('Error parsing NFT data:', error);
        // Fall back to mock data if there's an error
        setDefaultUserProfile();
      }
    } else {
      // Use default mock data if no NFT data is available
      setDefaultUserProfile();
    }
  };
  
  // Helper function to set default user profile
  const setDefaultUserProfile = () => {
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

  const value = {
    isUnityPlusDashboardOpen,
    openUnityPlusDashboard,
    closeUnityPlusDashboard,
    isConnected,
    userProfile,
    handleConnect,
    activeTab,
    setActiveTab
  };

  return <UnityPlusContext.Provider value={value}>{children}</UnityPlusContext.Provider>;
};
