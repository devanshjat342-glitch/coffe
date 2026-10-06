import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_EVENTS } from '../data/products';
import { Sparkles, Calendar, Coffee } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-espresso relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-caramel/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-darkCoffee/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-4 shadow-subtle"
          >
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>Our Roots & Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Born From A Love For Coffee.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-cream/75 text-base sm:text-lg font-light leading-relaxed"
          >
            What began as an obsessive search for the perfect cup turned into a devotion to origin, craft roasting, and the human connections fostered over freshly pulled espresso.
          </motion.p>
        </div>

        {/* Story Narrative & Image Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left: Origin Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-cream/80 font-light text-sm sm:text-base leading-relaxed"
          >
            <p>
              In 2018, frustrated by over-commercialized, burnt roasts masking subpar beans, we traveled to the mist-shrouded high elevations of Chikmagalur and the birthplace of Arabica in Ethiopia. There we encountered farmers whose reverence for the soil mirrored our reverence for the craft.
            </p>
            <p>
              We founded <strong className="text-white font-serif font-bold">BREWÉ</strong> on a simple promise: never compromise on terroir, never rush a roast curve, and treat every coffee cherry with the dignity it deserves.
            </p>
            <p>
              Today, our small-batch roasteries combine time-honored artisanal instincts with scientific thermodynamic profiling, ensuring every sip is vibrant, nuanced, and intensely memorable.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="font-serif text-3xl font-bold text-caramel">100%</span>
                <p className="text-xs text-latte uppercase tracking-wider mt-1">Direct Farm Trade</p>
              </div>
              <div className="w-[1px] h-10 bg-coffeeBorder" />
              <div>
                <span className="font-serif text-3xl font-bold text-caramel">85+</span>
                <p className="text-xs text-latte uppercase tracking-wider mt-1">Specialty Grade Only</p>
              </div>
              <div className="w-[1px] h-10 bg-coffeeBorder" />
              <div>
                <span className="font-serif text-3xl font-bold text-caramel">Zero</span>
                <p className="text-xs text-latte uppercase tracking-wider mt-1">Artificial Flavors</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-coffeeBorder shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=800&auto=format&fit=crop"
                  alt="Coffee bean roasting drum"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-2xl glass-card border border-caramel/20 text-center">
                <Coffee className="w-5 h-5 text-caramel mx-auto mb-1.5" />
                <span className="font-serif text-sm font-bold text-cream">Artisan Batch Roasting</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-2xl glass-card border border-caramel/20 text-center">
                <span className="text-xs uppercase tracking-widest text-latte font-semibold">Handpicked</span>
                <p className="font-serif text-sm font-bold text-cream mt-0.5">Single Origin Estate</p>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-coffeeBorder shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop"
                  alt="Harvesting fresh coffee beans"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <div className="text-center mb-14">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Milestones of BREWÉ
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-latte mt-1">
              From our garage beginnings to global coffee rituals
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {TIMELINE_EVENTS.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-3xl glass-card border border-coffeeBorder hover:border-caramel/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Year Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-caramel group-hover:scale-105 transition-transform">
                      {item.year}
                    </span>
                    <span className="p-2 rounded-xl bg-espresso border border-coffeeBorder text-cream/40 group-hover:text-caramel transition-colors">
                      <Calendar className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-caramel transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-coffeeBorder/30 flex items-center justify-between text-[11px] text-latte/60">
                  <span>Chapter {idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
