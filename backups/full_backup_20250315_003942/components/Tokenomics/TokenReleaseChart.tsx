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
import { useLanguage } from '../../context/LanguageContext';

const TokenReleaseChart: React.FC = () => {
  const { t } = useLanguage();
  
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
      title: t('tokenomics.phases.foundation.title'),
      years: t('tokenomics.phases.foundation.years'),
      rate: t('tokenomics.phases.foundation.rate'),
      description: t('tokenomics.phases.foundation.description')
    },
    {
      title: t('tokenomics.phases.development.title'),
      years: t('tokenomics.phases.development.years'),
      rate: t('tokenomics.phases.development.rate'),
      description: t('tokenomics.phases.development.description')
    },
    {
      title: t('tokenomics.phases.expansion.title'),
      years: t('tokenomics.phases.expansion.years'),
      rate: t('tokenomics.phases.expansion.rate'),
      description: t('tokenomics.phases.expansion.description')
    },
    {
      title: t('tokenomics.phases.peak.title'),
      years: t('tokenomics.phases.peak.years'),
      rate: t('tokenomics.phases.peak.rate'),
      description: t('tokenomics.phases.peak.description')
    }
  ];

  return (
    <div className="token-release-chart-container glassmorphism-dark">
      <h3 className="chart-title">{t('tokenomics.releaseSchedule.title')}</h3>
      
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
                value: t('tokenomics.releaseSchedule.annualRelease'), 
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
                value: t('tokenomics.releaseSchedule.totalSupply'), 
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
                value: t('tokenomics.releaseSchedule.inflationRate'), 
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
              name={t('tokenomics.releaseSchedule.annualReleaseLegend')}
              stroke="#00FFAA" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
            <Line 
              yAxisId="middle"
              type="monotone" 
              dataKey="totalSupply" 
              name={t('tokenomics.releaseSchedule.totalSupplyLegend')}
              stroke="#00CCFF" 
              strokeWidth={2}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="inflationRate" 
              name={t('tokenomics.releaseSchedule.inflationRateLegend')}
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
        <h4>{t('tokenomics.releaseSchedule.totalSupplyBox')}</h4>
        <p>{t('tokenomics.releaseSchedule.totalSupplyDescription')}</p>
      </div>

      <div className="inflation-box">
        <h4>{t('tokenomics.releaseSchedule.pocTitle')}</h4>
        <p>{t('tokenomics.releaseSchedule.pocDescription')}</p>
      </div>
    </div>
  );
};

export default TokenReleaseChart;
