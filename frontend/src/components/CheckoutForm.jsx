import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext.jsx";

export default function CheckoutForm() {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", pincode: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/orders", {
      ...form, items: cart, totalAmount: total
    });
    clearCart();
    setSuccess(true);
  };

  if (success)
    return <div className="text-center mt-10 text-gold">Order placed successfully! 🎉</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col gap-3">
      <input placeholder="Full Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
      <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} required />
      <input placeholder="City" onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      <input placeholder="Pincode" onChange={(e) => setForm({ ...form, pincode: e.target.value })} required />
      <button type="submit" className="bg-gold text-black py-2 rounded-md mt-4 font-semibold">Submit Order</button>
    </form>
  );
}
