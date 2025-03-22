import React from 'react';
import './LionheartFund.css';
import '../../styles/glassmorphism.css';
import { useLanguage } from '../../context/LanguageContext';

const LionheartFund: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="lionheart-container glassmorphism-dark">
      <div className="lionheart-header">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">{t('lionheart.header')}</h2>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <p className="stat-title">{t('lionheart.stats.bulgarians')}</p>
          <h3 className="stat-value">{t('lionheart.stats.bulgarians.value')}</h3>
        </div>
        
        <div className="stat-card">
          <p className="stat-title">{t('lionheart.stats.joined')}</p>
          <h3 className="stat-value">{t('lionheart.stats.joined.value')}</h3>
        </div>
        
        <div className="stat-card">
          <p className="stat-title">{t('lionheart.stats.contributed')}</p>
          <h3 className="stat-value">{t('lionheart.stats.contributed.value')}</h3>
        </div>
      </div>

      <div className="details-container">
        <div className="details-card">
          <h4 className="details-title">{t('lionheart.details.seed')}</h4>
          <ul className="details-list">
            <li>{t('lionheart.details.seed.item1')}</li>
            <li>{t('lionheart.details.seed.item2')}</li>
            <li>{t('lionheart.details.seed.item3')}</li>
          </ul>
        </div>
        
        <div className="details-card">
          <h4 className="details-title">{t('lionheart.details.staking')}</h4>
          <ul className="details-list">
            <li>{t('lionheart.details.staking.item1')}</li>
            <li>{t('lionheart.details.staking.item2')}</li>
            <li>{t('lionheart.details.staking.item3')}</li>
          </ul>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(578000 / 2000000) * 100}%` }}></div>
        </div>
        <div className="progress-labels">
          <span className="raised">{t('lionheart.progress.raised')}</span>
          <span className="cap">{t('lionheart.progress.cap')}</span>
        </div>
      </div>

      <div className="action-buttons">
        <a href="#whitepaper" className="whitepaper-btn">
          <span className="btn-title">{t('lionheart.button.learn')}</span>
          <span className="btn-subtitle">{t('lionheart.whitepaper.subtitle')}</span>
        </a>
        
        <a href="#contribute" className="contribute-btn">
          <span className="btn-title">{t('lionheart.button.contribute')}</span>
          <span className="btn-subtitle">{t('lionheart.contribute.subtitle')}</span>
        </a>
      </div>
    </div>
  );
};

export default LionheartFund;
