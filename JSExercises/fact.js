// write a function that calculates the factorial of a number in js
// factorial(5) // >> 5! is 1 * 2 * 3 * 4 * 5, which is: 120

function factorial(num){
    let fact = ""
    let total = 1
    for(let i = 1; i <= num; i++){
        if(i==1){
            fact += `${i} `
        }
        else if(i > 1 && i < num){
            fact+= `* ${i} `
        }else{
            fact += `* ${i},`
        }
        total *= i
    }
    return `${num}! is ${fact} which is: ${total}`
    
}
console.log(factorial(5))
