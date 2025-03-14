import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Onboarding.css';

// Step components
import JoinCommunity from './Steps/JoinCommunity';
import KnowledgeExam from './Steps/KnowledgeExam';
import NFTIDMinting from './Steps/NFTIDMinting';

const Onboarding: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [examScore, setExamScore] = useState(0);
  const [examPassed, setExamPassed] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  // Progress through onboarding steps
  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle exam completion
  const handleExamComplete = (score: number, passed: boolean, answers: Record<string, string>) => {
    setExamScore(score);
    setExamPassed(passed);
    setUserAnswers(answers);
    if (passed) {
      goToNextStep();
    }
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <JoinCommunity onComplete={goToNextStep} />;
      case 2:
        return <KnowledgeExam onComplete={handleExamComplete} />;
      case 3:
        return <NFTIDMinting examScore={examScore} />;
      default:
        return <JoinCommunity onComplete={goToNextStep} />;
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-header">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">
          {t('onboarding.title', 'Join NOVA BULGARIA')}
        </h1>
        <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          {t('onboarding.subtitle', 'Complete these steps to become a citizen of the digital nation')}
        </p>
      </div>

      <div className="onboarding-progress">
        <div className="progress-steps">
          <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">{t('onboarding.step1', 'Join Community')}</div>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">{t('onboarding.step2', 'Knowledge Exam')}</div>
          </div>
          <div className="progress-line"></div>
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">{t('onboarding.step3', 'NFT ID Minting')}</div>
          </div>
        </div>
      </div>

      <div className="onboarding-content">
        {renderStep()}
      </div>

      <div className="onboarding-navigation">
        {currentStep > 1 && (
          <button 
            className="nav-button back-button"
            onClick={goToPreviousStep}
          >
            {t('onboarding.back', 'Back')}
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
    </div>
  );
};

export default Onboarding;
