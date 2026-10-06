import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import WhyBrewe from '../components/WhyBrewe';
import Experience from '../components/Experience';
import PromoBanner from '../components/PromoBanner';
import StorySection from '../components/StorySection';
import Testimonials from '../components/Testimonials';
import SocialSection from '../components/SocialSection';
import Newsletter from '../components/Newsletter';
import CategoryFilter from '../components/CategoryFilter';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter 4 Signature Brews for Featured Section
  const signatureBrews = PRODUCTS.filter((p) => p.isSignature);

  // Dynamic products for Menu section preview
  const menuPreviewProducts = selectedCategory === 'All'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative">
      {/* 1. Full-screen Cinematic Hero */}
      <Hero />

      {/* 2. Featured Coffee Section: "Our Signature Brews" */}
      <section id="featured" className="py-24 lg:py-32 bg-darkCoffee relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-latte mb-4 shadow-subtle"
            >
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>Master Crafts</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight"
            >
              Our Signature Brews
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-cream/70 text-sm sm:text-base font-light"
            >
              Four exceptional expressions of specialty roasting, extracted with meticulous care.
            </motion.p>
          </div>

          {/* 4 Signature Product Cards */}
          <ProductGrid products={signatureBrews} columns={4} />

          {/* Link to Full Menu */}
          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass-panel hover:bg-caramel hover:text-white border border-caramel/40 text-cream text-xs uppercase tracking-widest font-semibold transition-all shadow-subtle group hover:scale-105"
            >
              <span>Explore All Brews</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why BREWÉ Section: "More Than Coffee" */}
      <WhyBrewe />

      {/* 4. Coffee Experience Section: "From Bean To Cup" */}
      <Experience />

      {/* 5. Menu Section with Interactive Filter */}
      <section className="py-24 lg:py-32 bg-espresso relative overflow-hidden border-t border-coffeeBorder/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-caramel text-xs font-semibold uppercase tracking-[0.25em] mb-2 block">
                The Roastery Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Curated Coffee Menu
              </h2>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-latte hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors group"
            >
              <span>View Full Menu & Roasts</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-10">
            <CategoryFilter
              categories={CATEGORIES}
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Filtered Grid */}
          <ProductGrid products={menuPreviewProducts} columns={4} />
        </div>
      </section>

      {/* 6. Premium Promo Section */}
      <PromoBanner />

      {/* 7. Our Story Section */}
      <StorySection />

      {/* 8. Testimonials Carousel */}
      <Testimonials />

      {/* 9. Social Media Instagram Grid */}
      <SocialSection />

      {/* 10. Newsletter Dispatch */}
      <Newsletter />
    </div>
  );
}
