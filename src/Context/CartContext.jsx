import React, { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  // Function to update cart items
  const updateCartItems = (newItemCount) => {
    setCartItems(newItemCount);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the CartContext
export const useCart = () => useContext(CartContext);