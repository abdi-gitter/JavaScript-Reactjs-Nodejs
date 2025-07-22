//count in js


let d = 2; // The digit to search for
let low = 10; // The lower bound of the range
let high = 23; // The upper bound of the range
let count = 0; // Variable to keep track of the occurrences

for (let i = low; i <= high; i++) {
  // Convert each number to a string to check for the digit
  
  let numberStr = i.toString();
  for (let j = 0; j < numberStr.length; j++) {
    // If the current digit matches 'd', increment the count
    if (numberStr[j] === d) {
      count++;
    }
  }
}

console.log("The digit", d, "occurs", count, "times between", low, "and", high);
