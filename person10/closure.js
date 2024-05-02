// Simple Closure example
function createCounter(){
    let count = 0
    return function(){
        count += 1
        return count
    };
}
let counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
