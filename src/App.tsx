import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { UnityPlusProvider } from './context/UnityPlusContext';
import NavbarUpdated from '@components/Navbar/NavbarUpdated';
import HeroUpdated from '@components/Hero/HeroUpdated';
import Problem from '@components/Problem/Problem';
import NeedForNova from '@components/NeedForNova/NeedForNova';

// Lazy load components that aren't immediately visible
const NFTIdCardDemo = lazy(() => import('@components/NFTIdCard/NFTIdCardDemo'));
const SSIInfoCard = lazy(() => import('@components/NFTIdCard/SSIInfoCard'));
const Tokenomics = lazy(() => import('@components/Tokenomics/Tokenomics'));
const LionheartFund = lazy(() => import('@components/LionheartFund/LionheartFund'));
const Roadmap = lazy(() => import('@components/Roadmap/Roadmap'));
const Sectors = lazy(() => import('@components/Sectors/Sectors'));
const Footer = lazy(() => import('@components/Footer/Footer'));
const UnityPlus = lazy(() => import('@components/UnityPlus/UnityPlus'));
const Onboarding = lazy(() => import('@components/Onboarding/Onboarding'));

import './styles/index.css';

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center p-8">
    <div className="w-12 h-12 border-4 border-[#00ffaa] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Create a wrapper component that uses the LanguageProvider
const AppContent: React.FC = () => {
  // State for active section (for highlighting in navbar)
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();
  
  // Simple routing state
  const [currentRoute, setCurrentRoute] = useState(() => {
    // Check if URL has a route parameter
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('route') || 'home';
  });

  // Effect for handling route changes
  useEffect(() => {
    const handleRouteChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      setCurrentRoute(urlParams.get('route') || 'home');
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Navigate to a route
  const navigateTo = (route: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('route', route);
    window.history.pushState({}, '', url);
    setCurrentRoute(route);
  };

  // Effect for handling scroll and updating active section
  useEffect(() => {
    // Only add scroll listener if we're on the home page
    if (currentRoute !== 'home') return;
    
    const handleScroll = () => {
      const sections = ['hero', 'need-for-nova', 'problem', 'nft-id', 'lionheart', 'tokenomics', 'roadmap', 'sectors', 'unity-plus'];
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentRoute]);

  // Render the appropriate route
  if (currentRoute === 'onboarding') {
    return (
      <div className="min-h-screen bg-black text-white">
        <Suspense fallback={<LoadingFallback />}>
          <Onboarding />
        </Suspense>
      </div>
    );
  }

  // Main home page content
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <NavbarUpdated 
        activeSection={activeSection} 
        onNavigate={(section: string) => {
          // Handle navigation to onboarding
          if (section === 'onboarding') {
            navigateTo('onboarding');
            return;
          }
          
          // Handle normal section navigation
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative">
          <HeroUpdated onGetStarted={() => navigateTo('onboarding')} />
        </section>

        {/* Need for Nova Section */}
        <section id="need-for-nova" className="relative">
          <NeedForNova />
        </section>

        {/* Problem Section */}
        <section id="problem" className="pt-16 pb-16 relative">
          <Problem />
        </section>

        {/* NFT ID Card Section */}
        <section id="nft-id" className="pt-16 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('nftid.title', 'NFT ID Card')}</h2>
              <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('nftid.subtitle', 'Your digital identity in NOVA BULGARIA')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-items-center">
              {/* NFT ID Card on the left */}
              <div className="flex justify-center items-center w-full">
                <Suspense fallback={<LoadingFallback />}>
                  <NFTIdCardDemo />
                </Suspense>
              </div>
              
              {/* SSI Info Card on the right */}
              <div className="flex justify-center items-center w-full">
                <Suspense fallback={<LoadingFallback />}>
                  <SSIInfoCard />
                </Suspense>
              </div>
            </div>
          </div>
          {/* Background elements */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
        </section>

        {/* Lionheart Fund Section */}
        <section id="lionheart" className="pt-16 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('lionheart.title', 'Lionheart Fund')}</h2>
              <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
            </div>
            <Suspense fallback={<LoadingFallback />}>
              <LionheartFund />
            </Suspense>
          </div>
          {/* Background elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="pt-16 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('tokenomics.title', 'Tokenomics')}</h2>
              <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
            </div>
            <Suspense fallback={<LoadingFallback />}>
              <Tokenomics />
            </Suspense>
          </div>
          {/* Background elements */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="pt-16 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('roadmap.title', 'Roadmap')}</h2>
              <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
            </div>
            <Suspense fallback={<LoadingFallback />}>
              <Roadmap />
            </Suspense>
          </div>
          {/* Background elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
        </section>

        {/* Sectors Section */}
        <section id="sectors" className="pt-16 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('sectors.title', '44 Sectors of NOVA BULGARIA')}</h2>
              <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
            </div>
            <Suspense fallback={<LoadingFallback />}>
              <Sectors />
            </Suspense>
          </div>
          {/* Background elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
        </section>

        {/* Unity+ Section */}
        <section id="unity-plus" className="pt-16 pb-16 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('unityPlus.title', 'Unity+')}</h2>
              <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('unityPlus.mainDescription', 'The Social-Governance Super App for the new digital nation.')}
              </p>
            </div>
            <Suspense fallback={<LoadingFallback />}>
              <UnityPlus />
            </Suspense>
          </div>
          {/* Background elements */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
        </section>
      </main>

      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

// Main App component that provides the LanguageProvider
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <UnityPlusProvider>
        <AppContent />
      </UnityPlusProvider>
    </LanguageProvider>
  );
};

export default App;
