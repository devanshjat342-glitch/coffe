import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProducts = searchTerm.trim() === ''
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.notes?.some((n) => n.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const handleSelect = (productId) => {
    onClose();
    navigate(`/coffee/${productId}`);
  };

  const popularTags = ['Espresso', 'Cold Brew', 'Caramel Latte', 'Pastries', 'Dark Roast'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-darkCoffee border border-caramel/25 rounded-3xl p-6 shadow-2xl overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-caramel absolute left-4" />
              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search single origins, lattes, cold brews..."
                className="w-full pl-12 pr-12 py-3.5 bg-espresso/80 text-cream placeholder-cream/40 rounded-2xl border border-coffeeBorder focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel text-base transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-12 text-cream/40 hover:text-cream transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="ml-3 p-2 text-cream/60 hover:text-white rounded-xl hover:bg-espresso/50 transition-colors"
                aria-label="Close search"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Suggestions */}
            {searchTerm.trim() === '' && (
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-latte/70 font-semibold mb-3">
                  Trending Brews
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-espresso/60 hover:bg-caramel/20 text-cream/80 hover:text-caramel border border-coffeeBorder transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="mt-8 border-t border-coffeeBorder/40 pt-4">
                  <p className="text-xs uppercase tracking-wider text-latte/70 font-semibold mb-3">
                    Featured Today
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {PRODUCTS.slice(0, 2).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className="flex items-center gap-3 p-2.5 rounded-2xl bg-espresso/50 border border-coffeeBorder/40 hover:border-caramel/40 cursor-pointer group transition-all"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div className="truncate">
                          <h4 className="text-sm font-medium text-cream group-hover:text-caramel transition-colors truncate">
                            {item.name}
                          </h4>
                          <span className="text-xs text-caramel font-semibold">₹{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Search Results */}
            {searchTerm.trim() !== '' && (
              <div className="mt-4 max-h-[380px] overflow-y-auto space-y-2 pr-1">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-3 rounded-2xl bg-espresso/40 border border-coffeeBorder/30 hover:border-caramel/40 hover:bg-espresso/70 transition-all group cursor-pointer"
                      onClick={() => handleSelect(product.id)}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-caramel font-medium uppercase tracking-wider">
                              {product.category}
                            </span>
                            {product.isSignature && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-caramel/20 text-caramel font-semibold">
                                Signature
                              </span>
                            )}
                          </div>
                          <h4 className="text-cream font-medium text-sm sm:text-base group-hover:text-caramel transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-cream/60 line-clamp-1">{product.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-cream">₹{product.price}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                          }}
                          className="p-2 rounded-xl bg-caramel hover:bg-caramelHover text-white transition-transform active:scale-95"
                          title="Quick Add"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-cream/50 text-sm">No coffee found matching "{searchTerm}"</p>
                    <button
                      onClick={() => {
                        onClose();
                        navigate('/menu');
                      }}
                      className="mt-3 text-xs text-caramel hover:underline inline-flex items-center gap-1"
                    >
                      Browse full menu <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
