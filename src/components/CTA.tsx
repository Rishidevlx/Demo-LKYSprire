import React from 'react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative glass-dark p-12 md:p-20 rounded-[50px] overflow-hidden text-center"
        >
          {/* Pulsing Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-accent rounded-full blur-[100px] -z-10"
          />

          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            Start scaling your <br /> business today
          </h2>
          
          <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
            Create Account
          </button>
        </motion.div>
      </div>
    </section>
  );
}
