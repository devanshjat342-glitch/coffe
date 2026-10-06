import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronDown, Coffee } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleVisual = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToFeatured = () => {
    const el = document.getElementById('featured');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Background with Parallax Scale & Gradient Overlays */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 -z-20 w-full h-[120%]"
      >
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1920&auto=format&fit=crop"
          alt="Artisan Coffee Roasting and Pouring"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-transparent" />
        <div className="absolute inset-0 bg-grain-texture opacity-50 mix-blend-overlay" />
      </motion.div>

      {/* Floating Coffee Bean Accent 1 */}
      <motion.div
        animate={{
          y: [-12, 14, -12],
          rotate: [0, 18, 0],
          x: [-6, 6, -6]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[8%] hidden xl:block w-12 h-16 rounded-[40%] bg-gradient-to-br from-[#4A2E1F] to-[#1C120C] border border-caramel/30 shadow-2xl opacity-65 pointer-events-none rotate-12 blur-[0.5px]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-10 bg-caramel/40 rounded-full" />
      </motion.div>

      {/* Floating Coffee Bean Accent 2 */}
      <motion.div
        animate={{
          y: [16, -18, 16],
          rotate: [25, -10, 25],
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[10%] hidden xl:block w-10 h-14 rounded-[40%] bg-gradient-to-br from-[#4A2E1F] to-[#1C120C] border border-caramel/30 shadow-2xl opacity-60 pointer-events-none -rotate-45"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-8 bg-caramel/40 rounded-full" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity: opacityText }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-6 shadow-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>CRAFTED WITH PASSION</span>
            </motion.div>

            {/* Large Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
            >
              Coffee Worth <br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-latte via-cream to-caramel">
                Waking Up For.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl text-cream/75 max-w-xl font-light leading-relaxed mb-8"
            >
              Slow roasted. Carefully crafted. Made for the moments that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToFeatured}
                className="px-8 py-4 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-glow flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <span>Explore Coffee</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/menu"
                  className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-cream border border-coffeeBorder text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center w-full"
                >
                  Order Now
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Micro-Metrics */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-coffeeBorder/30 grid grid-cols-3 gap-6 sm:gap-10"
            >
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-cream">85+</p>
                <p className="text-[11px] sm:text-xs text-latte/75 uppercase tracking-wider mt-0.5">
                  SCA Cup Score
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-cream">100%</p>
                <p className="text-[11px] sm:text-xs text-latte/75 uppercase tracking-wider mt-0.5">
                  Arabica Specialty
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-cream">48 Hr</p>
                <p className="text-[11px] sm:text-xs text-latte/75 uppercase tracking-wider mt-0.5">
                  Fresh Roast Window
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Visual Coffee Cup and Beans */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{ scale: scaleVisual }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Warm Radial Ambient Halo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-caramel/20 filter blur-3xl -z-10 animate-pulse" />

            {/* Rotating Ring Motif */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-caramel/20 border-dashed pointer-events-none"
            />

            {/* Main Interactive Coffee Cup Artwork Card */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl p-3 sm:p-4 glass-card border border-caramel/30 shadow-premium max-w-sm sm:max-w-md w-full"
            >
              {/* Coffee Visual Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop"
                  alt="BREWÉ Artisan Pour Over"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gentle steam animation overlay */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none">
                  <div className="w-1.5 h-16 bg-cream/40 rounded-full blur-[2px] animate-steam-1" />
                  <div className="w-1.5 h-20 bg-cream/35 rounded-full blur-[2px] animate-steam-2" />
                  <div className="w-1.5 h-14 bg-cream/30 rounded-full blur-[2px] animate-steam-3" />
                </div>

                {/* Floating Badge on Card */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-caramel/20 flex items-center justify-center text-caramel">
                      <Coffee className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white">Velvet Roast No. 4</h4>
                      <p className="text-[11px] text-latte">Single Origin Chikmagalur</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-caramel/30 text-caramel border border-caramel/40">
                    Fresh
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={scrollToFeatured}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream/60 hover:text-cream cursor-pointer transition-colors z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 text-caramel animate-bounce" />
      </motion.div>
    </section>
  );
}
