import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <div className="pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
