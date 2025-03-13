import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './ProposalFeed.css';

interface ProposalProps {
  id: string;
  title: string;
  description: string;
  sector: string;
  author: {
    name: string;
    nftId: string;
    pocScore: number;
  };
  deadline: string;
  votes: {
    yes: number;
    no: number;
    weightedYes: number;
    weightedNo: number;
  };
  status: 'active' | 'passed' | 'rejected';
}

interface UserProfileProps {
  followedSectors: string[];
  pocScore: number;
  nftId: string;
  [key: string]: any;
}

interface ProposalFeedProps {
  userProfile: UserProfileProps;
}

const ProposalFeed: React.FC<ProposalFeedProps> = ({ userProfile }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProposal, setExpandedProposal] = useState<string | null>(null);
  const [userVotes, setUserVotes] = useState<Record<string, 'yes' | 'no' | null>>({});

  // Mock proposals data
  const proposals: ProposalProps[] = [
    {
      id: 'prop-1',
      title: t('unityPlus.proposals.prop1.title', 'Digital Identity Verification System'),
      description: t('unityPlus.proposals.prop1.description', 'Implement a blockchain-based digital identity verification system for all citizens to streamline government services and enhance security.'),
      sector: 'Technology',
      author: {
        name: 'Maria Ivanova',
        nftId: 'BG-NFT-0089',
        pocScore: 92
      },
      deadline: '2025-04-15',
      votes: {
        yes: 156,
        no: 42,
        weightedYes: 189.5,
        weightedNo: 38.2
      },
      status: 'active'
    },
    {
      id: 'prop-2',
      title: t('unityPlus.proposals.prop2.title', 'Healthcare Data Sharing Framework'),
      description: t('unityPlus.proposals.prop2.description', 'Create a secure framework for healthcare data sharing between medical institutions while maintaining patient privacy and data ownership.'),
      sector: 'Healthcare',
      author: {
        name: 'Dr. Stefan Petrov',
        nftId: 'BG-NFT-0412',
        pocScore: 88
      },
      deadline: '2025-04-10',
      votes: {
        yes: 203,
        no: 18,
        weightedYes: 245.8,
        weightedNo: 20.5
      },
      status: 'active'
    },
    {
      id: 'prop-3',
      title: t('unityPlus.proposals.prop3.title', 'Economic Stimulus Package for Small Businesses'),
      description: t('unityPlus.proposals.prop3.description', 'Allocate 5% of the treasury to provide grants and low-interest loans to small businesses affected by recent economic challenges.'),
      sector: 'Economy',
      author: {
        name: 'Nikolay Dimitrov',
        nftId: 'BG-NFT-0178',
        pocScore: 85
      },
      deadline: '2025-03-30',
      votes: {
        yes: 312,
        no: 98,
        weightedYes: 356.7,
        weightedNo: 112.3
      },
      status: 'active'
    },
    {
      id: 'prop-4',
      title: t('unityPlus.proposals.prop4.title', 'Renewable Energy Initiative'),
      description: t('unityPlus.proposals.prop4.description', 'Invest in solar and wind energy infrastructure to achieve 50% renewable energy usage within the next 5 years.'),
      sector: 'Environment',
      author: {
        name: 'Elena Georgieva',
        nftId: 'BG-NFT-0256',
        pocScore: 79
      },
      deadline: '2025-04-20',
      votes: {
        yes: 278,
        no: 65,
        weightedYes: 310.2,
        weightedNo: 72.8
      },
      status: 'active'
    }
  ];

  // Filter proposals based on active filter
  const filteredProposals = proposals.filter(proposal => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'following') return userProfile.followedSectors.includes(proposal.sector);
    if (activeFilter === 'voted') return userVotes[proposal.id] !== undefined;
    return true;
  });

  // Calculate vote percentage
  const calculatePercentage = (proposal: ProposalProps) => {
    const total = proposal.votes.weightedYes + proposal.votes.weightedNo;
    return total > 0 ? (proposal.votes.weightedYes / total) * 100 : 50;
  };

  // Handle voting
  const handleVote = (proposalId: string, vote: 'yes' | 'no') => {
    // In a real app, this would interact with a smart contract
    setUserVotes({
      ...userVotes,
      [proposalId]: vote
    });
    
    // Show success message
    alert(t('unityPlus.proposals.voteSuccess', 'Your vote has been recorded!'));
  };

  return (
    <div className="proposal-feed">
      <div className="feed-header">
        <h2>{t('unityPlus.feed.title', 'Governance Feed')}</h2>
        
        <div className="feed-filters">
          <button 
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {t('unityPlus.feed.filters.all', 'All Proposals')}
          </button>
          <button 
            className={`filter-button ${activeFilter === 'following' ? 'active' : ''}`}
            onClick={() => setActiveFilter('following')}
          >
            {t('unityPlus.feed.filters.following', 'Following')}
          </button>
          <button 
            className={`filter-button ${activeFilter === 'voted' ? 'active' : ''}`}
            onClick={() => setActiveFilter('voted')}
          >
            {t('unityPlus.feed.filters.voted', 'Voted')}
          </button>
        </div>
      </div>

      <div className="proposals-list">
        {filteredProposals.length > 0 ? (
          filteredProposals.map(proposal => (
            <div key={proposal.id} className="proposal-card">
              <div className="proposal-header">
                <div className="proposal-sector">{proposal.sector}</div>
                <div className="proposal-deadline">
                  {t('unityPlus.proposals.deadline', 'Deadline')}: {proposal.deadline}
                </div>
              </div>
              
              <h3 className="proposal-title">{proposal.title}</h3>
              
              <p className="proposal-description">
                {expandedProposal === proposal.id 
                  ? proposal.description 
                  : `${proposal.description.substring(0, 120)}...`}
                <button 
                  className="read-more"
                  onClick={() => setExpandedProposal(expandedProposal === proposal.id ? null : proposal.id)}
                >
                  {expandedProposal === proposal.id 
                    ? t('unityPlus.proposals.readLess', 'Read Less') 
                    : t('unityPlus.proposals.readMore', 'Read More')}
                </button>
              </p>
              
              <div className="proposal-author">
                {t('unityPlus.proposals.proposedBy', 'Proposed by')}: {proposal.author.name} 
                <span className="author-poc">
                  (PoC: {proposal.author.pocScore})
                </span>
              </div>
              
              <div className="voting-progress">
                <div 
                  className="progress-bar"
                  style={{ width: `${calculatePercentage(proposal)}%` }}
                ></div>
              </div>
              
              <div className="voting-stats">
                <div className="yes-stats">
                  {t('unityPlus.proposals.yes', 'Yes')}: {proposal.votes.yes} 
                  <span className="weighted-votes">
                    ({proposal.votes.weightedYes.toFixed(1)} {t('unityPlus.proposals.weighted', 'weighted')})
                  </span>
                </div>
                <div className="no-stats">
                  {t('unityPlus.proposals.no', 'No')}: {proposal.votes.no} 
                  <span className="weighted-votes">
                    ({proposal.votes.weightedNo.toFixed(1)} {t('unityPlus.proposals.weighted', 'weighted')})
                  </span>
                </div>
              </div>
              
              {!userVotes[proposal.id] ? (
                <div className="voting-actions">
                  <button 
                    className="vote-button vote-yes"
                    onClick={() => handleVote(proposal.id, 'yes')}
                  >
                    {t('unityPlus.proposals.voteYes', 'Vote Yes')}
                  </button>
                  <button 
                    className="vote-button vote-no"
                    onClick={() => handleVote(proposal.id, 'no')}
                  >
                    {t('unityPlus.proposals.voteNo', 'Vote No')}
                  </button>
                </div>
              ) : (
                <div className="user-vote">
                  {t('unityPlus.proposals.youVoted', 'You voted')}: 
                  <span className={`vote-${userVotes[proposal.id]}`}>
                    {userVotes[proposal.id] === 'yes' 
                      ? t('unityPlus.proposals.yes', 'Yes') 
                      : t('unityPlus.proposals.no', 'No')}
                  </span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-proposals">
            <p>{t('unityPlus.feed.noProposals', 'No proposals match your current filter.')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalFeed;
