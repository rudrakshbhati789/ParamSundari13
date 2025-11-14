import React, { useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [product, setProduct] = useState({ name: "", price: "", description: "", image: null });
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("image", product.image);

    await axios.post("http://localhost:5000/api/products/upload", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("✅ Product uploaded successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col gap-3">
      <h1 className="text-gold text-2xl font-semibold mb-2">Upload Product</h1>
      <input placeholder="Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
      <input type="number" placeholder="Price" onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
      <textarea placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })}></textarea>
      <input type="file" onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} />
      <button type="submit" className="bg-gold text-black py-2 rounded-md mt-2 font-semibold">Upload</button>
    </form>
  );
}
