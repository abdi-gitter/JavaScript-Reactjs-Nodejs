const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
    localStorage.setItem("taxRate", taxRate);
    window.localStorage.setItem("shippingPrice", shippingPrice);

    sessionStorage.setItem("taxRate", taxRate);
    window.sessionStorage.setItem("shippingPrice", shippingPrice);
    //add at the end of remove btn func.
    //calculateCartTotal();
});
//Bubbling vs. Capturing
let productsDiv = document.querySelector(".products");
console.log(productsDiv);
productsDiv.addEventListener("click", (e) => {
    let quantityP = e.target.parentElement.parentElement.querySelector("#product-quantity");

    //minus
    if (e.target.className == "fas fa-minus" || e.target == quantityP.parentElement.firstElementChild) {
        quantityP.innerText--;
            if (quantityP.innerText === "0") {
                if (confirm("Product will be removed!")) {
                    quantityP.parentElement.parentElement.parentElement.remove();
                }
                else{
                    quantityP.innerText++;
                }
            }
            calculateProductTotal(quantityP);
    }
        
    //plus
    else if (e.target.className == "fas fa-plus" || e.target == quantityP.parentElement.lastElementChild) {
            quantityP.innerText++;
            calculateProductTotal(quantityP);
    }

    //remove
    else if (e.target.className == "remove-product") {
        if (confirm("Product will be removed!")) {
            e.target.parentElement.parentElement.parentElement.remove();
            calculateProductTotal(quantityP);
        }
        else{
            return;
        }
    }

    //others
    else{
        console.log(e.target);
    }

});

const calculateProductTotal = (quantityP) => {
    let productInfoDiv = quantityP.parentElement.parentElement;
    let productPrice = productInfoDiv.querySelector("strong").innerText;
    // console.log(productPrice);
    // console.log(quantityP.innerText);

    // multiply converting to number
    let productTotalPrice = productPrice * quantityP.innerText;
    // let productTotalPrice = productPrice * parseInt(quantityP.innerText);
    // console.log(productTotalPrice);
    let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
    productTotalDiv.innerText = productTotalPrice.toFixed(2);
    calculateCartTotal();
}

const calculateCartTotal = () => {
    // NodeList.forEach or array.forEach
    let productTotalPrices = document.querySelectorAll(".product-line-price");

    // [...HTML Collection].forEach
    // let productTotalPrices = document.getElementsByClassName("product-line-price");

    let subtotal = 0;
    console.log(productTotalPrices);
    productTotalPrices.forEach((productPrice) => {
        subtotal += parseFloat(productPrice.innerText);
    });
    // console.log(subtotal);
    // let taxPrice = subtotal * taxRate;
    let taxPrice = subtotal * localStorage.getItem("taxRate");
    // (ternary) operator ?
    let shipping = (subtotal > 0 ? shippingPrice : 0);
    let cartTotal = subtotal + taxPrice + shipping;

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.getElementById("cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
}
