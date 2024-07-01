//Reverse method
function reverseWords(message){
    let words = message.split(" ");
   let reversedWords = words.reverse().join(" ");
   return reversedWords;
    
    
}
console.log(reverseWords("impossible. mean not does hard but hard, be to going It’s"));
