"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SyndicateLogo from './SyndicateLogo';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYNDICATE PROTOCOL...");

  const statuses = [
    "INITIALIZING SYNDICATE PROTOCOL...",
    "LOADING TACTICAL ASSETS...",
    "ESTABLISHING SECURE CONNECTION...",
    "SYNCING SQUAD DATA...",
    "READY FOR DEPLOYMENT"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const statusTimer = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Central Logo with Glitch Effect */}
      <div className="relative mb-12">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <SyndicateLogo className="w-24 h-24 md:w-32 md:h-32" />
        </motion.div>
        
        {/* Glitch Shadows */}
        <motion.div 
          animate={{ x: [-2, 2, -2], opacity: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 0.1 }}
          className="absolute inset-0 bg-red-600/20 blur-xl -z-10"
        />
      </div>

      {/* Progress Section */}
      <div className="w-64 md:w-80 space-y-4 relative">
        <div className="flex justify-between items-end">
          <motion.span 
            key={status}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]"
          >
            {status}
          </motion.span>
          <span className="text-xs font-black text-white tabular-nums">
            {Math.min(Math.round(progress), 100)}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <motion.div 
            className="h-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Tactical Decorative Elements */}
        <div className="flex justify-between opacity-30">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
          <span className="text-[8px] font-mono text-zinc-500">SYS_VER_2.0.4</span>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-red-600/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-red-600/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-red-600/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-red-600/30" />
    </motion.div>
  );
};

export default LoadingScreen;