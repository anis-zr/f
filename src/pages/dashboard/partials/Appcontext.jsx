// contexts/AppContext.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState('products');
  const [cart, setCart] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const switchTab = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  const addToCart = useCallback((product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      let newCart;
      
      if (existingItem) {
        newCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
      
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const updateCartQuantity = useCallback((index, change) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      if (newCart[index]) {
        newCart[index].quantity = (newCart[index].quantity || 1) + change;
        
        if (newCart[index].quantity <= 0) {
          newCart.splice(index, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(newCart));
        return newCart;
      }
      return prevCart;
    });
  }, []);

  const removeFromCart = useCallback((index) => {
    setCart(prevCart => {
      const newCart = prevCart.filter((_, i) => i !== index);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const value = {
    activeTab,
    switchTab,
    cart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    mobileMenuOpen,
    setMobileMenuOpen
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};