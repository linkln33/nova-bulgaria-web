import React, { useState, useEffect } from 'react';
import { FaDiscord, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';

interface JoinCommunityProps {
  onComplete: () => void;
}

const JoinCommunity: React.FC<JoinCommunityProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [discordJoined, setDiscordJoined] = useState(() => {
    const saved = localStorage.getItem('discordJoined');
    return saved === 'true';
  });
  const [verificationSent, setVerificationSent] = useState(() => {
    const saved = localStorage.getItem('verificationSent');
    return saved === 'true';
  });
  const [verificationError, setVerificationError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('discordJoined', discordJoined.toString());
    localStorage.setItem('verificationSent', verificationSent.toString());
  }, [discordJoined, verificationSent]);

  const handleJoinDiscord = () => {
    window.open('https://discord.gg/novabulgaria', '_blank');
    setDiscordJoined(true);
    setVerificationError(null);
  };

  const handleVerification = async () => {
    try {
      setVerificationError(null);
      setVerificationSent(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.removeItem('discordJoined');
      localStorage.removeItem('verificationSent');

      onComplete();
    } catch (error) {
      setVerificationError(t('onboarding.joinCommunity.verificationError', 'Verification failed. Please try again.'));
      setVerificationSent(false);
    }
  };

  return (
    <div className="step-container">
      <h2 className="step-title">{t('onboarding.joinCommunity.title', 'Join the NOVA BULGARIA Community')}</h2>
      <p className="step-description">
        {t('onboarding.joinCommunity.description', 'Your journey begins by joining our vibrant community on Discord. This is where citizens collaborate, discuss ideas, and shape the future of our digital nation.')}
      </p>

      <div className="discord-section glass p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold mb-3">{t('onboarding.joinCommunity.discordTitle', 'Step 1: Join Our Discord Server')}</h3>
        <p className="mb-4">
          {t('onboarding.joinCommunity.discordDescription', 'Click the button below to join the official NOVA BULGARIA Discord server. Upon joining, you\'ll receive the "New Citizen" role with limited access.')}
        </p>
        
        <button 
          className={`discord-button w-full py-3 rounded-lg font-bold flex items-center justify-center ${
            discordJoined ? 'bg-[#00ffaa] text-black' : 'bg-[#7289da] hover:bg-[#677bc4]'
          }`}
          onClick={handleJoinDiscord}
          disabled={discordJoined}
        >
          {discordJoined ? (
            <>
              <FaCheck className="mr-2" />
              {t('onboarding.joinCommunity.discordJoined', 'Joined Discord')}
            </>
          ) : (
            <>
              <FaDiscord className="mr-2" />
              {t('onboarding.joinCommunity.discordJoin', 'Join Discord Server')}
            </>
          )}
        </button>
      </div>

      <div className="discord-section glass p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">{t('onboarding.joinCommunity.verificationTitle', 'Step 2: Verify Your Discord Account')}</h3>
        <p className="mb-4">
          {t('onboarding.joinCommunity.verificationDescription', 'After joining Discord, you need to verify your account to proceed with the onboarding process. Our Discord bot will guide you through the verification process.')}
        </p>
        
        {discordJoined ? (
          <>
            <button 
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center ${
                verificationSent 
                  ? 'bg-[#00ffaa] text-black cursor-not-allowed' 
                  : 'bg-[#7289da] hover:bg-[#677bc4]'
              }`}
              onClick={handleVerification}
              disabled={verificationSent}
            >
              {verificationSent ? (
                <>
                  <FaCheck className="mr-2" />
                  {t('onboarding.joinCommunity.verificationComplete', 'Verification Complete')}
                </>
              ) : (
                <>
                  <FaArrowRight className="mr-2" />
                  {t('onboarding.joinCommunity.verifyNow', 'Verify Discord Account')}
                </>
              )}
            </button>
            {verificationError && (
              <p className="mt-2 text-red-500">{verificationError}</p>
            )}
          </>
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
