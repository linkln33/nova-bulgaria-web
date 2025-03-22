import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { FaWallet, FaCheck, FaUpload, FaSpinner, FaUser } from 'react-icons/fa';
import NFTIdCard from '../../NFTIdCard/NFTIdCard';
import '../../NFTIdCard/NFTIdCard.css'; // Import the NFT ID card styles

interface NFTIDMintingProps {
  examScore: number;
  redirectToDashboard: string;
  earnedBGL: number;
}

const NFTIDMinting: React.FC<NFTIDMintingProps> = ({ examScore, redirectToDashboard, earnedBGL }) => {
  const { t } = useLanguage();
  
  // Helper function for string interpolation in translations
  const interpolate = (text: string, params: Record<string, string>) => {
    return Object.entries(params).reduce((result, [key, value]) => {
      return result.replace(new RegExp(`{${key}}`, 'g'), value);
    }, text);
  };

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    nationality: 'NOVA Bulgarian',
    walletAddress: '',
    citizenshipLevel: 'Bronze',
    socialScore: examScore >= 70 ? 100 : 50,
    rank: 'Citizen',
    expertise: 'Technology',
    id: '',
    issued: '',
    expires: ''
  });
  const [walletConnected, setWalletConnected] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [minting, setMinting] = useState(false);
  const [mintingComplete, setMintingComplete] = useState(false);
  const [nftId, setNftId] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [isEditing, setIsEditing] = useState(true);
  const [totalBGL, setTotalBGL] = useState(earnedBGL);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Connect wallet (simulated)
  const connectWallet = () => {
    // In a real implementation, this would connect to MetaMask or another wallet
    setWalletConnected(true);
    const randomWalletAddress = '0x' + Math.random().toString(16).slice(2, 42);
    setFormData({
      ...formData,
      walletAddress: randomWalletAddress
    });
  };

  // Handle photo upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setPhotoPreview(event.target.result as string);
          setPhotoUploaded(true);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Mint NFT ID (simulated)
  const mintNFTID = () => {
    setMinting(true);
    setIsEditing(false);
    
    // Simulate minting process
    setTimeout(() => {
      setMinting(false);
      setMintingComplete(true);
      const generatedId = 'BG-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      setNftId(generatedId);
      
      // Add bonus BGL for minting
      const mintingBonus = 10;
      setTotalBGL(earnedBGL + mintingBonus);
      
      // Update the form data with the generated ID
      setFormData({
        ...formData,
        id: generatedId,
        issued: new Date().toISOString().split('T')[0],
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString().split('T')[0]
      });
    }, 3000);
  };

  // Countdown after minting is complete
  useEffect(() => {
    if (mintingComplete && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (mintingComplete && countdown === 0) {
      try {
        // Try to open Unity app with protocol handler
        window.location.href = `unity://dashboard?id=${nftId}&score=${examScore}`;
      } catch (e) {
        console.error("Failed to open Unity app:", e);
        // Fallback to web dashboard if Unity app fails
        window.location.href = redirectToDashboard || `unity://dashboard?id=${nftId}&score=${examScore}`;
      }
    }
  }, [mintingComplete, countdown, redirectToDashboard, nftId, examScore]);

  // Update the manual redirect button as well
  const handleDashboardRedirect = () => {
    try {
      window.location.href = `unity://dashboard?id=${nftId}&score=${examScore}`;
    } catch (e) {
      console.error("Failed to open Unity app:", e);
      window.location.href = redirectToDashboard || `unity://dashboard?id=${nftId}&score=${examScore}`;
    }
  };

  // Check if form is complete
  const isFormComplete = () => {
    return (
      formData.name.trim() !== '' &&
      formData.dob.trim() !== '' &&
      walletConnected &&
      photoUploaded
    );
  };

  // Generate user data for NFT ID Card
  const generateUserData = () => {
    return {
      name: formData.name || "Your Name",
      id: nftId || "Not Minted",
      dob: formData.dob || "YYYY-MM-DD",
      nationality: formData.nationality,
      issued: formData.issued || new Date().toISOString().split('T')[0],
      expires: formData.expires || "Not Set",
      walletAddress: formData.walletAddress || "Not Connected",
      citizenshipLevel: formData.citizenshipLevel,
      socialScore: formData.socialScore,
      rank: formData.rank,
      expertise: formData.expertise
    };
  };

  return (
    <div className="nft-minting-container">
      <h2 className="step-title">{t('onboarding.nftid.title', 'Create Your NOVA BULGARIA NFT ID')}</h2>
      <p className="step-description">
        {t('onboarding.nftid.description', 'Your NFT ID serves as your digital citizenship proof in NOVA BULGARIA. Complete the form below to mint your unique NFT ID.')}
      </p>
      
      {/* BGL Earned Display */}
      <div className="bgl-earned-container bg-[rgba(0,255,170,0.1)] p-4 rounded-lg border border-[rgba(0,255,170,0.3)] mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-[#00ffaa]">{t('onboarding.nftid.bglEarned', 'BGL Earned')}</h3>
            <p className="text-sm text-gray-300">{t('onboarding.nftid.bglDescription', 'Bulgarian Lion (BGL) tokens earned during onboarding')}</p>
          </div>
          <div className="text-2xl font-bold text-[#00ffaa] flex items-center">
            <span className="mr-2">💰</span>
            <span>{totalBGL} BGL</span>
          </div>
        </div>
        {mintingComplete && (
          <div className="mt-3 pt-3 border-t border-[rgba(0,255,170,0.3)]">
            <p className="text-sm text-[#00ffaa]">
              {interpolate(
                t('onboarding.nftid.bglBonus', 'Congratulations! You earned {examBGL} BGL from the exam and {mintingBGL} BGL bonus for minting your NFT ID!'),
                { 
                  examBGL: earnedBGL.toString(), 
                  mintingBGL: (totalBGL - earnedBGL).toString() 
                }
              )}
            </p>
          </div>
        )}
      </div>
      
      <div className="flex flex-col lg:flex-row-reverse w-full gap-8 mt-8">
        {/* NFT ID Card Preview */}
        <div className="w-full lg:w-1/2 flex flex-col items-center mb-8 lg:mb-0">
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold text-[var(--primary)]">
              {isEditing 
                ? t('onboarding.nftid.preview', 'ID Preview') 
                : mintingComplete 
                  ? t('onboarding.nftid.minted', 'Minted NFT ID') 
                  : t('onboarding.nftid.minting', 'Minting in progress...')}
            </h3>
          </div>
          <div className="nft-card-wrapper w-full">
            <NFTIdCard 
              userData={generateUserData()} 
              photoUrl={photoPreview || undefined}
            />
          </div>
        </div>
        
        {/* Form */}
        <div className="w-full lg:w-1/2">
          {!mintingComplete ? (
            <div className="nft-form glass p-6 rounded-lg">
              <div className="form-section mb-6">
                <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">{t('onboarding.nftid.personalInfo', 'Personal Information')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="name" className="block mb-2">{t('onboarding.nftid.fullName', 'Full Name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      placeholder="Enter your full name"
                      disabled={!isEditing}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="dob" className="block mb-2">{t('onboarding.nftid.dob', 'Date of Birth')}</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      disabled={!isEditing}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="nationality" className="block mb-2">{t('onboarding.nftid.nationality', 'Nationality')}</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                      disabled={true}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="walletAddress" className="block mb-2">{t('onboarding.nftid.walletAddress', 'Wallet Address')}</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="walletAddress"
                        name="walletAddress"
                        value={formData.walletAddress}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-lg focus:border-[var(--primary)] focus:outline-none"
                        placeholder="0x..."
                        disabled={!isEditing}
                        required
                      />
                      <button 
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[var(--primary)] hover:text-[var(--primary-dark)]"
                        onClick={connectWallet}
                        disabled={!isEditing}
                      >
                        <FaWallet />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="form-section mb-6">
                <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">{t('onboarding.nftid.walletInfo', 'Wallet Information')}</h3>
                
                <div className="form-group">
                  <label htmlFor="walletAddress" className="block mb-2">{t('onboarding.nftid.walletAddress', 'Wallet Address')}</label>
                  <div className="flex">
                    <input
                      type="text"
                      id="walletAddress"
                      name="walletAddress"
                      value={formData.walletAddress}
                      readOnly
                      className={`flex-grow p-3 bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-l-lg ${walletConnected ? 'text-[var(--primary)]' : ''}`}
                      placeholder="Connect your wallet"
                    />
                    <button 
                      className={`px-4 py-2 flex items-center justify-center rounded-r-lg ${walletConnected ? 'bg-[var(--primary)] text-black' : 'bg-[rgba(255,255,255,0.1)]'}`}
                      onClick={connectWallet}
                      disabled={walletConnected || !isEditing}
                    >
                      {walletConnected ? (
                        <FaCheck className="mr-2" />
                      ) : (
                        <FaWallet className="mr-2" />
                      )}
                      {walletConnected ? t('onboarding.nftid.connected', 'Connected') : t('onboarding.nftid.connect', 'Connect')}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="form-section mb-6">
                <h3 className="text-lg font-bold mb-4 text-[var(--primary)]">{t('onboarding.nftid.photoUpload', 'Upload Your Photo')}</h3>
                
                <div className="flex flex-col items-center">
                  <div 
                    className="w-32 h-32 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-[rgba(0,0,0,0.3)] border border-dashed border-[rgba(255,255,255,0.2)] cursor-pointer"
                    onClick={isEditing ? triggerFileInput : undefined}
                  >
                    {photoPreview ? (
                      <img src={photoPreview} alt="User" className="w-full h-full object-cover" />
                    ) : (
                      <FaUser size={48} className="text-[rgba(255,255,255,0.3)]" />
                    )}
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    disabled={!isEditing}
                  />
                  
                  <button 
                    className="px-4 py-2 bg-[rgba(255,255,255,0.1)] rounded-lg flex items-center"
                    onClick={triggerFileInput}
                    disabled={!isEditing}
                  >
                    <FaUpload className="mr-2" />
                    {photoUploaded ? t('onboarding.nftid.changePhoto', 'Change Photo') : t('onboarding.nftid.uploadPhoto', 'Upload Photo')}
                  </button>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  className={`w-full py-3 rounded-lg font-bold flex items-center justify-center ${isFormComplete() && !minting ? 'bg-[var(--primary)] text-black hover:bg-[#00cc88]' : 'bg-[rgba(255,255,255,0.1)] cursor-not-allowed'}`}
                  onClick={mintNFTID}
                  disabled={!isFormComplete() || minting || !isEditing}
                >
                  {minting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      {t('onboarding.nftid.minting', 'Minting in progress...')}
                    </>
                  ) : (
                    t('onboarding.nftid.mintNFT', 'Mint NFT ID')
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="minting-complete glass p-6 rounded-lg">
              <div className="text-center mb-6">
                <FaCheck className="text-[var(--primary)] text-5xl mb-4 inline-block" />
                <h3 className="text-xl font-bold text-[var(--primary)]">
                  {t('onboarding.nftid.success', 'NFT ID Successfully Minted!')}
                </h3>
                <p className="mt-2">
                  {interpolate(
                    t('onboarding.nftid.redirecting', 'Redirecting to Unity+ App Dashboard in {seconds} seconds...'),
                    { seconds: countdown.toString() }
                  )}
                </p>
              </div>
              
              <div className="bg-[rgba(0,0,0,0.2)] p-4 rounded-lg mb-4">
                <h4 className="font-bold text-[var(--primary)] mb-2">{t('onboarding.nftid.summary', 'Onboarding Summary')}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{interpolate(
                    t('onboarding.nftid.examCompleted', 'Knowledge Exam Completed: {score}%'),
                    { score: examScore.toString() }
                  )}</li>
                  <li>{interpolate(
                    t('onboarding.nftid.bglEarnedSummary', 'BGL Tokens Earned: {bgl}'),
                    { bgl: totalBGL.toString() }
                  )}</li>
                  <li>{interpolate(
                    t('onboarding.nftid.nftMinted', 'NFT ID Minted: {id}'),
                    { id: nftId }
                  )}</li>
                </ul>
              </div>
              
              <div className="text-center">
                <button
                  className="primary-button w-full"
                  onClick={handleDashboardRedirect}
                >
                  {t('onboarding.nftid.goToDashboard', 'Go to Dashboard Now')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTIDMinting;
