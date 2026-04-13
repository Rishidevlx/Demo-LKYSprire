import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Particles (Simplified) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * 100 + "%"],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-accent rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lavender rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Connecting <span className="text-transparent bg-clip-text bg-hero-gradient">Technology</span> <br />
            with <span className="text-accent">Growth</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Smart platform for seamless vendor & customer interaction. 
            Scale your business with AI-powered insights and secure communication.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button className="group relative bg-accent text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 glow-accent overflow-hidden shadow-[0_0_30px_rgba(124,69,163,0.3)] hover:shadow-[0_0_50px_rgba(124,69,163,0.6)]">
              <span className="relative z-10">Start Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button className="glass px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all hover:bg-white/10 hover:scale-105 active:scale-95 border border-white/10 hover:border-white/30">
              <Play className="w-5 h-5 fill-white" />
              <span>View Demo</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
