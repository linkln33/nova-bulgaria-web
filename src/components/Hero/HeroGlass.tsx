import React, { useEffect, useRef } from 'react';
import './HeroGlass.css';
import '../../styles/glassmorphism.css';

const HeroGlass: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animated background elements
  useEffect(() => {
    if (!heroRef.current) return;
    
    const hero = heroRef.current;
    
    // Create floating elements
    const createFloatingElements = () => {
      // Remove any existing elements
      const existingElements = hero.querySelectorAll('.floating-element');
      existingElements.forEach(el => el.remove());
      
      // Number of elements based on screen size
      const width = window.innerWidth;
      const count = width < 768 ? 5 : 10;
      
      for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        // Random size between 30px and 120px
        const size = Math.random() * 90 + 30;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 15s and 30s
        const duration = Math.random() * 15 + 15;
        element.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        element.style.animationDelay = `${delay}s`;
        
        // Random opacity
        element.style.opacity = `${Math.random() * 0.3 + 0.05}`;
        
        // Random blur
        const blur = Math.random() * 10 + 5;
        element.style.filter = `blur(${blur}px)`;
        
        // Add to hero
        hero.appendChild(element);
      }
    };
    
    // Initial creation
    createFloatingElements();
    
    // Recreate on resize
    window.addEventListener('resize', createFloatingElements);
    
    return () => {
      window.removeEventListener('resize', createFloatingElements);
    };
  }, []);
  
  return (
    <section id="hero" className="hero-glass" ref={heroRef}>
      {/* Background Gradients */}
      <div className="hero-bg-gradient-1"></div>
      <div className="hero-bg-gradient-2"></div>
      <div className="hero-bg-gradient-3"></div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">NOVA BULGARIA</span>
        </h1>
        <h2 className="hero-subtitle">Awaken the Lions</h2>
        <p className="hero-description">
          The world's first digital sovereign nation built on blockchain technology,
          creating a new paradigm of governance, citizenship, and prosperity.
        </p>
        
        <div className="hero-buttons">
          <a href="#introduction" className="btn-glass btn-primary">
            Learn More
          </a>
          <a href="#nft-demo" className="btn-glass btn-secondary">
            Get Citizenship
          </a>
        </div>
      </div>
      
      {/* Animated elements are added via JavaScript */}
    </section>
  );
};

export default HeroGlass;
