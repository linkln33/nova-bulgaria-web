import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Introduction.css';

const Introduction: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('crisis');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="introduction" className="py-8 bg-gradient-to-b from-bg-dark to-bg-darker relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#00ffaa] mb-4">{t('intro.title')}</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">{t('intro.subtitle')}</p>
        </div>

        {/* Main content with vertical tabs */}
        <div className="glass p-6 rounded-xl border border-[#00ffaa] border-opacity-30 mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Vertical Tab navigation */}
            <div className="md:w-1/4 mb-6 md:mb-0 md:border-r border-gray-700 md:pr-4">
              <div className="flex flex-col space-y-2">
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'crisis' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('crisis')}
                >
                  {t('intro.tab.political')}
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'environment' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('environment')}
                >
                  {t('intro.tab.environmental')}
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'youth' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('youth')}
                >
                  {t('intro.tab.youth')}
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'solution' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('solution')}
                >
                  {t('intro.tab.solution')}
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[var(--primary)] hover:bg-opacity-20 transition-all ${activeTab === 'vision' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('vision')}
                >
                  {t('intro.tab.vision')}
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[var(--primary)] hover:bg-opacity-20 transition-all ${activeTab === 'blockchain' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('blockchain')}
                >
                  {t('intro.tab.blockchain')}
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="tab-content md:w-3/4 md:pl-6">
              {/* Political Crisis Tab */}
              {activeTab === 'crisis' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t('intro.crisis.title')}</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">{t('intro.crisis.text1')}</p>
                    
                    <p className="text-gray-300">{t('intro.crisis.text2')}</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.crisis.subheading1')}</h4>
                      <p className="text-gray-300">{t('intro.crisis.subtext1')}</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.crisis.subheading2')}</h4>
                      <p className="text-gray-300">{t('intro.crisis.subtext2')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Environmental Crisis Tab */}
              {activeTab === 'environment' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t('intro.environment.title')}</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">{t('intro.environment.text1')}</p>
                    
                    <p className="text-gray-300">{t('intro.environment.text2')}</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.environment.subheading1')}</h4>
                      <p className="text-gray-300">{t('intro.environment.subtext1')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Youth Crisis Tab */}
              {activeTab === 'youth' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t('intro.youth.title')}</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">{t('intro.youth.text1')}</p>
                    
                    <p className="text-gray-300">{t('intro.youth.text2')}</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.youth.subheading1')}</h4>
                      <p className="text-gray-300">{t('intro.youth.subtext1')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Solution Tab */}
              {activeTab === 'solution' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t('intro.solution.title')}</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">{t('intro.solution.text1')}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.solution.subheading1')}</h4>
                        <p className="text-gray-300">{t('intro.solution.subtext1')}</p>
                      </div>
                      
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.solution.subheading2')}</h4>
                        <p className="text-gray-300">{t('intro.solution.subtext2')}</p>
                      </div>
                      
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.solution.subheading3')}</h4>
                        <p className="text-gray-300">{t('intro.solution.subtext3')}</p>
                      </div>
                      
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.solution.subheading4')}</h4>
                        <p className="text-gray-300">{t('intro.solution.subtext4')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Vision Tab */}
              {activeTab === 'vision' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t('intro.vision.title')}</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">{t('intro.vision.text1')}</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.vision.subheading1')}</h4>
                      <p className="text-gray-300">{t('intro.vision.subtext1')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Blockchain Tab */}
              {activeTab === 'blockchain' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{t('intro.blockchain.title')}</h3>
                  
                  <div className="space-y-6">
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.blockchain.subheading1')}</h4>
                      <p className="text-gray-300">{t('intro.blockchain.subtext1')}</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.blockchain.subheading2')}</h4>
                      <p className="text-gray-300">{t('intro.blockchain.subtext2')}</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.blockchain.subheading3')}</h4>
                      <p className="text-gray-300">{t('intro.blockchain.subtext3')}</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">{t('intro.blockchain.subheading4')}</h4>
                      <p className="text-gray-300">{t('intro.blockchain.subtext4')}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a href="#tokenomics" className="btn btn-primary text-lg px-8 py-3">{t('intro.cta')}</a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--primary)] rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--secondary)] rounded-full filter blur-[100px] opacity-15"></div>
      </div>
    </section>
  );
};

export default Introduction;
