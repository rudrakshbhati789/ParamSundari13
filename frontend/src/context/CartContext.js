import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((p) => p._id === product._id);
    if (existing) {
      setCart(cart.map((p) =>
        p._id === product._id ? { ...p, qty: p.qty + 1 } : p
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((p) => p._id !== id));
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
