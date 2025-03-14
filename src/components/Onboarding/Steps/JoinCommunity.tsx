import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaDiscord, FaCheck, FaArrowRight } from 'react-icons/fa';

interface JoinCommunityProps {
  onComplete: () => void;
}

const JoinCommunity: React.FC<JoinCommunityProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [discordJoined, setDiscordJoined] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const handleJoinDiscord = () => {
    // In a real implementation, this would open Discord invite link
    window.open('https://discord.gg/mRfydr8P', '_blank');
    setDiscordJoined(true);
  };

  const handleVerification = () => {
    // In a real implementation, this would verify the user's Discord status
    setVerificationSent(true);
    // Simulate verification delay
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="step-container">
      <h2 className="step-title">{t('onboarding.joinCommunity.title', 'Join the NOVA BULGARIA Community')}</h2>
      <p className="step-description">
        {t('onboarding.joinCommunity.description', 'Your journey begins by joining our vibrant community on Discord. This is where citizens collaborate, discuss ideas, and shape the future of our digital nation.')}
      </p>

      <div className="discord-section">
        <h3 className="text-xl font-bold mb-3">{t('onboarding.joinCommunity.discordTitle', 'Step 1: Join Our Discord Server')}</h3>
        <p className="mb-4">
          {t('onboarding.joinCommunity.discordDescription', 'Click the button below to join the official NOVA BULGARIA Discord server. Upon joining, you\'ll receive the "New Citizen" role with limited access.')}
        </p>
        
        <button 
          className="discord-button"
          onClick={handleJoinDiscord}
          disabled={discordJoined}
        >
          {discordJoined ? (
            <>
              <FaCheck className="discord-icon" />
              {t('onboarding.joinCommunity.discordJoined', 'Joined Discord')}
            </>
          ) : (
            <>
              <FaDiscord className="discord-icon" />
              {t('onboarding.joinCommunity.discordJoin', 'Join Discord Server')}
            </>
          )}
        </button>
      </div>

      <div className="discord-section">
        <h3 className="text-xl font-bold mb-3">{t('onboarding.joinCommunity.verificationTitle', 'Step 2: Verify Your Discord Account')}</h3>
        <p className="mb-4">
          {t('onboarding.joinCommunity.verificationDescription', 'After joining Discord, you need to verify your account to proceed with the onboarding process. Our Discord bot will guide you through the verification process.')}
        </p>
        
        {discordJoined ? (
          <button 
            className="discord-button"
            onClick={handleVerification}
            disabled={verificationSent}
            style={{ backgroundColor: verificationSent ? '#00ffaa' : '#7289da' }}
          >
            {verificationSent ? (
              <>
                <FaCheck className="discord-icon" />
                {t('onboarding.joinCommunity.verificationComplete', 'Verification Complete')}
              </>
            ) : (
              <>
                <FaArrowRight className="discord-icon" />
                {t('onboarding.joinCommunity.verifyNow', 'Verify Discord Account')}
              </>
            )}
          </button>
        ) : (
          <p className="text-yellow-400">
            {t('onboarding.joinCommunity.joinFirst', 'Please join the Discord server first')}
          </p>
        )}
      </div>

      <div className="mt-8 p-4 bg-black bg-opacity-30 rounded-lg border border-gray-700">
        <h3 className="text-lg font-bold mb-2">{t('onboarding.joinCommunity.whatToExpect', 'What to expect next:')}</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('onboarding.joinCommunity.expectation1', 'Access to the New Citizen channels')}</li>
          <li>{t('onboarding.joinCommunity.expectation2', 'Introduction to the community')}</li>
          <li>{t('onboarding.joinCommunity.expectation3', 'Guidance from community moderators')}</li>
          <li>{t('onboarding.joinCommunity.expectation4', 'Preparation for the knowledge exam')}</li>
        </ul>
      </div>
    </div>
  );
};

export default JoinCommunity;
