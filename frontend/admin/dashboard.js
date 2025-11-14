const token = localStorage.getItem("token");
if (!token) window.location.href = "login.html";

document.getElementById("addProductForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("description", document.getElementById("description").value);
  formData.append("price", document.getElementById("price").value);
  formData.append("size", document.getElementById("size").value);
  formData.append("image", document.getElementById("image").files[0]);

  const res = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  const data = await res.json();
  if (data.success) {
    alert("✅ Product added successfully!");
    loadProducts();
  } else {
    alert("❌ Error: " + data.message);
  }
});

async function loadProducts() {
  const res = await fetch("http://localhost:5000/api/products");
  const products = await res.json();

  const container = document.getElementById("productList");
  container.innerHTML = products.map(p => `
    <div style="background:#111;padding:15px;border-radius:10px;width:200px;">
      <img src="http://localhost:5000${p.image}" style="width:100%;height:180px;object-fit:cover;border-radius:10px;">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <p>Size: ${p.size}</p>
    </div>
  `).join("");

  const token = localStorage.getItem("token");
if (!token) {
  alert("Please sign in first!");
  window.location.href = "login.html";
}

}


loadProducts();
