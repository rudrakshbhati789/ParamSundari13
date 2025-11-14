const token = localStorage.getItem("token"); // saved after login

document.getElementById("addProductForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("price", document.getElementById("price").value);
  formData.append("image", document.getElementById("image").files[0]);

  const res = await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  if (res.ok) {
    alert("✅ Product Added Successfully!");
  } else {
    alert("❌ Failed to upload product");
  }
});
