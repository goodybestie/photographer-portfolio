'use client';

import React, { useEffect, useState } from "react";
import { portfolioItems } from "../const/portfolio";


interface PortfolioProps {
  refProp: React.RefObject<HTMLElement | null>;
}

export function Portfolio({refProp}: PortfolioProps) {

    const [visible, isVisible] = useState(false);


    useEffect(() => {
            const timer = setTimeout(() => {
                isVisible(true);
            }, 5000);
            return () => clearTimeout(timer);
    }, []);

  const categories = ["All", "Portrait", "Landscape", "Architecture", "Wedding", "Nature"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[rgb(17,19,23)] min-h-screen p-10">
        <div className={` transition-all duration-1000 ease-in
             ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

       
      {/* Header */}
      <section className="text-center  p-8" ref={refProp}>
        <h1 className="text-[#f0c96e] text-5xl md:text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-[rgb(138,150,168)] ">
          A collection of my finest work across various photography disciplines
        </p>
      </section>

      {/* Category Buttons */}
      <section className="flex justify-center flex-wrap gap-3 mb-8 mt-7">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition text-[12px] duration-300 ${
              selectedCategory === category
                ? "bg-[#f0c96e] text-black"
                : "bg-black/50 text-white border border-[rgb(43,48,59)]  hover:bg-[#f0c96e] hover:text-black"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      {/* Portfolio Grid */}
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-lg overflow-hidden border border-gray-800"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto transform group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
           <div
  className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 
             flex flex-col justify-end items-start text-left p-4 transition duration-500"
>
  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
    <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
    <p className="text-gray-300">{item.description}</p>
  </div>
</div>

          </div>
        ))}
      </section>
       </div>
    </div>
  );
}
