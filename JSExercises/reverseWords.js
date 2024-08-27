//Reverse word

function reverseWords(message) {
    // Split the input string into words
    let words = message.split(' ');
    
    // Reverse the array of words
    words.reverse();
    
    // Join the array of words back into a string
    let reversedMessage = words.join(' ');
    
    return reversedMessage;
}

// Test cases
let input1 = "impossible. mean not does hard but hard, be to going It’s";
let expected1 = "It’s going to be hard, but hard does not mean impossible.";

let input2 = "done. you’re when Stop tired. you’re when stop Don’t";
let expected2 = "Don’t stop when you’re tired. Stop when you’re done.";

console.log(reverseWords(input1) === expected1); // should log true
console.log(reverseWords(input2) === expected2); // should log true
