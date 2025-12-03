const products = [
  { id: 1, name: "Smartphone", category: "Electronics", price: 12000, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSLybypCng_D_rWCUZJx58d1w-vF5Slw86AaeWadnHnC3F1gZzLqy0uBumyn3IrUIjiM8lKKcpkYWRbX1pNQlNLYY5sLX7EfXKMFY59VzlfLPqg7qEpZ0Np" },
  { id: 2, name: "T-Shirt", category: "Fashion", price: 800, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyJPWWfaAnuaX5Resae9WiBuxBMd7vM78TzJAnnXB7YFF7Hk-v0L8I2juqfJo5ldVGTD_fLwftI4VpY_aOPeyEHgqWQpa6kXZqFACi3QjCS965rDYBojNC" },
  { id: 3, name: "Laptop", category: "Electronics", price: 55000, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5jlscvLlLWsk2lGHPIHySz7ufitoAUc5HSFyfHF0HQNmyO1MDFAbRxndfRBbQjrbxjfbkEphD-g0C8NJYdrgBAxfjai-KUhWcdN1vzya_" },
  { id: 4, name: "Sofa", category: "Home", price: 15000, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCkl6Z_d33SJrUjTLeGg80jAHTeM9iYjv8V20M6HPSPXfFyRZEtAgCOXEEeWlS-pJupa5jYL6ZmC6vCX8nkNxz9H9D-hBYdA" },
  { id: 5, name: "Jeans", category: "Fashion", price: 1200, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIg5w_RcyAttbVyTmGRMu2PFdiC-8HOsGKE3TldYPUOuYExfGbWBrQ5qPwNpA8SH_Hj-nDM7VNFcVQNz65eSPFUnJHtKV0Bn19ZuHAXtVVhwgy2C2ULNrKCA" },
  { id: 6, name: "Television", category: "Electronics", price: 40000, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRjse2asgTnZR5sK2nLMxBZv9guk1oQ4ceOfXcnDZeX22rUg9vK9KC4I2X5y0qRzzw4X_D8JdwADnaSE1r4Po7Gx_2HtZHVLh5CBCnkHhqsOnrHGEQ1HvoRw" },
  { id: 7, name: "Face Wash", category: "Skin Care", price: 900, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT97yNm0P7HVPS_VSmWytSKLSV1vKy2Uqtvzk2vrsk9RqTJ_pJSQEysbgkT6xVgA29s-D9CoarTKmo4b_Ku8kS-V1sA0E9benLGepSCQUtcdkCMnTmM2FcYHLqF" },
  { id: 8, name: "Vitamin-E", category: "Health", price: 2000, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPuZ99KCaL1iBjijK-wDZElJgvg9z2WRiC23LNx-RE0YYOZzDOKMQ7tdU4X8F5hs3dNv5apne68gKSWTU15Knz1konXlsyGQxGEi-z4EZ4ZWuqyyp4BWSRRA" },
  { id: 9, name: "Vitamin-A", category: "Health", price: 20000, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRf9LA3JhodM9g-C1JOH4f-iuim1xYr6hOMWLPjlGJHjIuvA3aWVIyBdszb-53tyKWhNUhEHtZlzIEfS_Wo3fe8xU7lWfcDuLPmSWdNGt7VH8l7484KWm1RsQ" },
  { id: 10, name: "Face Wash", category: "Skin Care", price: 1000, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkg_rBkUXgsnEEal8eL9ERWZHAIGIIwVTtRmmy-N8F43k-8VKc3R2fy4z68quKVexD9Kpf3ikz-oZo0gtcEqHjqnnPuqlry6XpVIG14k9LlGw72U2BZN9Q" },
  { id: 11, name: "Sun Screen Cream", category: "Skin Care", price: 190, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRL_ShbfPBiOb4Q59-Oz932xDZVRFxhli34cK11Gsrnp_Q4SjzJNijS6FOw2cqohzAmpZ_xRobQlRonBeX4zLu0mDNi0OJElwnH8De0EeLPBbK0GAcpqHTExQ" },
  { id: 12, name: "refrigerator ", category: "Electronics", price: 29000, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQLCsFLrW5LA5aGvFxLQX7qSoExAsTLGq-UCmwDzRlO3rznfEsn61rG41SuSfP1Vp87g1TWGyyjyYalULtVv7l_yrLQm-XKik5qTcu2wKvB4QTXTtrpEqvv-Q" },
  { id: 13, name: "Vitamin -B Complex", category: "Health", price: 1500, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9cFOed3wLS7lhlNmcKQ7HaV75MIfFCXQVLgIFIUimnvxTZ16wDiYIoeTY_0TKNEWT1dfsIp2xa0GHvsztlVg_ivIybxmm41fGUkz44ICLaUr1d-0NLy6wdA" },
  { id: 14, name: "Shokes", category: "Home", price: 10000, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRwCnJzOE1cVbv8UqZGE7B3r9JbqTRXVsbVk3w6VoNg8g6RwwiAsmAJJ-9stxNNIZmkYU-Vfz4YMoCXIFHJRpyZPLzelDo49vbnQDPH_ovoPVS4aYvOB3sJ_Q" },
  { id: 15, name: "Alna", category: "Home", price: 5000, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoiXxJ31V7BKkX7wTt4CvYNEV6yre7RA7Zkj7-K7jzgauIiliAuIG0mw0491tItGjIXVSNcojqnmmqnF2TKXZW9-6Psn9tLTMMYSAfkFB77XoC2dn95esq" },
  { id: 16, name: "Hand Gloves", category: "Fashion", price: 500, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQl7sgCZE2flNsvOg65mEOFMSvNwKkArEEjn8T-BQXY-mFj6x4H1DP-FzxPAdBzqL74aMhV5xI0ODdGaGk1tYFEdO4CbDbQyacNEWBGjA1CoT0NL1a90Tm_" },
  { id:17, name: "Almirah", category: "Home", price: 10000, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRth0xptwPD26sSO2sHnt4XGpuCpAhNRkaVfNu2EIX_BPE0PD8DryebhgqK-ip3qllCgjuyLTv-Y85TUuk6vC71tbkrv5_d"},
  {id: 18, name: "Lehenga", category: "Fashion", price: 15999, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkPtJVvDsZ3aHPH0HEbnM88IxapJUi_yRDqYJzBH05unpo8FDxnCqCPeCf5OjFRDSLNk4VmqRsvJ37jGLzZy4oSnMu3oz1LE9NB47yBWZ-"}
]

// get all the reference that are required during product listed
const productContainer = document.getElementById('product-list');
const selectCategory = document.getElementById('category');
const productSort = document.getElementById('sort');

// render all the product list
function renderProducts(products) {
  productContainer.innerHTML = ""; // empty existing product list details
  products.forEach((product) => { // render one by one product
    const card = document.createElement("div");
    card.classList.add("product-card"); // add style in to each product card
    // list out product related details inside the card
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p class="price">₹${product.price}</p>
      <button class="addCart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(card); // render the product details on my UI
  });
}

// Apply filters and sorting
function applyFilters(){
    // store the filtered data 
    let filteredProduct = [...products]; // store the filtered product
    const category = selectCategory.value; // get category value
    const sort = productSort.value; // get sort value
    if(category !== 'All'){ // check category
        filteredProduct = filteredProduct.filter((p)=> p.category === category);
    }
    // check price range on every product
    if(sort === 'Low To High'){
        filteredProduct.sort((a,b)=>a.price - b.price);
    } else if(sort === 'High To Low'){
         filteredProduct.sort((a,b)=>b.price - a.price);
    }
      renderProducts(filteredProduct);
}

// add change event listener
selectCategory.addEventListener("change",applyFilters);
productSort.addEventListener('change',applyFilters);

// Initial rendering
renderProducts(products);

// now we will apply add to cart functionality
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartModel = document.getElementById('cart-model');
const cartItems = document.getElementById('cartItems');
const totalCart = document.getElementById('cartTotal');
const removeCart = document.getElementById('closeCart');

// create an empty cart array
let cart =[];

// Added to cart through id
function addToCart(id) { 
  // check the selected product id
  const product = products.find((p) => p.id === id);
  // if match push into cart section
  cart.push(product); 
  updateCartCount(); // update the cart count 
  alert(`${product.name} added to cart!`);
}

// after add any item from your cart then update cart count
function updateCartCount() {
  cartCount.textContent = cart.length; // when cart length increase 
}

//  Show Cart Modal --> when click on cart button
cartBtn.addEventListener("click", () => {
 cartModal.style.display = "flex";
  renderCart();
});

// when click remove cart model
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// render my cart model 
function renderCart() {
  cartItems.innerHTML = ""; // empty existing cart item
  let total = 0; // no cart added
  cart.forEach((item, index) => {
   total += item.price; // after adding cart then update price
    const li = document.createElement("li");
    // cart content
    li.innerHTML = `
      ${item.name} - ₹${item.price} 
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: ₹${total}`;  // show the total price
}
 
//  Remove Item form cart section
function removeItem(index) {
  cart.splice(index, 1);
  updateCartCount(); // decrement the cart item
  renderCart(); // after decrease cart item then render again cart item
}


/* here we show login and sign up page */
const userLogin = document.getElementById('login');
const userSignup = document.getElementById('signup');

// open a new window for signUp and Login
userSignup.addEventListener('click',()=>{
      window.open('signup.html', '_blank'); // opens signup page in new tab
});
// here show our login page
userLogin.addEventListener('click',()=>{
  window.open('login.html','_blank');
})

/* New Feature : 
here i want to add our login status functionality 
if user login then hide login and signup button */

document.addEventListener('DOMContentLoaded',()=>{
  // before login we want to get login user details or data from local storage 
 const loginUser = JSON.parse(localStorage.getItem('loginUser'));

  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');
  const userPic = document.getElementById('userPic');

  // check if user login or not if not then kindly login 
  if(loginUser){
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    userPic.style.display = "inline-block";
  } else{
    // user not logged in — show login/signup
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";
    userPic.style.display = "none"
  }
});

// adding logout functionality
const userPic = document.getElementById('userPic');
userPic.addEventListener('click',()=>{
  const logoutUser = confirm('Do you want to logout?');
  if(logoutUser){
    localStorage.removeItem('loginUser');
    alert('User Logout Successfully✅');
    window.location.reload();
  }
})

// here we add when any person clicked buy now then show the order details
const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click',()=>{
  if(cart.length === 0){
    alert('Your cart is empty');
    return;
  }
  // save the cart item
  localStorage.setItem('CartData',JSON.stringify(cart));
  window.location.href = 'checkout.html';
});