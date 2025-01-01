import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {

    const roadmapData = [
        { id: 1, title: 'Phase 1', description: 'Launch Meme Coin, Token Sale', date: 'Q4 2024' },
        { id: 2, title: 'Phase 2', description: 'NFT Collection, Holder Rewards', date: 'Q2 2025' },
        { id: 3, title: 'Phase 3', description: 'Community Engagement, Jeet ID Generator', date: 'Q3 2025' },
        { id: 4, title: 'Phase 4', description: 'Token Staking, Meme Challenges', date: 'Q4 2025' },
        { id: 5, title: 'Phase 5', description: 'Sport Prediction Model,Game Launch', date: 'Q4 2025' },
      ];
      
  

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Roadmap</h2>
      
      <div className="space-y-12 ">
        {roadmapData.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex items-center justify-start space-x-6 bg-white bg-opacity-5 backdrop-blur-md p-6 hover:shadow-gold"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-gold flex items-center justify-center text-white font-bold">
              {milestone.id}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{milestone.title}</h3>
              <p className="text-lg text-gold">{milestone.description}</p>
              <p className="text-sm text-gray-500 mt-2">{milestone.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
