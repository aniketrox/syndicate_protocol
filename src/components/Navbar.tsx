"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Menu, X } from 'lucide-react';
import SyndicateLogo from './SyndicateLogo';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Coach', path: '/coach' },
    { name: 'Roster', path: '/roster' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <SyndicateLogo />
          <span className="text-2xl font-black tracking-tighter uppercase italic group-hover:text-red-500 transition-colors">
            Syndicate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`hover:text-red-500 transition-colors relative py-1 ${location.pathname === link.path ? 'text-white' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"
                />
              )}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-zinc-800 pl-8">
            <a href="https://www.instagram.com/akshar_._07?igsh=MTN6OW5jeDh6dWZoNQ==" target="_blank" className="hover:text-red-500 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://youtube.com/@aksharog?si=0FLavZFpIqJrD_Yv" target="_blank" className="hover:text-red-500 transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-red-500"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-6 pt-4 border-t border-zinc-800">
                <a href="https://www.instagram.com/akshar_._07?igsh=MTN6OW5jeDh6dWZoNQ==" target="_blank" className="text-zinc-400 hover:text-red-500">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com/@aksharog?si=0FLavZFpIqJrD_Yv" target="_blank" className="text-zinc-400 hover:text-red-500">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;