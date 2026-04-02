"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SyndicateLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      {/* Outer Hexagon/Diamond Shape */}
      <div className="absolute inset-0 bg-red-600 rotate-45 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
      
      {/* Inner Cutout Effect */}
      <div className="absolute inset-[2px] bg-zinc-950 rotate-45 rounded-sm flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/50" />
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-red-600/50" />
      </div>

      {/* The 'S' */}
      <span className="relative text-white font-black text-xl italic tracking-tighter select-none">
        S
      </span>

      {/* Glitch Decorative Elements */}
      <motion.div 
        animate={{ 
          opacity: [0, 1, 0],
          x: [-2, 2, -2]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          times: [0, 0.1, 0.2]
        }}
        className="absolute -right-1 top-1/2 w-2 h-[1px] bg-cyan-400"
      />
    </motion.div>
  );
};

export default SyndicateLogo;