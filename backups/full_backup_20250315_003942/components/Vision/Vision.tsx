import React from 'react';
import './Vision.css';
import '../../styles/glassmorphism.css';
import { useLanguage } from '../../context/LanguageContext';

const Vision: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-6">
      <div className="vision-container glassmorphism-dark">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('vision.title')}</h2>
          <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Card - The Problem */}
          <div className="vision-card p-8 rounded-2xl backdrop-blur-md bg-[rgba(0,26,21,0.7)] border border-[rgba(0,255,170,0.2)] hover:border-[rgba(0,255,170,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">{t('vision.concept.title')}</h3>
            <div className="space-y-4 text-white">
              <p>
                {t('vision.concept.paragraph1')}
              </p>
              <p>
                {t('vision.concept.paragraph2')}
              </p>
              <p>
                {t('vision.concept.paragraph3')}
              </p>
            </div>
          </div>

          {/* Right Card - Our Vision: NOVA BULGARIA */}
          <div className="vision-card p-8 rounded-2xl backdrop-blur-md bg-[rgba(0,26,21,0.7)] border border-[rgba(0,255,170,0.2)] hover:border-[rgba(0,255,170,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">{t('vision.nft.title')}</h3>
            <div className="space-y-4 text-white">
              <p>
                {t('vision.nft.paragraph1')}
              </p>
              <p>
                {t('vision.nft.paragraph2')}
              </p>
              <p>
                {t('vision.nft.paragraph3')}
              </p>
              <p>
                {t('vision.nft.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
    </div>
  );
};

export default Vision;
