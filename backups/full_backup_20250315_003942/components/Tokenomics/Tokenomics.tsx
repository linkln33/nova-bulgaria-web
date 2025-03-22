import React from 'react';
import './Tokenomics.css';
import '../../styles/glassmorphism.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useLanguage } from '../../context/LanguageContext';

interface DistributionData {
  name: string;
  value: number;
  color: string;
}

const Tokenomics: React.FC = () => {
  const { t } = useLanguage();
  
  // Token distribution data based on the image
  const distributionData: DistributionData[] = [
    { name: t('tokenomics.distribution.coreSectors'), value: 50, color: '#00FFAA' },
    { name: t('tokenomics.distribution.futureSectors'), value: 20, color: '#33cc33' },
    { name: t('tokenomics.distribution.reserves'), value: 20, color: '#FF00FF' },
    { name: t('tokenomics.distribution.community'), value: 10, color: '#CCFF00' }
  ];

  return (
    <div className="tokenomics-container glassmorphism">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Token Distribution */}
        <div className="glassmorphism-dark p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">{t('tokenomics.distribution.title')}</h3>
          
          <div className="flex justify-center mb-8" style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  label={({ name, percent }: { name: string; percent: number }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  labelLine={false}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-[#00ffaa30]">
              <h4 className="text-[#00ffaa] text-lg font-bold mb-2">{t('tokenomics.initialSupply.title')}</h4>
              <p className="text-white text-xl">{t('tokenomics.initialSupply.value')}</p>
            </div>
            <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-[#00ffaa30]">
              <h4 className="text-[#00ffaa] text-lg font-bold mb-2">{t('tokenomics.reserveFund.title')}</h4>
              <p className="text-white text-xl">{t('tokenomics.reserveFund.value')}</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Fund Allocation */}
        <div className="glassmorphism-dark p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">{t('tokenomics.fundAllocation.title')}</h3>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-[#00ffaa30] text-gray-200">
            <p className="mb-4">
              {t('tokenomics.fundAllocation.paragraph1')}
            </p>
            <p className="mb-4">
              {t('tokenomics.fundAllocation.paragraph2')}
            </p>
            <p className="mb-4">
              {t('tokenomics.fundAllocation.paragraph3')}
            </p>
            <p>
              {t('tokenomics.fundAllocation.paragraph4')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
