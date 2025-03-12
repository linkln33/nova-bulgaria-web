import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="introduction" className="hero min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">NOVA BULGARIA</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The first national identity system powered by blockchain technology
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[var(--primary)] text-black px-8 py-3 rounded-lg hover:bg-[var(--secondary)] transition-colors font-semibold">
              Get Started
            </button>
            <button className="border border-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-[rgba(var(--primary-rgb),0.1)] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0"></div>
    </section>
  );
};

export default Hero;
