"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Activity, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MatchCard from '@/components/MatchCard';
import SyndicateLogo from '@/components/SyndicateLogo';
import FooterCredit from "@/components/FooterCredit";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const matches = [
    { 
      opponent: "Unknown Team", 
      tournament: "Syndicate Invitational", 
      date: "TBD", 
      time: "20:30 IST", 
      logo: "" 
    },
    { 
      opponent: "Unknown Team", 
      tournament: "Challengers League", 
      date: "TBD", 
      time: "20:30 IST", 
      logo: "" 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, skewX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      skewX: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
            alt="Tactical Background" 
            className="w-full h-full object-cover opacity-40 scale-110"
            style={{ filter: 'contrast(1.2) brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/20 to-zinc-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
        </motion.div>

        {/* Floating Tactical Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                delay: i * 2 
              }}
              className="absolute text-red-500/20"
              style={{ 
                top: `${20 + i * 15}%`, 
                left: `${10 + i * 20}%` 
              }}
            >
              {i % 2 === 0 ? <Target size={100 + i * 20} /> : <Zap size={80 + i * 20} />}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div style={{ opacity }} className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-red-600/20 border border-red-600/40 text-red-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-sm"
            >
              <Activity size={14} className="animate-pulse" />
              Syndicate Protocol Active
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative mb-8 md:mb-10"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] relative z-10">
                <motion.span variants={itemVariants} className="inline-block mr-4">JOIN</motion.span>
                <motion.span variants={itemVariants} className="inline-block">THE</motion.span>
                <br />
                <motion.span 
                  variants={itemVariants}
                  className="relative inline-block"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-400">SYNDICATE.</span>
                  
                  {/* Enhanced Glitch Layers */}
                  <motion.span 
                    animate={{ 
                      x: [-2, 2, -1, 3, -2], 
                      y: [0, -1, 1, 0, -1],
                      opacity: [0, 0.6, 0.2, 0.7, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.15, 
                      repeatDelay: 2,
                      times: [0, 0.2, 0.4, 0.6, 1]
                    }}
                    className="absolute inset-0 text-cyan-400 -z-10 translate-x-1 select-none"
                  >
                    SYNDICATE.
                  </motion.span>
                  <motion.span 
                    animate={{ 
                      x: [2, -2, 3, -1, 2], 
                      y: [0, 1, -1, 0, 1],
                      opacity: [0, 0.6, 0.2, 0.7, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.15, 
                      repeatDelay: 2.1,
                      times: [0, 0.2, 0.4, 0.6, 1]
                    }}
                    className="absolute inset-0 text-red-400 -z-10 -translate-x-1 select-none"
                  >
                    SYNDICATE.
                  </motion.span>
                  
                  {/* Scanning Line Reveal */}
                  <motion.div 
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 w-1 bg-white/30 blur-sm -z-10"
                  />
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-zinc-100 text-lg md:text-2xl max-w-2xl mb-10 md:mb-12 font-medium leading-relaxed border-l-4 border-red-600 pl-4 md:pl-8"
            >
              We are not just a team. We are a tactical collective engineered for absolute dominance in the Valorant arena.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <Link to="/roster" className="px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white font-black uppercase text-xs md:text-sm tracking-widest hover:bg-red-700 transition-all rounded-sm flex items-center justify-center gap-3 group relative overflow-hidden shadow-lg shadow-red-600/20">
                <span className="relative z-10">Enter Roster</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div 
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"
                />
              </Link>
              <Link to="/coach" className="px-8 md:px-10 py-4 md:py-5 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-white font-black uppercase text-xs md:text-sm tracking-widest hover:bg-zinc-800 transition-all rounded-sm text-center relative group overflow-hidden">
                <span className="relative z-10">Meet the Coach</span>
                <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Side Text */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden 2xl:block"
        >
          <span className="text-[120px] font-black text-zinc-900/40 uppercase tracking-tighter select-none">
            SYNDICATE
          </span>
        </motion.div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-20 md:py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12 md:mb-16"
            >
              <div className="h-px flex-1 bg-zinc-900" />
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-center">Upcoming Battles</h2>
              <div className="h-px flex-1 bg-zinc-900" />
            </motion.div>

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

            <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] text-center">
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