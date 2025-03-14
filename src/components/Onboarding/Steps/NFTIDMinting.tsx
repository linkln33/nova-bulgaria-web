import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaUpload, FaCheck, FaWallet } from 'react-icons/fa';

interface NFTIDMintingProps {
  examScore: number;
}

const NFTIDMinting: React.FC<NFTIDMintingProps> = ({ examScore }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    walletAddress: '',
    email: ''
  });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isMinting, setIsMinting] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  // Calculate BGL earned from exam (0.05 BGL per % score, max 1 BGL)
  const bglEarned = Math.min((examScore / 100) * 20 * 0.05, 1).toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setPhotoPreview(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleConnectWallet = () => {
    // In a real implementation, this would connect to a Web3 wallet
    setWalletConnected(true);
    setFormData({
      ...formData,
      walletAddress: '0x7A3B...F42E' // Simulated wallet address
    });
  };

  const handleMintNFT = () => {
    // In a real implementation, this would mint the NFT
    setIsMinting(true);
    
    // Simulate minting delay
    setTimeout(() => {
      setIsMinting(false);
      setIsMinted(true);
    }, 3000);
  };

  const isFormComplete = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.walletAddress.trim() !== '' &&
      formData.email.trim() !== '' &&
      photoPreview !== null
    );
  };

  // Generate a random NFT ID
  const generateNFTId = () => {
    return 'NOVA-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const nftId = generateNFTId();

  return (
    <div className="step-container">
      <h2 className="step-title">{t('onboarding.nftid.title', 'Create Your Soulbound NFT ID')}</h2>
      <p className="step-description">
        {t('onboarding.nftid.description', 'Your Soulbound NFT ID is your digital identity in NOVA BULGARIA. It\'s non-transferable and linked to your Web3 wallet. This ID will be your access key to governance, public services, and staking.')}
      </p>

      {isMinted ? (
        <div className="nft-id-container">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#00ffaa] text-black rounded-full p-3 mb-4">
              <FaCheck size={30} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t('onboarding.nftid.successTitle', 'NFT ID Successfully Minted!')}</h3>
            <p className="text-gray-300">
              {t('onboarding.nftid.successDescription', 'Your Soulbound NFT ID has been minted and is now linked to your wallet. Welcome to NOVA BULGARIA!')}
            </p>
          </div>

          <div className="nft-id-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-logo">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" rx="10" fill="#00ffaa" fillOpacity="0.2" />
                    <path d="M50 20L80 65H20L50 20Z" fill="#00ffaa" />
                  </svg>
                </div>
                <div className="card-title">NOVA BULGARIA</div>
              </div>

              <div className="card-body">
                <div className="card-photo">
                  {photoPreview && <img src={photoPreview} alt="User" />}
                </div>
                <div className="card-details">
                  <div className="card-detail">
                    <div className="detail-label">{t('onboarding.nftid.nameLabel', 'NAME')}</div>
                    <div className="detail-value">{formData.firstName} {formData.lastName}</div>
                  </div>
                  <div className="card-detail">
                    <div className="detail-label">{t('onboarding.nftid.idLabel', 'CITIZEN ID')}</div>
                    <div className="detail-value">{nftId}</div>
                  </div>
                  <div className="card-detail">
                    <div className="detail-label">{t('onboarding.nftid.walletLabel', 'WALLET')}</div>
                    <div className="detail-value" style={{ fontSize: '0.8rem' }}>{formData.walletAddress}</div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <div className="card-id">SBT-{Math.floor(Math.random() * 10000)}</div>
                <div className="card-qr"></div>
              </div>
            </div>
          </div>

          <div className="reward-info mt-8">
            <h3 className="text-xl font-bold mb-2">{t('onboarding.nftid.rewardTitle', 'Your Rewards')}</h3>
            <div className="reward-amount">{bglEarned} BGL</div>
            <p className="reward-description">
              {t('onboarding.nftid.rewardDescription', 'You earned this from the knowledge exam!')}
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-300">
              {t('onboarding.nftid.nextStepsDescription', 'Your journey as a NOVA BULGARIA citizen begins now. Explore the platform, contribute to projects, and help shape our digital nation.')}
            </p>
            <a 
              href="/dashboard" 
              className="inline-block bg-[#00ffaa] text-black px-6 py-3 rounded-lg font-bold transition-all hover:bg-[#00cc88]"
            >
              {t('onboarding.nftid.goDashboard', 'Go to Citizen Dashboard')}
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="nft-id-container">
            <div className="nft-id-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-logo">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100" height="100" rx="10" fill="#00ffaa" fillOpacity="0.2" />
                      <path d="M50 20L80 65H20L50 20Z" fill="#00ffaa" />
                    </svg>
                  </div>
                  <div className="card-title">NOVA BULGARIA</div>
                </div>

                <div className="card-body">
                  <div className="card-photo">
                    {photoPreview && <img src={photoPreview} alt="User" />}
                  </div>
                  <div className="card-details">
                    <div className="card-detail">
                      <div className="detail-label">{t('onboarding.nftid.nameLabel', 'NAME')}</div>
                      <div className="detail-value">
                        {formData.firstName || '...'} {formData.lastName || '...'}
                      </div>
                    </div>
                    <div className="card-detail">
                      <div className="detail-label">{t('onboarding.nftid.idLabel', 'CITIZEN ID')}</div>
                      <div className="detail-value">{nftId}</div>
                    </div>
                    <div className="card-detail">
                      <div className="detail-label">{t('onboarding.nftid.walletLabel', 'WALLET')}</div>
                      <div className="detail-value" style={{ fontSize: '0.8rem' }}>
                        {formData.walletAddress || '0x...'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="card-id">SBT-{Math.floor(Math.random() * 10000)}</div>
                  <div className="card-qr"></div>
                </div>
              </div>
            </div>

            <div className="reward-info">
              <h3 className="text-xl font-bold mb-2">{t('onboarding.nftid.examReward', 'Exam Reward')}</h3>
              <div className="reward-amount">{bglEarned} BGL</div>
              <p className="reward-description">
                {t('onboarding.nftid.examRewardDescription', 'You earned this from the knowledge exam!')}
              </p>
            </div>
          </div>

          <div className="nft-form">
            <h3 className="text-xl font-bold mb-4 text-[#00ffaa]">
              {t('onboarding.nftid.formTitle', 'Enter Your Information')}
            </h3>

            <div className="form-group">
              <label className="form-label">{t('onboarding.nftid.firstNameLabel', 'First Name')}</label>
              <input
                type="text"
                name="firstName"
                className="form-input"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t('onboarding.nftid.firstNamePlaceholder', 'Enter your first name')}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('onboarding.nftid.lastNameLabel', 'Last Name')}</label>
              <input
                type="text"
                name="lastName"
                className="form-input"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t('onboarding.nftid.lastNamePlaceholder', 'Enter your last name')}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('onboarding.nftid.emailLabel', 'Email Address')}</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('onboarding.nftid.emailPlaceholder', 'Enter your email address')}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('onboarding.nftid.walletAddressLabel', 'Wallet Address')}</label>
              {walletConnected ? (
                <input
                  type="text"
                  name="walletAddress"
                  className="form-input"
                  value={formData.walletAddress}
                  readOnly
                />
              ) : (
                <button 
                  className="discord-button w-full justify-center"
                  onClick={handleConnectWallet}
                >
                  <FaWallet className="mr-2" />
                  {t('onboarding.nftid.connectWallet', 'Connect Wallet')}
                </button>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">{t('onboarding.nftid.photoLabel', 'Profile Photo')}</label>
              <div className="photo-upload">
                <label className="upload-button">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: 'none' }}
                  />
                  <div className="upload-icon">
                    <FaUpload />
                  </div>
                  <div>
                    {photoPreview ? (
                      t('onboarding.nftid.photoSelected', 'Photo Selected')
                    ) : (
                      t('onboarding.nftid.uploadPhoto', 'Upload a photo')
                    )}
                  </div>
                </label>
              </div>
            </div>

            <button
              className="mint-button"
              onClick={handleMintNFT}
              disabled={!isFormComplete() || isMinting}
            >
              {isMinting ? (
                <>
                  <span className="animate-pulse">{t('onboarding.nftid.minting', 'Minting...')}</span>
                </>
              ) : (
                <>
                  {t('onboarding.nftid.mintNFT', 'Mint Your NFT ID')}
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTIDMinting;
