'use client';
import React, { useEffect, useRef, useState } from 'react';

interface NavProps {
  onHeroSectionClick: () => void;
  onPortfolioClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}


const Navbar = ({onHeroSectionClick, onPortfolioClick, onAboutClick, onContactClick }: NavProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    },[]);

   

   

    
  return (
    <section className=''>
    <nav className={`fixed top-0 
     left-0 w-full px-6 md:px-10 py-4 mx-auto
      flex justify-between items-center z-[999] ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>

      {/* Logo */}
      <div className="text-[#f0c96e] text-[19px] font-bold tracking-wider cursor-pointer
       hover:text-yellow-400 transition-colors duration-300" >
   
        LENS.
      </div>




      
      {/* Navigation Links */}
      <div className="hidden md:flex absolute text-sm left-1/2 transform -translate-x-1/2 space-x-8">
        <button className="text-gray-200  hover:text-[#f0c96e] transition-colors duration-300 relative py-2 after:content-[''] 
        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300" 
        onClick={onHeroSectionClick}>Home</button>
        <button className="text-gray-200 hover:text-[#f0c96e] transition-colors duration-300 relative py-2 after:content-[''] after:absolute 
        after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
         onClick={onPortfolioClick}>Portfolio</button>
        <button className="text-gray-200 hover:text-[#f0c96e] transition-colors duration-300 relative py-2 after:content-[''] after:absolute 
        after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
        onClick={onAboutClick}>About</button>
        <button className="text-gray-200 hover:text-[#f0c96e] transition-colors duration-300 relative py-2 after:content-[''] after:absolute 
        after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
        onClick={onContactClick}>Contact</button>
      </div>
      
      {/* CTA Button */}
      <button className="bg-gradient-to-r from-[#FFC947]
       to-[#f0c96e] text-gray-900 px-4 py-2 rounded-full
        font-semibold text-[10px] hover:from-yellow-400
         hover:to-yellow-500 hover:-translate-y-0.5 hover:shadow-lg 
         hover:shadow-yellow-500/25 transition-all duration-300 active:translate-y-0 cursor-pointer"
         onClick={onContactClick}>
        Get In Touch
      </button>
    </nav>
    </section>
  );
};

export default Navbar;
