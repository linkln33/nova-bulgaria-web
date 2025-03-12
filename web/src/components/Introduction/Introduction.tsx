import React, { useState } from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
  const [activeTab, setActiveTab] = useState('crisis');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="introduction" className="py-8 bg-gradient-to-b from-bg-dark to-bg-darker relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#00ffaa] mb-4">The Need for NOVA BULGARIA</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">A blockchain-powered solution to rebuild a nation in crisis</p>
        </div>

        {/* Main content with vertical tabs */}
        <div className="glass p-6 rounded-xl border border-[#00ffaa] border-opacity-30 mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Vertical Tab navigation */}
            <div className="md:w-1/4 mb-6 md:mb-0 md:border-r border-gray-700 md:pr-4">
              <div className="flex flex-col space-y-2">
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'crisis' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('crisis')}
                >
                  Political Crisis
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'environment' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('environment')}
                >
                  Environmental Crisis
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'youth' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('youth')}
                >
                  Youth Crisis
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[#00ffaa] hover:bg-opacity-20 transition-all ${activeTab === 'solution' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('solution')}
                >
                  The Solution
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[var(--primary)] hover:bg-opacity-20 transition-all ${activeTab === 'vision' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('vision')}
                >
                  Vision
                </button>
                <button 
                  className={`tab-btn px-4 py-3 rounded-lg text-left text-white hover:bg-[var(--primary)] hover:bg-opacity-20 transition-all ${activeTab === 'blockchain' ? 'active' : ''}`} 
                  onClick={() => handleTabClick('blockchain')}
                >
                  Why Blockchain
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="tab-content md:w-3/4 md:pl-6">
              {/* Political Crisis Tab */}
              {activeTab === 'crisis' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">The Current Political Crisis: Corruption, Tyranny, and National Collapse</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">Bulgaria stands at the edge of destruction, gripped by a ruthless and corrupt regime that has held power for decades. The country is controlled by an oligarchic mafia, led by political figures such as Boyko Borissov and Delyan Peevski, who have systematically looted the nation's resources, silenced opposition, and driven millions into poverty. Their control extends deep into every institution—the government, judiciary, media, and even law enforcement—turning Bulgaria into a puppet state where laws serve only the interests of the corrupt elite.</p>
                    
                    <p className="text-gray-300">For years, these political criminals have engaged in mass financial theft, suppression of free speech, and the destruction of democratic values. Instead of serving the people, they have orchestrated an economic genocide, forcing millions of Bulgarians to flee the country in search of a better future. Those who remain are trapped in a system of oppression, where poverty, lack of healthcare, and unchecked police brutality are the norm.</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">The Imminent Collapse of Bulgaria</h4>
                      <p className="text-gray-300">The current state of Bulgaria is unsustainable. With a rapidly declining population, widespread unemployment, and a complete lack of institutional trust, the country is on the verge of economic and social collapse. If the corruption continues, Bulgaria will cease to function as a sovereign state and will be left in ruins, controlled by foreign interests and criminal networks.</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">The End of Political Parties and Bureaucratic Waste</h4>
                      <p className="text-gray-300">With NOVA BULGARIA, the era of corrupt political parties and wasteful bureaucracy comes to an end. By replacing these outdated structures with a decentralized, blockchain-based governance system, we eliminate the middlemen who have exploited the Bulgarian people for decades. Every citizen becomes a direct participant in governance, with the power to propose, vote on, and implement policies without relying on corrupt representatives.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Environmental Crisis Tab */}
              {activeTab === 'environment' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Environmental Crisis: The Destruction of Bulgaria's Natural Heritage</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">Bulgaria's natural resources—its forests, rivers, and Black Sea coast—are being systematically destroyed by corrupt officials and corporations. Illegal logging has devastated ancient forests, while unregulated construction has ruined coastal areas. The country's water resources are contaminated with industrial waste, and air pollution in major cities far exceeds safe levels, causing severe health problems for citizens.</p>
                    
                    <p className="text-gray-300">The current government has not only failed to protect Bulgaria's environment but has actively participated in its destruction. Environmental regulations are ignored, activists are silenced, and protected areas are opened for exploitation. This environmental catastrophe threatens not only Bulgaria's biodiversity but also the health and future of its people.</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Environmental Restoration Through Blockchain</h4>
                      <p className="text-gray-300">NOVA BULGARIA will implement a blockchain-based environmental protection system that ensures transparency in resource management and holds polluters accountable. Through tokenized incentives, we will reward conservation efforts and sustainable practices, while penalizing environmental destruction. Our decentralized governance will give citizens the power to protect their natural heritage and create a sustainable future for generations to come.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Youth Crisis Tab */}
              {activeTab === 'youth' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Youth Crisis: A Generation Without Hope</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">Bulgaria is experiencing a catastrophic youth exodus, with an estimated 1.5 million young Bulgarians having left the country in the past three decades. This brain drain represents the loss of the country's most valuable resource—its future generation. Young people are fleeing due to a lack of economic opportunities, poor educational systems, and a pervasive sense of hopelessness about Bulgaria's future.</p>
                    
                    <p className="text-gray-300">Those who remain face unemployment, low wages, and a system that rewards corruption over merit. The education system fails to prepare students for the modern economy, while nepotism and bribery determine career advancement rather than skill or hard work. This has created a generation of disillusioned young Bulgarians who see no future in their homeland.</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Rebuilding Youth Opportunity</h4>
                      <p className="text-gray-300">NOVA BULGARIA will create a meritocratic system where young people can thrive based on their skills and contributions, not their connections. Through blockchain-based education credentials, skill verification, and job matching, we will build an economy that rewards talent and innovation. Our digital nation will provide the opportunities that have been denied to Bulgarian youth, giving them a reason to stay and build a future in their homeland.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Solution Tab */}
              {activeTab === 'solution' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">The Solution: A Blockchain-Powered Nation</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">NOVA BULGARIA offers a radical yet necessary solution: a fully decentralized digital nation, governed by its citizens through blockchain technology. By eliminating centralized control and replacing corrupt bureaucracies with smart contracts, we can create a fair, transparent, and merit-based society where power belongs to the people, not to a handful of criminal elites.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Decentralized Governance</h4>
                        <p className="text-gray-300">Replace corrupt politicians with direct democratic voting on a secure blockchain, where every citizen has a voice and all decisions are transparent and immutable.</p>
                      </div>
                      
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Transparent Economy</h4>
                        <p className="text-gray-300">Create a new economic system where all transactions are recorded on the blockchain, eliminating corruption, tax evasion, and the theft of public funds.</p>
                      </div>
                      
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Digital Identity</h4>
                        <p className="text-gray-300">Provide every citizen with a secure, self-sovereign digital identity that gives them access to services, voting rights, and economic opportunities without centralized control.</p>
                      </div>
                      
                      <div className="glass p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Meritocratic System</h4>
                        <p className="text-gray-300">Build a society where advancement is based on contributions and skills, not on political connections or corruption, creating true equality of opportunity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Vision Tab */}
              {activeTab === 'vision' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Vision: The Future of a Decentralized Nation</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">NOVA BULGARIA is a revolutionary concept that redefines what it means to be a nation. Unlike traditional countries that rely on central authorities, NOVA BULGARIA operates on blockchain technology, ensuring full transparency, fairness, and self-governance by its citizens. This digital nation is built on meritocracy, where contributions and active participation determine a person's role, influence, and rewards. Our goal is to create a self-sustaining economy and governance system that is free from corruption, inefficiencies, and outdated bureaucracies.</p>
                    
                    <div className="glass p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">A Nation Without Borders</h4>
                      <p className="text-gray-300">NOVA BULGARIA transcends geographical limitations, allowing Bulgarians worldwide to participate in building and governing their digital homeland. Whether you live in Sofia, London, or New York, you can be an active citizen of NOVA BULGARIA, contributing to its growth and sharing in its prosperity. This borderless nation unites the Bulgarian diaspora, harnessing the talents and resources of millions who were forced to leave their homeland due to corruption and lack of opportunity.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Blockchain Tab */}
              {activeTab === 'blockchain' && (
                <div className="tab-pane">
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Why Blockchain?</h3>
                  
                  <div className="space-y-6">
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Immutable Transparency</h4>
                      <p className="text-gray-300">Blockchain provides an immutable record of all transactions and decisions, making it impossible for corrupt officials to alter records, steal funds, or manipulate votes. Every action is permanently recorded and visible to all citizens, ensuring unprecedented transparency in governance and finance.</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Elimination of Middlemen</h4>
                      <p className="text-gray-300">Smart contracts automatically execute agreements without the need for intermediaries, eliminating the corrupt bureaucrats and officials who currently extract bribes and fees from every transaction. This reduces costs, increases efficiency, and removes opportunities for corruption.</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Decentralized Power</h4>
                      <p className="text-gray-300">Unlike traditional systems where power is concentrated in the hands of a few, blockchain distributes authority across the network, making it resistant to takeover by corrupt interests. No single entity can control the system, ensuring that NOVA BULGARIA remains truly democratic and resistant to the oligarchic capture that has plagued Bulgaria.</p>
                    </div>
                    
                    <div className="glass p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-[var(--accent1)] mb-3">Economic Sovereignty</h4>
                      <p className="text-gray-300">Through its own cryptocurrency and tokenized assets, NOVA BULGARIA creates an independent economic system that is resistant to external manipulation and control. This economic sovereignty protects citizens from the inflation, currency manipulation, and economic mismanagement that have impoverished Bulgarians for decades.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <a href="#tokenomics" className="btn btn-primary text-lg px-8 py-3">Explore Our Tokenomics</a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--primary)] rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--secondary)] rounded-full filter blur-[100px] opacity-15"></div>
      </div>
    </section>
  );
};

export default Introduction;
