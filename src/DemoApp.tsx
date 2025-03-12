import React from 'react';
import NFTIdCardSimple from './components/NFTIdCard/NFTIdCardSimple';
import Introduction from './components/Introduction/Introduction';
import Roadmap from './components/Roadmap/Roadmap';
import NFTDemo from './components/NFTDemo/NFTDemo';
import './styles/index.css';

const DemoApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-6 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-[var(--primary)]">NOVA Bulgaria Components Demo</h1>
        </div>
      </header>

      <main>
        {/* NFT ID Card Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-[var(--primary)]">NFT ID Card Component</h2>
            <div className="flex justify-center">
              <NFTIdCardSimple />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-[var(--primary)]">Introduction Component</h2>
            <Introduction />
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-[var(--primary)]">Roadmap Component</h2>
            <Roadmap />
          </div>
        </section>

        {/* NFT Demo Section */}
        <section className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-[var(--primary)]">NFT Demo Component</h2>
            <NFTDemo />
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} NOVA BULGARIA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DemoApp;
