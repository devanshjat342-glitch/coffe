import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    grandTotal,
    totalItems
  } = useCart();

  const navigate = useNavigate();
  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeeded = freeShippingThreshold - subtotal;

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  const handleViewCart = () => {
    closeCart();
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-darkCoffee border-l border-caramel/20 text-cream flex flex-col shadow-2xl relative"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-coffeeBorder/40 flex items-center justify-between bg-espresso/60">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-caramel/15 text-caramel">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-cream">Your Brew Basket</h3>
                    <p className="text-xs text-cream/60">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  className="p-2 rounded-xl text-cream/50 hover:text-white hover:bg-espresso transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Banner */}
              <div className="px-6 py-3 bg-espresso/40 border-b border-coffeeBorder/30">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-cream/80 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-caramel" />
                    {amountNeeded > 0 ? (
                      <>Add <span className="text-caramel font-semibold">₹{amountNeeded}</span> more for Free Delivery</>
                    ) : (
                      <span className="text-emerald-400 font-semibold">Complimentary Delivery Unlocked!</span>
                    )}
                  </span>
                  <span className="text-xs text-latte">{progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-espresso rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-caramel to-latte"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-coffeeBorder/30">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-espresso flex items-center justify-center text-caramel/40 mb-4 border border-coffeeBorder">
                      <ShoppingBag className="w-9 h-9" />
                    </div>
                    <h4 className="font-serif text-lg text-cream mb-1">Your cart is empty</h4>
                    <p className="text-xs text-cream/50 max-w-xs mb-6">
                      Discover our single-origin coffees, signature lattes, and artisan roasts.
                    </p>
                    <button
                      onClick={() => {
                        closeCart();
                        navigate('/menu');
                      }}
                      className="px-6 py-2.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-subtle hover:scale-105"
                    >
                      Explore Menu
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      layout
                      key={`${item.product.id}-${item.size}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="py-4 flex gap-4 group"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 rounded-2xl object-cover border border-coffeeBorder flex-shrink-0"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-semibold text-cream line-clamp-1 group-hover:text-caramel transition-colors">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-cream/30 hover:text-red-400 transition-colors p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-latte/70">{item.size}</p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity selector */}
                          <div className="flex items-center gap-2 bg-espresso/80 border border-coffeeBorder rounded-full px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.product.id, -1, item.size)}
                              className="text-cream/60 hover:text-white p-0.5 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold w-4 text-center text-cream">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, 1, item.size)}
                              className="text-cream/60 hover:text-white p-0.5 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Item Subtotal */}
                          <span className="text-sm font-bold text-cream">
                            ₹{item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && (
                <div className="p-6 bg-espresso/80 border-t border-coffeeBorder/40 space-y-3">
                  <div className="space-y-1.5 text-xs text-cream/70">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-cream font-medium">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="text-cream font-medium">
                        {shipping === 0 ? (
                          <span className="text-emerald-400 uppercase tracking-wider font-semibold text-[11px]">Free</span>
                        ) : (
                          `₹${shipping}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-coffeeBorder/30 text-sm font-bold text-cream">
                      <span>Estimated Total</span>
                      <span className="text-caramel text-base">₹{grandTotal}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCheckout}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-caramel to-caramelHover text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow"
                    >
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <button
                      onClick={handleViewCart}
                      className="w-full py-2.5 rounded-full bg-transparent hover:bg-espresso text-latte text-xs font-semibold transition-colors"
                    >
                      View & Edit Full Cart
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
