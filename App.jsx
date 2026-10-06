import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Context Providers
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Story from './pages/Story';
import Contact from './pages/Contact';

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-espresso text-cream overflow-x-hidden selection:bg-caramel selection:text-white relative">
          <ScrollToTop />
          <Toast />
          <CartDrawer />
          <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

          <Navbar onOpenSearch={() => setSearchOpen(true)} />

          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/menu"
                element={
                  <PageWrapper>
                    <Menu />
                  </PageWrapper>
                }
              />
              <Route
                path="/coffee/:id"
                element={
                  <PageWrapper>
                    <ProductDetails />
                  </PageWrapper>
                }
              />
              <Route
                path="/cart"
                element={
                  <PageWrapper>
                    <Cart />
                  </PageWrapper>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <PageWrapper>
                    <Wishlist />
                  </PageWrapper>
                }
              />
              <Route
                path="/checkout"
                element={
                  <PageWrapper>
                    <Checkout />
                  </PageWrapper>
                }
              />
              <Route
                path="/story"
                element={
                  <PageWrapper>
                    <Story />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}
