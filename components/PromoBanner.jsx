import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PromoBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section
      ref={containerRef}
      className="relative py-28 lg:py-40 overflow-hidden flex items-center justify-center"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920&auto=format&fit=crop"
          alt="Artisan Roaster Brewing Coffee"
          className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.1]"
        />
        {/* Deep dark coffee gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-darkCoffee/85 to-espresso" />
        <div className="absolute inset-0 bg-grain-texture opacity-40 mix-blend-overlay" />
      </motion.div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card max-w-3xl mx-auto p-8 sm:p-14 rounded-4xl border border-caramel/30 shadow-premium"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-caramel/20 border border-caramel/40 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-6">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>Elevate The Moment</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            Your Morning Ritual <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-latte via-cream to-caramel">
              Deserves Better Coffee.
            </span>
          </h2>

          <p className="text-cream/80 text-sm sm:text-base font-light max-w-lg mx-auto mb-8">
            Experience our master blends and micro-lot single origins. Delivered to your doorstep freshly roasted.
          </p>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/menu"
              className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-caramel to-caramelHover text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-glow hover:shadow-2xl transition-all inline-flex items-center gap-3"
            >
              <span>Discover Our Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
