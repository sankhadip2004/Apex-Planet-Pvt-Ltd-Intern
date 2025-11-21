const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 6999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTBZgdgWExBfdRpaqSJDEgY7lzyjso6YbWw&s" },
  { id: 2, name: "T-Shirt", category: "fashion", price: 799, img: "https://veirdo.in/cdn/shop/files/2_8.jpg?v=1754543330" },
  { id: 3, name: "Laptop", category: "electronics", price: 49999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcuGB4waPD0LcpBlIzB9Df2BKrnMZxlluxg&s" },
  { id: 4, name: "Sofa Set", category: "home", price: 9999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryiK6WCWDABxw_AJnMVKJ6LdwT8d1cwRpCA&s" },
];

const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>Category: ${p.category}</p>
        <p class="price">₹${p.price}</p>
      </div>
    `;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const searchTerm = searchBar.value.toLowerCase();
  const category = categoryFilter.value;
  const priceRange = priceFilter.value;

  let filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (priceRange === "low") filtered = filtered.filter(p => p.price < 1000);
  else if (priceRange === "mid") filtered = filtered.filter(p => p.price >= 1000 && p.price <= 5000);
  else if (priceRange === "high") filtered = filtered.filter(p => p.price > 5000);

  displayProducts(filtered);
}

searchBar.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

window.onload = () => displayProducts(products);
