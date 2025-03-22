import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './SectorSelection.css';

interface SectorProps {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface UserProfileProps {
  followedSectors: string[];
  [key: string]: any;
}

interface SectorSelectionProps {
  userProfile: UserProfileProps;
}

const SectorSelection: React.FC<SectorSelectionProps> = ({ userProfile }) => {
  const { t } = useLanguage();
  const [selectedSectors, setSelectedSectors] = useState<string[]>(userProfile.followedSectors || []);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock sectors data
  const allSectors: SectorProps[] = [
    { 
      id: 'economy', 
      name: t('unityPlus.sectors.economy', 'Economy'), 
      icon: '💰',
      description: t('unityPlus.sectors.economyDesc', 'Financial policies, market regulations, and economic development initiatives.')
    },
    { 
      id: 'technology', 
      name: t('unityPlus.sectors.technology', 'Technology'), 
      icon: '💻',
      description: t('unityPlus.sectors.technologyDesc', 'Digital infrastructure, innovation policies, and technological advancement.')
    },
    { 
      id: 'healthcare', 
      name: t('unityPlus.sectors.healthcare', 'Healthcare'), 
      icon: '🏥',
      description: t('unityPlus.sectors.healthcareDesc', 'Medical services, public health initiatives, and healthcare policies.')
    },
    { 
      id: 'education', 
      name: t('unityPlus.sectors.education', 'Education'), 
      icon: '🎓',
      description: t('unityPlus.sectors.educationDesc', 'Educational systems, learning initiatives, and academic policies.')
    },
    { 
      id: 'infrastructure', 
      name: t('unityPlus.sectors.infrastructure', 'Infrastructure'), 
      icon: '🏗️',
      description: t('unityPlus.sectors.infrastructureDesc', 'Public works, transportation, and urban development projects.')
    },
    { 
      id: 'environment', 
      name: t('unityPlus.sectors.environment', 'Environment'), 
      icon: '🌳',
      description: t('unityPlus.sectors.environmentDesc', 'Environmental protection, sustainability initiatives, and conservation efforts.')
    },
    { 
      id: 'culture', 
      name: t('unityPlus.sectors.culture', 'Culture & Arts'), 
      icon: '🎭',
      description: t('unityPlus.sectors.cultureDesc', 'Cultural heritage, arts programs, and creative initiatives.')
    },
    { 
      id: 'security', 
      name: t('unityPlus.sectors.security', 'Security & Defense'), 
      icon: '🛡️',
      description: t('unityPlus.sectors.securityDesc', 'National security, defense policies, and public safety measures.')
    }
  ];

  const filteredSectors = searchTerm 
    ? allSectors.filter(sector => 
        sector.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sector.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allSectors;

  const toggleSector = (sectorId: string) => {
    if (selectedSectors.includes(sectorId)) {
      setSelectedSectors(selectedSectors.filter(id => id !== sectorId));
    } else {
      setSelectedSectors([...selectedSectors, sectorId]);
    }
  };

  const savePreferences = () => {
    // In a real app, this would save to a database or blockchain
    console.log('Saving sector preferences:', selectedSectors);
    // Show success message
    alert(t('unityPlus.sectors.saveSuccess', 'Your sector preferences have been saved!'));
  };

  return (
    <div className="sector-selection">
      <div className="sector-header">
        <h2>{t('unityPlus.sectors.title', 'Choose Sectors to Follow')}</h2>
        <p>{t('unityPlus.sectors.description', 'Select the sectors you want to follow to customize your governance feed.')}</p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder={t('unityPlus.sectors.searchPlaceholder', 'Search sectors...')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="sectors-grid">
        {filteredSectors.map(sector => (
          <div 
            key={sector.id}
            className={`sector-card ${selectedSectors.includes(sector.id) ? 'selected' : ''}`}
            onClick={() => toggleSector(sector.id)}
          >
            <div className="sector-icon">{sector.icon}</div>
            <h3 className="sector-name">{sector.name}</h3>
            <p className="sector-description">{sector.description}</p>
            <div className="sector-status">
              {selectedSectors.includes(sector.id) 
                ? t('unityPlus.sectors.following', 'Following') 
                : t('unityPlus.sectors.follow', 'Follow')}
            </div>
          </div>
        ))}
      </div>

      <div className="sector-actions">
        <button 
          className="save-button"
          onClick={savePreferences}
          disabled={selectedSectors.length === 0}
        >
          {t('unityPlus.sectors.saveButton', 'Save Preferences')}
        </button>
      </div>
    </div>
  );
};

export default SectorSelection;
