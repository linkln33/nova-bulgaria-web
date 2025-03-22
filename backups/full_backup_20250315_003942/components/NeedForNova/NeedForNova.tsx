import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './NeedForNova.css';
import { FaExclamationTriangle, FaTree, FaUsers, FaLightbulb, FaChartLine, FaCubes, FaMoneyBillWave, FaRocket, FaLink } from 'react-icons/fa';

const NeedForNova: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('political');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'political':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.political.title')}</h2>
            
            <div className="content-box main-box">
              <p>{t('need.political.paragraph1')}</p>
              <br />
              <p>{t('need.political.paragraph2')}</p>
            </div>
            
            <div className="content-box highlight-box">
              <h3 className="highlight-title">{t('need.political.collapse.title')}</h3>
              <p>{t('need.political.collapse.text')}</p>
            </div>
            
            <div className="content-stats">
              <div className="stat-item">
                <span className="stat-value">-2.3M</span>
                <span className="stat-label">{t('need.political.stat1')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">23.8%</span>
                <span className="stat-label">{t('need.political.stat2')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">#1</span>
                <span className="stat-label">{t('need.political.stat3')}</span>
              </div>
            </div>
          </div>
        );
      
      case 'environmental':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.environmental.title')}</h2>
            
            <div className="content-box main-box">
              <p>{t('need.environmental.paragraph1')}</p>
              <br />
              <p>{t('need.environmental.paragraph2')}</p>
            </div>
            
            <div className="content-box highlight-box">
              <h3 className="highlight-title">{t('need.environmental.consequences.title')}</h3>
              <p>{t('need.environmental.consequences.text')}</p>
            </div>
            
            <div className="content-stats">
              <div className="stat-item">
                <span className="stat-value">38%</span>
                <span className="stat-label">{t('need.environmental.stat1')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">320%</span>
                <span className="stat-label">{t('need.environmental.stat2')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">42%</span>
                <span className="stat-label">{t('need.environmental.stat3')}</span>
              </div>
            </div>
          </div>
        );
      
      case 'youth':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.youth.title')}</h2>
            
            <div className="content-box main-box">
              <p>{t('need.youth.paragraph1')}</p>
              <br />
              <p>{t('need.youth.paragraph2')}</p>
            </div>
            
            <div className="content-box highlight-box">
              <h3 className="highlight-title">{t('need.youth.demographic.title')}</h3>
              <p>{t('need.youth.demographic.text')}</p>
            </div>
            
            <div className="content-stats">
              <div className="stat-item">
                <span className="stat-value">1.5M+</span>
                <span className="stat-label">{t('need.youth.stat1')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">-30%</span>
                <span className="stat-label">{t('need.youth.stat2')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2100</span>
                <span className="stat-label">{t('need.youth.stat3')}</span>
              </div>
            </div>
          </div>
        );
      
      case 'solution':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.solution.title')}</h2>
            
            <div className="content-box main-box">
              <p>{t('need.solution.paragraph1')}</p>
              <br />
              <p>{t('need.solution.paragraph2')}</p>
            </div>
            
            <div className="solution-elements">
              <h3 className="elements-title">{t('need.solution.elements.title')}</h3>
              <div className="elements-grid">
                <div className="element-item">
                  <div className="element-icon">🆔</div>
                  <h4 className="element-title">{t('need.solution.elements.item1.title')}</h4>
                  <p className="element-desc">{t('need.solution.elements.item1.desc')}</p>
                </div>
                <div className="element-item">
                  <div className="element-icon">🏛️</div>
                  <h4 className="element-title">{t('need.solution.elements.item2.title')}</h4>
                  <p className="element-desc">{t('need.solution.elements.item2.desc')}</p>
                </div>
                <div className="element-item">
                  <div className="element-icon">💰</div>
                  <h4 className="element-title">{t('need.solution.elements.item3.title')}</h4>
                  <p className="element-desc">{t('need.solution.elements.item3.desc')}</p>
                </div>
                <div className="element-item">
                  <div className="element-icon">🌍</div>
                  <h4 className="element-title">{t('need.solution.elements.item4.title')}</h4>
                  <p className="element-desc">{t('need.solution.elements.item4.desc')}</p>
                </div>
                <div className="element-item">
                  <div className="element-icon">👁️</div>
                  <h4 className="element-title">{t('need.solution.elements.item5.title')}</h4>
                  <p className="element-desc">{t('need.solution.elements.item5.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'vision':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.vision.title')}</h2>
            
            <div className="content-box main-box">
              <p>{t('need.vision.paragraph1')}</p>
              <br />
              <p>{t('need.vision.paragraph2')}</p>
            </div>
            
            <div className="content-box highlight-box">
              <h3 className="highlight-title">{t('need.vision.longterm.title')}</h3>
              <p>{t('need.vision.longterm.text')}</p>
            </div>
            
            <div className="vision-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{t('need.vision.timeline.year1.title')}</h4>
                  <p className="timeline-desc">{t('need.vision.timeline.year1.desc')}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2026</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{t('need.vision.timeline.year2.title')}</h4>
                  <p className="timeline-desc">{t('need.vision.timeline.year2.desc')}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2028</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{t('need.vision.timeline.year3.title')}</h4>
                  <p className="timeline-desc">{t('need.vision.timeline.year3.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'blockchain':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.blockchain.title')}</h2>
            
            <div className="content-box main-box">
              <p>{t('need.blockchain.paragraph1')}</p>
              <br />
              <p>{t('need.blockchain.paragraph2')}</p>
            </div>
            
            <div className="blockchain-advantages">
              <h3 className="advantages-title">{t('need.blockchain.advantages.title')}</h3>
              <div className="advantages-grid">
                <div className="advantage-item">
                  <div className="advantage-icon">🔒</div>
                  <h4 className="advantage-title">{t('need.blockchain.advantages.item1.title')}</h4>
                  <p className="advantage-desc">{t('need.blockchain.advantages.item1.desc')}</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">👁️</div>
                  <h4 className="advantage-title">{t('need.blockchain.advantages.item2.title')}</h4>
                  <p className="advantage-desc">{t('need.blockchain.advantages.item2.desc')}</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🌐</div>
                  <h4 className="advantage-title">{t('need.blockchain.advantages.item3.title')}</h4>
                  <p className="advantage-desc">{t('need.blockchain.advantages.item3.desc')}</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">📝</div>
                  <h4 className="advantage-title">{t('need.blockchain.advantages.item4.title')}</h4>
                  <p className="advantage-desc">{t('need.blockchain.advantages.item4.desc')}</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🪙</div>
                  <h4 className="advantage-title">{t('need.blockchain.advantages.item5.title')}</h4>
                  <p className="advantage-desc">{t('need.blockchain.advantages.item5.desc')}</p>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🌍</div>
                  <h4 className="advantage-title">{t('need.blockchain.advantages.item6.title')}</h4>
                  <p className="advantage-desc">{t('need.blockchain.advantages.item6.desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="content-box highlight-box">
              <h3 className="highlight-title">{t('need.blockchain.modular.title')}</h3>
              <p>{t('need.blockchain.modular.text')}</p>
            </div>
          </div>
        );
      
      case 'cbdc':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.cbdc.title')}</h2>
            
            <div className="content-box main-box">
              <p className="font-bold text-xl mb-4">{t('need.cbdc.subtitle')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="content-box" style={{ borderLeft: '4px solid #ff4444' }}>
                  <h3 className="text-[#ff4444] font-bold text-xl mb-2">{t('need.cbdc.column1.title')}</h3>
                  <p className="mb-4 font-semibold">{t('need.cbdc.column1.subtitle')}</p>
                  
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-red-500 font-bold">❌</span> {t('need.cbdc.column1.item1')}</li>
                    <li><span className="text-red-500 font-bold">❌</span> {t('need.cbdc.column1.item2')}</li>
                    <li><span className="text-red-500 font-bold">❌</span> {t('need.cbdc.column1.item3')}</li>
                    <li><span className="text-red-500 font-bold">❌</span> {t('need.cbdc.column1.item4')}</li>
                    <li><span className="text-red-500 font-bold">❌</span> {t('need.cbdc.column1.item5')}</li>
                    <li><span className="text-red-500 font-bold">❌</span> {t('need.cbdc.column1.item6')}</li>
                  </ul>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.cbdc.column2.title')}</h3>
                  <p className="mb-4 font-semibold">{t('need.cbdc.column2.subtitle')}</p>
                  
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">✅</span> {t('need.cbdc.column2.item1')}</li>
                    <li><span className="text-green-500 font-bold">✅</span> {t('need.cbdc.column2.item2')}</li>
                    <li><span className="text-green-500 font-bold">✅</span> {t('need.cbdc.column2.item3')}</li>
                    <li><span className="text-green-500 font-bold">✅</span> {t('need.cbdc.column2.item4')}</li>
                    <li><span className="text-green-500 font-bold">✅</span> {t('need.cbdc.column2.item5')}</li>
                    <li><span className="text-green-500 font-bold">✅</span> {t('need.cbdc.column2.item6')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'future':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.future.title')}</h2>
            
            <div className="content-box main-box">
              <p className="font-bold text-xl mb-4">{t('need.future.subtitle')}</p>
              
              <p className="mb-6">{t('need.future.intro')}</p>
              
              <div className="space-y-8">
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.depin.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.depin.whatIs.title')}</strong><br />
                  {t('need.future.depin.whatIs.description')}</p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.depin.earn.wifi.title')}</span> – {t('need.future.depin.earn.wifi.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.depin.earn.storage.title')}</span> – {t('need.future.depin.earn.storage.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.depin.earn.ev.title')}</span> – {t('need.future.depin.earn.ev.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.depin.earn.solar.title')}</span> – {t('need.future.depin.earn.solar.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.depin.future.title')}</strong> {t('need.future.depin.future.description')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.governance.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.governance.question')}</strong><br />
                  {t('need.future.governance.answer')}</p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.governance.earn.vote.title')}</span> – {t('need.future.governance.earn.vote.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.governance.earn.propose.title')}</span> – {t('need.future.governance.earn.propose.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.governance.earn.validator.title')}</span> – {t('need.future.governance.earn.validator.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.example')}</strong><br />
                  {t('need.future.governance.example')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.social.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.social.intro.title')}</strong><br />
                  {t('need.future.social.intro.description')}</p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.social.earn.post.title')}</span> – {t('need.future.social.earn.post.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.social.earn.data.title')}</span> – {t('need.future.social.earn.data.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.social.earn.content.title')}</span> – {t('need.future.social.earn.content.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.social.conclusion')}</strong></p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.travel.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.travel.question')}</strong><br />
                  {t('need.future.travel.answer')}</p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.travel.earn.rides.title')}</span> – {t('need.future.travel.earn.rides.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.travel.earn.home.title')}</span> – {t('need.future.travel.earn.home.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.travel.earn.review.title')}</span> – {t('need.future.travel.earn.review.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.example')}</strong><br />
                  {t('need.future.travel.example')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.advertising.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.advertising.intro')}</strong></p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.advertising.earn.watch.title')}</span> – {t('need.future.advertising.earn.watch.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.advertising.earn.refer.title')}</span> – {t('need.future.advertising.earn.refer.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.advertising.earn.influencer.title')}</span> – {t('need.future.advertising.earn.influencer.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.advertising.conclusion')}</strong></p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.play.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.play.intro')}</strong></p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.play.earn.move.title')}</span> – {t('need.future.play.earn.move.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.play.earn.games.title')}</span> – {t('need.future.play.earn.games.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.play.earn.betting.title')}</span> – {t('need.future.play.earn.betting.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.play.conclusion')}</strong></p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.future.work.title')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.future.work.intro')}</strong></p>
                  
                  <p className="mb-2"><strong>{t('need.future.howYouCanEarn')}</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><span className="text-green-500 font-bold">{t('need.future.work.earn.marketplace.title')}</span> – {t('need.future.work.earn.marketplace.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.work.earn.opensource.title')}</span> – {t('need.future.work.earn.opensource.description')}</li>
                    <li><span className="text-green-500 font-bold">{t('need.future.work.earn.teaching.title')}</span> – {t('need.future.work.earn.teaching.description')}</li>
                  </ul>
                  
                  <p><strong>{t('need.future.work.conclusion')}</strong></p>
                </div>
                
                <div className="content-box highlight-box">
                  <h3 className="highlight-title">{t('need.future.conclusion.title')}</h3>
                  
                  <p className="mb-4"><strong>{t('need.future.conclusion.today')}:</strong> {t('need.future.conclusion.todayDescription')}<br />
                  <strong>{t('need.future.conclusion.tomorrow')}:</strong> {t('need.future.conclusion.tomorrowDescription')}</p>
                  
                  <p className="text-center text-xl font-bold">{t('need.future.conclusion.message')}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'interoperability':
        return (
          <div className="tab-content">
            <h2 className="content-title">{t('need.interoperability.title')}</h2>
            
            <div className="content-box main-box">
              <p className="font-bold text-xl mb-4">{t('need.interoperability.subtitle')}</p>
              
              <p className="mb-6">{t('need.interoperability.intro')}</p>
              
              <div className="content-box mb-8" style={{ borderLeft: '4px solid #00ffaa' }}>
                <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.interoperability.whatIsInteroperability')}</h3>
                <p className="mb-4"><strong>💡 {t('need.interoperability.definition')}</strong></p>
                
                <h4 className="font-semibold mb-2">{t('need.interoperability.whyItMatters')}</h4>
                <ul className="list-none space-y-2 mb-4">
                  <li><span className="text-green-500 font-bold">✅</span> {t('need.interoperability.noSilos')}</li>
                  <li><span className="text-green-500 font-bold">✅</span> {t('need.interoperability.globalParticipation')}</li>
                  <li><span className="text-green-500 font-bold">✅</span> {t('need.interoperability.borderlessOpportunities')}</li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6">{t('need.interoperability.howWeUseInteroperability')}</h3>
              
              <div className="space-y-8">
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.interoperability.crossChainGovernance')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.problem')}:</strong> {t('need.interoperability.governanceProblem')}</p>
                  <p className="mb-4"><strong>{t('need.interoperability.solution')}:</strong> {t('need.interoperability.governanceSolution')}</p>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.example')}:</strong></p>
                  <p className="mb-4"><strong>🗳</strong> {t('need.interoperability.governanceExample')}</p>
                  
                  <p><strong>{t('need.interoperability.impact')}:</strong> {t('need.interoperability.governanceImpact')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.interoperability.crossChainFinance')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.problem')}:</strong> {t('need.interoperability.financeProblem')}</p>
                  <p className="mb-4"><strong>{t('need.interoperability.solution')}:</strong> {t('need.interoperability.financeSolution')}</p>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.example')}:</strong></p>
                  <p className="mb-4"><strong>🔄</strong> {t('need.interoperability.financeExample')}</p>
                  
                  <p><strong>{t('need.interoperability.impact')}:</strong> {t('need.interoperability.financeImpact')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.interoperability.universalDigitalID')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.problem')}:</strong> {t('need.interoperability.idProblem')}</p>
                  <p className="mb-4"><strong>{t('need.interoperability.solution')}:</strong> {t('need.interoperability.idSolution')}</p>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.example')}:</strong></p>
                  <p className="mb-4"><strong>🌐</strong> {t('need.interoperability.idExample')}</p>
                  
                  <p><strong>{t('need.interoperability.impact')}:</strong> {t('need.interoperability.idImpact')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.interoperability.crossBorderInfrastructure')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.problem')}:</strong> {t('need.interoperability.infrastructureProblem')}</p>
                  <p className="mb-4"><strong>{t('need.interoperability.solution')}:</strong> {t('need.interoperability.infrastructureSolution')}</p>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.example')}:</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><strong>🌞</strong> {t('need.interoperability.infrastructureExample1')}</li>
                    <li><strong>📡</strong> {t('need.interoperability.infrastructureExample2')}</li>
                    <li><strong>🏡</strong> {t('need.interoperability.infrastructureExample3')}</li>
                  </ul>
                  
                  <p><strong>{t('need.interoperability.impact')}:</strong> {t('need.interoperability.infrastructureImpact')}</p>
                </div>
                
                <div className="content-box" style={{ borderLeft: '4px solid #00ffaa' }}>
                  <h3 className="text-[#00ffaa] font-bold text-xl mb-2">{t('need.interoperability.globalEconomy')}</h3>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.problem')}:</strong> {t('need.interoperability.economyProblem')}</p>
                  <p className="mb-4"><strong>{t('need.interoperability.solution')}:</strong> {t('need.interoperability.economySolution')}</p>
                  
                  <p className="mb-2"><strong>{t('need.interoperability.example')}:</strong></p>
                  <ul className="list-none space-y-2 mb-4">
                    <li><strong>🔗</strong> {t('need.interoperability.economyExample1')}</li>
                    <li><strong>🏦</strong> {t('need.interoperability.economyExample2')}</li>
                    <li><strong>🛍️</strong> {t('need.interoperability.economyExample3')}</li>
                  </ul>
                  
                  <p><strong>{t('need.interoperability.impact')}:</strong> {t('need.interoperability.economyImpact')}</p>
                </div>
                
                <div className="content-box highlight-box">
                  <h3 className="highlight-title">{t('need.interoperability.modernNation')}</h3>
                  
                  <ul className="list-none space-y-2 mb-4 text-center">
                    <li><strong>{t('need.interoperability.conclusion1')}</strong></li>
                    <li><strong>{t('need.interoperability.conclusion2')}</strong></li>
                    <li><strong>{t('need.interoperability.conclusion3')}</strong></li>
                  </ul>
                  
                  <p className="text-center text-xl font-bold">{t('need.interoperability.finalMessage')}</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-16" id="need-for-nova">
      <div className="max-w-[1580px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">{t('need-for-nova.title')}</h2>
          <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        </div>
        
        <div className="need-for-nova-container hover-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="crisis-tabs-container">
                <button 
                  className={`crisis-tab ${activeTab === 'political' ? 'active' : ''}`}
                  onClick={() => handleTabClick('political')}
                >
                  <span className="tab-icon"><FaExclamationTriangle /></span>
                  {t('need.political.tabTitle')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'environmental' ? 'active' : ''}`}
                  onClick={() => handleTabClick('environmental')}
                >
                  <span className="tab-icon"><FaTree /></span>
                  {t('need.environmental.title')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'youth' ? 'active' : ''}`}
                  onClick={() => handleTabClick('youth')}
                >
                  <span className="tab-icon"><FaUsers /></span>
                  {t('need.youth.title')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'solution' ? 'active' : ''}`}
                  onClick={() => handleTabClick('solution')}
                >
                  <span className="tab-icon"><FaLightbulb /></span>
                  {t('need.solution.title')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'vision' ? 'active' : ''}`}
                  onClick={() => handleTabClick('vision')}
                >
                  <span className="tab-icon"><FaChartLine /></span>
                  {t('need.tab.vision')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'blockchain' ? 'active' : ''}`}
                  onClick={() => handleTabClick('blockchain')}
                >
                  <span className="tab-icon"><FaCubes /></span>
                  {t('need.tab.blockchain')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'cbdc' ? 'active' : ''}`}
                  onClick={() => handleTabClick('cbdc')}
                >
                  <span className="tab-icon"><FaMoneyBillWave /></span>
                  {t('need.tab.cbdc')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'future' ? 'active' : ''}`}
                  onClick={() => handleTabClick('future')}
                >
                  <span className="tab-icon"><FaRocket /></span>
                  {t('need.tab.future')}
                </button>
                <button 
                  className={`crisis-tab ${activeTab === 'interoperability' ? 'active' : ''}`}
                  onClick={() => handleTabClick('interoperability')}
                >
                  <span className="tab-icon"><FaLink /></span>
                  {t('need.tab.interoperability')}
                </button>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="crisis-content-container">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedForNova;
