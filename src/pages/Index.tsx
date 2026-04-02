"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Swords, MousePointer2, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MatchCard from '@/components/MatchCard';
import SyndicateLogo from '@/components/SyndicateLogo';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const matches = [
    { opponent: "Team Liquid", tournament: "VCT Challengers", date: "Oct 24, 2023", time: "18:00 IST", logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop" },
    { opponent: "Sentinels", tournament: "Pro League S2", date: "Oct 28, 2023", time: "21:30 IST", logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-black uppercase tracking-[0.3em] mb-8"
            >
              <Activity size={14} className="animate-pulse" />
              Syndicate Protocol Active
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-10"
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
              className="text-zinc-400 text-xl md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed border-l-2 border-red-600/30 pl-8"
            >
              We are not just a team. We are a tactical collective engineered for absolute dominance in the Valorant arena.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <Link to="/roster" className="px-10 py-5 bg-red-600 text-white font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-all rounded-sm flex items-center gap-3 group relative overflow-hidden">
                <span className="relative z-10">Enter Roster</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link to="/coach" className="px-10 py-5 bg-zinc-900 border border-zinc-800 text-white font-black uppercase text-sm tracking-widest hover:bg-zinc-800 transition-all rounded-sm">
                Meet the Coach
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Side Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden xl:block">
          <span className="text-[120px] font-black text-zinc-900/30 uppercase tracking-tighter select-none">
            SYNDICATE
          </span>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-zinc-900" />
              <h2 className="text-4xl font-black uppercase tracking-tighter">Upcoming Battles</h2>
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
      <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <SyndicateLogo />
                <span className="text-2xl font-black tracking-tighter uppercase italic">Syndicate</span>
              </div>
              <p className="text-zinc-500 text-sm font-medium text-center md:text-left">
                Tactical Excellence. Absolute Dominance. <br />
                The Syndicate Protocol is now active.
              </p>
            </div>

            <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
              © 2023 SYNDICATE GAMING. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;