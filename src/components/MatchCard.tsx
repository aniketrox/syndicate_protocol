"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy } from 'lucide-react';

interface MatchProps {
  opponent: string;
  tournament: string;
  date: string;
  time: string;
  logo: string;
  streamUrl?: string;
}

const MatchCard = ({ opponent, tournament, date, time, logo, streamUrl = "https://youtube.com/@aksharog?si=0FLavZFpIqJrD_Yv" }: MatchProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center gap-6 p-5 md:p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors"
    >
      <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start gap-4 sm:gap-8 flex-1">
        <div className="text-center min-w-[80px]">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600 flex items-center justify-center text-xl sm:text-2xl font-black text-white mb-2 mx-auto">
            OG
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase">Our Team</span>
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xl sm:text-2xl font-black text-red-600 italic">VS</span>
          <div className="px-2 py-0.5 bg-zinc-800 rounded text-[8px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            BO3
          </div>
        </div>

        <div className="text-center min-w-[80px]">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-zinc-800 flex items-center justify-center text-xl sm:text-2xl font-black text-white mb-2 overflow-hidden mx-auto">
            <img src={logo} alt={opponent} className="w-full h-full object-cover opacity-50" />
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase truncate max-w-[80px] block">{opponent}</span>
        </div>
      </div>

      <div className="w-full lg:w-px h-px lg:h-12 bg-zinc-800" />

      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-6 lg:gap-3 w-full lg:min-w-[200px] items-center lg:items-start">
        <div className="flex items-center gap-2 text-zinc-300">
          <Trophy size={16} className="text-red-500" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-tight">{tournament}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-500">
            <Calendar size={14} />
            <span className="text-[10px] sm:text-xs font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Clock size={14} />
            <span className="text-[10px] sm:text-xs font-medium">{time}</span>
          </div>
        </div>
      </div>

      <a 
        href={streamUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full lg:w-auto px-6 py-3 bg-white text-black font-black uppercase text-[10px] sm:text-xs tracking-widest hover:bg-red-600 hover:text-white transition-colors rounded text-center"
      >
        Watch Live
      </a>
    </motion.div>
  );
};

export default MatchCard;