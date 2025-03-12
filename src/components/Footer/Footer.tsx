import React from 'react';
import './Footer.css';
import '../../styles/glassmorphism.css';
// Import the logo image
import novaLogo from '../../assets/images/new-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-glass">
      <div className="footer-bg-gradient"></div>
      
      <div className="container mx-auto px-6">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={novaLogo} alt="NOVA Bulgaria" className="h-24" />
            </div>
            <p className="footer-tagline">
              The world's first digital sovereign nation built on blockchain technology.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#introduction">Introduction</a></li>
              <li><a href="#nft-id">NFT ID</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#whitepaper">Whitepaper</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="#whitepaper">Whitepaper</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2l-19 9 5.6 2.1L19 7l-9.6 9.6 2.7 6.4L21.5 2z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h4"></path>
                  <circle cx="16" cy="16" r="3"></circle>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <path d="M8 9h1l3 3 3-3h1"></path>
                  <path d="M8 15h8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </a>
            </div>
            <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} NOVA Bulgaria. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
