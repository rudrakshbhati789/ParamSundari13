import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/admin";
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 text-center flex flex-col gap-3">
      <h1 className="text-gold text-2xl mb-4">Admin Login</h1>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      <button className="bg-gold text-black py-2 rounded-md mt-2 font-semibold">Login</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
