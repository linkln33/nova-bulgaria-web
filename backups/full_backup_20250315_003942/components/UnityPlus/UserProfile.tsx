import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './UserProfile.css';

interface UserProfileProps {
  profile: {
    nftId: string;
    name: string;
    pocScore: number;
    expertise: string[];
    rank: string;
    followedSectors: string[];
    walletBalance: {
      [key: string]: number;
    };
  } | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ profile }) => {
  const { t } = useLanguage();

  if (!profile) {
    return <div className="user-profile-loading">{t('unityPlus.profile.loading', 'Loading profile...')}</div>;
  }

  // Calculate PoC score color
  const getPocScoreColor = (score: number) => {
    if (score >= 90) return '#27ae60';
    if (score >= 70) return '#2ecc71';
    if (score >= 50) return '#f1c40f';
    if (score >= 30) return '#e67e22';
    return '#e74c3c';
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          {profile.name.charAt(0)}
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{profile.name}</h3>
          <div className="profile-id">{profile.nftId}</div>
          <div className="profile-rank">{profile.rank}</div>
        </div>
      </div>

      <div className="profile-poc">
        <div className="poc-label">{t('unityPlus.profile.pocScore', 'PoC Score')}</div>
        <div className="poc-meter">
          <div 
            className="poc-value" 
            style={{ 
              width: `${profile.pocScore}%`,
              backgroundColor: getPocScoreColor(profile.pocScore)
            }}
          ></div>
        </div>
        <div className="poc-number">{profile.pocScore}</div>
      </div>

      <div className="profile-section">
        <h4 className="section-title">{t('unityPlus.profile.expertise', 'Expertise')}</h4>
        <div className="expertise-tags">
          {profile.expertise.map((exp, index) => (
            <div key={index} className="expertise-tag">{exp}</div>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h4 className="section-title">{t('unityPlus.profile.followedSectors', 'Following')}</h4>
        <div className="followed-sectors">
          {profile.followedSectors.map((sector, index) => (
            <div key={index} className="sector-tag">{sector}</div>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h4 className="section-title">{t('unityPlus.profile.balances', 'Token Balances')}</h4>
        <div className="token-list">
          {Object.entries(profile.walletBalance).map(([token, amount]) => (
            <div key={token} className="token-item">
              <span className="token-name">{token}</span>
              <span className="token-amount">{amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-actions">
        <button className="profile-button">
          {t('unityPlus.profile.editProfile', 'Edit Profile')}
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
