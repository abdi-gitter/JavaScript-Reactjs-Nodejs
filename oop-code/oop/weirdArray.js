Array.prototype.POTATO = "POTATO"


let arr = [1,2,3]
console.log(arr.indexOf(2)) // >> 1
console.log(arr.indexOf(5)) // >> -1

arr[-1] = 99
console.log(arr.indexOf(5)) // >> -1
console.log(arr[-1]) // >> 99
console.log(arr) // >> [ 1, 2, 3, '-1': 99 ]

console.log(arr.POTATO) // >> POTATO
