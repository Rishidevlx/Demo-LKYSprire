import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { Target, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="About" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
            <div className="relative glass p-12 rounded-[60px] border-gradient">
              <Logo className="mb-8" showText={false} size="h-32 w-32" />
              <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                At LyKSpire, we bridge the gap between complex technology and business growth. 
                Our platform is built on the foundation of seamless connectivity, 
                ensuring that every interaction between vendors and customers is efficient, 
                secure, and data-driven.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-bold">Precision</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-lavender" />
                  </div>
                  <span className="font-bold">Speed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full glass text-accent font-bold text-sm mb-4">
              WHY CHOOSE US
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Empowering Businesses with <span className="text-gradient">Smart Connectivity</span>
            </h3>
            <p className="text-white/60 text-lg">
              We don't just provide a platform; we provide a growth ecosystem. 
              Our tools are designed to automate the mundane so you can focus on the strategic.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Secure Infrastructure", desc: "Enterprise-grade security for all your data and communications.", icon: ShieldCheck },
                { title: "AI-Driven Insights", desc: "Predictive analytics to stay ahead of market trends.", icon: Zap },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
