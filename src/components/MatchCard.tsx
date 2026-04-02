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
}

const MatchCard = ({ opponent, tournament, date, time, logo }: MatchProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors"
    >
      <div className="flex items-center gap-8 flex-1">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-2xl font-black text-white mb-2">
            OG
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase">Our Team</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-black text-red-600 italic">VS</span>
          <div className="px-3 py-1 bg-zinc-800 rounded text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            BO3
          </div>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-2xl font-black text-white mb-2 overflow-hidden">
            <img src={logo} alt={opponent} className="w-full h-full object-cover opacity-50" />
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase">{opponent}</span>
        </div>
      </div>

      <div className="w-px h-12 bg-zinc-800 hidden md:block" />

      <div className="flex flex-col gap-3 min-w-[200px]">
        <div className="flex items-center gap-2 text-zinc-300">
          <Trophy size={16} className="text-red-500" />
          <span className="text-sm font-bold uppercase tracking-tight">{tournament}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-500">
            <Calendar size={14} />
            <span className="text-xs font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500">
            <Clock size={14} />
            <span className="text-xs font-medium">{time}</span>
          </div>
        </div>
      </div>

      <button className="w-full md:w-auto px-6 py-3 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-colors rounded">
        Watch Live
      </button>
    </motion.div>
  );
};

export default MatchCard;