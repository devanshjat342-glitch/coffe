import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.notes?.some((n) => n.toLowerCase().includes(q)) ||
          item.origin?.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // Keep signature items first
        result.sort((a, b) => (b.isSignature ? 1 : 0) - (a.isSignature ? 1 : 0));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-espresso">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-caramel/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-4">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The Coffee Craft</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            Our Artisan Menu
          </h1>

          <p className="text-cream/75 text-sm sm:text-base font-light">
            Every cup freshly ground and brewed to order. Explore single estate origins, velvety milk creations, and slow chilled cold brews.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-caramel absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brews, roasts, origins..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-darkCoffee border border-coffeeBorder text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-caramel transition-all"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs text-cream/60 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-caramel" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-darkCoffee border border-coffeeBorder text-cream text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-caramel cursor-pointer"
              >
                <option value="featured">Signature & Featured</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-latte">
          <span>Showing {filteredProducts.length} handcrafted items</span>
          {activeCategory !== 'All' && (
            <button
              onClick={() => setActiveCategory('All')}
              className="text-caramel hover:underline"
            >
              Reset Category
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <div className="text-center py-20 bg-darkCoffee/50 rounded-3xl border border-coffeeBorder/40">
            <h3 className="font-serif text-xl text-cream mb-2">No coffees found</h3>
            <p className="text-xs text-cream/50 max-w-sm mx-auto mb-6">
              We couldn't find any roast matching your filters. Try selecting a different category or clearing search terms.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Show All Items
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
