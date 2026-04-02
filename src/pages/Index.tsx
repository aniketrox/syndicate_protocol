"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, ChevronRight, MousePointer2, Swords } from 'lucide-react';
import TeamCard from '@/components/TeamCard';
import MatchCard from '@/components/MatchCard';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const team = [
    { name: "Allen", role: "Coach", nickname: "The Hulk", agent: "Reyna", image: "/src/assets/team/allen.jpg", isCoach: true },
    { name: "Akshar", role: "Manager", nickname: "The Funny Guy", agent: "Mics", image: "/src/assets/team/akshar.jpg" },
    { name: "Aniket", role: "Tech Support", nickname: "Ego Player", agent: "Omen", image: "/src/assets/team/aniket.jpg" },
    { name: "Dev", role: "Entry Fragger", nickname: "The Smurf", agent: "Iso", image: "/src/assets/team/dev.jpg" },
    { name: "Prem", role: "Clutch King", nickname: "The Clutch Guy", agent: "Gekko", image: "/src/assets/team/prem.jpg" },
    { name: "Shivam", role: "Duelist", nickname: "The Friendly Neighborhood", agent: "Neon", image: "/src/assets/team/shivam.jpg" },
    { name: "Tamas", role: "Sentinel", nickname: "The Fear", agent: "Chamber", image: "/src/assets/team/tamas.jpg" },
  ];

  const matches = [
    { opponent: "Team Liquid", tournament: "VCT Challengers", date: "Oct 24, 2023", time: "18:00 IST", logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop" },
    { opponent: "Sentinels", tournament: "Pro League S2", date: "Oct 28, 2023", time: "21:30 IST", logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-black italic">OG</div>
            <span className="text-xl font-black tracking-tighter uppercase italic">Akshar OG</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#team" className="hover:text-red-500 transition-colors">Roster</a>
            <a href="#matches" className="hover:text-red-500 transition-colors">Matches</a>
            <div className="flex items-center gap-4 ml-4">
              <a href="https://www.instagram.com/akshar_._07?igsh=MTN6OW5jeDh6dWZoNQ==" target="_blank" className="hover:text-red-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@aksharog?si=0FLavZFpIqJrD_Yv" target="_blank" className="hover:text-red-500 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Swords size={12} />
              Elite Valorant Squad
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              WE DON'T PLAY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">WE DOMINATE.</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 font-medium leading-relaxed">
              The official roster of Akshar OG. From tactical masterminds to clutch kings, we are redefining the competitive Valorant scene one headshot at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-red-600 text-white font-black uppercase text-sm tracking-widest hover:bg-red-700 transition-all rounded flex items-center gap-2 group">
                View Roster <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-black uppercase text-sm tracking-widest hover:bg-zinc-800 transition-all rounded">
                Latest Highlights
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-zinc-900 bg-zinc-950/50 py-10">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Win Rate", value: "78%" },
            { label: "Tournaments Won", value: "12" },
            { label: "Total Kills", value: "15.4K" },
            { label: "Avg ACS", value: "245" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <section id="team" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">The Roster</h2>
              <p className="text-zinc-500 font-medium max-w-md">Meet the legends behind the screens. Each member brings a unique tactical edge to the battlefield.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-red-600" />
              <div className="w-4 h-1 bg-zinc-800" />
              <div className="w-4 h-1 bg-zinc-800" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Matches Section */}
      <section id="matches" className="py-24 bg-zinc-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Upcoming Battles</h2>
              <p className="text-zinc-500 font-medium">Mark your calendars. The next conquest is about to begin.</p>
            </div>

            <div className="space-y-4">
              {matches.map((match, i) => (
                <MatchCard key={i} {...match} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center font-black italic text-xl">OG</div>
                <span className="text-2xl font-black tracking-tighter uppercase italic">Akshar OG</span>
              </div>
              <p className="text-zinc-500 text-sm font-medium text-center md:text-left">
                Professional Valorant Team & Content Creators. <br />
                Based in India, Dominating Globally.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-6">
                <a href="https://www.instagram.com/akshar_._07?igsh=MTN6OW5jeDh6dWZoNQ==" target="_blank" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-colors group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://youtube.com/@aksharog?si=0FLavZFpIqJrD_Yv" target="_blank" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 transition-colors group">
                  <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">
                © 2023 AKSHAR OG GAMING. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;