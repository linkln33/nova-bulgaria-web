import React from 'react';
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect';
import { useLanguage } from '../../context/LanguageContext';
import './TypewriterSection.css';

const TypewriterSection: React.FC = () => {
  const { t } = useLanguage();
  
  const slogans = [
    { text: t('hero.slogan1'), color: "text-white" },
    { text: t('hero.slogan2'), color: "text-[#00ffaa]" },
    { text: t('hero.slogan3'), color: "text-red-500" },
    { text: t('hero.slogan4'), color: "text-white" },
    { text: t('hero.slogan5'), color: "text-[#00ffaa]" },
    { text: t('hero.slogan6'), color: "text-red-500" },
    { text: t('hero.slogan7'), color: "text-yellow-400" }
  ];

  return (
    <div className="typewriter-section">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <TypewriterEffect 
            phrases={slogans} 
            className="typewriter-large"
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-gray-300 text-lg">
              {t('typewriter.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterSection;
