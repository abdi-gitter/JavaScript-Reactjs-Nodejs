// Assuming we have a cart object that holds our products
let cart = [];

// Function to update cart display and prices
function updateCartDisplay() {
  const productPanel = document.getElementById('product-panel');
  productPanel.innerHTML = ''; // Clear the product panel

  let subtotal = 0;

  // Loop through the cart and display each product
  cart.forEach((product, index) => {
    subtotal += product.price * product.quantity;

    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
      <div class="product-info">
        <img src="${product.imageUrl}" class="product-image" alt="${product.name}">
        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-price">$${product.price.toFixed(2)}</div>
        </div>
      </div>
      <div class="product-quantity-controls">
        <button onclick="decreaseQuantity(${index})">-</button>
        <input type="text" value="${product.quantity}">
        <button onclick="increaseQuantity(${index})">+</button>
      </div>
      <div>
        <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    productPanel.appendChild(productDiv);
  });

  const tax = subtotal * 0.18;
  const shipping = subtotal > 0 ? 15 : 0; // Assuming shipping is $15
  const total = subtotal + tax + shipping;

  // Update the price displays
  document.querySelector('.subtotal').textContent = subtotal.toFixed(2);
  document.querySelector('.tax').textContent = tax.toFixed(2);
  document.querySelector('.shipping').textContent = shipping.toFixed(2);
  document.querySelector('.total').textContent = total.toFixed(2);
}

// Function to increase the quantity of a product
function increaseQuantity(index) {
  cart[index].quantity++;
  updateCartDisplay();
}

// Function to decrease the quantity of a product
function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  }
  updateCartDisplay();
}

// Function to remove a product from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Add to cart function, triggered when the form is submitted
document.querySelector('#add-product form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.querySelector('#add-name').value;
  const price = parseFloat(document.querySelector('#add-price').value);
  const quantity = parseInt(document.querySelector('#add-quantity').value, 10);
  const imageUrl = document.querySelector('#add-image').value;

  cart.push({ name, price, quantity, imageUrl });
  updateCartDisplay();
});

// Initial call to set up the page
updateCartDisplay();
