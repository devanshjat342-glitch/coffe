import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  CreditCard,
  QrCode,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Home,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, grandTotal, subtotal, shipping, taxes, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bengaluru',
    pincode: '',
    deliveryNote: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [deliveryType, setDeliveryType] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const randomOrderId = `BRW-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(randomOrderId);
      setOrderConfirmed(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B87941', '#D8B89A', '#F5EBDD', '#1B120D']
      });

      // Clear cart
      clearCart();
    }, 1500);
  };

  if (orderConfirmed) {
    return (
      <div className="pt-36 pb-24 min-h-screen bg-espresso flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="max-w-xl w-full glass-card p-8 sm:p-12 rounded-4xl border border-caramel/30 text-center shadow-2xl relative"
        >
          {/* Success Check Badge */}
          <div className="w-20 h-20 rounded-full bg-caramel/20 border-2 border-caramel flex items-center justify-center text-caramel mx-auto mb-6 shadow-glow">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Payment Confirmed</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            The Ritual Begins.
          </h2>

          <p className="text-sm text-cream/70 font-light max-w-md mx-auto mb-6">
            Thank you, <span className="text-cream font-semibold">{formData.fullName || 'Patron'}</span>. Your artisanal coffee order has been dialed into our brew bar.
          </p>

          <div className="p-4 rounded-2xl bg-espresso/80 border border-coffeeBorder text-left space-y-2 mb-8 text-xs">
            <div className="flex justify-between">
              <span className="text-cream/50">Order Reference:</span>
              <span className="text-caramel font-mono font-bold">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/50">Estimated Arrival:</span>
              <span className="text-cream font-semibold">
                {deliveryType === 'express' ? '30-40 Mins (Hot Brew Runner)' : 'Tomorrow by 11:00 AM'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/50">Delivery Address:</span>
              <span className="text-cream truncate max-w-[200px] text-right">
                {formData.address || 'Indiranagar 100ft Road'}, {formData.city}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="px-8 py-3.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold shadow-glow inline-flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back To Homepage</span>
            </Link>
            <Link
              to="/menu"
              className="px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-cream border border-coffeeBorder text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2"
            >
              <span>Explore More Roasts</span>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-espresso">
      {/* Ambient glow */}
      <div className="absolute top-28 left-1/4 w-96 h-96 bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-2">
            <Lock className="w-3.5 h-3.5 text-caramel" />
            <span>Encrypted Checkout</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Finalize Your Order
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-darkCoffee/50 rounded-4xl border border-coffeeBorder/40 max-w-lg mx-auto p-8">
            <ShoppingBag className="w-12 h-12 text-caramel/40 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              No items in cart to checkout
            </h3>
            <p className="text-xs text-cream/50 mb-6">
              Please choose your brews from our menu before proceeding.
            </p>
            <Link
              to="/menu"
              className="px-6 py-3 rounded-full bg-caramel text-white text-xs uppercase tracking-wider font-semibold inline-block"
            >
              Go to Menu
            </Link>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Customer Information & Payment (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Delivery Address Form */}
              <div className="glass-card p-6 sm:p-8 rounded-4xl border border-coffeeBorder/40 space-y-5">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-caramel" />
                  <span>1. Delivery Destination</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="aarav@ritual.com"
                    className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                    Street Address & Flat / Office No. *
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House 42, 12th Main Road, HAL 2nd Stage"
                    className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream focus:outline-none focus:border-caramel"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="560038"
                      className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Speed Preference */}
              <div className="glass-card p-6 sm:p-8 rounded-4xl border border-coffeeBorder/40 space-y-4">
                <h3 className="font-serif text-lg font-bold text-white">
                  2. Delivery Speed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    onClick={() => setDeliveryType('standard')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      deliveryType === 'standard'
                        ? 'bg-caramel/20 border-caramel shadow-glow'
                        : 'bg-espresso/60 border-coffeeBorder hover:border-caramel/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-cream text-sm">Standard Roast Courier</span>
                      {deliveryType === 'standard' && <Check className="w-4 h-4 text-caramel" />}
                    </div>
                    <p className="text-xs text-cream/60">Dispatched fresh within 24 hrs. Sealed degassing valve.</p>
                  </div>

                  <div
                    onClick={() => setDeliveryType('express')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      deliveryType === 'express'
                        ? 'bg-caramel/20 border-caramel shadow-glow'
                        : 'bg-espresso/60 border-coffeeBorder hover:border-caramel/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-cream text-sm">Express Hot Brew Runner</span>
                      {deliveryType === 'express' && <Check className="w-4 h-4 text-caramel" />}
                    </div>
                    <p className="text-xs text-cream/60">Delivered hot & fresh to your table in 30-40 mins.</p>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card p-6 sm:p-8 rounded-4xl border border-coffeeBorder/40 space-y-4">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-caramel" />
                  <span>3. Payment Method</span>
                </h3>

                <div className="space-y-3">
                  {/* UPI */}
                  <label
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-caramel/20 border-caramel shadow-glow'
                        : 'bg-espresso/60 border-coffeeBorder hover:border-caramel/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-darkCoffee text-caramel">
                        <QrCode className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-cream block">Instant UPI / QR Code</span>
                        <span className="text-xs text-cream/50">Google Pay, PhonePe, Paytm, BHIM</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="accent-caramel w-4 h-4"
                    />
                  </label>

                  {/* Cards */}
                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-caramel/20 border-caramel shadow-glow'
                        : 'bg-espresso/60 border-coffeeBorder hover:border-caramel/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-darkCoffee text-caramel">
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-cream block">Credit / Debit Card</span>
                        <span className="text-xs text-cream/50">Visa, Mastercard, RuPay, Amex</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="accent-caramel w-4 h-4"
                    />
                  </label>

                  {/* Cash on Delivery */}
                  <label
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-caramel/20 border-caramel shadow-glow'
                        : 'bg-espresso/60 border-coffeeBorder hover:border-caramel/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-darkCoffee text-caramel">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-cream block">Cash / Card on Delivery</span>
                        <span className="text-xs text-cream/50">Pay at your doorstep</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-caramel w-4 h-4"
                    />
                  </label>
                </div>
              </div>

            </div>

            {/* Right: Order Review Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 sm:p-8 rounded-4xl border border-caramel/25 shadow-premium space-y-6">
                <h3 className="font-serif text-xl font-bold text-white border-b border-coffeeBorder/40 pb-4">
                  Basket Review ({cart.length} items)
                </h3>

                {/* Items Mini List */}
                <div className="max-h-60 overflow-y-auto space-y-3 pr-2 divide-y divide-coffeeBorder/30">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="pt-3 first:pt-0 flex items-center justify-between">
                      <div className="flex items-center gap-3 truncate">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-xl object-cover border border-coffeeBorder flex-shrink-0"
                        />
                        <div className="truncate">
                          <h4 className="text-sm font-medium text-cream truncate">{item.product.name}</h4>
                          <span className="text-[11px] text-latte/70">{item.quantity} × {item.size}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-cream">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-2.5 text-xs text-cream/70 border-t border-coffeeBorder/40 pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-cream font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="text-cream font-medium">
                      {shipping === 0 ? <span className="text-emerald-400 font-semibold">Free</span> : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span className="text-cream font-medium">₹{taxes}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-coffeeBorder/40">
                    <span>Grand Total</span>
                    <span className="text-caramel font-serif text-xl">₹{grandTotal}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-caramel to-caramelHover text-white text-xs uppercase tracking-wider font-semibold shadow-glow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm & Place Order • ₹{grandTotal}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-cream/50 pt-2">
                  <ShieldCheck className="w-4 h-4 text-caramel" />
                  <span>Guaranteed Fresh or Free Replacement</span>
                </div>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
