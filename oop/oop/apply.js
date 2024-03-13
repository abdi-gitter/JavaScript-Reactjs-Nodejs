function sum(...args){
    return args.reduce((a, b) => a + b) + (this.bonus || 0)
}

const contextObj = {
    bonus: 10
}

const result = sum.apply(contextObj, [1,2,3,4,5])
console.log(result) // >> 22

// The apply method takes two arguments:
// 1. The context object
// 2. An array of arguments to pass to the function