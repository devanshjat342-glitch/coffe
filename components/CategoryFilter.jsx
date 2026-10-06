import React from 'react';
import { motion } from 'framer-motion';

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors duration-300 z-10 ${
              isActive ? 'text-white' : 'text-cream/70 hover:text-cream hover:bg-espresso/60'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategoryPill"
                className="absolute inset-0 bg-gradient-to-r from-caramel to-caramelHover rounded-full shadow-glow -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
