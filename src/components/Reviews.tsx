import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Arun Kumar",
    rating: 5,
    review: "Amazing platform! Super smooth and modern UI. It has completely transformed how we handle our vendor relations."
  },
  {
    name: "Divya",
    rating: 4,
    review: "Very helpful for managing vendors efficiently. The masked communication feature is a game changer for privacy."
  },
  {
    name: "Rahul",
    rating: 5,
    review: "Best SaaS experience I've used so far! The dashboard is incredibly intuitive and the animations are top-notch."
  }
];

export default function Reviews() {
  return (
    <section id="Reviews" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full glass text-accent font-bold text-sm mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-sm">
            Join hundreds of businesses that have scaled their operations with LyKSpire's smart ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-[40px] flex flex-col justify-between hover-lift border border-white/5 hover:border-accent/20 transition-all duration-500 ${
                i === 1 ? 'lg:translate-y-12' : ''
              }`}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={`${
                        starIndex < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/10'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-8 italic">
                  "{review.review}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-lavender flex items-center justify-center font-bold text-white shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-accent font-medium uppercase tracking-wider">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats / Social Proof Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass p-8 rounded-[30px] flex flex-wrap justify-around items-center gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-display font-bold text-white">500+</p>
            <p className="text-sm text-white/40 uppercase tracking-widest">Active Clients</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <p className="text-3xl font-display font-bold text-white">98%</p>
            <p className="text-sm text-white/40 uppercase tracking-widest">Satisfaction Rate</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div>
            <p className="text-3xl font-display font-bold text-white">24/7</p>
            <p className="text-sm text-white/40 uppercase tracking-widest">Expert Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
