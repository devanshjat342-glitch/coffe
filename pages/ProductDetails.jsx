import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  Heart,
  ShoppingBag,
  ArrowLeft,
  Coffee,
  Clock,
  Zap,
  MapPin,
  Check,
  Share2
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Regular (250ml)');
  const [selectedGrind, setSelectedGrind] = useState('Whole Beans');
  const [activeTab, setActiveTab] = useState('notes');

  const isFavorited = isInWishlist(product.id);

  const sizes = [
    { label: 'Regular (250ml)', priceOffset: 0 },
    { label: 'Large (350ml)', priceOffset: 40 },
    { label: 'Artisan Bottle (500ml)', priceOffset: 90 }
  ];

  const grindOptions = product.category === 'Pastries'
    ? ['Serve Warm', 'Serve Room Temp']
    : ['Whole Beans', 'Espresso Grind', 'Pour Over / Filter', 'French Press'];

  const computedPrice = product.price + (sizes.find(s => s.label === selectedSize)?.priceOffset || 0);

  const handleAddToCart = () => {
    addToCart(
      { ...product, price: computedPrice },
      quantity,
      { size: selectedSize, grind: selectedGrind }
    );
  };

  const relatedProducts = PRODUCTS
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-espresso">
      {/* Background ambient lighting */}
      <div className="absolute top-28 right-10 w-96 h-96 bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-latte hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Menu</span>
        </button>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Image Showcase (5 or 6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden glass-card p-3 border border-caramel/25 shadow-premium">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-darkCoffee">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-espresso/90 text-latte border border-coffeeBorder backdrop-blur-md">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-caramel text-white shadow-glow">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md border transition-all ${
                    isFavorited
                      ? 'bg-red-500/20 border-red-500/50 text-red-400'
                      : 'bg-espresso/70 border-white/10 text-cream/70 hover:text-white hover:bg-espresso'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-400' : ''}`} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Product Meta, Customizations & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-start"
          >
            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-sm font-bold text-cream">{product.rating}</span>
              <span className="text-xs text-cream/50">({product.reviewCount} connoisseur reviews)</span>
              <span className="text-xs text-caramel font-medium ml-3">Verified Specialty</span>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-caramel">
                ₹{computedPrice}
              </span>
              <span className="text-xs text-cream/50">Inclusive of all artisanal taxes</span>
            </div>

            {/* Short Description */}
            <p className="text-cream/80 text-sm sm:text-base font-light leading-relaxed mb-8">
              {product.longDescription || product.description}
            </p>

            {/* Quick Specs Badges */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl glass-card border border-coffeeBorder mb-8 text-center">
              <div>
                <Clock className="w-4 h-4 text-caramel mx-auto mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-latte block">Prep Time</span>
                <span className="text-xs font-semibold text-cream">{product.prepTime || '3-4 mins'}</span>
              </div>
              <div>
                <Zap className="w-4 h-4 text-caramel mx-auto mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-latte block">Caffeine</span>
                <span className="text-xs font-semibold text-cream">{product.caffeine || '120 mg'}</span>
              </div>
              <div>
                <Coffee className="w-4 h-4 text-caramel mx-auto mb-1" />
                <span className="text-[10px] uppercase tracking-wider text-latte block">Roast Profile</span>
                <span className="text-xs font-semibold text-cream truncate block px-1">{product.roastLevel || 'Medium'}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-latte font-semibold block mb-2.5">
                Serving Size:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {sizes.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(s.label)}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-semibold border transition-all text-center ${
                      selectedSize === s.label
                        ? 'bg-caramel/20 border-caramel text-white shadow-glow'
                        : 'bg-darkCoffee border-coffeeBorder text-cream/70 hover:border-caramel/40'
                    }`}
                  >
                    <div>{s.label.split(' ')[0]}</div>
                    <div className="text-[10px] text-latte font-normal">
                      {s.priceOffset > 0 ? `+₹${s.priceOffset}` : 'Standard'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Grind / Preparation Option */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-wider text-latte font-semibold block mb-2.5">
                Brew Prep / Grind:
              </label>
              <div className="flex flex-wrap gap-2">
                {grindOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedGrind(opt)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                      selectedGrind === opt
                        ? 'bg-cream text-espresso font-semibold border-cream'
                        : 'bg-darkCoffee border-coffeeBorder text-cream/70 hover:border-cream/40'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-coffeeBorder">
              {/* Stepper */}
              <div className="flex items-center justify-between sm:justify-start gap-4 px-4 py-3 rounded-full bg-darkCoffee border border-coffeeBorder">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full bg-espresso flex items-center justify-center text-cream hover:bg-caramel transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-cream text-sm w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full bg-espresso flex items-center justify-center text-cream hover:bg-caramel transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 py-4 px-8 rounded-full bg-gradient-to-r from-caramel to-caramelHover text-white text-xs uppercase tracking-wider font-semibold shadow-glow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Cart • ₹{computedPrice * quantity}</span>
              </motion.button>
            </div>

          </motion.div>

        </div>

        {/* Tabbed Tasting Notes & Origin Details */}
        <div className="mb-24">
          <div className="flex border-b border-coffeeBorder gap-8 mb-8">
            <button
              onClick={() => setActiveTab('notes')}
              className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'notes' ? 'text-caramel' : 'text-cream/60 hover:text-cream'
              }`}
            >
              Tasting Profile
              {activeTab === 'notes' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-caramel" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('origin')}
              className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'origin' ? 'text-caramel' : 'text-cream/60 hover:text-cream'
              }`}
            >
              Origin & Farm
              {activeTab === 'origin' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-caramel" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('brewing')}
              className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative ${
                activeTab === 'brewing' ? 'text-caramel' : 'text-cream/60 hover:text-cream'
              }`}
            >
              Brewing Advice
              {activeTab === 'brewing' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-caramel" />
              )}
            </button>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-coffeeBorder">
            {activeTab === 'notes' && (
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-white">Sensory Profile</h4>
                <p className="text-sm text-cream/70 font-light leading-relaxed">
                  Carefully assessed by our Q-Graders. Notes feature pronounced {product.notes ? product.notes.join(', ') : 'rich cocoa and stone fruits'}, balanced by vibrant citric brightness and an enduring sweet finish.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.notes?.map((n) => (
                    <span key={n} className="px-3.5 py-1.5 rounded-full bg-espresso border border-caramel/30 text-xs text-latte font-medium">
                      ✦ {n}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'origin' && (
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-white">Single Estate Origin</h4>
                <div className="flex items-center gap-2 text-caramel text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{product.origin || 'Karnataka High Altitude Highlands'}</span>
                </div>
                <p className="text-sm text-cream/70 font-light leading-relaxed">
                  Grown at 1,400 meters above sea level under natural shade trees. Nurtured by mineral-rich loam soil and harvested exclusively at peak brix sugar ripeness.
                </p>
              </div>
            )}

            {activeTab === 'brewing' && (
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-white">Recommended Brew Parameters</h4>
                <ul className="space-y-2 text-sm text-cream/70 font-light">
                  <li>• Water Temperature: 92°C – 94°C</li>
                  <li>• Brew Ratio: 1:16 (Coffee to Water)</li>
                  <li>• Recommended Method: V60 Pour Over, Aeropress, or Commercial Espresso (9 bars)</li>
                  <li>• Extraction Yield: 20-22% TDS balance</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Coffees */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                You May Also Savor
              </h3>
              <Link to="/menu" className="text-xs uppercase tracking-wider text-caramel hover:underline">
                View Full Menu →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
