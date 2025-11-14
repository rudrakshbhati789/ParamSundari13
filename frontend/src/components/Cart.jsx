import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="max-w-3xl mx-auto mt-8 text-center">
      <h1 className="text-gold text-2xl font-semibold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((p) => (
            <div key={p._id} className="flex justify-between border-b border-gray-700 py-3">
              <span>{p.name}</span>
              <span>₹{p.price} × {p.qty}</span>
              <button onClick={() => removeFromCart(p._id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <h2 className="mt-4 text-lg">Total: ₹{total}</h2>
          <Link to="/checkout" className="bg-gold text-black px-5 py-2 mt-4 inline-block rounded-lg font-semibold">
            Place Order
          </Link>
        </>
      )}
    </div>
  );
}
