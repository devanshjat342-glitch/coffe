import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.3 }
    })
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      className="py-24 lg:py-32 bg-darkCoffee relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-caramel/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-latte mb-3 shadow-subtle">
            <Heart className="w-3.5 h-3.5 text-caramel fill-caramel" />
            <span>Community Echoes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Loved By Coffee Ritualists
          </h2>
          <p className="mt-3 text-cream/70 text-sm sm:text-base font-light">
            Real stories from our patrons who start their day with BREWÉ.
          </p>
        </div>

        {/* Testimonial Card Display with Carousel Animation */}
        <div className="relative min-h-[340px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glass-card p-8 sm:p-12 lg:p-14 rounded-4xl border border-caramel/25 shadow-premium text-center relative max-w-3xl mx-auto"
            >
              {/* Quote Mark Watermark */}
              <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-caramel/15 absolute top-6 left-8 -z-0" />

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-6 relative z-10">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-serif text-xl sm:text-3xl text-white font-medium italic leading-relaxed mb-8 relative z-10 max-w-2xl mx-auto">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-caramel/50 shadow-glow"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-lg font-bold text-cream">
                    — {activeTestimonial.author}
                  </h4>
                  <p className="text-xs text-latte">
                    {activeTestimonial.role} • {activeTestimonial.city}
                  </p>
                  <p className="text-[11px] text-cream/50 mt-0.5">
                    Favorite: <span className="text-caramel font-semibold">{activeTestimonial.favoriteBrew}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full glass-panel hover:bg-espresso border border-coffeeBorder text-cream/70 hover:text-white transition-all shadow-subtle hover:scale-105 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-caramel' : 'w-2.5 bg-coffeeBorder hover:bg-cream/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full glass-panel hover:bg-espresso border border-coffeeBorder text-cream/70 hover:text-white transition-all shadow-subtle hover:scale-105 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
