// The call method takes the context object as the first argument and
// The remaining arguments are passed to the function as normal

function product(a, b){
    return a * b * this.multiplier
}

const contextObj = {
    multiplier: 100
}

const result = product.call(contextObj, 5, 7)
console.log(result) // >> 3500

