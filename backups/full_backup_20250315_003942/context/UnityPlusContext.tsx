import React, { createContext, useContext, useState, ReactNode } from 'react';

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
