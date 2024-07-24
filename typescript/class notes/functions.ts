let fn = ():number=>{
    return 7
}

let a = fn()

a = 7

// we have to specify types for our functions because
// when a function returns a value, we can say it evaluates to a value of that type!


// optional parameters:
// we can make arguments optional by adding a question mark after the parameter name
// These optional parameters MUST come after required parameters.

function xyz(a:number, b?:number):number{
    return b?a+b:a
}

// function overloading:
// if we want to have a function that can take different types of arguments and return different types of values
// we can use function overloading
// we do this by defining multiple function signatures and then defining the function body
// Ultimately what this does is gives us one funciton that can accept multiple types of arguments, returning multiple types of values
// These function signatures are called overloads
// They need to have the same number of parameters, but can have different types
// They also need to have the same name.
// each signature needs to have consistent types for the parameters and return types

// these are function signatures.
// They are basically the function definition without the function body
// think of this as a type definition for the function
function add(a:string, b:string):string
function add(a:number, b:number):number
// finally, we define the function body
// this is the actual implementation of the function
// we use the any type here because we don't know what the types of a and b are

// function add(a:any, b:any):any{
//     return a+b
// }

// we don't need to use any here, we can also use the union type.
// This is because we know that the function will return either a string or a number
// so we can use the union type to define the return type
function add(a:string|number, b:string|number):string|number{
    if(typeof a === 'string' && typeof b === 'string'){
        return a+b
    }
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b
    }
    throw new Error('Invalid arguments')
}
// Typescript knows the return types of the function based on the function signature that matches the arguments
// if I don't throw an error, typescript won't let me return anything, and knows the function MUST return a string or a number


// Rest parameters:
// Sometimes we don't know how many arguments a function will receive.
// in order to handle this, we can use rest parameters.
// rest parameters are denoted by three dots before the parameter name.
// rest parameters are always arrays!!!
// in javascript, we do this by using the arguments object, but in typescript we can use rest parameters.
// REMEMBER rest parameters must come last in the parameter list!!!

const rest = (num:number, ...restParams:number[]):number=>{
    for(let i = 0; i<restParams.length; i++){
        num += restParams[i]
    }
    return num
}

const something = rest(1,2,3)
console.log(something) // 6