// Global execution context
/* getName();//Hello 

console.log(x); //in this case undefined
console.log(getName);//in this case the function
var x = 7;
function getName() {
    console.log("Hello")
  }
  */

  /* getName();//Hello
  console.log(x); //in this case undefined
  console.log(getName);//in this case the function
  var x = 7;

function getName() {
    console.log("Hello")
  } */

  
// demo for the call stack
  var x = 7;

function getName() {
    console.log("Hello");
}
getName();
