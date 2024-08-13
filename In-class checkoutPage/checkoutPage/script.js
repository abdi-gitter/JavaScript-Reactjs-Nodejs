// Products Array:

let products = [];

// Products container:
const productsPanel = document.querySelector("#product-panel");

// Form submission function:
document.querySelector('form').addEventListener('submit', (e) => {
    // prevent the default form submission:
    e.preventDefault();
    // reference to the product name value:
    const name = document.querySelector("#add-name").value;

    // reference for the product price value:
    const price = document.querySelector("#add-price").value;

    // reference for the product quantity value:
    const quantity = document.querySelector("#add-quantity").value;

    // reference for the product image URL value:
    const img = document.querySelector("#add-image").value;

    // Create a new product object:
    // All that is missing from the form would be a product ID, which we will generate randomly:
    // we will make this ID so we can use it to delete the product / change quantity later on.
    const newProduct = {
        id: Math.floor(Math.random() * 1000),
        name,
        price: Number(price),
        quantity: Number(quantity),
        img
    }

    
    // push the new product to the products array:
    products.push(newProduct);

    // add the products array to local storage:
    // stringifying the array so we can store it in local storage as a string:
    products = JSON.stringify(products);
    console.log("stringified!")
    console.log(products)

    products = JSON.parse(products);
    console.log("parsed!")
    console.log(products)

    localStorage.setItem('products', JSON.stringify(products));

    // clear the form:
    document.querySelector('form').reset();

    // render the new product:
    renderProduct(newProduct);

    // get the totals/do math:
    calculateTotals();
})

// function to get the products from local storage:
const getProducts = () => {
    products = JSON.parse(localStorage.getItem('products')) || [];
    console.log(products)
}

// function to render the products:
const renderAll = () => {
    // clear the products container, so we don't have duplicates:
    productsPanel.innerHTML = "";

    // Make sure the products array is not empty, then loop.
    // loop through the products array and render each product:
    if (!products.length) return;

    products.forEach((product) => {
        // render a single product:
        renderProduct(product);
    })
}

// function to render a single product:
const renderProduct = (product) => {
    // bulid the product card:
    const { id, name, img, quantity, price } = product;

    // build a card container, and append the card to the container:
    const card = document.createElement('div');
    card.classList.add('card', 'shadow-lg', "mb-3")
    card.dataset.id = id; // this ends up being an attribute called data-id
    card.innerHTML = `
    <div class="row g-0">
    <div class="col-md-5">
      <img
        src=${img}
        class="w-100 h-100 rounded-start"
     />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <div class="product-price">
          <p class="text-warning h2">$
            <span class="damping-price">${(
            price
        ).toFixed(2)}</span>
            <span class="h5 text-dark text-decoration-line-through">${price.toFixed(
            2
        )}</span>
          </p>
        </div>
        <div
          class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
        >
          <div class="quantity-controller">
            <button class="btn btn-secondary btn-sm decrease">
              <i class="fas fa-minus decrease"></i>
            </button>
            <p class="d-inline mx-4" id="product-quantity">${quantity}</p>
            <button class="btn btn-secondary btn-sm increase">
              <i class="fas fa-plus increase"></i>
            </button>
          </div>
        </div>
        <div class="product-removal mt-4">
          <button class="btn btn-danger btn-sm w-100 remove-product">
            <i class="fa-solid fa-trash-can me-2"></i>Remove
          </button>
        </div>
        <div class="mt-2">
          Product Total: $<span class="product-line-price">${(
            price *
            quantity
        ).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </div>
    `

    // append the product card to the products container:
    productsPanel.appendChild(card);
}

// function to get the totals/do math:
const calculateTotals = () => {
    // get subtotal (price of all products combined):
    // https://www.w3schools.com/jsref/jsref_reduce.asp
    const subtotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0)

    // tax price
    const taxPrice = subtotal * 0.0825;

    // shipping cost
    const shipping = subtotal > 0 ? 15 : 0;

    // grand total
    const total = subtotal + taxPrice + shipping;

    // references to the elements we need to update:

    // Subtotal:
    document.querySelector(".subtotal").textContent = subtotal.toFixed(2);

    // Tax:
    document.querySelector(".tax").textContent = taxPrice.toFixed(2);

    // Shipping:
    document.querySelector(".shipping").textContent = shipping.toFixed(2);

    // Total:
    document.querySelector(".total").textContent = total.toFixed(2);
}


// Event Delegation:
productsPanel.addEventListener('click', (e) => {
    // console.log(e.target)
    // This is where we will handle removal, incrementing quantity, and decrementing quantity.

    // we can make an if else statement to check:
    // if the target has a class of increase/decrease
    if (e.target.classList.contains("increase") || e.target.classList.contains("decrease")) {
        // Get a reference to the card, so we can pull the ID from the data-id attribute:
        const card = e.target.closest(".card");

        // we need to convert this string to a number so we can use it to find the matching 
        // product in our products array.
        const id = Number(card.dataset.id);// this is the product ID

        // find the index of this product in our products array:
        const index = products.findIndex((product) => product.id === id);

        if (e.target.classList.contains("increase")) {
            // increase
            console.log("increase")
            products[index].quantity++;
            // update the price of the product * quantity
            card.querySelector(".product-line-price").textContent = (
                products[index].quantity *
                products[index].price
            ).toFixed(2);
        } else {
            // decrease
            console.log("decrease")
            if (products[index].quantity === 1) {
                if (confirm("You are about to remove this product! Are you sure?")) {
                    // remove the product from the products array:
                    products = products.filter((item) => item.id !== id);
                    // remove the card from the dom:
                    card.remove();
                    // recalculate the totals:
                    calculateTotals();
                }
            } else {
                //! amount is greater than 1
                products[index].quantity--;
                // update the price of the product * quantity
                card.querySelector(".product-line-price").textContent = (
                    products[index].quantity *
                    products[index].price
                ).toFixed(2);
            }
        }

        // we need to update the products array in local storage:
        localStorage.setItem('products', JSON.stringify(products));

        // we need to update the quantities of the product
        card.querySelector("#product-quantity").textContent = products[index].quantity;
    }

    // if the target has a class of remove-product, then remove the product.
    if (e.target.classList.contains("remove-product") || e.target.classList.contains("fa-trash-can")) {
        const card = e.target.closest(".card");
        const id = Number(card.dataset.id); // find card's id
        //? filter and remove the product with thid id in products array
        products = products.filter((item) => item.id !== id);
        //? update local storage
        localStorage.setItem("products", JSON.stringify(products));
        //! you can call renderAllProducts to render cards one by one with updated data. However it is not efficient to render all the cards as a single item changed
        // renderAllProducts();
        //! instead we can remove that card as we have connection
        card.remove();
    }

    // re-run our calculateTotals function:
    calculateTotals();
})

// add an event listener for when the dom loads, then render products:
window.addEventListener("DOMContentLoaded", () => {
    // get the products from local storage:
    getProducts();

    // render the products:
    renderAll();

    // get the totals/do math:
    calculateTotals();
})
