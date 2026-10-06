import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, Award, Sparkles, Heart, Sprout, ArrowRight } from 'lucide-react';
import StorySection from '../components/StorySection';
import Experience from '../components/Experience';

export default function Story() {
  return (
    <div className="pt-28 min-h-screen bg-espresso">
      {/* Story Page Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1920&auto=format&fit=crop"
            alt="Artisan Roaster"
            className="w-full h-full object-cover filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/80 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The Artisan Chronicle</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            A Sanctuary For <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-latte via-cream to-caramel">
              Pure Specialty Coffee.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-cream/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            From quiet sunrise cuppings to pioneering sustainable shade-grown partnerships across three continents.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-20 bg-darkCoffee border-t border-b border-coffeeBorder/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-coffeeBorder">
              <div className="w-12 h-12 rounded-2xl bg-espresso flex items-center justify-center text-caramel border border-caramel/30 mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Terroir First</h3>
              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                Coffee is a fruit shaped by altitude, soil minerals, and mountain air. We honor individual farm lots by highlighting origin characteristics rather than burning them away with dark ash.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-coffeeBorder">
              <div className="w-12 h-12 rounded-2xl bg-espresso flex items-center justify-center text-caramel border border-caramel/30 mb-6">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Direct Agroforestry</h3>
              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                We trade directly with multi-generational estates practicing organic canopy shade farming. This preserves native flora, birds, and natural honeybee ecosystems in the Western Ghats.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-coffeeBorder">
              <div className="w-12 h-12 rounded-2xl bg-espresso flex items-center justify-center text-caramel border border-caramel/30 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Artisan Precision</h3>
              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed">
                Every roast is measured with dual thermocouples, tracking rate of rise down to the second. What lands in your cup is the culmination of hundreds of hours of sensory perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Narrative & Milestones */}
      <StorySection />

      {/* Experience Bean-to-Cup */}
      <Experience />

      {/* Visit Us CTA Banner */}
      <section className="py-20 bg-espresso text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Taste The Difference in Person
          </h2>
          <p className="text-cream/70 text-sm mb-8 font-light">
            Visit our tasting rooms in Indiranagar, Bangalore or Pali Hill, Bandra. Let our baristas guide you through a sensory flight of seasonal micro-lots.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold shadow-glow inline-flex items-center gap-2"
            >
              <span>Find Our Roasteries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-cream border border-coffeeBorder text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
            >
              <span>Order Fresh Beans Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
