import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero-updated.css';
// Import the logo image
import novaLogo from '../../assets/images/new-logo.png';

// Bulgarian flag SVG component
const BulgarianFlag = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" className="inline-block align-middle mx-1">
    <rect width="24" height="5.33" fill="#fff" />
    <rect y="5.33" width="24" height="5.33" fill="#00966E" />
    <rect y="10.66" width="24" height="5.33" fill="#D62612" />
  </svg>
);

const HeroUpdated: React.FC = () => {
  const { language, t } = useLanguage();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  
  // Array of slogans with their colors
  const slogans = [
    { text: t('hero.slogan1'), color: "text-white" },
    { text: t('hero.slogan2'), color: "text-[#00ffaa]" },
    { text: t('hero.slogan3'), color: "text-red-500" },
    { text: t('hero.slogan4'), color: "text-white" },
    { text: t('hero.slogan5'), color: "text-[#00ffaa]" },
    { text: t('hero.slogan6'), color: "text-red-500" },
    { text: t('hero.slogan7'), color: "text-yellow-400" }
  ];
  
  const currentSloganRef = useRef(slogans[0]);
  
  useEffect(() => {
    const currentSlogan = slogans[loopNum % slogans.length];
    currentSloganRef.current = currentSlogan;
    
    let timer: NodeJS.Timeout;
    
    if (isDeleting) {
      setTypingSpeed(50);
      timer = setTimeout(() => {
        setText(text.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(80);
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentSlogan.text.substring(0, text.length + 1));
        
        if (text.length === currentSlogan.text.length) {
          // Pause at the end of typing
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }, typingSpeed);
    }
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, slogans]);
  
  useEffect(() => {
    // Reset when language changes
    setText('');
    setIsDeleting(false);
  }, [language]);

  return (
    <section id="hero" className="hero pt-32 flex flex-col items-center justify-start relative overflow-hidden">
      <div className="container mx-auto px-6 pt-[calc(16px*0.65)] pb-20 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src={novaLogo} alt="NOVA Bulgaria Logo" className="w-[432px] h-[432px] object-contain logo-transparent" />
          </div>
          <div className="h-8"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#00ffaa]">{t('hero.title')}</h1>
          <p className="text-2xl md:text-3xl text-white mb-2">
            {t('hero.subtitle')}
          </p>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto typewriter ${currentSloganRef.current.color}`}>
            {text.includes('[FLAG]') ? (
              <>
                {text.split('[FLAG]')[0]}
                <BulgarianFlag />
                {text.split('[FLAG]')[1]}
              </>
            ) : (
              text
            )}
            <span className="cursor">|</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-[#00ffaa] text-black px-10 py-4 rounded-full hover:shadow-glow transition-all duration-300 font-bold text-lg transform hover:scale-105">
              {t('hero.button.getStarted')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary)] rounded-full filter blur-[100px] opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)] rounded-full filter blur-[120px] opacity-15 animate-float-delayed"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>
    </section>
  );
};

export default HeroUpdated;
