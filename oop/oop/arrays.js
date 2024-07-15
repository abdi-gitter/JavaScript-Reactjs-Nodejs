// ways of creating arrays in js:
// new Array(1, 2, 3) will create an array with the values 1, 2, and 3
const arr = new Array(1, 2, 3)
// Array() is a constructor function, so we can also call it without the new keyword
const arr1 = Array(1, 2, 3)
// We all know this one!
const arr2 = [1, 2, 3]
// Array.of() will create an array of a list of values
const arr3 = Array.of(1, 2, 3)
// Array.from() will create an array from an array-like object ****
const arr4 = Array.from("hello")
// create a new array by length:
// when we only pass one argument to the Array constructor, it creates an array with that length
const arr5 = new Array(5)
// create a new array by length and fill with a value:
const arr6 = new Array(5).fill(0)
// more weird ways of making arrays:
const arr7 = Array(5).fill(0)

// Array.from can also take a second argument, which is a map function
const arr8 = Array.from({length: 5}, () => 0)

// below, v is the value, and i is the index:
const arr9 = Array.from({length: 5}, (v, i) => i)
const arr10 = Array.from({length: 5}, (v, i) => i + 1)



console.log(arr) // >> [ 1, 2, 3 ]
console.log(arr1) // >> [ 1, 2, 3 ]
console.log(arr2) // >> [ 1, 2, 3 ]
console.log(arr3) // >> [ 1, 2, 3 ]
console.log(arr4) // >> [ 'h', 'e', 'l', 'l', 'o' ]
console.log(arr5) // >> [ <5 empty items> ]
console.log(arr6) // >> [ 0, 0, 0, 0, 0 ]
console.log(arr7) // >> [ 0, 0, 0, 0, 0 ]
console.log(arr8) // >> [ 0, 0, 0, 0, 0 ]
console.log(arr9) // >> [ 0, 1, 2, 3, 4 ]
console.log(arr10) // >> [ 1, 2, 3, 4, 5 ]
