import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Phone, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Smart Orders",
    icon: ShoppingCart,
    description: "AI-powered order placement system that predicts demand and optimizes inventory.",
    color: "from-accent to-lavender"
  },
  {
    title: "Masked Communication",
    icon: Phone,
    description: "Secure Twilio-based masked calls to protect privacy while maintaining connectivity.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Vendor Matching",
    icon: Users,
    description: "Auto vendor assignment system based on proximity, rating, and capacity.",
    color: "from-purple-500 to-pink-400"
  }
];

export default function Features() {
  return (
    <section id="Features" className="py-24 bg-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Powerful Features</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Everything you need to manage your vendor ecosystem in one smart platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-10 rounded-[40px] glass-dark overflow-hidden hover-lift border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              {/* Gradient Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {feature.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-accent font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
