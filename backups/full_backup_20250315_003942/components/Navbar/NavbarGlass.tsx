import React, { useState, useEffect } from 'react';
import './NavbarGlass.css';
import '../../styles/glassmorphism.css';

const NavbarGlass: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Language options
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'bg', name: 'Bulgarian', flag: '🇧🇬' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle language menu
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  // Set language
  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  // Get current language object
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <nav className={`navbar-glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#hero">
            <img src="/assets/images/logo.png" alt="NOVA Bulgaria" className="h-8" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links desktop-only">
          <a href="#introduction" className="navbar-link">Introduction</a>
          <a href="#nft-id" className="navbar-link">NFT ID</a>
          <a href="#tokenomics" className="navbar-link">Tokenomics</a>
          <a href="#roadmap" className="navbar-link">Roadmap</a>
          <a href="#whitepaper" className="navbar-link">Whitepaper</a>
        </div>

        {/* Language Selector (Desktop) */}
        <div className="navbar-language desktop-only">
          <button 
            className="language-selector" 
            onClick={toggleLanguageMenu}
            aria-label="Select language"
          >
            <span className="language-flag">{getCurrentLanguage().flag}</span>
            <span className="language-name">{getCurrentLanguage().name}</span>
            <span className="language-arrow">▼</span>
          </button>

          {/* Language Dropdown */}
          {isLanguageMenuOpen && (
            <div className="language-dropdown">
              {languages.map(lang => (
                <button 
                  key={lang.code}
                  className={`language-option ${lang.code === currentLanguage ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-name">{lang.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <a href="#introduction" className="mobile-menu-link" onClick={toggleMenu}>Introduction</a>
          <a href="#nft-id" className="mobile-menu-link" onClick={toggleMenu}>NFT ID</a>
          <a href="#tokenomics" className="mobile-menu-link" onClick={toggleMenu}>Tokenomics</a>
          <a href="#roadmap" className="mobile-menu-link" onClick={toggleMenu}>Roadmap</a>
          <a href="#whitepaper" className="mobile-menu-link" onClick={toggleMenu}>Whitepaper</a>
          
          {/* Language Selector (Mobile) */}
          <div className="mobile-language-selector">
            <p className="mobile-language-title">Select Language</p>
            <div className="mobile-language-options">
              {languages.map(lang => (
                <button 
                  key={lang.code}
                  className={`mobile-language-option ${lang.code === currentLanguage ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage(lang.code);
                    toggleMenu();
                  }}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-name">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGlass;
