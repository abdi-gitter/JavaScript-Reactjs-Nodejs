let cart = [];

function updateCartDisplay() {
    const productPanel = document.getElementById('product-panel');
    productPanel.innerHTML = ''; // Clear the product panel

    let subtotal = 0;

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
                <input type="text" value="${product.quantity}" readonly>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
            <div>
                <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        productPanel.appendChild(productDiv);
    });

    const discount = subtotal * 0.10; // 10% discount
    const discountedSubtotal = subtotal - discount;
    const tax = discountedSubtotal * 0.18;
    const shipping = subtotal > 0 ? 15 : 0;
    const total = discountedSubtotal + tax + shipping;

    document.querySelector('.subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.discount').textContent = `-$${discount.toFixed(2)}`;
    document.querySelector('.tax').textContent = `$${tax.toFixed(2)}`;
    document.querySelector('.shipping').textContent = `$${shipping.toFixed(2)}`;
    document.querySelector('.total').textContent = `$${total.toFixed(2)}`;
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartDisplay();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

document.querySelector('#add-product form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#add-name').value;
    const price = parseFloat(document.querySelector('#add-price').value);
    const quantity = parseInt(document.querySelector('#add-quantity').value, 10);
    const imageUrl = document.querySelector('#add-image').value;

    cart.push({ name, price, quantity, imageUrl });
    updateCartDisplay();
});

updateCartDisplay();


/* 
### 1. Initialization of the Cart

- The `cart` array is initialized as empty, serving as the foundation 
to store products added by the user. Each product added to the cart is 
an object containing details such as name, price, quantity, and image URL.

### 2. Form Submission for Adding Products

- The form in the HTML captures user input for adding a new product 
to the cart. When the user submits the form, an event listener 
attached to the form intercepts the submission event.
- The event listener prevents the default form submission action 
using `e.preventDefault()`, ensuring the page does not reload and 
instead processes the form data using JavaScript.
- The input values for the product name, price, quantity, 
and image URL are retrieved from the form and used to create 
a new product object. This object is then pushed into the `cart` array.

### 3. Displaying Products in the Cart

- After a new product is added to the cart, the `updateCartDisplay` 
function is called. This function is responsible for dynamically 
displaying the contents of the cart on the page.
- The function first clears the existing product display 
to ensure it can accurately rebuild the display based on the 
current state of the `cart` array.
- It then iterates over the `cart` array, creating a new HTML 
structure for each product that includes the product's image, 
name, price, and quantity. This structure also includes buttons 
to increase or decrease the quantity of the product and a button
to remove the product from the cart.
- As it iterates, it also calculates the subtotal by adding up 
the price multiplied by the quantity for each product in the cart.

### 4. Calculating and Displaying Prices

- The `updateCartDisplay` function continues to calculate the 
discount based on the subtotal, applying a fixed 10% discount rate.
- It then calculates the tax by applying an 18% rate to the discounted subtotal.
- Shipping costs are added, with a simple logic to apply 
a flat shipping rate if the cart is not empty.
- The total cost is calculated by adding the discounted subtotal, 
tax, and shipping costs.
- These calculated values (subtotal, discount, tax, shipping, 
    and total) are then displayed in the designated areas within 
    the HTML structure using the appropriate selectors to target 
    span elements within the pricing table.

### 5. Modifying Cart Item Quantities and Removing Items

- The dynamically generated HTML for each product includes 
buttons to adjust the quantity of the product and to remove the 
product from the cart.
- Clicking these buttons triggers functions 
(`increaseQuantity`, `decreaseQuantity`, `removeFromCart`) that modify 
the `cart` array accordingly—either by increasing or decreasing the 
quantity of a product or removing a product entirely.
- After any modification to the cart (addition, removal, or quantity adjustment), 
the `updateCartDisplay` function is called again to refresh the display 
and price calculations, ensuring the user interface always 
reflects the current state of the cart.

### Conclusion

This JavaScript implementation leverages event handling, array manipulation, 
and dynamic HTML content generation to create a responsive and interactive 
shopping cart experience. It showcases foundational web development concepts 
such as DOM manipulation, event-driven programming, and basic e-commerce cart 
functionality.
*/