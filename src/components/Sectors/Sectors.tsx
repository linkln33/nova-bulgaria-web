import React, { useState } from 'react';
import './Sectors.css';

const Sectors: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('governance');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Define all sector categories
  const categories = [
    { id: 'governance', name: 'Governance & Politics' },
    { id: 'economy', name: 'Economy & Finance' },
    { id: 'society', name: 'Society & Welfare' },
    { id: 'technology', name: 'Technology & Innovation' },
    { id: 'environment', name: 'Environment & Infrastructure' },
    { id: 'future', name: 'Future Technologies' },
  ];

  // Define all sectors with their categories
  const allSectors = [
    // Governance & Political Systems
    { 
      id: 'governance', 
      title: 'Governance & Political System', 
      category: 'governance',
      items: [
        'Decentralized Autonomous Governance (DAG): Voting, administration, and policy-making are executed on-chain through quadratic voting and proof-of-contribution mechanisms.',
        'Citizen-Proposed Laws: Smart contracts execute laws instantly once approved.'
      ]
    },
    { 
      id: 'legal', 
      title: 'Legal & Judicial System', 
      category: 'governance',
      items: [
        'Blockchain Courts: Disputes are resolved via smart contract arbitration with elected community judges.',
        'Proof-of-Law Enforcement: Law enforcement actions are logged on-chain for full transparency.'
      ]
    },
    { 
      id: 'foreign', 
      title: 'Foreign Relations & Diplomatic System', 
      category: 'governance',
      items: [
        'Blockchain-Based Trade Agreements: Smart contracts govern international partnerships and commerce.',
        'NFT Passports & Visas: Soulbound NFT visas replace paper-based systems.'
      ]
    },
    { 
      id: 'immigration', 
      title: 'Immigration & Citizenship System', 
      category: 'governance',
      items: [
        'NFT-Based Citizenship IDs: Citizenship is granted via Proof-of-Contribution, stored on soulbound NFTs.',
        'Blockchain-Verified Residency: Residency permits and work visas function as programmable NFTs.'
      ]
    },
    { 
      id: 'security', 
      title: 'Law Enforcement & Internal Security System', 
      category: 'governance',
      items: [
        'Decentralized Crime Reporting: A blockchain-based whistleblower system protects citizens.',
        'Smart Contract-Based Policing: Officers are funded based on verifiable task completion.'
      ]
    },
    { 
      id: 'taxation', 
      title: 'Taxation & Revenue Collection System', 
      category: 'governance',
      items: [
        'On-Chain Taxation: Citizens pay taxes automatically via programmable smart contracts.',
        'Transparent Public Budgets: Government spending is fully traceable via open-source blockchain ledgers.'
      ]
    },
    { 
      id: 'crisis', 
      title: 'Crisis Management & Emergency Response System', 
      category: 'governance',
      items: [
        'Blockchain Emergency Fund: Automated disaster relief allocates BGL instantly to affected areas.',
        'Decentralized First Responders: DAOs coordinate volunteer & paramedic response efforts.'
      ]
    },
    { 
      id: 'smart-contracts', 
      title: 'Decentralized Law & Smart Contracts', 
      category: 'governance',
      items: [
        'Automated Legal Frameworks: Smart contracts enforce agreements without intermediaries.',
        'Decentralized Arbitration: Disputes are resolved through community-elected judges and transparent protocols.'
      ]
    },
    { 
      id: 'meta', 
      title: 'Meta-Governance & AI Policy', 
      category: 'governance',
      items: [
        'AI-Assisted Decision Making: Artificial intelligence helps optimize governance decisions.',
        'Decentralized Policy Development: Policies evolve through community input and transparent processes.'
      ]
    },
    
    // Economy & Financial Systems
    { 
      id: 'economic', 
      title: 'Economic & Financial System', 
      category: 'economy',
      items: [
        'Decentralized Treasury: All funds are managed via a DAO treasury, with budgets allocated by citizen votes.',
        'On-Chain Banking: DeFi lending & stablecoins (BGL-S) ensure economic stability.'
      ]
    },
    { 
      id: 'employment', 
      title: 'Employment & Labor System', 
      category: 'economy',
      items: [
        'On-Chain Skill Verification: Workers have NFT-based resumes, proving skills & experience.',
        'Gig Economy on Blockchain: Smart contracts ensure fair pay & job security in a decentralized job market.'
      ]
    },
    { 
      id: 'social', 
      title: 'Social Welfare System', 
      category: 'economy',
      items: [
        'Universal Basic Income (UBI): Distributed based on proof-of-contribution and staking rewards.',
        'Decentralized Insurance: A DeFi-based social security system where citizens stake for pensions and health coverage.'
      ]
    },
    { 
      id: 'ubi', 
      title: 'Universal Basic Income (UBI) Experiments', 
      category: 'economy',
      items: [
        'Contribution-Based UBI: Citizens receive income based on verified contributions to society.',
        'Staking Rewards Distribution: Passive income generated through participation in network security.'
      ]
    },
    { 
      id: 'businesses', 
      title: 'Citizen-Owned Businesses & Co-Ops', 
      category: 'economy',
      items: [
        'Decentralized Autonomous Businesses: Companies run through smart contracts and community governance.',
        'Cooperative Ownership Models: Shared ownership structures with transparent profit distribution.'
      ]
    },
    { 
      id: 'digital-economy', 
      title: 'Future of Work & Digital Economy', 
      category: 'economy',
      items: [
        'Decentralized Work Platforms: Job marketplaces without intermediaries taking fees.',
        'Skill-Based Value Exchange: Direct compensation for skills and contributions without corporate gatekeepers.'
      ]
    },
    { 
      id: 'blockchain', 
      title: 'Blockchain & Web3 Development', 
      category: 'economy',
      items: [
        'Open Source Infrastructure: Community-developed blockchain tools and applications.',
        'Interoperable Systems: Cross-chain communication using Cosmos IBC protocol.'
      ]
    },
    { 
      id: 'circular', 
      title: 'Circular Economy & Zero-Waste', 
      category: 'economy',
      items: [
        'Tokenized Recycling Incentives: Rewards for verified waste reduction and recycling.',
        'Resource Sharing Networks: Blockchain-based platforms for sharing underutilized resources.'
      ]
    },
    
    // Society & Public Services
    { 
      id: 'education', 
      title: 'Education System', 
      category: 'society',
      items: [
        'NFT-Based Academic Records: Degrees & certifications are issued as soulbound NFTs.',
        'Learn-to-Earn: Students earn BGL tokens for completing courses and contributing research.'
      ]
    },
    { 
      id: 'healthcare', 
      title: 'Healthcare System', 
      category: 'society',
      items: [
        'On-Chain Medical Records: Patients control their EHRs (Electronic Health Records) via blockchain.',
        'Crowdfunded Medical Research: Staking pools fund biotech, longevity, and disease research.'
      ]
    },
    { 
      id: 'housing', 
      title: 'Housing & Urban Development System', 
      category: 'society',
      items: [
        'Blockchain Land Registry: Property ownership is recorded on-chain as NFTs, preventing fraud.',
        'Crowdfunded Housing Projects: Citizens fund urban projects via DAO-governed staking pools.'
      ]
    },
    { 
      id: 'tourism', 
      title: 'Tourism & Cultural Heritage System', 
      category: 'society',
      items: [
        'NFT-Based Tourist Passes: Visitors stake BGL to access locations & cultural events.',
        'Metaverse Tourism: Virtual reality experiences of NOVA BULGARIA landmarks are tokenized.'
      ]
    },
    { 
      id: 'services', 
      title: 'Decentralized Public Services', 
      category: 'society',
      items: [
        'Tokenized Service Access: Citizens use tokens to access and rate public services.',
        'Performance-Based Funding: Services receive funding based on citizen satisfaction and outcomes.'
      ]
    },
    { 
      id: 'eco-travel', 
      title: 'Sustainable Tourism & Eco-Travel', 
      category: 'society',
      items: [
        'Carbon-Neutral Travel Verification: Blockchain verification of sustainable travel practices.',
        'Community-Owned Tourism Assets: Local communities manage and benefit from tourism directly.'
      ]
    },
    { 
      id: 'biotech', 
      title: 'Biotech & Human Longevity Research', 
      category: 'society',
      items: [
        'Decentralized Biotech Funding: Community-directed research priorities and funding.',
        'Open Source Medical Innovations: Shared research data and collaborative development.'
      ]
    },
    
    // Technology & Innovation
    { 
      id: 'technology', 
      title: 'Technology & Digital Governance System', 
      category: 'technology',
      items: [
        'AI-Assisted Governance: AI models help predict and optimize laws & policies.',
        'Blockchain-Based ID & KYC: A decentralized digital ID system ensures security without surveillance.'
      ]
    },
    { 
      id: 'communication', 
      title: 'Communication & Information System', 
      category: 'technology',
      items: [
        'Decentralized Internet (DePIN): Citizens run P2P communication networks to ensure uncensored access.',
        'On-Chain Journalism: Articles & news are time-stamped on blockchain to prevent misinformation.'
      ]
    },
    { 
      id: 'science', 
      title: 'Science, Research & Innovation System', 
      category: 'technology',
      items: [
        'Decentralized Research DAO: Scientists receive funding via smart contract grants.',
        'On-Chain Patent System: Intellectual property is registered on blockchain, preventing theft.'
      ]
    },
    { 
      id: 'intellectual', 
      title: 'Intellectual Property & Creative Industry System', 
      category: 'technology',
      items: [
        'NFT-Based Copyrights: Artists & inventors store IP rights on-chain to prevent plagiarism.',
        'Decentralized Content Monetization: Creators receive direct payments via smart contract royalties.'
      ]
    },
    { 
      id: 'cybersecurity', 
      title: 'Cybersecurity & Data Sovereignty', 
      category: 'technology',
      items: [
        'Decentralized Security Networks: Distributed systems for threat detection and prevention.',
        'Sovereign Data Control: Citizens maintain ownership and control of their personal data.'
      ]
    },
    { 
      id: 'military', 
      title: 'Military & Defense System', 
      category: 'technology',
      items: [
        'Decentralized Cybersecurity: AI-powered cyber-defense nodes protect against attacks.',
        'Bounty-Based Security: Community-driven bounties fund real-time defense and intelligence efforts.'
      ]
    },
    { 
      id: 'robotics', 
      title: 'Autonomous Systems & Robotics', 
      category: 'technology',
      items: [
        'Decentralized Robotics Networks: Autonomous systems governed by community protocols.',
        'Shared Robotics Resources: Community access to advanced robotics and automation tools.'
      ]
    },
    { 
      id: 'innovation', 
      title: 'Public-Private Sector Innovation', 
      category: 'technology',
      items: [
        'Collaborative Innovation Platforms: Public and private entities collaborate on blockchain.',
        'Transparent Partnership Agreements: Smart contracts define and enforce collaboration terms.'
      ]
    },
    
    // Environment & Infrastructure
    { 
      id: 'environmental', 
      title: 'Environmental & Resource Management System', 
      category: 'environment',
      items: [
        'Carbon Credit Tokenization: Companies & individuals buy/sell blockchain-based carbon credits.',
        'Proof-of-Environmental Impact: Citizens earn rewards for verified eco-friendly actions.'
      ]
    },
    { 
      id: 'infrastructure', 
      title: 'Infrastructure & Transportation System', 
      category: 'environment',
      items: [
        'Decentralized Public Works: Citizens stake BGL tokens to prioritize projects (roads, bridges, public transport).',
        'Smart City Integration: IoT & blockchain optimize energy efficiency and transport networks.'
      ]
    },
    { 
      id: 'energy', 
      title: 'Energy & Utilities System', 
      category: 'environment',
      items: [
        'Decentralized Energy Market: Citizens can stake or trade solar & wind energy credits.',
        'Smart Grid Integration: IoT devices autonomously balance energy distribution via Cosmos chains.'
      ]
    },
    { 
      id: 'agriculture', 
      title: 'Agricultural & Food System', 
      category: 'environment',
      items: [
        'Blockchain Food Tracking: Supply chains are verified on-chain to ensure food safety & quality.',
        'Staking-Based Farm Subsidies: Farmers stake BGL tokens to receive automated funding based on need.'
      ]
    },
    { 
      id: 'transportation', 
      title: 'Transportation & Logistics System', 
      category: 'environment',
      items: [
        'Blockchain Supply Chain Tracking: All goods are monitored via Cosmos interchain transactions.',
        'Tokenized Ride-Sharing & Public Transit: Citizens earn & use BGL tokens for transportation incentives.'
      ]
    },
    { 
      id: 'water', 
      title: 'Water & Ocean Conservation', 
      category: 'environment',
      items: [
        'Tokenized Water Rights: Transparent and fair distribution of water resources.',
        'Ocean Health Monitoring: Decentralized networks monitor and protect marine ecosystems.'
      ]
    },
    { 
      id: 'urban', 
      title: 'Urban Green Spaces & Smart Cities', 
      category: 'environment',
      items: [
        'Community-Managed Green Spaces: Local governance of urban parks and green areas.',
        'Smart City Infrastructure: IoT and blockchain integration for efficient urban management.'
      ]
    },
    { 
      id: 'climate', 
      title: 'Resilience & Climate Adaptation', 
      category: 'environment',
      items: [
        'Climate Resilience DAOs: Community organizations focused on adaptation strategies.',
        'Tokenized Climate Solutions: Funding mechanisms for innovative climate adaptation projects.'
      ]
    },
    
    // Future Technologies
    { 
      id: 'space', 
      title: 'Space Exploration & Aerospace', 
      category: 'future',
      items: [
        'Decentralized Space Missions: Community-funded and governed space exploration initiatives.',
        'Tokenized Space Resources: Fair distribution of benefits from space resource utilization.'
      ]
    },
    { 
      id: 'agriculture-tech', 
      title: 'Smart Agriculture & Food Tech', 
      category: 'future',
      items: [
        'Precision Agriculture Networks: IoT and blockchain systems for optimal farming.',
        'Food Security DAOs: Community organizations ensuring equitable food distribution.'
      ]
    },
    { 
      id: 'grid-tech', 
      title: 'Advanced Energy Storage & Grid Tech', 
      category: 'future',
      items: [
        'Decentralized Energy Storage: Community-owned battery networks and energy reserves.',
        'Peer-to-Peer Energy Trading: Direct energy exchange between producers and consumers.'
      ]
    },
    { 
      id: 'vehicles', 
      title: 'Autonomous Vehicles & Drones', 
      category: 'future',
      items: [
        'Decentralized Transportation Networks: Community-governed autonomous vehicle fleets.',
        'Drone Delivery Systems: Blockchain-coordinated logistics and delivery services.'
      ]
    },
  ];

  // Filter sectors by active category
  const filteredSectors = allSectors.filter(sector => sector.category === activeCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredSectors.length / itemsPerPage);
  const currentSectors = filteredSectors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="sectors-container">
      {/* Removing the duplicate title section */}
      
      {/* Category Tabs */}
      <div className="sectors-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`sectors-tab-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Sectors Grid */}
      <div className="sectors-content">
        <div className="sectors-grid">
          {currentSectors.map(sector => (
            <div key={sector.id} className={`sector-card ${sector.id}`}>
              <h3>{sector.title}</h3>
              <ul>
                {sector.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="sectors-pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-button ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sectors;
