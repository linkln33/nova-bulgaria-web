import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './NavbarUpdated.css';

interface NavbarUpdatedProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

const NavbarUpdated: React.FC<NavbarUpdatedProps> = ({ activeSection = 'hero', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  const handleBecomeALionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Navigate to onboarding instead of opening Unity Plus dashboard
    if (onNavigate) {
      onNavigate('onboarding');
    }
    
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(section);
    } else {
      // Default behavior if onNavigate is not provided
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking on links
    const handleLinkClick = () => {
      if (mobileMenuOpen) {
        toggleMobileMenu();
      }
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" onClick={(e) => handleNavLinkClick(e, 'hero')} className="text-2xl font-bold text-[#00ffaa]">NOVA BULGARIA</a>
          </div>
          
          {/* Desktop Menu - Absolutely positioned to center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#problem" onClick={(e) => handleNavLinkClick(e, 'problem')} className={`nav-link ${activeSection === 'problem' ? 'active' : ''}`}>{t('nav.vision')}</a>
            <a href="#lionheart" onClick={(e) => handleNavLinkClick(e, 'lionheart')} className={`nav-link ${activeSection === 'lionheart' ? 'active' : ''}`}>{t('nav.lionheartFund')}</a>
            <a href="#roadmap" onClick={(e) => handleNavLinkClick(e, 'roadmap')} className={`nav-link ${activeSection === 'roadmap' ? 'active' : ''}`}>{t('nav.development')}</a>
            <a href="#unity-plus" onClick={(e) => handleNavLinkClick(e, 'unity-plus')} className={`nav-link ${activeSection === 'unity-plus' ? 'active' : ''}`}>{t('nav.unityPlus', 'Unity+')}</a>
          </div>

          {/* Mobile Menu Panel */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#problem" onClick={(e) => handleNavLinkClick(e, 'problem')} className={`text-2xl nav-link ${activeSection === 'problem' ? 'active' : ''}`}>{t('nav.vision')}</a>
                <a href="#lionheart" onClick={(e) => handleNavLinkClick(e, 'lionheart')} className={`text-2xl nav-link ${activeSection === 'lionheart' ? 'active' : ''}`}>{t('nav.lionheartFund')}</a>
                <a href="#roadmap" onClick={(e) => handleNavLinkClick(e, 'roadmap')} className={`text-2xl nav-link ${activeSection === 'roadmap' ? 'active' : ''}`}>{t('nav.development')}</a>
                <a href="#unity-plus" onClick={(e) => handleNavLinkClick(e, 'unity-plus')} className={`text-2xl nav-link ${activeSection === 'unity-plus' ? 'active' : ''}`}>{t('nav.unityPlus', 'Unity+')}</a>
                <button 
                  onClick={handleBecomeALionClick}
                  className="bg-[#00ffaa] text-black px-6 py-2 rounded-lg hover:bg-[#00dd99] transition-colors mt-4"
                >
                  {t('nav.becomeALion')}
                </button>
                
                {/* Language Dropdown for Mobile */}
                <div className="relative" ref={languageDropdownRef}>
                  <button 
                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                    className="flex items-center space-x-2 border border-[#00ffaa] text-[#00ffaa] rounded-lg px-4 py-2"
                  >
                    <span>{language === 'en' ? '🇬🇧 English' : '🇧🇬 Български'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {languageDropdownOpen && (
                    <div className="absolute mt-2 w-48 bg-gray-900 border border-[#00ffaa] rounded-lg shadow-lg z-50">
                      <button 
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center space-x-2 ${language === 'en' ? 'bg-gray-800' : ''}`}
                      >
                        <span className="text-xl">🇬🇧</span>
                        <span>English</span>
                      </button>
                      <button 
                        onClick={() => handleLanguageChange('bg')}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center space-x-2 ${language === 'bg' ? 'bg-gray-800' : ''}`}
                      >
                        <span className="text-xl">🇧🇬</span>
                        <span>Български</span>
                      </button>
                    </div>
                  )}
                </div>
                
                <button onClick={toggleMobileMenu} className="absolute top-6 right-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Right Side - Language Selector and Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button 
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center space-x-2 border border-[#00ffaa] text-[#00ffaa] rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ffaa]"
              >
                <span>{language.toUpperCase()}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-[#00ffaa] rounded-lg shadow-lg z-50">
                  <button 
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center space-x-2 ${language === 'en' ? 'bg-gray-800' : ''}`}
                  >
                    <span className="text-xl">🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('bg')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center space-x-2 ${language === 'bg' ? 'bg-gray-800' : ''}`}
                  >
                    <span className="text-xl">🇧🇬</span>
                    <span>Български</span>
                  </button>
                </div>
              )}
            </div>
            
            {/* Become a Lion Button - Desktop */}
            <button 
              onClick={handleBecomeALionClick}
              className="hidden md:block bg-[#00ffaa] text-black px-4 py-2 rounded-lg hover:bg-[#00dd99] transition-colors"
            >
              {t('nav.becomeALion')}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button onClick={toggleMobileMenu} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUpdated;
