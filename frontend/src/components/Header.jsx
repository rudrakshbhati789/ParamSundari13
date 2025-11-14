import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gold flex justify-between items-center px-6 py-3 z-50">
      <h1 className="text-gold font-bold text-xl">Param Sundari</h1>
      <nav className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/login">Admin</Link>
      </nav>
    </header>
  );
}
