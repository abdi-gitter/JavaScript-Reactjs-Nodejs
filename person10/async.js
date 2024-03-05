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


  // program to stop the setTimeout() method
let count = 0;

// function creation
function increaseCount() {
  count += 1;
  console.log(count);
}

let id = setTimeout(increaseCount, 3000);
clearTimeout(id);
console.log('setTimeout is stopped.');
// expected output: setTimeout is stopped





// program to display time every 3 seconds
function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime, 3000);
  }
  showTime();


  // program to display a text using setInterval method
function hello() {
    console.log('Hello world');
  }
  setInterval(hello, 2000);




  // program to display time every 5 seconds
function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
  }
  let display = setInterval(showTime, 5000);




  // program to stop the setInterval() method after five times
let count = 0;
let interval = setInterval(function () {
  count += 1;
  if (count === 5) {
    clearInterval(interval);
  }
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);



// example
function greet(firstName, lastName) {
    console.log('Hello' + ' ' + firstName + ' ' + lastName);
}
setInterval(greet, 2000, 'Barry', 'Mitchell');