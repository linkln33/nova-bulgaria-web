import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Elections.css';

interface Candidate {
  id: string;
  name: string;
  position: string;
  party: string;
  votes: number;
  imageUrl: string;
  platform: string;
  expertise: string[];
  pocScore: number;
}

interface Election {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: 'national' | 'regional' | 'sector';
  status: 'upcoming' | 'active' | 'completed';
  candidates: Candidate[];
  turnout?: number;
  results?: {
    winner: string;
    voteDistribution: Record<string, number>;
  };
}

interface ElectionsProps {
  userProfile: {
    nftId: string;
    name: string;
    pocScore: number;
    expertise: string[];
    rank: string;
    followedSectors: string[];
    walletBalance: {
      [key: string]: number;
    };
  };
}

const Elections: React.FC<ElectionsProps> = ({ userProfile }) => {
  const { t } = useLanguage();
  const [activeElection, setActiveElection] = useState<Election | null>(null);
  const [elections, setElections] = useState<Election[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'detail' | 'vote'>('list');
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [voteSubmitting, setVoteSubmitting] = useState<boolean>(false);
  const [voteSuccess, setVoteSuccess] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Mock elections data
  useEffect(() => {
    const mockElections: Election[] = [
      {
        id: 'election-2025-03',
        title: 'National Council Elections 2025',
        description: 'Election for the 5 seats of the National Council of Nova Bulgaria',
        startDate: new Date(2025, 2, 10), // March 10, 2025
        endDate: new Date(2025, 2, 17), // March 17, 2025
        type: 'national',
        status: 'active',
        candidates: [
          {
            id: 'candidate-1',
            name: 'Elena Dimitrova',
            position: 'National Council Member',
            party: 'Progressive Alliance',
            votes: 1245,
            imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
            platform: 'Focusing on technological innovation and digital sovereignty',
            expertise: ['Technology', 'Economy', 'Foreign Relations'],
            pocScore: 92
          },
          {
            id: 'candidate-2',
            name: 'Viktor Petrov',
            position: 'National Council Member',
            party: 'Digital Future',
            votes: 987,
            imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
            platform: 'Building a sustainable digital economy and strengthening our blockchain infrastructure',
            expertise: ['Economy', 'Technology', 'Governance'],
            pocScore: 88
          },
          {
            id: 'candidate-3',
            name: 'Maria Ivanova',
            position: 'National Council Member',
            party: 'Citizens Coalition',
            votes: 1102,
            imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
            platform: 'Enhancing citizen participation and transparent governance',
            expertise: ['Governance', 'Education', 'Social Policy'],
            pocScore: 85
          },
          {
            id: 'candidate-4',
            name: 'Georgi Stoyanov',
            position: 'National Council Member',
            party: 'Blockchain Alliance',
            votes: 876,
            imageUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
            platform: 'Strengthening our digital security and technological independence',
            expertise: ['Security', 'Technology', 'Infrastructure'],
            pocScore: 79
          },
          {
            id: 'candidate-5',
            name: 'Nikolay Todorov',
            position: 'National Council Member',
            party: 'Independent',
            votes: 654,
            imageUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
            platform: 'Promoting educational reform and digital literacy',
            expertise: ['Education', 'Technology', 'Culture'],
            pocScore: 81
          }
        ]
      },
      {
        id: 'election-2025-02',
        title: 'Technology Sector Council',
        description: 'Election for the Technology Sector Council representatives',
        startDate: new Date(2025, 1, 15), // February 15, 2025
        endDate: new Date(2025, 1, 22), // February 22, 2025
        type: 'sector',
        status: 'completed',
        candidates: [
          {
            id: 'tech-candidate-1',
            name: 'Stoyan Ivanov',
            position: 'Technology Sector Lead',
            party: 'Tech Innovators',
            votes: 876,
            imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
            platform: 'Advancing our blockchain technology and AI capabilities',
            expertise: ['Blockchain', 'AI', 'Software Development'],
            pocScore: 94
          },
          {
            id: 'tech-candidate-2',
            name: 'Anita Petrova',
            position: 'Technology Sector Lead',
            party: 'Digital Pioneers',
            votes: 1023,
            imageUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
            platform: 'Building secure and scalable digital infrastructure',
            expertise: ['Cybersecurity', 'Infrastructure', 'Data Science'],
            pocScore: 91
          }
        ],
        turnout: 78,
        results: {
          winner: 'tech-candidate-2',
          voteDistribution: {
            'tech-candidate-1': 46,
            'tech-candidate-2': 54
          }
        }
      },
      {
        id: 'election-2025-04',
        title: 'Economic Council Elections',
        description: 'Election for the Economic Council of Nova Bulgaria',
        startDate: new Date(2025, 3, 5), // April 5, 2025
        endDate: new Date(2025, 3, 12), // April 12, 2025
        type: 'national',
        status: 'upcoming',
        candidates: [
          {
            id: 'econ-candidate-1',
            name: 'Dimitar Georgiev',
            position: 'Economic Council Member',
            party: 'Digital Economy Alliance',
            votes: 0,
            imageUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
            platform: 'Creating a sustainable digital economy with global reach',
            expertise: ['Macroeconomics', 'Tokenomics', 'International Trade'],
            pocScore: 87
          },
          {
            id: 'econ-candidate-2',
            name: 'Silvia Todorova',
            position: 'Economic Council Member',
            party: 'Prosperity Coalition',
            votes: 0,
            imageUrl: 'https://randomuser.me/api/portraits/women/54.jpg',
            platform: 'Developing innovative economic models for the digital age',
            expertise: ['Microeconomics', 'Finance', 'Blockchain Economics'],
            pocScore: 85
          }
        ]
      }
    ];

    setElections(mockElections);
    // Set the active election to the one that is currently active
    const active = mockElections.find(election => election.status === 'active');
    if (active) {
      setActiveElection(active);
    }
  }, []);

  // Calculate time remaining for active elections
  useEffect(() => {
    if (!activeElection || activeElection.status !== 'active') return;

    const calculateTimeRemaining = () => {
      const now = new Date();
      const endTime = new Date(activeElection.endDate);
      const timeDiff = endTime.getTime() - now.getTime();
      
      if (timeDiff <= 0) {
        setTimeRemaining('Voting closed');
        return;
      }
      
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeRemaining(`${days}d ${hours}h ${minutes}m`);
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 60000);
    
    return () => clearInterval(timer);
  }, [activeElection]);

  const handleElectionSelect = (election: Election) => {
    setActiveElection(election);
    setViewMode('detail');
    setSelectedCandidate(null);
    setHasVoted(false);
    setVoteSuccess(false);
  };

  const handleCandidateSelect = (candidateId: string) => {
    setSelectedCandidate(candidateId);
  };

  const handleVoteClick = () => {
    setViewMode('vote');
  };

  const handleVoteSubmit = () => {
    if (!selectedCandidate) return;
    
    setVoteSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setVoteSubmitting(false);
      setHasVoted(true);
      setVoteSuccess(true);
      
      // Update the votes count in the UI
      if (activeElection) {
        const updatedElections = elections.map(election => {
          if (election.id === activeElection.id) {
            const updatedCandidates = election.candidates.map(candidate => {
              if (candidate.id === selectedCandidate) {
                return { ...candidate, votes: candidate.votes + 1 };
              }
              return candidate;
            });
            return { ...election, candidates: updatedCandidates };
          }
          return election;
        });
        
        setElections(updatedElections);
        
        // Update active election
        const updatedActiveElection = updatedElections.find(e => e.id === activeElection.id);
        if (updatedActiveElection) {
          setActiveElection(updatedActiveElection);
        }
      }
    }, 2000);
  };

  const handleBackToList = () => {
    setViewMode('list');
    setActiveElection(null);
  };

  const handleBackToDetail = () => {
    setViewMode('detail');
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'status-badge-active';
      case 'upcoming':
        return 'status-badge-upcoming';
      case 'completed':
        return 'status-badge-completed';
      default:
        return '';
    }
  };

  const renderElectionsList = () => {
    return (
      <div className="elections-list">
        <h2 className="elections-title">{t('unityPlus.elections.title', 'Elections')}</h2>
        <p className="elections-description">{t('unityPlus.elections.description', 'Participate in democratic governance through secure blockchain voting')}</p>
        
        <div className="elections-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Active</button>
          <button className="filter-button">Upcoming</button>
          <button className="filter-button">Completed</button>
        </div>
        
        <div className="elections-grid">
          {elections.map(election => (
            <div 
              key={election.id} 
              className={`election-card ${election.status}`}
              onClick={() => handleElectionSelect(election)}
            >
              <div className="election-card-header">
                <span className={`status-badge ${getStatusBadgeClass(election.status)}`}>
                  {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
                </span>
                <span className="election-type">{election.type.charAt(0).toUpperCase() + election.type.slice(1)}</span>
              </div>
              <h3 className="election-title">{election.title}</h3>
              <p className="election-dates">
                {formatDate(election.startDate)} - {formatDate(election.endDate)}
              </p>
              <p className="election-description">{election.description}</p>
              <div className="election-stats">
                <div className="stat">
                  <span className="stat-value">{election.candidates.length}</span>
                  <span className="stat-label">Candidates</span>
                </div>
                {election.status === 'completed' && (
                  <div className="stat">
                    <span className="stat-value">{election.turnout}%</span>
                    <span className="stat-label">Turnout</span>
                  </div>
                )}
                {election.status === 'active' && (
                  <div className="stat">
                    <span className="stat-value time-remaining">{timeRemaining}</span>
                    <span className="stat-label">Remaining</span>
                  </div>
                )}
              </div>
              <button className="view-details-button">
                {election.status === 'active' 
                  ? t('unityPlus.elections.vote', 'Vote Now') 
                  : t('unityPlus.elections.viewDetails', 'View Details')}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderElectionDetail = () => {
    if (!activeElection) return null;

    return (
      <div className="election-detail">
        <button className="back-button" onClick={handleBackToList}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Elections
        </button>
        
        <div className="election-header">
          <div className="election-header-content">
            <span className={`status-badge ${getStatusBadgeClass(activeElection.status)}`}>
              {activeElection.status.charAt(0).toUpperCase() + activeElection.status.slice(1)}
            </span>
            <h2 className="election-title">{activeElection.title}</h2>
            <p className="election-dates">
              {formatDate(activeElection.startDate)} - {formatDate(activeElection.endDate)}
            </p>
            <p className="election-description">{activeElection.description}</p>
          </div>
          
          {activeElection.status === 'active' && !hasVoted && (
            <button className="vote-button" onClick={handleVoteClick}>
              {t('unityPlus.elections.castVote', 'Cast Your Vote')}
            </button>
          )}
          
          {hasVoted && (
            <div className="voted-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              {t('unityPlus.elections.voted', 'You have voted')}
            </div>
          )}
        </div>
        
        {activeElection.status === 'active' && (
          <div className="election-countdown">
            <div className="countdown-label">Time remaining:</div>
            <div className="countdown-timer">{timeRemaining}</div>
          </div>
        )}
        
        <h3 className="candidates-title">{t('unityPlus.elections.candidates', 'Candidates')}</h3>
        
        <div className="candidates-grid">
          {activeElection.candidates.map(candidate => (
            <div key={candidate.id} className="candidate-card">
              <div className="candidate-image">
                <img src={candidate.imageUrl} alt={candidate.name} />
                <div className="poc-score">
                  <span className="poc-value">{candidate.pocScore}</span>
                  <span className="poc-label">PoC</span>
                </div>
              </div>
              <div className="candidate-info">
                <h4 className="candidate-name">{candidate.name}</h4>
                <p className="candidate-position">{candidate.position}</p>
                <p className="candidate-party">{candidate.party}</p>
                <div className="candidate-expertise">
                  {candidate.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">{skill}</span>
                  ))}
                </div>
                <p className="candidate-platform">{candidate.platform}</p>
                
                {activeElection.status === 'active' && (
                  <div className="candidate-votes">
                    <span className="votes-count">{candidate.votes}</span>
                    <span className="votes-label">votes</span>
                  </div>
                )}
                
                {activeElection.status === 'completed' && activeElection.results && (
                  <div className="candidate-results">
                    <div className="vote-percentage">
                      {activeElection.results.voteDistribution[candidate.id]}%
                    </div>
                    {activeElection.results.winner === candidate.id && (
                      <div className="winner-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Elected
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {activeElection.status === 'completed' && (
          <div className="election-results">
            <h3 className="results-title">{t('unityPlus.elections.results', 'Election Results')}</h3>
            <div className="results-summary">
              <div className="result-stat">
                <span className="stat-value">{activeElection.turnout}%</span>
                <span className="stat-label">Voter Turnout</span>
              </div>
              <div className="result-stat">
                <span className="stat-value">
                  {activeElection.candidates.find(c => c.id === activeElection.results?.winner)?.name}
                </span>
                <span className="stat-label">Winner</span>
              </div>
            </div>
            
            <div className="results-chart">
              {/* Placeholder for a chart visualization */}
              <div className="chart-bars">
                {activeElection.candidates.map(candidate => (
                  <div key={candidate.id} className="chart-bar-container">
                    <div 
                      className={`chart-bar ${activeElection.results?.winner === candidate.id ? 'winner' : ''}`}
                      style={{ 
                        height: `${activeElection.results?.voteDistribution[candidate.id]}%`,
                        maxHeight: '100%'
                      }}
                    ></div>
                    <span className="chart-label">{candidate.name.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderVotingInterface = () => {
    if (!activeElection) return null;

    return (
      <div className="voting-interface">
        <button className="back-button" onClick={handleBackToDetail}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Election Details
        </button>
        
        <div className="voting-header">
          <h2 className="voting-title">{t('unityPlus.elections.castVote', 'Cast Your Vote')}</h2>
          <p className="voting-subtitle">{activeElection.title}</p>
          <div className="voting-countdown">Time remaining: {timeRemaining}</div>
        </div>
        
        <div className="voting-instructions">
          <p>Select one candidate below and confirm your vote. Your vote is secured by blockchain technology and remains anonymous while being verifiable.</p>
          <div className="security-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Secure Blockchain Voting
          </div>
        </div>
        
        {voteSuccess ? (
          <div className="vote-success">
            <div className="success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
            </div>
            <h3 className="success-title">{t('unityPlus.elections.voteSuccess', 'Vote Successfully Cast!')}</h3>
            <p className="success-message">Your vote has been securely recorded on the blockchain. Thank you for participating in Nova Bulgaria's democratic process.</p>
            <div className="transaction-info">
              <p className="transaction-label">Transaction ID:</p>
              <p className="transaction-value">0x7f9e8d7c6b5a4e3d2c1b0a9f8e7d6c5b4a3f2e1d</p>
            </div>
            <button className="view-results-button" onClick={handleBackToDetail}>
              View Current Results
            </button>
          </div>
        ) : (
          <>
            <div className="candidate-selection">
              {activeElection.candidates.map(candidate => (
                <div 
                  key={candidate.id} 
                  className={`candidate-option ${selectedCandidate === candidate.id ? 'selected' : ''}`}
                  onClick={() => handleCandidateSelect(candidate.id)}
                >
                  <div className="candidate-option-image">
                    <img src={candidate.imageUrl} alt={candidate.name} />
                  </div>
                  <div className="candidate-option-info">
                    <h4 className="candidate-option-name">{candidate.name}</h4>
                    <p className="candidate-option-party">{candidate.party}</p>
                    <div className="candidate-option-expertise">
                      {candidate.expertise.slice(0, 2).map((skill, index) => (
                        <span key={index} className="expertise-tag-small">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="candidate-option-select">
                    <div className="select-circle">
                      {selectedCandidate === candidate.id && (
                        <div className="select-inner-circle"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="voting-actions">
              <button 
                className="vote-submit-button" 
                disabled={!selectedCandidate || voteSubmitting}
                onClick={handleVoteSubmit}
              >
                {voteSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    {t('unityPlus.elections.processing', 'Processing...')}
                  </>
                ) : (
                  t('unityPlus.elections.confirmVote', 'Confirm Vote')
                )}
              </button>
              <button className="vote-cancel-button" onClick={handleBackToDetail}>
                {t('unityPlus.elections.cancel', 'Cancel')}
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="elections-container">
      {viewMode === 'list' && renderElectionsList()}
      {viewMode === 'detail' && renderElectionDetail()}
      {viewMode === 'vote' && renderVotingInterface()}
    </div>
  );
};

export default Elections;
