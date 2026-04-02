"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import FooterCredit from "@/components/FooterCredit";

const Roster = () => {
  const team = [
    { name: "Akshar", role: "Manager", nickname: "The Funny Guy", agent: "Mics", image: "/src/assets/team/akshar.jpg" },
    { name: "Aniket", role: "Tech Support", nickname: "Ego Player", agent: "Omen", image: "/src/assets/team/aniket.jpg" },
    { name: "Dev", role: "Entry Fragger", nickname: "The Smurf", agent: "Iso", image: "/src/assets/team/dev.jpg" },
    { name: "Prem", role: "Clutch King", nickname: "The Clutch Guy", agent: "Gekko", image: "/src/assets/team/prem.jpg" },
    { name: "Shivam", role: "Duelist", nickname: "The Friendly Neighborhood", agent: "Neon", image: "/src/assets/team/shivam.jpg" },
    { name: "Tamas", role: "Sentinel", nickname: "The Fear", agent: "Chamber", image: "/src/assets/team/tamas.jpg" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6"
            >
              THE <span className="text-red-600">SYNDICATE</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 max-w-2xl mx-auto font-medium text-lg"
            >
              A collective of elite tactical specialists. Each member is a vital gear in the Syndicate machine, engineered for absolute dominance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <FooterCredit />
    </div>
  );
};

export default Roster;