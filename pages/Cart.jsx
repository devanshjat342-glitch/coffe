import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Tag,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shipping,
    taxes,
    grandTotal
  } = useCart();

  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCode.trim().toUpperCase();

    if (code === 'BREWE20') {
      const disc = Math.round(subtotal * 0.2);
      setDiscount(disc);
      setPromoApplied('BREWE20 (20% Off)');
      setPromoCode('');
    } else if (code === 'FIRSTSIP') {
      setDiscount(100);
      setPromoApplied('FIRSTSIP (₹100 Off)');
      setPromoCode('');
    } else {
      setPromoError('Invalid coupon code. Try "BREWE20" or "FIRSTSIP"');
    }
  };

  const finalTotal = Math.max(0, grandTotal - discount);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-espresso">
      {/* Background glow */}
      <div className="absolute top-28 left-1/3 w-96 h-96 bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-caramel" />
              <span>Checkout Preview</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Your Brew Basket
            </h1>
          </div>

          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-cream/50 hover:text-red-400 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Entire Basket</span>
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-darkCoffee/50 rounded-4xl border border-coffeeBorder/40 max-w-xl mx-auto p-8">
            <div className="w-20 h-20 rounded-full bg-espresso flex items-center justify-center text-caramel/40 mx-auto mb-5 border border-coffeeBorder">
              <ShoppingBag className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Your Basket Is Empty
            </h3>
            <p className="text-xs sm:text-sm text-cream/60 mb-8 max-w-sm mx-auto font-light">
              Explore our freshly roasted beans, handcrafted lattes, and limited reserve cold brews.
            </p>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-glow inline-flex items-center gap-2"
            >
              <span>Browse Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Cart Items List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={`${item.product.id}-${item.size}`}
                  layout
                  className="p-5 rounded-3xl glass-card border border-coffeeBorder/40 flex flex-col sm:flex-row items-center gap-5 group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 rounded-2xl object-cover border border-coffeeBorder flex-shrink-0"
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-[10px] uppercase tracking-wider text-caramel font-semibold">
                      {item.product.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-caramel transition-colors">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-latte/70 mt-0.5">
                      {item.size} • {item.grind || 'Whole Beans'}
                    </p>

                    <div className="font-serif text-base font-bold text-cream mt-2">
                      ₹{item.product.price} each
                    </div>
                  </div>

                  {/* Quantity & Item Subtotal */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                    <div className="flex items-center gap-3 bg-espresso border border-coffeeBorder rounded-full px-3 py-1.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1, item.size)}
                        className="text-cream/60 hover:text-white transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-semibold text-white w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1, item.size)}
                        className="text-cream/60 hover:text-white transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-serif text-lg font-bold text-white">
                        ₹{item.product.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="p-2 text-cream/40 hover:text-red-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-latte hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Ordering More Brews</span>
                </Link>
              </div>
            </div>

            {/* Right: Order Summary & Checkout (5 cols) */}
            <div className="lg:col-span-5">
              <div className="glass-card p-6 sm:p-8 rounded-4xl border border-caramel/25 shadow-premium space-y-6">
                <h3 className="font-serif text-xl font-bold text-white border-b border-coffeeBorder/40 pb-4">
                  Order Summary
                </h3>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label className="text-xs font-medium text-cream/70 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-caramel" />
                    <span>Have a promo code? (Try "BREWE20")</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="e.g. BREWE20"
                      className="flex-1 px-4 py-2.5 rounded-2xl bg-espresso border border-coffeeBorder text-xs text-cream uppercase tracking-wider placeholder-cream/30 focus:outline-none focus:border-caramel"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-2xl bg-darkCoffee hover:bg-caramel text-cream hover:text-white border border-caramel/30 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-emerald-400 font-medium">Applied: {promoApplied}</p>
                  )}
                  {promoError && (
                    <p className="text-xs text-red-400">{promoError}</p>
                  )}
                </form>

                {/* Price Breakdown */}
                <div className="space-y-3 text-xs sm:text-sm text-cream/70 border-t border-coffeeBorder/30 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">₹{subtotal}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Promo Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="text-white font-medium">
                      {shipping === 0 ? (
                        <span className="text-emerald-400 uppercase font-semibold text-xs">Free</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span className="text-white font-medium">₹{taxes}</span>
                  </div>

                  <div className="flex justify-between text-base sm:text-lg font-bold text-white pt-3 border-t border-coffeeBorder/40">
                    <span>Total Amount</span>
                    <span className="text-caramel font-serif text-xl sm:text-2xl">
                      ₹{finalTotal}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-caramel to-caramelHover text-white text-xs uppercase tracking-wider font-semibold shadow-glow flex items-center justify-center gap-2"
                >
                  <span>Proceed To Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Trust Seal */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-cream/50 pt-2">
                  <ShieldCheck className="w-4 h-4 text-caramel" />
                  <span>Secure 256-bit Encrypted Checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
