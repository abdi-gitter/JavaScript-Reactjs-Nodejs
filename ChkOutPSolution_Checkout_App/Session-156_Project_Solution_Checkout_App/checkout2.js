//* ====================================================
//*                 Checkout Page Solution
//* ====================================================

//! App Variables
const shippingRate = 15.0;
const taxRate = 0.18;
const dampingRate = 0.7;
const productPanel = document.querySelector("#product-panel");

//! Products Array [{},{}]
let products = [];

//! Load products data from local storage
const getDataFromDatabase = () => {
  products = JSON.parse(localStorage.getItem("products")) || [];
};

//! Form Submit Event
document.querySelector("form").addEventListener("submit", () => {
  const newProductName = document.querySelector("#add-name").value;
  const newProductPrice = document.querySelector("#add-price").value;
  const newProductQuantity = document.querySelector("#add-quantity").value;
  const newProductUrl = document.querySelector("#add-image").value;
  //! Create a new product object from entered inputs.
  const newProduct = {
    id: Math.ceil(Math.random() * 1000),
    name: newProductName,
    price: Number(newProductPrice),
    amount: Number(newProductQuantity),
    img: newProductUrl,
  };
  //! add new product to the products array and localStorage area
  products.push(newProduct);
  //! as products array updated we need to update the localstorage area too
  localStorage.setItem("products", JSON.stringify(products));
  document.querySelector("form").reset();
  //! add new product to the DOM
  renderSingleProduct(newProduct);
  //! Update the card values
  calculateCardTotal();
});

//! Render All Products
function renderAllProducts() {
  //! empty the container first
  productPanel.innerHTML = "";

  //! if there is no product, it returns
  if (!products.length) return;

  //! render all products
  products.forEach((product) => {
    renderSingleProduct(product);
  });
}

//! function to render a single product
function renderSingleProduct(product) {
  //!Destructuring of product object
  const { id, name, img, amount, price } = product;
  //! Create card for the product
  const card = document.createElement("div");
  card.classList.add("card", "shadow-lg", "mb-3");
  card.dataset.id = id;
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
                        price * dampingRate
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
                      <p class="d-inline mx-4" id="product-quantity">${amount}</p>
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
                      dampingRate *
                      amount
                    ).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
  //! add a new card to product panel container
  productPanel.appendChild(card);
}

//! events declarations
//! using bubbling and add the event listener to common parent as product-panel
productPanel.addEventListener("click", (e) => {
  //! understand which element clicked

  //! if remove icon or button clicked
  if (
    e.target.classList.contains("remove-product") ||
    e.target.classList.contains("fa-trash-can")
  ) {
    //? find the card
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
  //! if + increase button or - decrease clicked
  else if (
    e.target.classList.contains("increase") ||
    e.target.classList.contains("decrease")
  ) {
    //? find the card
    const card = e.target.closest(".card");
    const id = Number(card.dataset.id); // find card's id
    //? find the index number of this product in products array
    const index = products.findIndex((item) => item.id === id);
    //? update the amount in the array according to increase or decrease
    if (e.target.classList.contains("decrease")) {
      //! check if current amount is 1 then warn user
      if (products[index].amount === 1) {
        if (confirm("You are about to remove this product! Are you sure?")) {
          //! as amount will be 0 once confirmed then remove that product
          products = products.filter((item) => item.id !== id);
          card.remove();
        }
      } else {
        //! amount is greater than 1
        products[index].amount--;
      }
    }
    //! else it is an increase operation
    else products[index].amount++;
    //? update local storage
    localStorage.setItem("products", JSON.stringify(products));
    //! you can call renderAllProducts to render cards one by one with updated data. However it is not efficient to render all the cards as a single item changed
    // renderAllProducts();
    //! instead we can locate and update that p tag with new value
    card.querySelector("#product-quantity").textContent =
      products[index].amount;
    //! also we need to update the total product price
    card.querySelector(".product-line-price").textContent = (
      products[index].amount *
      products[index].price *
      dampingRate
    ).toFixed(2);
  }
  calculateCardTotal();
});

//! Calculate and update card total values
function calculateCardTotal() {
  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.amount * dampingRate,
    0
  );
  const taxPrice = subtotal * taxRate;
  const shipping = subtotal > 0 ? shippingRate : 0;
  const cardTotal = subtotal + shipping + taxPrice;

  document.querySelector(".subtotal").textContent = subtotal.toFixed(2);
  document.querySelector(".tax").textContent = taxPrice.toFixed(2);
  document.querySelector(".shipping").textContent = shipping.toFixed(2);
  document.querySelector(".total").textContent = cardTotal.toFixed(2);
}

//! Function calls on page load
window.addEventListener("DOMContentLoaded", () => {
  getDataFromDatabase();
  renderAllProducts();
  calculateCardTotal();
});
