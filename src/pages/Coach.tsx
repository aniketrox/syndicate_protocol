"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Shield, Trophy, Target } from 'lucide-react';
import FooterCredit from "@/components/FooterCredit";

const Coach = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-red-600/20 relative group max-w-md mx-auto lg:max-w-none">
                <img 
                  src="/team/allen.jpg" 
                  alt="Coach Allen" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <div className="bg-red-600 px-4 py-1.5 md:px-6 md:py-2 rounded-sm skew-x-[-12deg]">
                    <span className="block skew-x-[12deg] font-black uppercase tracking-tighter text-xl md:text-2xl">THE HULK</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-red-600/10 blur-[60px] md:blur-[80px] -z-10" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-600/10 blur-[60px] md:blur-[80px] -z-10" />
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Shield size={12} />
                Tactical Lead
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Allen <span className="text-red-600">"The Hulk"</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl font-medium italic mb-8">
                "Strength isn't just in the aim, it's in the strategy."
              </p>

              <div className="space-y-6 md:space-y-8 mb-10 md:mb-12 text-left">
                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                    <Trophy size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-1">Experience</h3>
                    <p className="text-zinc-500 text-xs md:text-sm">Over 5 years of professional coaching in tactical shooters. Led multiple squads to regional finals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                    <Target size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs md:text-sm mb-1">Philosophy</h3>
                    <p className="text-zinc-500 text-xs md:text-sm">Aggressive entry patterns combined with disciplined post-plant utility usage. Specializes in Reyna-centric compositions.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {[
                  { label: "Win Rate", val: "82%" },
                  { label: "Clutch %", val: "64%" },
                  { label: "ACS", val: "280" },
                ].map((stat, i) => (
                  <div key={i} className="p-3 md:p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center">
                    <div className="text-xl md:text-2xl font-black text-white">{stat.val}</div>
                    <div className="text-[8px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <FooterCredit />
    </div>
  );
};

export default Coach;