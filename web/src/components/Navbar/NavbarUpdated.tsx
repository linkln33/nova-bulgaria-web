import React, { useState, useEffect } from 'react';
import './NavbarUpdated.css';

interface NavbarUpdatedProps {
  activeSection?: string;
}

const NavbarUpdated: React.FC<NavbarUpdatedProps> = ({ activeSection = 'hero' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // In a real app, you would update translations here
  };

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
      <div className="container mx-auto px-6 py-[calc(4px*0.7)]">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-[#00ffaa]">NOVA BULGARIA</a>
          </div>
          
          {/* Desktop Menu - Absolutely positioned to center */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            <a href="#vision" className={`nav-link ${activeSection === 'vision' ? 'active' : ''}`}>Vision</a>
            <a href="#governance" className={`nav-link ${activeSection === 'governance' ? 'active' : ''}`}>Governance</a>
            <a href="#technology" className={`nav-link ${activeSection === 'technology' ? 'active' : ''}`}>Technology</a>
            <a href="#development" className={`nav-link ${activeSection === 'development' ? 'active' : ''}`}>Development</a>
          </div>

          {/* Mobile Menu Panel */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <a href="#vision" className={`text-2xl nav-link ${activeSection === 'vision' ? 'active' : ''}`}>Vision</a>
                <a href="#governance" className={`text-2xl nav-link ${activeSection === 'governance' ? 'active' : ''}`}>Governance</a>
                <a href="#technology" className={`text-2xl nav-link ${activeSection === 'technology' ? 'active' : ''}`}>Technology</a>
                <a href="#development" className={`text-2xl nav-link ${activeSection === 'development' ? 'active' : ''}`}>Development</a>
                <button onClick={toggleMobileMenu} className="absolute top-6 right-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white p-2">
              <svg className="w-6 h-[1.125em]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            {/* Language Selector with Proper UK Flag */}
            <div className="relative">
              <select 
                value={language}
                onChange={handleLanguageChange}
                className="glass pl-2 pr-8 py-2 rounded-lg appearance-none cursor-pointer min-w-[100px] text-left"
              >
                <option value="en" className="text-left">🇬🇧 EN</option>
                <option value="bg" className="text-left">🇧🇬 BG</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            
            {/* Become a Lion Button */}
            <button className="hidden md:block bg-[#00ffaa] text-black px-6 py-2 rounded-lg hover:bg-[#00dd99] transition-colors">
              Become a Lion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUpdated;
