import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const navItems = ["Home", "Features", "About", "Pricing", "Reviews", "Dashboard"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => onNavigate('Home')}>
          <Logo className="h-8" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                currentPage === item ? 'text-accent' : 'text-white/70'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="bg-accent hover:bg-accent/80 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 glow-accent">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}
