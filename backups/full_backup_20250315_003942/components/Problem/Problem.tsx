import React, { useState } from 'react';
import './Problem.css';
import { useLanguage } from '../../context/LanguageContext';

const Problem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const { t } = useLanguage();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'problem':
        return (
          <>
            <h2 className="section-title">{t('problem.section.title')}</h2>
            
            <p className="section-description">
              {t('problem.section.description')}
            </p>
            
            <p className="section-description">
              {t('problem.section.description2')}
            </p>
          </>
        );
      case 'vision':
        return (
          <>
            <h2 className="section-title">{t('problem.vision.title')}</h2>
            
            <div className="vision-content">
              <p className="vision-paragraph">
                {t('problem.vision.paragraph1')}
              </p>
              <p className="vision-paragraph">
                {t('problem.vision.paragraph2')}
              </p>
              <p className="vision-paragraph">
                {t('problem.vision.paragraph3')}
              </p>
              <p className="vision-paragraph">
                {t('problem.vision.paragraph4')}
              </p>
            </div>
          </>
        );
      case 'works':
        return (
          <>
            <h2 className="section-title">{t('problem.works.title')}</h2>
            
            <div className="works-content">
              <p className="works-paragraph">
                {t('problem.works.paragraph1')}
              </p>
              
              <div className="works-pillars">
                <h3 className="pillars-title">{t('problem.works.pillars.title')}</h3>
                <ul className="pillars-list">
                  <li>
                    <h4>{t('problem.works.pillars.item1.title')}</h4>
                    <p>{t('problem.works.pillars.item1.description')}</p>
                  </li>
                  <li>
                    <h4>{t('problem.works.pillars.item2.title')}</h4>
                    <p>{t('problem.works.pillars.item2.description')}</p>
                  </li>
                  <li>
                    <h4>{t('problem.works.pillars.item3.title')}</h4>
                    <p>{t('problem.works.pillars.item3.description')}</p>
                  </li>
                </ul>
              </div>
              
              <p className="works-conclusion">
                {t('problem.works.conclusion')}
              </p>
            </div>
          </>
        );
      case 'citizen':
        return (
          <>
            <h2 className="section-title">{t('problem.citizen.title')}</h2>
            
            <div className="citizen-content">
              <p className="citizen-paragraph">
                {t('problem.citizen.paragraph1')}
              </p>
              
              <div className="citizen-benefits">
                <ul className="benefits-list">
                  <li>{t('problem.citizen.benefits.item1')}</li>
                  <li>{t('problem.citizen.benefits.item2')}</li>
                  <li>{t('problem.citizen.benefits.item3')}</li>
                  <li>{t('problem.citizen.benefits.item4')}</li>
                  <li>{t('problem.citizen.benefits.item5')}</li>
                </ul>
              </div>
              
              <p className="citizen-paragraph">
                {t('problem.citizen.paragraph2')}
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="problem-container" id="problem">
      <div className="vision-header">
        <h1 className="vision-title">{t('problem.header.title')}</h1>
        <p className="vision-subtitle">{t('problem.header.subtitle')}</p>
      </div>

      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'problem' ? 'active' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
          {t('problem.tab.problem')}
        </button>
        <button 
          className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
          onClick={() => setActiveTab('vision')}
        >
          {t('problem.tab.vision')}
        </button>
        <button 
          className={`tab-button ${activeTab === 'works' ? 'active' : ''}`}
          onClick={() => setActiveTab('works')}
        >
          {t('problem.tab.works')}
        </button>
        <button 
          className={`tab-button ${activeTab === 'citizen' ? 'active' : ''}`}
          onClick={() => setActiveTab('citizen')}
        >
          {t('problem.tab.citizen')}
        </button>
      </div>

      <div className="content-panel">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Problem;
