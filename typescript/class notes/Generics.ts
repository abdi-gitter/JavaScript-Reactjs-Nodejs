// GENERICS!
// Generics are a way to create reusable components.
// They allow us to write functions, classes, and interfaces that work with any type.
// This is similar to the idea of function overloading, but it's more general and it's easier and shorter to write.

// We use angle brackets <> to define generics.
// We can use any letter to define a generic type, but T is the most common.
// We can also use multiple generic types by separating them with commas. 

function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
// Think of T as a placeholder for the type that will be passed in when the function is called.
// we "assign" the type a value when we call the function.

let numArray = getArray([1,2,3,4,5]) // TYPE INFERENCE
let strArray = getArray<string>(['a','b','c','d','e'])
let boolArray = getArray<boolean>([true, false, true, false])
let objArray = getArray<object>([{name:'John'}, {name:'Jane'}, {name:'Jack'}])

// generic interfaces:
interface Result<T>{
    data: T | null
}

class ResultImpl<T> implements Result<T>{
    data: T | null
    name: string
    constructor(data:T, name: string){
        this.data = data
        this.name = name
    }
}

let result = new ResultImpl(1, "hello") // INFERENCE
let result2 = new ResultImpl<string>('hello', "world") // Manual type assignment

// Generic function:
function wrapInArray<T>(input:T):T[]{
    return [input]
}

function doSth(num:number){
    return num // num's type is number because of type inference
}

// Using multiple generic types:
// T and U are conventionally used.  They can be any letter.  T, U, V, etc.
interface Pair<T, U>{
    first: T
    second: U
}

class PairImpl<T, U> implements Pair<T, U>{
    first: T
    second: U
    constructor(first:T, second:U){
        this.first = first
        this.second = second
    }
}

const pairObj = new PairImpl(1,'hi') // INFERENCE
const pairObj2 = new PairImpl<string, boolean>("Hello", true) // Manual type assignment

// multiple generic types in a function:
function displayTypes<T, U>(id:T, name:U):void{
    console.log(`ID: is of type: ${typeof(id)}, Name is of type: ${typeof(name)}`)
}

displayTypes(1, 'hello') // INFERENCE >> ID: is of type: number, Name is of type: string
displayTypes(true, true) // INFERENCE >> ID: is of type: boolean, Name is of type: boolean

// Generic constraints:
// we can use the extends keyword to constrain the types that can be passed to a generic function.
// for example, if we want to only allow numbers to be passed to a function, we can use extends number.
function numberOnly<T extends number>(num:T):T{
    return num
}
// if we want to constrain our function to only numbers or strings, we can use the union type.
function numberOrString<T extends number|string>(num:T):T{
    return num
}

const num = numberOnly(1) // INFERENCE
// const num2 = numberOnly('2') //error

const str = numberOrString('hello') // INFERENCE
const str2 = numberOrString(2) // INFERENCE
// const str3 = numberOrString(true) // error
const num2 = numberOrString(2) // INFERENCE of type number

// They keyof operator helps with generic constraints by allowins us to get the keys of an object
// and use them for types
function getProperty<T, K extends keyof T>(obj:T, key:K){
    return obj[key]
}
// remember keyof is an operator that returns the keys of an object as a string in the case of an object
// or a number in the case of an array.
let obj = {name:'John', age:30}
// log keys in obj:
for(let key in obj){
    console.log(key)
}

// when a variable can only be one of multiple values, we call this a union type.
type Color2 = 'red' | 'blue' | 'green' // not only can we restrict types, we can also restrict values.

// let color:Color2 = 'pink' //error
