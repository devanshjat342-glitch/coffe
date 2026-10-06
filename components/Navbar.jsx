import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { totalWishlistItems } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/story' },
    { name: 'Coffee', path: '/#featured' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.substring(2));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.substring(2));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 glass-panel shadow-premium border-b border-caramel/15 bg-espresso/85'
            : 'py-5 bg-gradient-to-b from-espresso/80 via-espresso/30 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-caramel to-darkCoffee flex items-center justify-center border border-caramel/40 shadow-glow transition-transform group-hover:scale-105 duration-300">
                <Coffee className="w-5 h-5 text-cream" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-cream group-hover:text-caramel transition-colors">
                  BREWÉ
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-latte font-medium -mt-1">
                  Artisan Coffee
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/' && !location.hash
                    : location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="relative text-sm font-medium tracking-wide transition-colors py-1 group"
                  >
                    <span
                      className={`${
                        isActive ? 'text-caramel font-semibold' : 'text-cream/80 hover:text-cream'
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-caramel rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Search button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search coffee"
                className="p-2.5 rounded-full text-cream/70 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-coffeeBorder/40"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="relative p-2.5 rounded-full text-cream/70 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-coffeeBorder/40 hidden sm:flex"
              >
                <Heart className="w-5 h-5" />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-caramel text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>

              {/* Cart Icon Trigger */}
              <button
                onClick={openCart}
                aria-label="View cart"
                className="relative p-2.5 rounded-full text-cream/80 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-coffeeBorder/40"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-caramel text-white text-[10px] font-bold flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              {/* Order Now CTA */}
              <Link
                to="/menu"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-glow hover:scale-105 active:scale-95"
              >
                Order Now
              </Link>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl text-cream/80 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Menu Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-darkCoffee border-l border-caramel/20 p-6 flex flex-col justify-between shadow-2xl text-cream z-10"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-coffeeBorder">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-caramel" />
                    <span className="font-serif text-xl font-bold tracking-wider">BREWÉ</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-cream/60 hover:text-white hover:bg-white/5"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        onClick={(e) => {
                          setMobileMenuOpen(false);
                          handleNavClick(e, link.path);
                        }}
                        className={`block text-lg font-serif py-2 px-3 rounded-xl transition-colors ${
                          location.pathname === link.path
                            ? 'text-caramel bg-espresso/70 font-semibold'
                            : 'text-cream/80 hover:text-cream hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      to="/wishlist"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-lg font-serif py-2 px-3 rounded-xl text-cream/80 hover:text-cream hover:bg-white/5"
                    >
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-caramel" /> Saved Brews
                      </span>
                      {totalWishlistItems > 0 && (
                        <span className="px-2 py-0.5 text-xs bg-caramel rounded-full text-white font-sans font-bold">
                          {totalWishlistItems}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-coffeeBorder space-y-3">
                <Link
                  to="/menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-caramel text-white font-semibold text-center text-xs uppercase tracking-wider block shadow-glow"
                >
                  Order Now
                </Link>
                <p className="text-center text-xs text-cream/50">
                  Open daily 7:00 AM – 11:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
