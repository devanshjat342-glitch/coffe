import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Sprout, Heart, ShieldCheck, Award } from 'lucide-react';

export default function WhyBrewe() {
  const features = [
    {
      icon: Coffee,
      title: "Ethically Sourced",
      description: "Direct-trade relationships paying up to 40% above fair trade standards to family-owned single estate farms across Karnataka, Ethiopia and Colombia."
    },
    {
      icon: Sprout,
      title: "Freshly Roasted",
      description: "Small-batch drum roasted twice weekly in our micro-roasteries. Every bag is stamped with its roast date and delivered during peak degassing."
    },
    {
      icon: Heart,
      title: "Crafted With Care",
      description: "Dialed down to the micron. Custom water mineralization, thermal profile precision, and artisanal sensory evaluation for every batch."
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-espresso">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-caramel/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Coffee Image with Editorial Framing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-caramel/25 shadow-premium">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
                  alt="Brewé artisan coffee preparation"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkCoffee/80 via-transparent to-black/20" />
                
                {/* Floating Artisan Seal */}
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-caramel" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-cream">
                    SCA Certified 85+
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl border border-caramel/20">
                  <p className="font-serif italic text-base sm:text-lg text-cream mb-1">
                    "Great coffee is not made by machines, but by human curiosity."
                  </p>
                  <p className="text-xs uppercase tracking-wider text-latte font-medium">
                    — Master Roaster at BREWÉ
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Offset Border Frame */}
            <div className="absolute -inset-2 rounded-[2rem] border border-caramel/15 -z-10 translate-x-3 translate-y-3 hidden sm:block" />
          </motion.div>

          {/* Right Column: Copy & 3 Signature Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Kicker */}
            <div className="flex items-center gap-2 text-caramel text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-6 h-[1px] bg-caramel" />
              <span>The Artisan Standard</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              More Than Coffee.
            </h2>

            {/* Main Content */}
            <p className="text-base sm:text-lg text-cream/80 font-light leading-relaxed mb-10">
              Every cup starts with carefully selected beans, slow roasting and a passion for creating exceptional coffee.
            </p>

            {/* 3 Features List */}
            <div className="space-y-6">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="p-5 rounded-2xl glass-card border border-coffeeBorder hover:border-caramel/40 transition-all duration-300 flex items-start gap-4 group hover:bg-darkCoffee/90"
                  >
                    <div className="w-12 h-12 rounded-xl bg-espresso flex items-center justify-center text-caramel border border-caramel/30 flex-shrink-0 group-hover:scale-110 group-hover:bg-caramel group-hover:text-white transition-all shadow-subtle">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-cream group-hover:text-caramel transition-colors mb-1.5 flex items-center gap-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
