import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './TokenReleaseChart.css';

const TokenReleaseChart: React.FC = () => {
  // Data for the token release schedule over 100 years based on the exact specifications
  const data = [
    { year: 'Year 10', annualRelease: 1, totalSupply: 10, inflationRate: 10 },
    { year: 'Year 20', annualRelease: 2, totalSupply: 30, inflationRate: 6.7 },
    { year: 'Year 30', annualRelease: 3, totalSupply: 60, inflationRate: 5 },
    { year: 'Year 40', annualRelease: 5, totalSupply: 110, inflationRate: 4.5 },
    { year: 'Year 50', annualRelease: 7, totalSupply: 180, inflationRate: 3.9 },
    { year: 'Year 60', annualRelease: 10, totalSupply: 280, inflationRate: 3.6 },
    { year: 'Year 70', annualRelease: 15, totalSupply: 430, inflationRate: 3.5 },
    { year: 'Year 80', annualRelease: 20, totalSupply: 630, inflationRate: 3.2 },
    { year: 'Year 90', annualRelease: 25, totalSupply: 880, inflationRate: 2.8 },
    { year: 'Year 100', annualRelease: 30, totalSupply: 1180, inflationRate: 2.5 },
  ];

  const phases = [
    {
      title: 'Foundation Phase',
      years: '2025-2044',
      rate: '0.1% to 0.2% annual',
      description: 'First Decade: 0.1% annual (1B BGL/year), Second Decade: 0.2% annual (2B BGL/year)'
    },
    {
      title: 'Development Phase',
      years: '2045-2084',
      rate: '0.3% to 1.0% annual',
      description: 'Third Decade: 0.3% (3B BGL/year), Fourth: 0.5% (5B BGL/year), Fifth: 0.7% (7B BGL/year), Sixth: 1.0% (10B BGL/year)'
    },
    {
      title: 'Expansion Phase',
      years: '2085-2114',
      rate: '1.5% to 2.5% annual',
      description: 'Seventh Decade: 1.5% (15B BGL/year), Eighth: 2.0% (20B BGL/year), Ninth: 2.5% (25B BGL/year)'
    },
    {
      title: 'Peak Phase',
      years: '2115-2124',
      rate: '3.0% annual',
      description: 'Final Decade: 3.0% annual (30B BGL/year)'
    }
  ];

  return (
    <div className="token-release-chart-container glassmorphism-dark">
      <h3 className="chart-title">Token Release Schedule</h3>
      
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="year" stroke="rgba(255, 255, 255, 0.7)" />
            <YAxis 
              yAxisId="left" 
              stroke="#00FFAA" 
              label={{ 
                value: 'Annual Release (Billions BGL)', 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: '#00FFAA', fontSize: 12 }
              }} 
            />
            <YAxis 
              yAxisId="middle" 
              orientation="right" 
              stroke="#00CCFF"
              label={{ 
                value: 'Total Supply (Billions BGL)', 
                angle: -90, 
                position: 'insideRight',
                style: { fill: '#00CCFF', fontSize: 12 }
              }} 
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke="#FF00FF"
              label={{ 
                value: 'Inflation Rate (%)', 
                angle: -90, 
                position: 'insideRight',
                style: { fill: '#FF00FF', fontSize: 12 }
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                border: '1px solid #00FFAA',
                borderRadius: '4px'
              }} 
            />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="annualRelease" 
              name="Annual Release (Billions BGL)"
              stroke="#00FFAA" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
            <Line 
              yAxisId="middle"
              type="monotone" 
              dataKey="totalSupply" 
              name="Total Supply in Circulation (Billions BGL)"
              stroke="#00CCFF" 
              strokeWidth={2}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="inflationRate" 
              name="Inflation Rate (%)"
              stroke="#FF00FF" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="phases-grid">
        {phases.map((phase, index) => (
          <div key={index} className="phase-box">
            <h4>{phase.title}</h4>
            <div className="phase-years">{phase.years}: {phase.rate}</div>
            <p>{phase.description}</p>
          </div>
        ))}
      </div>

      <div className="total-supply-box">
        <h4>Total Supply: 1 Trillion BGL (1,000,000,000,000 BGL) released over 100 years</h4>
        <p>This gradual release schedule ensures long-term sustainability and minimizes inflation</p>
      </div>

      <div className="inflation-box">
        <h4>Proof of Contribution Integration</h4>
        <p>The token release model is directly tied to the Proof of Contribution (PoC) system, ensuring that economic rewards are fairly distributed based on real effort and value creation.</p>
      </div>
    </div>
  );
};

export default TokenReleaseChart;
