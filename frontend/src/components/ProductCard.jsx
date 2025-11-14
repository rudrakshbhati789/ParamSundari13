import React from "react";
import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-black border border-gold rounded-xl shadow-lg p-4 w-72 text-center">
      <img src={`http://localhost:5000${product.image}`} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-gold mt-3 font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-300 mt-1">{product.description}</p>
      <p className="text-white mt-2 font-semibold">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-gold text-black px-4 py-2 mt-3 rounded-lg w-full font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
