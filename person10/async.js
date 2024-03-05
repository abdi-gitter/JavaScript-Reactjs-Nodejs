console.log("Hello.");
setTimeout(function() {
  console.log("Goodbye!");
}, 2000);
console.log("Hello again!");

//Say "Hello."
//Say "Hello again!"
//Do nothing for two seconds.
//Say "Goodbye!"

console.log('Hello')
setTimeout(function(){
    console.log('Hello Again')
}, 2000)
console.log('Goodbye')


// program to display a text using setTimeout method
function hello() {
    console.log('Hello world');
  }
  let intervalId = setTimeout(hello, 3000);
  console.log('This message is shown first');
  console.log('Id: ' + intervalId);