//Name initials in js

let input = "John doe Marcus";
let words = input.split(" ");
let output;

 if(words.length > 1){
    output = words[0] + " " + words[1].toUpperCase().charAt(0) + ".";
 }
 else{
    output = input;
 }
 console.log(output);
