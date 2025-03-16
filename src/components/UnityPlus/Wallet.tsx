import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaCoins, FaExchangeAlt, FaChartLine, FaLock, FaUnlock, FaInfoCircle, FaCalendarAlt, FaChartBar } from 'react-icons/fa';
import { UserProfileType } from '../../context/UnityPlusContext';
import './Wallet.css';

// Import chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

interface WalletProps {
  userProfile: UserProfileType;
}

// Define staking tiers
interface StakingTier {
  days: number;
  apy: number;
  color: string;
  name: string;
}

const STAKING_TIERS: StakingTier[] = [
  { days: 30, apy: 12, color: '#3498db', name: 'Basic' },
  { days: 90, apy: 18, color: '#2ecc71', name: 'Silver' },
  { days: 180, apy: 24, color: '#f39c12', name: 'Gold' },
  { days: 365, apy: 36, color: '#9b59b6', name: 'Platinum' }
];

// Define chart data type for projections
interface ProjectionChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    tension: number;
    fill: boolean;
  }[];
}

const Wallet: React.FC<WalletProps> = ({ userProfile }) => {
  const { t } = useLanguage();
  const [activeStakingTab, setActiveStakingTab] = useState<'stake' | 'unstake' | 'rewards'>('stake');
  const [stakeAmount, setStakeAmount] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<number>(0); // Default to first tier
  const [dailyEarnings, setDailyEarnings] = useState<number>(0);
  const [showStakingInfo, setShowStakingInfo] = useState<boolean>(false);
  const [projectionData, setProjectionData] = useState<ProjectionChartData | null>(null);
  
  // Wallet address (simulated for now)
  const walletAddress = userProfile.nftId ? 
    `0x${userProfile.nftId.replace(/[^a-zA-Z0-9]/g, '')}12345678901234567890` : 
    '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
  
  // BGL balance
  const bglBalance = userProfile.walletBalance.BGL || 0;
  
  // Calculate daily earnings whenever stake amount or tier changes
  useEffect(() => {
    const amount = parseFloat(stakeAmount) || 0;
    const tier = STAKING_TIERS[selectedTier];
    const yearlyEarnings = amount * (tier.apy / 100);
    const daily = yearlyEarnings / 365;
    setDailyEarnings(daily);
    
    // Generate projection data for chart
    generateProjectionData(amount, tier);
  }, [stakeAmount, selectedTier]);
  
  // Generate projection data for chart
  const generateProjectionData = (amount: number, tier: StakingTier) => {
    if (amount <= 0) {
      setProjectionData(null);
      return;
    }
    
    const labels: string[] = [];
    const dataPoints: number[] = [];
    const monthlyRate = tier.apy / 12 / 100;
    let currentAmount = amount;
    
    // Generate data for 12 months
    for (let i = 0; i <= tier.days; i += 30) {
      const month = Math.floor(i / 30);
      labels.push(`Month ${month}`);
      dataPoints.push(currentAmount);
      currentAmount += currentAmount * monthlyRate;
    }
    
    setProjectionData({
      labels,
      datasets: [
        {
          label: 'Projected BGL Growth',
          data: dataPoints,
          borderColor: tier.color,
          backgroundColor: `${tier.color}33`,
          tension: 0.4,
          fill: true,
        }
      ]
    });
  };
  
  // Handle staking submission
  const handleStake = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would call a blockchain transaction
    const tier = STAKING_TIERS[selectedTier];
    alert(`Staked ${stakeAmount} BGL for ${tier.days} days at ${tier.apy}% APY`);
    setStakeAmount('');
  };
  
  // Mock staked tokens data (in a real app, this would come from the blockchain)
  const stakedTokens = [
    { amount: 500, startDate: '2025-02-15', endDate: '2025-05-15', tier: 'Basic', apy: 12, rewards: 15.21, color: '#3498db' },
    { amount: 1000, startDate: '2025-03-01', endDate: '2025-09-01', tier: 'Silver', apy: 18, rewards: 90.0, color: '#2ecc71' }
  ];
  
  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  // Calculate total staked BGL
  const totalStaked = stakedTokens.reduce((sum, stake) => sum + stake.amount, 0);
  
  // Calculate total rewards
  const totalRewards = stakedTokens.reduce((sum, stake) => sum + stake.rewards, 0);
  
  // Prepare data for doughnut chart
  const doughnutData = {
    labels: ['Staked BGL', 'Available BGL'],
    datasets: [
      {
        data: [totalStaked, bglBalance],
        backgroundColor: ['#9b59b6', '#3498db'],
        borderColor: ['#8e44ad', '#2980b9'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <div className="wallet-title-area">
          <h3>{t('unityPlus.wallet.title', 'Your Wallet')}</h3>
          <div className="wallet-address">
            <span>{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
          </div>
        </div>
        
        <div className="wallet-summary">
          <div className="summary-item" style={{ borderColor: '#3498db' }}>
            <div className="summary-icon" style={{ backgroundColor: '#3498db' }}>
              <FaCoins />
            </div>
            <div className="summary-details">
              <span className="summary-label">BGL Balance</span>
              <span className="summary-value">{bglBalance.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="summary-item" style={{ borderColor: '#9b59b6' }}>
            <div className="summary-icon" style={{ backgroundColor: '#9b59b6' }}>
              <FaLock />
            </div>
            <div className="summary-details">
              <span className="summary-label">Total Staked</span>
              <span className="summary-value">{totalStaked.toLocaleString()} BGL</span>
            </div>
          </div>
          
          <div className="summary-item" style={{ borderColor: '#2ecc71' }}>
            <div className="summary-icon" style={{ backgroundColor: '#2ecc71' }}>
              <FaChartLine />
            </div>
            <div className="summary-details">
              <span className="summary-label">Total Rewards</span>
              <span className="summary-value">+{totalRewards.toFixed(2)} BGL</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Token Distribution Chart */}
      <div className="token-distribution">
        <div className="chart-container">
          <h4>BGL Distribution</h4>
          <div className="doughnut-chart">
            <Doughnut 
              data={doughnutData} 
              options={{
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      color: '#ffffff',
                      font: {
                        size: 12
                      }
                    }
                  }
                },
                cutout: '70%'
              }}
            />
          </div>
        </div>
        
        <div className="token-info">
          <div className="token-info-header">
            <FaCoins className="token-icon" />
            <h4>Bulgarian Lion (BGL)</h4>
          </div>
          <p className="token-description">
            The primary governance token of the Nova Republic of Bulgaria with a total supply of 1 trillion tokens.
          </p>
          <div className="token-stats">
            <div className="stat-item">
              <span className="stat-label">Current Price</span>
              <span className="stat-value">$0.0025</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Market Cap</span>
              <span className="stat-value">$2.5B</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Circulating Supply</span>
              <span className="stat-value">1T BGL</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Staking Section */}
      <div className="staking-section">
        <div className="section-header">
          <h4>{t('unityPlus.wallet.staking', 'BGL Staking')}</h4>
          <button 
            className="info-button"
            onClick={() => setShowStakingInfo(!showStakingInfo)}
          >
            <FaInfoCircle />
          </button>
        </div>
        
        {showStakingInfo && (
          <div className="staking-info glass">
            <h5>{t('unityPlus.wallet.stakingInfo.title', 'About BGL Staking')}</h5>
            <p>{t('unityPlus.wallet.stakingInfo.description', 'Staking allows you to earn rewards by locking your BGL tokens for a specific period. The longer you stake, the higher your APY.')}</p>
            <ul>
              {STAKING_TIERS.map((tier, index) => (
                <li key={index} style={{ color: tier.color }}>
                  {tier.name}: {tier.days} days - {tier.apy}% APY
                </li>
              ))}
            </ul>
            <p>Staking your BGL helps secure the Nova Republic of Bulgaria blockchain network while earning you passive income.</p>
            <button 
              className="close-info"
              onClick={() => setShowStakingInfo(false)}
            >
              {t('unityPlus.wallet.close', 'Close')}
            </button>
          </div>
        )}
        
        {/* Staking Tabs */}
        <div className="staking-tabs">
          <button 
            className={`staking-tab ${activeStakingTab === 'stake' ? 'active' : ''}`}
            onClick={() => setActiveStakingTab('stake')}
          >
            <FaLock className="tab-icon" />
            {t('unityPlus.wallet.stake', 'Stake BGL')}
          </button>
          <button 
            className={`staking-tab ${activeStakingTab === 'unstake' ? 'active' : ''}`}
            onClick={() => setActiveStakingTab('unstake')}
          >
            <FaUnlock className="tab-icon" />
            {t('unityPlus.wallet.unstake', 'My Stakes')}
          </button>
          <button 
            className={`staking-tab ${activeStakingTab === 'rewards' ? 'active' : ''}`}
            onClick={() => setActiveStakingTab('rewards')}
          >
            <FaChartLine className="tab-icon" />
            {t('unityPlus.wallet.rewards', 'Rewards')}
          </button>
        </div>
        
        {/* Staking Content */}
        <div className="staking-content">
          {activeStakingTab === 'stake' && (
            <div className="stake-container">
              <form onSubmit={handleStake} className="stake-form">
                <div className="form-group">
                  <label>{t('unityPlus.wallet.amount', 'Amount to Stake')}</label>
                  <div className="amount-input-container">
                    <input 
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      placeholder="0.00"
                      className="form-input"
                      min="1"
                      max={bglBalance}
                      required
                    />
                    <span className="currency-label">BGL</span>
                  </div>
                  <div className="balance-info">
                    {t('unityPlus.wallet.available', 'Available')}: {bglBalance.toLocaleString()} BGL
                  </div>
                  <div className="quick-amount-buttons">
                    <button 
                      type="button" 
                      className="quick-amount" 
                      onClick={() => setStakeAmount((bglBalance * 0.25).toString())}
                    >
                      25%
                    </button>
                    <button 
                      type="button" 
                      className="quick-amount" 
                      onClick={() => setStakeAmount((bglBalance * 0.5).toString())}
                    >
                      50%
                    </button>
                    <button 
                      type="button" 
                      className="quick-amount" 
                      onClick={() => setStakeAmount((bglBalance * 0.75).toString())}
                    >
                      75%
                    </button>
                    <button 
                      type="button" 
                      className="quick-amount" 
                      onClick={() => setStakeAmount(bglBalance.toString())}
                    >
                      MAX
                    </button>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>{t('unityPlus.wallet.stakingPeriod', 'Staking Period')}</label>
                  <div className="tier-selection">
                    {STAKING_TIERS.map((tier, index) => (
                      <div 
                        key={index}
                        className={`tier-option ${selectedTier === index ? 'active' : ''}`}
                        style={{ 
                          borderColor: tier.color,
                          backgroundColor: selectedTier === index ? `${tier.color}22` : 'transparent'
                        }}
                        onClick={() => setSelectedTier(index)}
                      >
                        <div className="tier-header" style={{ backgroundColor: tier.color }}>
                          <span className="tier-name">{tier.name}</span>
                        </div>
                        <div className="tier-details">
                          <div className="tier-apy">{tier.apy}% APY</div>
                          <div className="tier-duration">
                            <FaCalendarAlt className="tier-icon" />
                            <span>{tier.days} days</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {stakeAmount && parseFloat(stakeAmount) > 0 && (
                  <div className="stake-projection">
                    <div className="projection-summary">
                      <div className="daily-earnings">
                        <h5>Daily Earnings</h5>
                        <div className="earnings-value">+{dailyEarnings.toFixed(4)} BGL</div>
                      </div>
                      
                      <div className="stake-details">
                        <div className="detail-item">
                          <span>Staking Amount:</span>
                          <span>{parseFloat(stakeAmount).toLocaleString()} BGL</span>
                        </div>
                        <div className="detail-item">
                          <span>Staking Period:</span>
                          <span>{STAKING_TIERS[selectedTier].days} days</span>
                        </div>
                        <div className="detail-item">
                          <span>APY Rate:</span>
                          <span>{STAKING_TIERS[selectedTier].apy}%</span>
                        </div>
                        <div className="detail-item highlight">
                          <span>Total Rewards:</span>
                          <span>+{(parseFloat(stakeAmount) * (STAKING_TIERS[selectedTier].apy / 100) * (STAKING_TIERS[selectedTier].days / 365)).toFixed(2)} BGL</span>
                        </div>
                      </div>
                    </div>
                    
                    {projectionData && (
                      <div className="projection-chart">
                        <h5>Projected Growth</h5>
                        <Line 
                          data={projectionData}
                          options={{
                            responsive: true,
                            plugins: {
                              legend: {
                                display: false
                              },
                              tooltip: {
                                callbacks: {
                                  label: function(context) {
                                    return `${context.parsed.y.toFixed(2)} BGL`;
                                  }
                                }
                              }
                            },
                            scales: {
                              y: {
                                ticks: {
                                  color: '#ffffff'
                                },
                                grid: {
                                  color: 'rgba(255, 255, 255, 0.1)'
                                }
                              },
                              x: {
                                ticks: {
                                  color: '#ffffff'
                                },
                                grid: {
                                  color: 'rgba(255, 255, 255, 0.1)'
                                }
                              }
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
                
                <button 
                  type="submit"
                  className="stake-button"
                  disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
                  style={{ 
                    background: `linear-gradient(135deg, ${STAKING_TIERS[selectedTier].color}, ${STAKING_TIERS[selectedTier].color}cc)`
                  }}
                >
                  {t('unityPlus.wallet.stakeNow', 'Stake Now')}
                </button>
              </form>
            </div>
          )}
          
          {activeStakingTab === 'unstake' && (
            <div className="staked-tokens">
              <h5>{t('unityPlus.wallet.stakedTokens', 'Your Active Stakes')}</h5>
              
              {stakedTokens.length > 0 ? (
                <div className="staked-list">
                  {stakedTokens.map((stake, index) => (
                    <div 
                      className="staked-item glass" 
                      key={index}
                      style={{ borderColor: stake.color }}
                    >
                      <div className="staked-header" style={{ backgroundColor: `${stake.color}22` }}>
                        <div className="staked-tier" style={{ backgroundColor: stake.color }}>
                          {stake.tier}
                        </div>
                        <span className="staked-amount">{stake.amount.toLocaleString()} BGL</span>
                      </div>
                      <div className="staked-details">
                        <div className="staked-period">
                          <FaCalendarAlt className="period-icon" />
                          <span>{formatDate(stake.startDate)} - {formatDate(stake.endDate)}</span>
                        </div>
                        <div className="staked-metrics">
                          <div className="metric">
                            <span className="metric-label">APY</span>
                            <span className="metric-value">{stake.apy}%</span>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Daily</span>
                            <span className="metric-value">+{(stake.amount * (stake.apy / 100) / 365).toFixed(4)}</span>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Rewards</span>
                            <span className="metric-value">+{stake.rewards.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="staked-actions">
                        <button 
                          className="unstake-button"
                          style={{ borderColor: stake.color, color: stake.color }}
                        >
                          {t('unityPlus.wallet.unstakeNow', 'Unstake')}
                        </button>
                        <button 
                          className="claim-button"
                          style={{ backgroundColor: stake.color }}
                        >
                          {t('unityPlus.wallet.claimRewards', 'Claim Rewards')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-staked-tokens">
                  <FaChartBar className="no-stakes-icon" />
                  <p>{t('unityPlus.wallet.noStakedTokens', 'You have no active stakes.')}</p>
                  <button 
                    className="start-staking-button"
                    onClick={() => setActiveStakingTab('stake')}
                  >
                    {t('unityPlus.wallet.startStaking', 'Start Staking')}
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeStakingTab === 'rewards' && (
            <div className="rewards-section">
              <div className="rewards-summary">
                <div className="total-rewards-card" style={{ backgroundImage: 'linear-gradient(135deg, #3498db, #9b59b6)' }}>
                  <h5>{t('unityPlus.wallet.totalRewards', 'Total Rewards')}</h5>
                  <div className="total-amount">+{totalRewards.toFixed(2)} BGL</div>
                  <button className="claim-all-button">
                    {t('unityPlus.wallet.claimAll', 'Claim All Rewards')}
                  </button>
                </div>
                
                <div className="rewards-stats">
                  <div className="stat-card" style={{ borderColor: '#3498db' }}>
                    <div className="stat-icon" style={{ backgroundColor: '#3498db' }}>
                      <FaChartLine />
                    </div>
                    <div className="stat-info">
                      <span className="stat-label">Daily Earnings</span>
                      <span className="stat-value">+{stakedTokens.reduce((sum, stake) => sum + (stake.amount * (stake.apy / 100) / 365), 0).toFixed(4)} BGL</span>
                    </div>
                  </div>
                  
                  <div className="stat-card" style={{ borderColor: '#2ecc71' }}>
                    <div className="stat-icon" style={{ backgroundColor: '#2ecc71' }}>
                      <FaCalendarAlt />
                    </div>
                    <div className="stat-info">
                      <span className="stat-label">Monthly Projection</span>
                      <span className="stat-value">+{(stakedTokens.reduce((sum, stake) => sum + (stake.amount * (stake.apy / 100) / 365), 0) * 30).toFixed(2)} BGL</span>
                    </div>
                  </div>
                  
                  <div className="stat-card" style={{ borderColor: '#f39c12' }}>
                    <div className="stat-icon" style={{ backgroundColor: '#f39c12' }}>
                      <FaCoins />
                    </div>
                    <div className="stat-info">
                      <span className="stat-label">APY (Weighted Avg)</span>
                      <span className="stat-value">
                        {totalStaked > 0 ? 
                          (stakedTokens.reduce((sum, stake) => sum + (stake.amount * stake.apy), 0) / totalStaked).toFixed(2) : 
                          0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rewards-history glass">
                <h5>{t('unityPlus.wallet.rewardsHistory', 'Rewards History')}</h5>
                <div className="history-list">
                  <div className="history-item">
                    <div className="history-date">Mar 15, 2025</div>
                    <div className="history-details">
                      <span className="history-type">Staking Reward</span>
                      <span className="history-amount">+2.5 BGL</span>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="history-date">Mar 10, 2025</div>
                    <div className="history-details">
                      <span className="history-type">Staking Reward</span>
                      <span className="history-amount">+1.8 BGL</span>
                    </div>
                  </div>
                  <div className="history-item">
                    <div className="history-date">Mar 5, 2025</div>
                    <div className="history-details">
                      <span className="history-type">Staking Reward</span>
                      <span className="history-amount">+2.1 BGL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Wallet Actions */}
      <div className="wallet-actions">
        <button className="wallet-button" style={{ backgroundColor: '#3498db' }}>
          <FaExchangeAlt className="button-icon" />
          {t('unityPlus.wallet.transfer', 'Transfer BGL')}
        </button>
        <button className="wallet-button" style={{ backgroundColor: '#2ecc71' }}>
          <FaCoins className="button-icon" />
          {t('unityPlus.wallet.buy', 'Buy BGL Tokens')}
        </button>
      </div>
    </div>
  );
};

export default Wallet;
