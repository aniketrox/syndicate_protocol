"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Cpu } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  nickname: string;
  agent: string;
  image: string;
  isCoach?: boolean;
}

const TeamCard = ({ name, role, nickname, agent, image, isCoach }: TeamMemberProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 transition-all duration-300"
    >
      {/* Agent Background Text */}
      <div className="absolute top-2 right-2 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-6xl font-black italic uppercase tracking-tighter text-white">
          {agent}
        </span>
      </div>

      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
        
        {/* Role Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${isCoach ? 'bg-amber-500 text-black' : 'bg-red-600 text-white'}`}>
            {isCoach ? 'Coach' : 'Player'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
              {name}
            </h3>
            <p className="text-zinc-400 text-sm font-medium italic">"{nickname}"</p>
          </div>
          <div className="text-red-500">
            {agent === 'Reyna' && <Zap size={20} />}
            {agent === 'Omen' && <Shield size={20} />}
            {agent === 'Iso' && <Target size={20} />}
            {agent === 'Neon' && <Zap size={20} />}
            {agent === 'Chamber' && <Cpu size={20} />}
            {agent === 'Gekko' && <Target size={20} />}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600">Main Agent</span>
            <span className="text-zinc-200">{agent}</span>
          </div>
          <div className="w-px h-8 bg-zinc-800" />
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600">Specialty</span>
            <span className="text-zinc-200">{role}</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
    </motion.div>
  );
};

export default TeamCard;