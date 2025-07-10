//Questions on js problems
//More Questions and answers on JavaScript /QA //

 //Question 1. Asking a user to input Something in a field

//--------------------------------------------//
//?  Question 1 Ask the user to input a number. Check the input of the user, 
// if it is not a valid number then keep getting input from the user until provides
//  a valid number.


// Example-1: input= 1 => output="That is a valid number"
// Example-2: input= "a" => output="That is not a valid number try again!"
// ?+++


// let number = +prompt('Enter a number');
// console.log(number);
// while(!NaN){
//     number = +prompt('Please, Enter a valid number')
// }
// console.log(number)


// //  Question 2 answer//


//Finding the greatest common factor
// const input1 = 18;
// const input2 = 24;


// let gcd;

// for (let i = 1; i <= input1 && i <= input2; i++) {
//   if (input1 % i === 0 && input2 % i === 0) {
//     gcd = i;
//   }
// }

// console.log(`The greatest common divisor is ${gcd}`);

const input = 88;
for (let i = 1; i <= input; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}
