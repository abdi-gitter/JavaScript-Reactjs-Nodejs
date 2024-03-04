let input = "abdisat.bedada@gmail.com";
let atIndex = input.indexOf("@");
let firPart = input.substring(0, atIndex);
let showLength = Math.floor(firPart.length/2);
let visiblePart = firPart.substring(0,showLength);
let hiddenPart = "*".repeat(firPart.length - showLength);
let outputEmail = visiblePart + hiddenPart + input.substring(atIndex);
console.log(outputEmail);




// let input = "abdisat.bedada@gmail.com";
// let atIndex = input.indexOf("@");
// let firstPart = input.substring(0, atIndex);
// let showLength = Math.floor(firstPart.length / 2); 

// let visiblePart = firstPart.substring(0, showLength); // Part to be shown
// let hiddenPart = "*".repeat(firstPart.length - showLength); // Part to be hidden with asterisks

// let maskedEmail = visiblePart + hiddenPart + input.substring(atIndex);

// console.log(maskedEmail);  

