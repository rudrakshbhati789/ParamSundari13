import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "..backend/components/ProductCard.jsx";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 py-6">
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
}
