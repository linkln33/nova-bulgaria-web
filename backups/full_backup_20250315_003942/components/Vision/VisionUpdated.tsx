import React from 'react';
import './Vision.css';
import '../../styles/glassmorphism.css';

const VisionUpdated: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="vision-container glassmorphism-dark">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ffaa]">Vision for the Future</h2>
          <div className="w-24 h-1 bg-[#00ffaa] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Card - The Problem */}
          <div className="vision-card p-8 rounded-2xl backdrop-blur-md bg-[rgba(0,26,21,0.7)] border border-[rgba(0,255,170,0.2)] hover:border-[rgba(0,255,170,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">The Problem</h3>
            <div className="space-y-4 text-white">
              <p>
                The modern world faces a deep crisis of trust, governance, and economic inequality. Traditional governments are plagued by corruption, inefficiency, and centralization, leading to failing economies, social unrest, and broken systems that no longer serve the people. The global economy is controlled by elites, while citizens have little to no say in how their nations are run.
              </p>
              <p>
                Despite technological progress, democracy remains outdated, and national identity is often dictated by birthplace rather than contribution. There is no true national ideal today—no system where people are rewarded based on merit, transparency is guaranteed, and economic power is fairly distributed.
              </p>
              <p>
                Citizens are forced to rely on governments that mismanage resources, suppress freedoms, and fail to represent the people's will. Meanwhile, global corporations monopolize wealth, leaving individuals powerless in their own nations. Without a fundamental shift in governance and economics, societies will continue to deteriorate, and the dream of true sovereignty and fairness will remain impossible.
              </p>
            </div>
          </div>

          {/* Right Card - Our Vision: NOVA BULGARIA */}
          <div className="vision-card p-8 rounded-2xl backdrop-blur-md bg-[rgba(0,26,21,0.7)] border border-[rgba(0,255,170,0.2)] hover:border-[rgba(0,255,170,0.5)] transition-all duration-300 transform hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-6 text-[#00ffaa]">Our Vision: NOVA BULGARIA</h3>
            <div className="space-y-4 text-white">
              <p>
                NOVA BULGARIA introduces a new model for a self-governed, sovereign digital nation built on Proof of Contribution (PoC)—a system where your influence, rewards, and rights are based on your contributions, not birthright or wealth. We believe nations should be built by the people, for the people, and that governance, economy, and identity should be merit-based, decentralized, and fully transparent.
              </p>
              <p>
                By leveraging blockchain technology, decentralized identity, and a modular governance system, we create a nation where every law, service, and economic system is powered by its citizens. Our model allows individuals to earn voting power, stake in public projects, and access national services based on their expertise, contributions, and social trust.
              </p>
              <p>
                Instead of relying on broken governments or outdated institutions, we build a global-first nation that exists beyond borders, where participation is voluntary, economic incentives are fair, and governance is fully decentralized and incorruptible.
              </p>
              <p>
                As a citizen of NOVA BULGARIA, you gain access to a system where your efforts and expertise directly translate into influence and rewards. Whether you're building a business, participating in governance, or securing the network, every action earns you a rightful place in the nation. Your contributions define your success—nothing else.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#00ffaa] rounded-full filter blur-[120px] opacity-10 animate-float"></div>
    </div>
  );
};

export default VisionUpdated;
