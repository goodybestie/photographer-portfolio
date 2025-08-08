import React from 'react';

export function Footer() {
  return (
    <div className="bg-black px-6 py-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
      <div>
        <h1 className="text-[#f0c96e] text-[19px] font-bold mb-1">LENS.</h1>
        <p className="text-[rgb(138,150,168)] text-[12px]">Capturing moments that matter</p>
      </div>
      <p className="text-[rgb(138,150,168)] text-[12px]">
        © 2025 Alex Johnson Photography. All rights reserved.
      </p>
    </div>
  );
}
