//how to make Title format in js
let input = 'CLARUSWAY is a bOoTcAmP';

let words = input.toLowerCase().split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
}
let titleFormat = words.join(' ');

console.log(titleFormat); 


 
