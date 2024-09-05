//what are promises and how do we use them in js//

const cart =["shoes", "shirt", "jacket"];

//promise chain:- this promise chain will keep us from callback hell//

createOrder(cart)//promise object//
.then(function (orderId){
console.log(orderId);
console.log(orderId);
return orderId;
})
.catch(function(err){
    console.log(err.message)
})
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){
console.log("No matter what happens, i will definitely  be called");
});

//Producer side//

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){

        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const orderId = "123456";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function createOrder(cart){

}
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    });
}
function validateCart(cart){
    return false;
}


//assume four async methods:- createOrder, proceedToPayment, 
//showOrderSummary, updateWallet for e-commerce web-site and do promise chaining, handle errors
