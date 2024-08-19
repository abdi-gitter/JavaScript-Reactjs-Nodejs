let myName: string = "Chase" // because I assigned this variable to a type of string, 


// typescript "infers" that this variable is a string type (type inference)

// when we declare and define a variable on the same line, typescript will infer the type
// we can absolutely explicitly define the type of a variable as well.

// myName = 8

console.log(myName)

console.log("Hello " + myName)

type person = {
    name: string,
    age: number
}

const obj: person = {
    name: "Chase",
    age: 25
}

console.log(`Hello ${obj.name}, you are ${obj.age} years old!`)

const doSomething = () => {
    console.log("Hello")
}

doSomething()

let arr: number[] // when dealing with arrays
// we need to not only define the type of the array,
// but also that it is an array!

// using generics (more on generics later!)

let arr2: Array<number> // this is the same as above, just a different syntax
// using GENERICS


// Tuples:
// A tuple is an array with a SET number of elements
// and in typescript, also a SET type for each element
let x: [string, number] = ["hello", 1]

// x = ["world", 2, 3] ERROR

// array of tuples:
// now not only are we specifying that this array is a 
// tuple, having a string and a number, but an array of tuples.
let y: [string, number][] = [
    ["Gulnar", 25],
    ["Abdisa", 19],
    ["Kenneth", 24],
    ["Chase", 25],
    ["Ahmed", 25]
]

// To push an element to the array:
// y.push(["John", 30])


// ENUMS:
enum Color {
    Red = 1,
    Green = 5,
    Blue = 10
}

console.log(Color.Green) // 5

enum Color2 {
    Red,
    Green,
    Blue
}

console.log(Color2.Red) // 0

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving Up")
            break;
        case Direction.Down:
            console.log("Moving Down")
            break;
        case Direction.Left:
            console.log("Moving Left")
            break;
        case Direction.Right:
            console.log("Moving Right")
            break;
        default:
            console.log("Unknown Direction")
    }
}

move(Direction.Up) // Moving Up
move(Direction.Down) // Moving Down
move(Direction.Left) // Moving Left
move(Direction.Right) // Moving Right

enum UserType {
    Admin,
    Public,
    Editor
}

const user = {
    name: "Chase",
    role: UserType.Admin
}

const user2 = {
    name: "Gulnar",
    role: UserType.Editor
}

function isAdmin(role: UserType) {
    return role === UserType.Admin // true
}

console.log(isAdmin(user.role))
console.log(isAdmin(user2.role))

// Any:
// The any type is the most flexible type in typescript.
// It allows you to work with any type of data.
let a: any = 4
a = "hello"
a = true
// using any is not recommended, as it defeats the purpose of typescript

// Unknown:
// similar to any, but is much more restrictive.
// you can't perform any operations on an unknown type
// Unknown is helpful when you don't know what the type of a variable will be
// Also useful when consuming data from an API
let b: unknown = 4
// we can change b to anything, but we can't perform operations on it
// operations meaning we can't add, subtract, multiply, etc.
// or if it's a string, we can't use string methods on it
// console.log(b+5) // error

// here's a workaround:
if (typeof b === "number") {
    console.log(Number(b) + 5)
}

let c: unknown = "hello"
console.log(c)

// console.log(c.toUpperCase()) // error

if (typeof c === "string") {
    console.log(c.toUpperCase())
}

// in simple terms, if something is unknown,
// typescript will prevent us from being able to use it as any specific type.

const uknown: unknown = {
    name: "object",
    someProperty: "someValue"
}

console.log(uknown) // I can still log the object even though it's unknown

// we can't access properties of an unknown type
// because to do this, we would need to be working with a type
// of object that has those (typed) properties
// console.log(unknown.name) // error

// ----------------- Functions: -----------------

// if we have a function that does not return a value,
// the function will be of type void.

const returnsNothing = (): void => {
    console.log("Hello")
    // return "something" // error
}

// parameters and return types can be explicitly defined
const returnsNumberTimes5 = (num: number): number => {
    return num * 5
}

// Never:
// The never type represents the type of values that never occur.
// For example, a function that throws an error will never return a value.
// This is useful when dealing with functions that throw errors.

const throwError = (message: string): never => {
    throw new Error(message)
}

// void is of type undefined
// never has no type at all

function canReturn(arg: number): void {
    if (arg > 5) {
        return // when we return, what we're actually returning is undefined!
        // the main difference between void and never is that void functions can return!
        // a never function can never reach it's endpoint, so it can never return anything.
    } else {
        console.log("Number is less than 5")
    }
}

console.log(canReturn(6))

function never(): never {
    console.log("Hello")
    throw new Error("Error") // if we comment this out, we get an error, because the function
    // has an endpoint, and with type never, we should never be able to reach the end of a function
}

// Optional Parameters:
// We can make parameters optional by adding a ? after the parameter name
// Optional parameters must come after required parameters
function optionalParams(name: string, age?: number) {
    console.log(`Name: ${name}, Age: ${age}`)
}

optionalParams("Chase", 25)
optionalParams("Gulnar")

// both function calls are valid, because age is an optional parameter

// Unions can be one of multiple DEFINED types.

let unionType: string | number // | boolean | any | unknown | person
unionType = "hello"
unionType = 5
// this works fine!  we told typescript this value can be a string or a number
// BUT if we try to assign to any other type, we get an error
// unionType = true // error


// Type Aliases:

// type aliases allow us to create a new name for a custom type
// to do this, we use the type keyword!

type Person = {
    name: string,
    age: number,
    job?: string | number
    // job is optional and can be of type string or number
}

const obj2: Person = {
    name: "Chase",
    age: 25
}

const obj3: Person = {
    name: "Gulnar",
    age: 25,
    job: "Sofware Engineer"
}

type coordinates = {
    x: number,
    y: number
}

const PrintCoords = (coords: coordinates) => {
    const { x, y } = coords // destructuring with type inference!  Typescript knows that x and y are numbers
    // type inference only works when we declare and define a variable on the same line

    // If we wanted to manually set types while destructuring without using inference:

    // const {x, y} : {x:number, y:number} = coords //OR:
    // const {x, y} : coordinates = coords


    console.log(`Coordinates: ${x}, ${y}`)
}

PrintCoords({ x: 10, y: 20 })

// string literals:

// string literals allow us to define a set of strings that a variable can have
// this is useful when we know the exact values a variable can have
// this will be a combination of union types and type aliases!

type Directions = "up" | "down" | "left" | "right"

let left: Directions = "left"
// left = "hello" // error


// Intersection Types
// we can combine multiple types into one by using the & operator.
// This is called an intersection type!

type FirstType = {
    name: string
}

type SecondType = {
    age: number
}

const Chase: FirstType & SecondType = {
    name: "Chase",
    age: 25
}

// Type assertion methods:
// Type assertion is just a way to treat a value as a different type than it's own.
// This is similar to type casting in other languages.

// type casting in javascript:
let someNum = "5"
console.log(Number(someNum) + 5)

// Type assertion in typescript:
let someNum2: unknown = "5"
console.log(someNum2 as number + 5)
console.log(<number>someNum2 + " is a string") // this is not giving us an error because 
// javascript will convert the number to a string.  This is called type assertion.


console.log("This isn't working correctly because we can't perform operations on unknown types!")
// This is not converting the type of someNum2 to a number, but rather telling typescript 
// to treat someNum2 as a number.  The reason it's not being treated as a number here is because
// someNum2 is of type unknown, and we can't perform operations on unknown types.  NO ERROR... but it's not working.
// If you end up in this situation where you need to convert a string to a number, 
// it's best to use the Number() function.

// This is because the Number() function takes a string as an argument, and returns a new number literal
// This way our code will work as intended.

console.log(Number(someNum2) + 5)

// There are two ways to assert types in typescript:
// 1. "as" syntax
// someNum2 as unknown
// 2. <> syntax
// <unknown>someNum2
