import React from 'react'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <nav className='absolute top-0 left-0 w-full px-36 py-5 text-white z-20 bg-primary text-[1.5rem]'>
        <div className="container flex justify-between gap-[15rem]">
            <div className="flex justify-between items-center">
                {/* logo section */}
                <h1 className="text-2xl font-semibold uppercase">
                    <span className="text-gold">
                       JEET
                    </span>
                    Token
                </h1>
            </div>
             {/* Nav menu */}
             <button className='md:hidden text-gold' onClick={toggleMenu}>
                {
                    isMenuOpen ? (
                        <FaTimes className="w-6 h-6" />
                     ):(
                        <FaBars className="w-6 h-6" />  
                     )
                }
             </button>
            <div>
            <div className='hidden md:flex space-x-24 w-full'>
                <a href="#home" className='text-gold border-2 border-transparent hover:text-gray-300 hover:px-1 hover:py-1 hover:border-white'>Home</a>
                <a href="#tokenomics" className='text-gold border-2 border-transparent hover:text-gray-300 hover:px-1 hover:py-1 hover:border-white'>Tokenomics</a>
                <a href="#roadmap" className='text-gold border-2 border-transparent hover:text-gray-300 hover:px-1 hover:py-1 hover:border-white'>Roadmap</a>
                <a href="#community" className='text-gold border-2 border-transparent hover:text-gray-300 hover:px-1 hover:py-1 hover:border-white'>Community</a>
               
            </div>
            {/* Mobile Menu (Visible on smaller screens when hamburger is clicked) */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-primary text-white p-5`}>
                <a href="#home" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="block py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#tokenomics" className="block py-2" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
                <a href="#community" className="block py-2" onClick={() => setIsMenuOpen(false)}>Community</a>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav