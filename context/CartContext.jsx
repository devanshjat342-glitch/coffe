import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('brewe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('brewe_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Could not save cart", e);
    }
  }, [cart]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage((current) => (current?.id === toastMessage?.id ? null : current));
    }, 3000);
  };

  const addToCart = (product, quantity = 1, options = {}) => {
    const defaultOptions = {
      size: options.size || 'Regular (250ml)',
      grind: options.grind || 'Whole Beans'
    };

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === defaultOptions.size
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prev, { product, quantity, ...defaultOptions }];
      }
    });

    showToast(`Added "${product.name}" to cart`);
  };

  const removeFromCart = (productId, size = null) => {
    setCart((prev) =>
      prev.filter((item) => {
        if (size) {
          return !(item.product.id === productId && item.size === size);
        }
        return item.product.id !== productId;
      })
    );
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, delta, size = null) => {
    setCart((prev) =>
      prev
        .map((item) => {
          const match = size ? item.product.id === productId && item.size === size : item.product.id === productId;
          if (match) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + shipping + taxes;

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shipping,
        taxes,
        grandTotal,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        toastMessage,
        setToastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
