//count digits

let d = 2; // The digit to count
let low = 10; // The lower bound of the range
let high = 23; // The upper bound of the range
let occurrences = 0; // Counter for occurrences of d

for (let number = low; number <= high; number++) {
    let currentNumber = number;

    // Check each digit of the number
    while (currentNumber > 0) {
        let lastDigit = currentNumber % 10;
        if (lastDigit === d) {
            occurrences++;
        }
        currentNumber = Math.floor(currentNumber / 10);
    }
}

console.log(`The digit ${d} occurs ${occurrences} times between ${low} and ${high}.`);

// let d = 2; // The digit to search for
// let low = 10; // The lower bound of the range
// let high = 23; // The upper bound of the range
// let count = 0; // Variable to keep track of the occurrences

// for (let i = low; i <= high; i++) {
//   // Convert each number to a string to check for the digit
//   let numberStr = i.toString();
//   for (let j = 0; j < numberStr.length; j++) {
//     // If the current digit matches 'd', increment the count
//     if (parseInt(numberStr[j]) === d) {
//       count++;
//     }
//   }
// }

// console.log("The digit", d, "occurs", count, "times between", low, "and", high);

// // let d = 2; // The digit to count
// // let low = 10; // The lower bound of the range
// // let high = 23; // The upper bound of the range
// // let occurrences = 0; // Counter for occurrences of d

// // for (let number = low; number <= high; number++) {
// //   // Convert the number to a string to check each digit
// //   let numberString = number.toString();
// //   for (let char of numberString) {
// //     // Increment the counter if the current digit is d
// //     if (parseInt(char) === d) {
// //       occurrences++;
// //     }
// //   }
// // }

// // console.log(`The digit ${d} occurs ${occurrences} times between ${low} and ${high}.`);

