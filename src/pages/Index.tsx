"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MousePointer2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MatchCard from '@/components/MatchCard';
import SyndicateLogo from '@/components/SyndicateLogo';
import FooterCredit from "@/components/FooterCredit";

const Index = () => {
  const matches = [
    { opponent: "Team Liquid", tournament: "VCT Challengers", date: "Oct 24, 2023", time: "18:00 IST", logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop" },
    { opponent: "Sentinels", tournament: "Pro League S2", date: "Oct 28, 2023", time: "21:30 IST", logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Valorant-Themed Background Image - Increased Visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Tactical Background" 
            className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[20s] ease-linear"
            style={{ filter: 'contrast(1.2) brightness(0.8)' }}
          />
          {/* Refined Gradients for better image visibility while keeping text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-zinc-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
          
          {/* Tactical Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,255,0.02),rgba(0,0,255,0.04))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30" />
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10 md:opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-600/20 border border-red-600/40 text-red-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 backdrop-blur-sm"
            >
              <Activity size={14} className="animate-pulse" />
              Syndicate Protocol Active
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 md:mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            >
              JOIN THE <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400">SYNDICATE.</span>
                <motion.div 
                  animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
                >
                  <MousePointer2 className="text-red-500 rotate-45" size={48} />
                </motion.div>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-zinc-100 text-lg md:text-2xl max-w-2xl mb-10 md:mb-12 font-medium leading-relaxed border-l-4 border-red-600 pl-4 md:pl-8 drop-shadow-md"
            >
              We are not just a team. We are a tactical collective engineered for absolute dominance in the Valorant arena.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <Link to="/roster" className="px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white font-black uppercase text-xs md:text-sm tracking-widest hover:bg-red-700 transition-all rounded-sm flex items-center justify-center gap-3 group relative overflow-hidden shadow-lg shadow-red-600/20">
                <span className="relative z-10">Enter Roster</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link to="/coach" className="px-8 md:px-10 py-4 md:py-5 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-white font-black uppercase text-xs md:text-sm tracking-widest hover:bg-zinc-800 transition-all rounded-sm text-center">
                Meet the Coach
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Side Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden 2xl:block">
          <span className="text-[120px] font-black text-zinc-900/40 uppercase tracking-tighter select-none">
            SYNDICATE
          </span>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-20 md:py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12 md:mb-16">
              <div className="h-px flex-1 bg-zinc-900" />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-center">Upcoming Premiers</h2>
              <div className="h-px flex-1 bg-zinc-900" />
            </div>

            <div className="space-y-6">
              {matches.map((match, i) => (
                <MatchCard key={i} {...match} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <SyndicateLogo />
                <span className="text-2xl font-black tracking-tighter uppercase italic">Syndicate</span>
              </div>
              <p className="text-zinc-500 text-sm font-medium text-center md:text-left">
                Tactical Excellence. Absolute Dominance. <br className="hidden sm:block" />
                The Syndicate Protocol is now active.
              </p>
            </div>

            <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] md:tracking-[0.3em] text-center">
              © 2023 SYNDICATE GAMING. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
        <FooterCredit />
      </footer>
    </div>
  );
};

export default Index;