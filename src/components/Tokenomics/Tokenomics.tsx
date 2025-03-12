import React from 'react';
import './Tokenomics.css';
import '../../styles/glassmorphism.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface DistributionData {
  name: string;
  value: number;
  color: string;
}

const Tokenomics: React.FC = () => {
  // Token distribution data based on the image
  const distributionData: DistributionData[] = [
    { name: 'Core Sectors', value: 50, color: '#00FFAA' },
    { name: 'Future Sectors', value: 20, color: '#33cc33' },
    { name: 'Reserves', value: 20, color: '#FF00FF' },
    { name: 'Community', value: 10, color: '#CCFF00' }
  ];

  return (
    <div className="tokenomics-container glassmorphism">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">Tokenomics 100-Year Model</h2>
        <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Token Distribution */}
        <div className="glassmorphism-dark p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">Token Distribution</h3>
          
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
              <h4 className="text-[#00ffaa] text-lg font-bold mb-2">Initial Supply</h4>
              <p className="text-white text-xl">1 Trillion BGL</p>
            </div>
            <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-[#00ffaa30]">
              <h4 className="text-[#00ffaa] text-lg font-bold mb-2">Reserve Fund</h4>
              <p className="text-white text-xl">200B BGL (20%)</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Fund Allocation */}
        <div className="glassmorphism-dark p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">Fund Allocation</h3>
          
          <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-[#00ffaa30] text-gray-200">
            <p className="mb-4">
              Nova Bulgaria starts with the release of 1 million BGL in the first year, gradually 
              increasing over the next 100 years to ensure controlled growth. The total supply of 
              1 trillion BGL is securely held in a smart contract and released in small portions 
              based on economic demand and community participation.
            </p>
            <p className="mb-4">
              Instead of traditional mining or pre-allocated distribution, funds are unlocked through a 'Proof of 
              Contribution (PoC)' system, meaning individuals receive BGL based on their 
              contributions to the nation's development—such as building projects, innovation, 
              governance, or social services.
            </p>
            <p className="mb-4">
              As the economy grows and more people participate, the release rate gradually increases, ensuring there is always enough 
              supply to support expansion while preventing inflation. This mechanism creates a 
              self-sustaining economic model, where currency distribution is tied to real-world 
              value and progress rather than speculation or centralized control.
            </p>
            <p>
              Over time, this ensures fairness, long-term stability, and an economy that adapts naturally to the 
              needs of its citizens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
