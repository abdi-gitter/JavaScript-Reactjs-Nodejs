//How to prompt response 

let num = prompt("Enter a number to display:");
num = parseInt(num); 

let output;

if (num > 20) {
    output = (num - 20) * 2;
} else {
    output = 20 - num;
}

console.log(output);
