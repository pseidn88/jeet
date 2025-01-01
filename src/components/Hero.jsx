
import Nav from '../components/Nav'
import BgImage from "../assets/images/Mumbai.jpg"
import { heroImages } from '../../data'
import tokenomics1 from "../assets/images/tokenomics1.png"
import tokenomics2 from "../assets/images/tokenomics2.png"
import tokenomics3 from "../assets/images/lambo-removebg-preview.png"
import { useState,useEffect } from 'react'
import Roadmap from './Roadmap'
import Community from './Community'
import { motion } from 'framer-motion'
const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
}


const Hero = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9PKnGqfgMcFMV2Eu9dvufK6qxNiqq1iP3uBZxMyApump";
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  const handleCopy = () =>{
    navigator.clipboard.writeText(contractAddress)
    .then(()=>{
      setCopied(true);

      setTimeout(()=>{
        setCopied(false)
      },3000);
    }).catch(err=>{
       console.error('Failed to copy text',err)
    })

  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);
  return (
    <main style = {bgImage} className="w-screen h-full text-[1.6rem]">
       <Nav/>
       <section className="pt-[14rem] pb-[5rem] px-[5rem] mt-30 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8">
  {/* first article */}
  <article className="bg-white bg-opacity-5 backdrop-blur-md p-6 hover:shadow-gold">
    <div className="text">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">JEET CAPITAL</h1>
      <p className="text-gold text-sm sm:text-base md:text-lg">
        Ready to "Jeet" your way to the moon? 🚀 Jeet Token is here, and we're taking the meme game to new heights! The only thing more unpredictable than your crypto portfolio is the Jeet Token! Don't miss your chance to be part of the next big thing – or at least a meme you'll tell your grandkids about! 💸
      </p>
    </div>
    <div className="flex flex-col items-center justify-center mt-2">
      <button
        className="px-12 py-2 bg-primary text-gold border-2 mt-4 transition-transform transform active:scale-95 hover:bg-gradient-to-r from-gray-500 to-yellow-500 duration-300 linear animate-pulse"
        onClick={handleCopy}
      >
        {copied ? 'Copied' : 'Copy CA'}
      </button>
    </div>
  </article>

  {/* second article */}
  <article className="left">
    <div className="image">
      <img src={heroImages[currentImageIndex]} alt="Jeet Token Hero" />
    </div>
  </article>

  {/* third article */}
  <article className="bg-white bg-opacity-5 backdrop-blur-md p-6 hover:shadow-gold">
   
    <div className="text">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">JEET CAPITAL</h1>
      <p className="text-gold text-sm sm:text-base md:text-lg">
        Want to be part of the meme coin revolution? 🌕 Jeet Token isn’t just another coin – it’s your ticket to laughter, chaos, and maybe even riches (or at least some funny stories). Forget what you know about traditional investing, and embrace the chaos of meme money. It's unpredictable, wild, and just might make you laugh all the way to the bank.
      </p>
      <div>
        <button className="px-12 py-2 bg-primary text-gold border-2 mt-4 animate-pulse-custom hover:bg-gradient-to-r from-gray-500 to-yellow-500 transition duration-300 linear">
          <a href="https://t.co/c8EjRDyMqn" target="_blank" rel="noopener noreferrer">
            Purchase
          </a>
        </button>
      </div>
    </div>
  </article>
</section>

<section id='tokenomics' className="tokenomics py-[0] px-[5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Total Supply Card */}
  <motion.div
    className="text-gold card-container bg-secondary border-4 p-6 flex flex-col gap-4 justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={tokenomics1} alt="Total Supply" width="50px" />
    <h2 className="text-xl font-bold">Total Supply</h2>
    <p className="text-lg">1,000,000,000</p>
  </motion.div>

  {/* Tax Card */}
  <motion.div
    className="text-gold card-container bg-secondary border-4 p-6 flex flex-col gap-4 justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={tokenomics2} alt="Tax" width="50px" />
    <h2 className="text-xl font-bold">Tax</h2>
    <p className="text-lg">NO TAX</p>
  </motion.div>

  {/* When Lambo Card */}
  <motion.div
    className="text-gold card-container bg-secondary border-4 p-6 flex flex-col gap-4 justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={tokenomics3} alt="When Lambo" width="50px" />
    <h2 className="text-xl font-bold">When Lambo</h2>
    <p className="text-lg">SOON!!!</p>
  </motion.div>
</section>

       <section id='roadmap'>
          <Roadmap />
       </section>
       <section id='community'>
          <Community/>
       </section>
    </main>
  )
}   

export default Hero