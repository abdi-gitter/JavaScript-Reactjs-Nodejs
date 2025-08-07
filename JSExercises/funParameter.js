//How parameter function work


function sayHi(userName) {
    console.log(`Hello! ${userName}`);
}
sayHi('Mark');
sayHi(); // what will be the output?

function sayHi2(userName, company) {
    console.log(`Hello! ${userName} of ${company}`);
    company = 'Apple';
    console.log(`Hello! ${userName} of ${company}`);  
}
let userName= 'Mark';
let company = 'Clarusway';
sayHi2(userName, company);
console.log(company);
sayHi2('Matthew'); 

// what will be the output?   -_______

