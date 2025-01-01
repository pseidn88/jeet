import { motion } from 'framer-motion';


const Community = () => {
  const communityData = [
    { id: 1, title: 'Join Our Discord', description: 'Engage with our community, share memes, and get exclusive updates!', link: 'https://discord.gg/rjkmK5c4', icon: '📱' },
    { id: 2, title: 'Follow us on Twitter', description: 'Stay updated with the latest news and events from Jeet Capital.', link: 'https://x.com/JeetStCapital/status/1874403744743665808', icon: '❌' },
    { id: 3, title: 'Join Our Telegram', description: 'Be a part of our meme coin events and community challenges.', link: 'https://t.co/nSnRb2f08U', icon: '🎉' },
    { id: 4, title: 'Contribute to Development', description: 'Help improve Jeet Capital by contributing to the project or suggesting new ideas.', link: '#contribute', icon: '🛠️' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-black mb-12">Join Our Community</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> 
        {communityData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex items-start space-x-6 hover:scale-105 transition-all duration-300 ease-in-out bg-white bg-opacity-5 backdrop-blur-md p-6 hover:shadow-gold h-full"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-500 to-yellow-500 flex items-center justify-center text-white text-2xl">
              {item.icon}
            </div>
            <div className="flex flex-col justify-between"> 
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-lg text-gold">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-[200px] px-6 py-2 bg-primary text-gold border-2 mt-4 animate-pulse-custom hover:bg-gradient-to-r from-gray-500 to-yellow-500 ransition duration-300 linear">Join Now</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Community;