import React, { useState } from 'react';
import './Sectors.css';
import { useLanguage } from '../../context/LanguageContext';

const Sectors: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('governance');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const { t } = useLanguage();

  // Define all sector categories
  const categories = [
    { id: 'governance', name: t('sectors.categories.governance') },
    { id: 'economy', name: t('sectors.categories.economy') },
    { id: 'society', name: t('sectors.categories.society') },
    { id: 'technology', name: t('sectors.categories.technology') },
    { id: 'environment', name: t('sectors.categories.environment') },
    { id: 'future', name: t('sectors.categories.future') },
  ];

  // Define all sectors with their categories
  const allSectors = [
    // Governance & Political Systems
    { 
      id: 'governance', 
      title: t('sectors.governance.title'), 
      category: 'governance',
      items: [
        t('sectors.governance.item1'),
        t('sectors.governance.item2')
      ]
    },
    { 
      id: 'legal', 
      title: t('sectors.legal.title'), 
      category: 'governance',
      items: [
        t('sectors.legal.item1'),
        t('sectors.legal.item2')
      ]
    },
    { 
      id: 'foreign', 
      title: t('sectors.foreign.title'), 
      category: 'governance',
      items: [
        t('sectors.foreign.item1'),
        t('sectors.foreign.item2')
      ]
    },
    { 
      id: 'immigration', 
      title: t('sectors.immigration.title'), 
      category: 'governance',
      items: [
        t('sectors.immigration.item1'),
        t('sectors.immigration.item2')
      ]
    },
    { 
      id: 'security', 
      title: t('sectors.security.title'), 
      category: 'governance',
      items: [
        t('sectors.security.item1'),
        t('sectors.security.item2')
      ]
    },
    { 
      id: 'taxation', 
      title: t('sectors.taxation.title'), 
      category: 'governance',
      items: [
        t('sectors.taxation.item1'),
        t('sectors.taxation.item2')
      ]
    },
    { 
      id: 'crisis', 
      title: t('sectors.crisis.title'), 
      category: 'governance',
      items: [
        t('sectors.crisis.item1'),
        t('sectors.crisis.item2')
      ]
    },
    { 
      id: 'smart-contracts', 
      title: t('sectors.smart-contracts.title'), 
      category: 'governance',
      items: [
        t('sectors.smart-contracts.item1'),
        t('sectors.smart-contracts.item2')
      ]
    },
    { 
      id: 'meta', 
      title: t('sectors.meta.title'), 
      category: 'governance',
      items: [
        t('sectors.meta.item1'),
        t('sectors.meta.item2')
      ]
    },
    
    // Economy & Financial Systems
    { 
      id: 'economic', 
      title: t('sectors.economic.title'), 
      category: 'economy',
      items: [
        t('sectors.economic.item1'),
        t('sectors.economic.item2')
      ]
    },
    { 
      id: 'employment', 
      title: t('sectors.employment.title'), 
      category: 'economy',
      items: [
        t('sectors.employment.item1'),
        t('sectors.employment.item2')
      ]
    },
    { 
      id: 'social', 
      title: t('sectors.social.title'), 
      category: 'economy',
      items: [
        t('sectors.social.item1'),
        t('sectors.social.item2')
      ]
    },
    { 
      id: 'ubi', 
      title: t('sectors.ubi.title'), 
      category: 'economy',
      items: [
        t('sectors.ubi.item1'),
        t('sectors.ubi.item2')
      ]
    },
    { 
      id: 'businesses', 
      title: t('sectors.businesses.title'), 
      category: 'economy',
      items: [
        t('sectors.businesses.item1'),
        t('sectors.businesses.item2')
      ]
    },
    { 
      id: 'digital-economy', 
      title: t('sectors.digital-economy.title'), 
      category: 'economy',
      items: [
        t('sectors.digital-economy.item1'),
        t('sectors.digital-economy.item2')
      ]
    },
    { 
      id: 'blockchain', 
      title: t('sectors.blockchain.title'), 
      category: 'economy',
      items: [
        t('sectors.blockchain.item1'),
        t('sectors.blockchain.item2')
      ]
    },
    { 
      id: 'circular', 
      title: t('sectors.circular.title'), 
      category: 'economy',
      items: [
        t('sectors.circular.item1'),
        t('sectors.circular.item2')
      ]
    },
    { 
      id: 'currency', 
      title: t('sectors.currency.title'), 
      category: 'economy',
      items: [
        t('sectors.currency.item1'),
        t('sectors.currency.item2')
      ]
    },
    
    // Society & Public Services
    { 
      id: 'education', 
      title: t('sectors.education.title'), 
      category: 'society',
      items: [
        t('sectors.education.item1'),
        t('sectors.education.item2')
      ]
    },
    { 
      id: 'healthcare', 
      title: t('sectors.healthcare.title'), 
      category: 'society',
      items: [
        t('sectors.healthcare.item1'),
        t('sectors.healthcare.item2')
      ]
    },
    { 
      id: 'housing', 
      title: t('sectors.housing.title'), 
      category: 'society',
      items: [
        t('sectors.housing.item1'),
        t('sectors.housing.item2')
      ]
    },
    { 
      id: 'tourism', 
      title: t('sectors.tourism.title'), 
      category: 'society',
      items: [
        t('sectors.tourism.item1'),
        t('sectors.tourism.item2')
      ]
    },
    { 
      id: 'services', 
      title: t('sectors.services.title'), 
      category: 'society',
      items: [
        t('sectors.services.item1'),
        t('sectors.services.item2')
      ]
    },
    { 
      id: 'eco-travel', 
      title: t('sectors.eco-travel.title'), 
      category: 'society',
      items: [
        t('sectors.eco-travel.item1'),
        t('sectors.eco-travel.item2')
      ]
    },
    { 
      id: 'biotech', 
      title: t('sectors.biotech.title'), 
      category: 'society',
      items: [
        t('sectors.biotech.item1'),
        t('sectors.biotech.item2')
      ]
    },
    
    // Technology & Innovation
    { 
      id: 'technology', 
      title: t('sectors.technology.title'), 
      category: 'technology',
      items: [
        t('sectors.technology.item1'),
        t('sectors.technology.item2')
      ]
    },
    { 
      id: 'communication', 
      title: t('sectors.communication.title'), 
      category: 'technology',
      items: [
        t('sectors.communication.item1'),
        t('sectors.communication.item2')
      ]
    },
    { 
      id: 'science', 
      title: t('sectors.science.title'), 
      category: 'technology',
      items: [
        t('sectors.science.item1'),
        t('sectors.science.item2')
      ]
    },
    { 
      id: 'intellectual', 
      title: t('sectors.intellectual.title'), 
      category: 'technology',
      items: [
        t('sectors.intellectual.item1'),
        t('sectors.intellectual.item2')
      ]
    },
    { 
      id: 'cybersecurity', 
      title: t('sectors.cybersecurity.title'), 
      category: 'technology',
      items: [
        t('sectors.cybersecurity.item1'),
        t('sectors.cybersecurity.item2')
      ]
    },
    { 
      id: 'military', 
      title: t('sectors.military.title'), 
      category: 'technology',
      items: [
        t('sectors.military.item1'),
        t('sectors.military.item2')
      ]
    },
    { 
      id: 'robotics', 
      title: t('sectors.robotics.title'), 
      category: 'technology',
      items: [
        t('sectors.robotics.item1'),
        t('sectors.robotics.item2')
      ]
    },
    { 
      id: 'innovation', 
      title: t('sectors.innovation.title'), 
      category: 'technology',
      items: [
        t('sectors.innovation.item1'),
        t('sectors.innovation.item2')
      ]
    },
    
    // Environment & Infrastructure
    { 
      id: 'environmental', 
      title: t('sectors.environmental.title'), 
      category: 'environment',
      items: [
        t('sectors.environmental.item1'),
        t('sectors.environmental.item2')
      ]
    },
    { 
      id: 'infrastructure', 
      title: t('sectors.infrastructure.title'), 
      category: 'environment',
      items: [
        t('sectors.infrastructure.item1'),
        t('sectors.infrastructure.item2')
      ]
    },
    { 
      id: 'energy', 
      title: t('sectors.energy.title'), 
      category: 'environment',
      items: [
        t('sectors.energy.item1'),
        t('sectors.energy.item2')
      ]
    },
    { 
      id: 'agriculture', 
      title: t('sectors.agriculture.title'), 
      category: 'environment',
      items: [
        t('sectors.agriculture.item1'),
        t('sectors.agriculture.item2')
      ]
    },
    { 
      id: 'transportation', 
      title: t('sectors.transportation.title'), 
      category: 'environment',
      items: [
        t('sectors.transportation.item1'),
        t('sectors.transportation.item2')
      ]
    },
    { 
      id: 'water', 
      title: t('sectors.water.title'), 
      category: 'environment',
      items: [
        t('sectors.water.item1'),
        t('sectors.water.item2')
      ]
    },
    { 
      id: 'urban', 
      title: t('sectors.urban.title'), 
      category: 'environment',
      items: [
        t('sectors.urban.item1'),
        t('sectors.urban.item2')
      ]
    },
    { 
      id: 'climate', 
      title: t('sectors.climate.title'), 
      category: 'environment',
      items: [
        t('sectors.climate.item1'),
        t('sectors.climate.item2')
      ]
    },
    
    // Future Technologies
    { 
      id: 'space', 
      title: t('sectors.space.title'), 
      category: 'future',
      items: [
        t('sectors.space.item1'),
        t('sectors.space.item2')
      ]
    },
    { 
      id: 'agriculture-tech', 
      title: t('sectors.agriculture-tech.title'), 
      category: 'future',
      items: [
        t('sectors.agriculture-tech.item1'),
        t('sectors.agriculture-tech.item2')
      ]
    },
    { 
      id: 'grid-tech', 
      title: t('sectors.grid-tech.title'), 
      category: 'future',
      items: [
        t('sectors.grid-tech.item1'),
        t('sectors.grid-tech.item2')
      ]
    },
    { 
      id: 'vehicles', 
      title: t('sectors.vehicles.title'), 
      category: 'future',
      items: [
        t('sectors.vehicles.item1'),
        t('sectors.vehicles.item2')
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
