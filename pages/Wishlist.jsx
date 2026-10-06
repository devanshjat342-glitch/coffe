import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveAllToCart = () => {
    wishlist.forEach((item) => {
      addToCart(item, 1);
    });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-espresso">
      {/* Background glow */}
      <div className="absolute top-28 right-1/4 w-96 h-96 bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-2">
              <Heart className="w-3.5 h-3.5 text-caramel fill-caramel" />
              <span>Saved Delights</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Your Wishlist
            </h1>
          </div>

          {wishlist.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleMoveAllToCart}
                className="px-5 py-2.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-subtle flex items-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Move All to Cart</span>
              </button>
              <button
                onClick={clearWishlist}
                className="p-2.5 rounded-full glass-panel hover:bg-red-500/20 text-cream/60 hover:text-red-400 border border-coffeeBorder transition-colors"
                title="Clear all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-darkCoffee/50 rounded-4xl border border-coffeeBorder/40 max-w-xl mx-auto p-8">
            <div className="w-20 h-20 rounded-full bg-espresso flex items-center justify-center text-caramel/40 mx-auto mb-5 border border-coffeeBorder">
              <Heart className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs sm:text-sm text-cream/60 mb-8 max-w-sm mx-auto font-light">
              Tap the heart icon on any coffee or roast you love to save it for your next order.
            </p>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-glow inline-flex items-center gap-2"
            >
              <span>Explore Coffee</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
