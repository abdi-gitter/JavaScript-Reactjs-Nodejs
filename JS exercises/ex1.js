//Example
let num = prompt("Enter a number:");
num = parseInt(num); 

let output;

if (num > 20) {
    output = (num - 20) * 2;
} else {
    output = 20 - num;
}

console.log(output);
