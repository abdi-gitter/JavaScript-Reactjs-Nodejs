//* ====================================================
//*                 Checkout Page Solution
//* ====================================================

//! App Variables
const shippingRate = 15.0;
const taxRate = 0.18;
const dampingRate = 0.7;

//! Products Array [{},{}]
let products;
const getDataFromDatabase = () => {
  products = JSON.parse(localStorage.getItem("products")) || [];
};

//! Functions calling
getDataFromDatabase();
renderAllProducts();
calculateCardTotal();

//! Form Submit Event
document.querySelector("form").addEventListener("submit", () => {
  const newProductName = document.querySelector("#add-name").value;
  const newProductPrice = document.querySelector("#add-price").value;
  const newProductQuantity = document.querySelector("#add-quantity").value;
  const newProductUrl = document.querySelector("#add-image").value;
  //! Create a new product object from entered inputs.
  const newProduct = {
    name: newProductName,
    price: Number(newProductPrice),
    amount: Number(newProductQuantity),
    img: newProductUrl,
  };
  //! add new product to the products array and localStorage area
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  document.querySelector("form").reset();
  //! add new product to the DOM
  renderAnyProduct(newProduct);
  //! Update the card values
  calculateCardTotal();
});

//! Render All Products
function renderAllProducts() {
  //! if there is no product, it returns
  if (!products.length) return;

  //! render all products
  products.forEach((product) => {
    renderAnyProduct(product);
  });
  //! Calling event declaration function for the rendered buttons
  createEventsRemoveBtns();
  createEventsQuantityBtns();
}
function renderAnyProduct(product) {
  const productPanel = document.querySelector("#product-panel");
  //!Destructuring of product object
  const { name, img, amount, price } = product;
  productPanel.innerHTML += ` 
        <div class="card shadow-lg mb-3">
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
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="product-quantity">${amount}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
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
          </div> `;
}
//! events declaration for remove buttons
function createEventsRemoveBtns() {
  const removeBtns = document.querySelectorAll(".remove-product");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      remove(btn);
    });
  });
}

function remove(btn) {
  // btn.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
  //! Delete data from DOM
  btn.closest("article > .card").remove();

  const productName = btn
    .closest(".card")
    .querySelector(".card-title").textContent;
  products = products.filter((pro) => pro.name != productName);
  localStorage.setItem("products", JSON.stringify(products));
  if (!products.length) {
    localStorage.setItem("products", JSON.stringify(""));
  }
  calculateCardTotal();
}

//!  events declaration for minus and plus buttons
function createEventsQuantityBtns() {
  const quantityDivs = document.querySelectorAll(".quantity-controller");

  quantityDivs.forEach((div) => {
    const minusBtn = div.firstElementChild;
    let amount = div.querySelector("#product-quantity");

    minusBtn.addEventListener("click", () => {
      amount.textContent = Number(amount.textContent) - 1;
      if (amount.textContent == "0") {
        alert("Product will be removed");
        remove(minusBtn);
      }
      updateTotal(amount);
    });
    const plusBtn = div.lastElementChild;
    plusBtn.addEventListener("click", () => {
      amount.textContent = Number(amount.textContent) + 1;
      updateTotal(amount);
    });
  });
}

//! update the quantity of products in the DOM and
//! calculate total prices in the card
function updateTotal(amount) {
  //! Update quantity (amount) values in the products array and localStroge area.
  const name = amount.closest(".row").querySelector(".card-title");
  products.map((product) => {
    if (product.name == name.textContent) {
      product.amount = Number(amount.textContent);
    }
  });
  localStorage.setItem("products", JSON.stringify(products));

  //! update the product total in the DOM
  const price = amount.closest(".row").querySelector(".damping-price");
  const productTotal = amount
    .closest(".row")
    .querySelector(".product-line-price");

  productTotal.textContent = (
    Number(price.textContent) * Number(amount.textContent)
  ).toFixed(2);
  calculateCardTotal();
}

//! Calculate and update card total values
function calculateCardTotal() {
  const productTotals = document.querySelectorAll(".product-line-price");

  const subtotal = [...productTotals].reduce(
    (acc, item) => acc + Number(item.textContent),
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
