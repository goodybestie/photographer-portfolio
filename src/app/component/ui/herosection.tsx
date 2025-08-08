'use client';
import React from 'react';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  refProp: React.RefObject<HTMLElement | null>;
}

export function HeroSection({refProp}: HeroSectionProps) {
    const [isVisible, setIsVisible]  = useState(false);


     useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); 
        return () => clearTimeout(timer); // Delay of 1 second before showing the hero section
     },[])
  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      
      {/* === Background Image & Overlay === */}
      <div className="absolute inset-0">
        <img 
          src="/hero-image.jpg" 
          alt="Professional photographer capturing moments" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* === Content === */}
     {/* Hero Content */}
      <section className=" relative z-10 flex items-center justify-center h-full px-5" ref={refProp}>

        <div className={`
        text-center max-w-4xl mx-auto
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-[68px] font-bold ">
            <div className="text-white">Capturing</div>
            <div className="text-[#f0c96e]">Moments</div>
            <div className="text-white mb-4">That Matter</div>
          </h1>
          
          {/* Subheading */}
          <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl mx-auto  leading-relaxed">
            Professional photographer specializing in portraits, landscapes,
            <br />
            and storytelling through visual art.
          </p>
          
          {/* Call to Action Buttons */}
         <div className="flex flex-col items-center gap-1">
    {/* Scroll Indicator */}
  <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
   style={{
      animation: 'upDown 0.8s ease-in-out infinite',
    }}>
  <div
    className="w-1 h-3 bg-white/70 rounded-full mt-2"
   
  ></div>
  <style jsx>{`
    @keyframes upDown {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `}</style>
</div>

    {/* Buttons */}
    <div className="flex flex-col  sm:flex-row gap-4 justify-center items-center mb-7">
      <button className="bg-gradient-to-r from-[#FFC947] to-[#f0c96e] cursor-pointer hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-[12px] transition-all duration-300 min-w-[160px]">
        View Portfolio
      </button>
      <button className="border cursor-pointer border-[rgb(43,48,59)] bg-[rgb(17,19,23)] text-white hover:bg-[#4E1F00] hover:text-black font-semibold px-5 py-2 rounded-[12px] transition-all duration-300 min-w-[160px]">
        Learn More
      </button>
    </div>

</div>
        </div>
      </section>

    </section>
  );
}
