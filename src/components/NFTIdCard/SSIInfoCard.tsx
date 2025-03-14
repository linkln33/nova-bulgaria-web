import React from 'react';
import './SSIInfoCard.css';
import { useLanguage } from '../../context/LanguageContext';

const SSIInfoCard: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full">
      <div className="ssi-info-card-container">
        <div className="ssi-info-card">
          <h2 className="text-2xl font-bold mb-4 text-[#00ffaa]">{t('ssi.title', 'Self-Sovereign Identity')}</h2>
          <p className="text-white mb-6">
            {t('ssi.description', 'Your digital identity in NOVA BULGARIA is secured by blockchain technology, giving you full control over your personal data.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
            <div className="apply-section">
              <h3 className="text-xl font-semibold mb-3 text-[#00ffaa]">{t('ssi.apply.title', 'Apply for ID')}</h3>
              <ul className="space-y-2 text-white mb-4">
                <li>{t('ssi.apply.step1', '1. Complete citizenship exam')}</li>
                <li>{t('ssi.apply.step2', '2. Connect your wallet')}</li>
                <li>{t('ssi.apply.step3', '3. Mint your Soulbound NFT')}</li>
              </ul>
              <p className="text-sm text-gray-300 mb-4">{t('ssi.apply.description', 'Your ID is a Soulbound NFT that cannot be transferred or sold.')}</p>
              <button className="w-full bg-[#00ffaa] text-black py-3 rounded-md font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                {t('ssi.apply.button', 'Apply Now')}
              </button>
            </div>

            <div className="benefits-section">
              <h3 className="text-xl font-semibold mb-3 text-[#00ffaa]">{t('ssi.benefits.title', 'Benefits')}</h3>
              <ul className="space-y-2 text-white mb-4">
                <li>{t('ssi.benefits.item1', 'Access to all citizen services')}</li>
                <li>{t('ssi.benefits.item2', 'Voting rights in governance')}</li>
                <li>{t('ssi.benefits.item3', 'Earn BGL through contributions')}</li>
              </ul>
              <p className="text-sm text-gray-300 mb-4">{t('ssi.benefits.description', 'Your NFT ID is your key to all NOVA BULGARIA services and benefits.')}</p>
              <button className="w-full border-2 border-[#00ffaa] text-white py-3 rounded-md font-bold hover:bg-[rgba(0,255,170,0.1)] transition-all duration-300 transform hover:scale-105">
                {t('ssi.benefits.button', 'Learn More')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSIInfoCard;
