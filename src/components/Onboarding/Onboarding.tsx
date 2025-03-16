import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Onboarding.css';
import { FaRedo, FaGlobe, FaChevronDown } from 'react-icons/fa';

// Step components
import JoinCommunity from './Steps/JoinCommunity';
import KnowledgeExam from './Steps/KnowledgeExam';
import NFTIDMinting from './Steps/NFTIDMinting';

const Onboarding: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [examScore, setExamScore] = useState(0);
  // Store answers for analytics purposes
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [earnedBGL, setEarnedBGL] = useState(0);

  // Available languages
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'bg', name: 'Български' }
  ];

  // Log analytics data when exam is completed
  useEffect(() => {
    if (Object.keys(examAnswers).length > 0) {
      // In a real app, we would send this data to an analytics service
      console.log('Exam analytics:', { 
        score: examScore, 
        answers: examAnswers,
        language
      });
    }
  }, [examAnswers, examScore, language]);

  // Progress through onboarding steps
  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Skip directly to NFT ID minting step
  const skipToMinting = () => {
    setCurrentStep(3);
    // Force layout recalculation after a short delay to ensure NFT card renders properly
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle exam completion
  const handleExamComplete = (score: number, passed: boolean, answers: Record<string, string>, bglEarned: number) => {
    setExamScore(score);
    setExamAnswers(answers); // Always store answers for analytics, regardless of pass/fail
    setEarnedBGL(bglEarned);
    if (passed) {
      goToNextStep();
    }
  };

  // Restart the onboarding process
  const restartOnboarding = () => {
    setCurrentStep(1);
    setExamScore(0);
    setExamAnswers({});
    setEarnedBGL(0);
  };

  // Toggle language selector
  const toggleLanguageSelector = () => {
    setShowLanguageSelector(prev => !prev);
  };

  // Change language
  const changeLanguage = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguageSelector(false);
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <h1 className="onboarding-title">{t('onboarding.title', 'Welcome to NOVA BULGARIA')}</h1>
        <h2 className="onboarding-subtitle">{t('onboarding.subtitle', 'Rule Your Destiny, Embrace Your Lion Nature!')}</h2>
        
        {/* Language selector button - centered below subtitle */}
        <div className="language-toggle-container">
          <button 
            className="language-toggle-button"
            onClick={toggleLanguageSelector}
            aria-label="Change language"
          >
            <FaGlobe className="language-icon" />
            <span>{language === 'en' ? 'English' : 'Български'}</span>
            <FaChevronDown className="dropdown-icon" />
          </button>
          
          {showLanguageSelector && (
            <div className="language-dropdown">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`language-option ${language === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="onboarding-progress">
        <div className="progress-steps">
          <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">{t('onboarding.step1', 'Join Community')}</div>
          </div>
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">{t('onboarding.step2', 'Knowledge Exam')}</div>
          </div>
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">{t('onboarding.step3', 'NFT ID Minting')}</div>
          </div>
        </div>
      </div>

      <div className="onboarding-content">
        {currentStep === 1 && (
          <JoinCommunity onComplete={goToNextStep} />
        )}
        
        {currentStep === 2 && (
          <KnowledgeExam onComplete={handleExamComplete} onSkipToMinting={skipToMinting} />
        )}
        
        {currentStep === 3 && (
          <NFTIDMinting 
            examScore={examScore} 
            redirectToDashboard="/unity-app-dashboard" 
            earnedBGL={earnedBGL}
          />
        )}
      </div>

      <div className="onboarding-navigation">
        {currentStep > 1 && (
          <button 
            className="nav-button prev-button"
            onClick={goToPreviousStep}
          >
            {t('onboarding.previous', 'Previous')}
          </button>
        )}
        
        {currentStep < 3 && currentStep !== 2 && (
          <button 
            className="nav-button next-button"
            onClick={goToNextStep}
          >
            {t('onboarding.next', 'Next')}
          </button>
        )}
      </div>
      
      {/* Restart button at the end of the quiz */}
      <div className="restart-button-container">
        <button 
          className="restart-button"
          onClick={restartOnboarding}
          aria-label="Restart onboarding"
        >
          <FaRedo />
          <span>{t('onboarding.restart', 'Restart Quiz')}</span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
