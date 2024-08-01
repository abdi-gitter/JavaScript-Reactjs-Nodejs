// bind returns a new function with the context of the first argument
// All this is doing is "binding" context to the function.
// This means that the function will be called with the context of the object passed in as the first argument.

function greet(name){
    console.log(`Hello, ${name}!  My favorite color is ${this.color}.`)
}

const contextObj = {
    color: "blue"
}

const boundGreet = greet.bind(contextObj)

boundGreet("Chase") // >> Hello, Chase!  My favorite color is blue.
