import React from 'react';
import { motion } from 'framer-motion';
import { COFFEE_EXPERIENCE_STEPS } from '../data/products';
import { Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 lg:py-32 bg-darkCoffee relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-latte mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The Brewing Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            From Bean To Cup
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-cream/70 text-sm sm:text-base font-light"
          >
            Every phase of our process is guarded by meticulous craft, precision, and passion.
          </motion.p>
        </div>

        {/* 4 Steps Grid with Viewport Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          
          {/* Subtle Horizontal Connecting Guide for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-caramel/30 to-transparent -translate-y-12 pointer-events-none" />

          {COFFEE_EXPERIENCE_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group bg-espresso/90 rounded-3xl p-4 sm:p-5 border border-coffeeBorder hover:border-caramel/50 transition-all duration-300 shadow-premium flex flex-col justify-between"
            >
              <div>
                {/* Step Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-darkCoffee">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-black/30" />

                  {/* Step Number Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-espresso/90 backdrop-blur-md border border-caramel/40 flex items-center justify-center font-serif text-sm font-bold text-caramel shadow-glow">
                    {step.number}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-caramel transition-colors">
                  {step.title}
                </h3>
                <h4 className="text-sm font-medium text-latte mt-1 mb-3">
                  "{step.subtitle}"
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cream/65 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step completion pill */}
              <div className="mt-6 pt-4 border-t border-coffeeBorder/40 flex items-center justify-between text-xs text-cream/40">
                <span>Phase {step.number} of 04</span>
                <span className="w-2 h-2 rounded-full bg-caramel/40 group-hover:bg-caramel transition-colors" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
