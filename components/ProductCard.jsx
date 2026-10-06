import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);

  const handleCardClick = () => {
    navigate(`/coffee/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleCardClick}
      className="group relative bg-darkCoffee/80 hover:bg-darkCoffee border border-caramel/15 hover:border-caramel/40 rounded-3xl overflow-hidden shadow-premium flex flex-col justify-between transition-all duration-300 cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-espresso">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkCoffee via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Category or Status Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-espresso/80 text-latte border border-coffeeBorder backdrop-blur-md">
            {product.category}
          </span>
          {product.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-caramel text-white shadow-glow">
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleWishlist}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md border transition-all ${
            isFavorited
              ? 'bg-red-500/20 border-red-500/50 text-red-400'
              : 'bg-espresso/70 border-white/10 text-cream/70 hover:text-white hover:bg-espresso'
          }`}
        >
          <Heart
            className={`w-4 h-4 ${isFavorited ? 'fill-red-400 text-red-400' : ''}`}
          />
        </motion.button>

        {/* Quick View Pill (revealed on hover) */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-espresso/90 backdrop-blur-md text-[11px] text-cream border border-caramel/30 font-medium">
          <Eye className="w-3.5 h-3.5 text-caramel" />
          <span>Details</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-semibold text-cream">{product.rating}</span>
            <span className="text-[11px] text-cream/40">({product.reviewCount})</span>
            {product.roastLevel && (
              <span className="text-[11px] text-latte/70 ml-auto truncate max-w-[120px]">
                {product.roastLevel}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-caramel transition-colors line-clamp-1 mb-1.5">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-cream/65 line-clamp-2 font-light leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Tasting notes tags */}
          {product.notes && product.notes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {product.notes.slice(0, 2).map((note) => (
                <span
                  key={note}
                  className="px-2 py-0.5 rounded-md bg-espresso/60 text-[10px] text-latte border border-coffeeBorder/40"
                >
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-4 border-t border-coffeeBorder/40 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-cream/50">Price</span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-white">
              ₹{product.price}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-subtle group/btn"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
