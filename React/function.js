/*  // function declarations 
function logComplement(){
    console.log('You are working on react')
}
logComplement() */

/* //function expressions
const logComplement =function(){
    console.log('React is going to be good')
}
logComplement() */

/* //function declaration - it works because the function is hoisted
//or moved up to the top of the file's scope
hey();  //invoking a function before it is declared
function hey(){
    console.log('hey')
}

//you cannot invoke a function created by a function expression 

hey2();  //this will throw an error
const hey2 = function(){
    console.log('hey2')
}

hey3();  //this will throw an error
const hey3 = () => {
    console.log('hey3')
}
 */
/* passingArguments()
function passingArguments(){
    console.log('hey')
}


passingArguments2() 
const passingArguments2 = function(){
    console.log('hey2')
}
 */

/* const logComplement = function(firstName){
    console.log(`Your Name is, ${firstName}`);
};
logComplement('Abdisa'); */


/* const logComplement = function(firstName, message){
    console.log(`${firstName}: ${message}`);
};
logComplement('Abdisa', 'You are awesome'); */


/* createComplement = function(firstName, message){
    return `${firstName}, ${message}`
}
console.log(createComplement('Abdisa', 'You are great!')) */



/* //default parameters

function logActivity(name = 'Abdisa', activity = 'running'){
    console.log(`${name} loves ${activity}`)
}
logActivity() */



/* //default arguments can be of any type

const defaultPerson = {
    name:{
        firstName: 'Abdisa',
        lastName: 'Bedada'
    },
    favActivity: {
        athletics: 'running',
        games: 'football'
},
};
function logActivity(person = defaultPerson){
console.log(`${person.name.firstName} passionately loves ${person.favActivity.games}`)
}
logActivity(); */

/* 
//Arrow functions
const lordify = function(firstName){
    return `${firstName} of Canterbury`;
}
console.log(lordify('Bellish'));
console.log(lordify('Gail'))

//this can be reduced by arrow function 

const lordify = firstName => `${firstName} of Ireland`;
console.log(lordify('Bellish'))*/

/* const lordify = function(firstName, land){
    return `${firstName} of ${land}`
}
console.log(lordify('Bale', 'Wales')) 


const lordify = (firstName, land) => `${firstName} of ${land}`
console.log(lordify('Bale', 'Wales'))*/


/* const lordify = (firstName, land) => {
    if(!firstName){
        throw new error('A first name is required to lordify');
    }
    if(!land){
        throw new error('A lord must have a land')
    }
    return `${firstName} of ${land}`
};

console.log(lordify('Abdisa', 'Bedada'))
console.log(lordify('Abdisa'))//error */


/* //returning objects

const person = (firstName, lastName) => {
    first: firstName,
    last: lastName
}
console.log(person('Abdisa', 'Bedada')) //Uncaught SyntaxError */


//to fix this just wrap the object you are returning with parentheses
//These missing parentheses are the source of countless bugs in JavaScript and react apps
/* const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
})
console.log(person('Abdisa', 'Bedada')) */


/* const tahoe = {
    mountains: ['freel', 'rose', 'tallac'],
    print: function(delay = 1000) {
        setTimeout(function() = {
            console.log(this.mountains.join(', '))
        }, delay);
    }
};
tahoe.print(); */ // error Cannot read properties of undefined (reading 'join')


/* const tahoe = {
    mountains: ['freel', 'rose', 'tallac'],
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(', '))
        }, delay);
    }
};
tahoe.print(); */
/* 
If you transform the print method into an arrow function 
within the tahoe object, it's important to understand how 
arrow functions handle the this context differently from 
traditional functions. Arrow functions do not have their 
own this context; instead, they capture the this value of 
the enclosing lexical context at the time they are created.


Understanding this in the Context
In the corrected code above, where an arrow function is 
used within setTimeout, this indeed refers to the tahoe object. 
This is because arrow functions do not have their own this context; 
they inherit this from the surrounding lexical scope, 
which in this case is the print method. When tahoe.print() 
is called, this within the print method (and thus within 
    the arrow function inside setTimeout) refers to the 
    tahoe object. Consequently, this.mountains.join(', ') 
    correctly accesses the mountains property of tahoe 
    and joins the array elements with commas.

Arrow Function vs. Traditional Function in setTimeout
If you had used a traditional function expression 
instead of an arrow function for the callback inside 
setTimeout, this would refer to the global object 
(in non-strict mode) or be undefined (in strict mode), 
not the tahoe object. This is because traditional 
functions have their own this context, which depends 
on how the function is called. In the case of setTimeout, 
the callback is not called as a method of an object, 
so it doesn't inherit this from the print method.

In summary, using an arrow function within setTimeout 
in the print method is the correct approach to ensure 
that this refers to the tahoe object, allowing you to 
access its mountains property as intended.

In the global execution context (for example, in a browser), 
the surrounding lexical scope's this usually refers to the 
global object (window in browsers). If this code snippet 
were run in a strict mode or in a module where the top-level 
this is undefined, this.mountains would not refer to the 
mountains property of the tahoe object and would instead 
result in undefined or potentially throw a TypeError, 
depending on the strictness of the context in which 
the script is executed.

Thus, if you convert the print method to an arrow 
function as shown, the expected behavior of logging 
the mountains array to the console might not work as 
intended, especially if the surrounding lexical this 
does not refer to the tahoe object. This is a key 
reason why traditional function expressions are 
often preferred for object methods when you need 
to access the object's properties or methods using this.

*/


//Discussing the `window` object

/* 


Certainly! Here are examples demonstrating the use cases of 
the `window` object in web development, covering its various 
aspects and functionalities:

### 1. Global Scope

```javascript
var globalVar = "Hello, World!";
console.log(window.globalVar); // Outputs: "Hello, World!"
```

### 2. DOM Access

```javascript
console.log(window.document.title); // Outputs the title 
of the current document
```

### 3. Browsing Context

```javascript
// Opens a new window
var newWindow = window.open('https://www.example.com', '_blank');

// Closes the newly opened window
newWindow.close();

// Resize the current window
window.resizeTo(600, 400);
```

### 4. URL and Location

```javascript
console.log(window.location.href); // Outputs the 
URL of the current window

// Redirects the browser to another URL
window.location.href = 'https://www.example.com';
```

### 5. Timers

```javascript
// Executes a function after 2000 milliseconds
setTimeout(function() {
  alert('Hello, World!');
}, 2000);

// Repeats a function every 1000 milliseconds
var intervalID = setInterval(function() {
  console.log('Repeating every second');
}, 1000);

// Stops the repetition
clearInterval(intervalID);
```

### 6. Storage

```javascript
// Stores data in localStorage
window.localStorage.setItem('key', 'value');

// Retrieves data from localStorage
console.log(window.localStorage.getItem('key'));

// Stores data in sessionStorage
window.sessionStorage.setItem('sessionKey', 'sessionValue');

// Retrieves data from sessionStorage
console.log(window.sessionStorage.getItem('sessionKey'));
```

### 7. Global Variables and Functions

```javascript
function globalFunction() {
  console.log('I am a global function');
}

window.globalFunction(); // Calls the global function
```

### 8. Event Handling

```javascript
// Executes when the window finishes loading
window.onload = function() {
  alert('Window finished loading!');
};

// Executes code when the window is resized
window.onresize = function() {
  console.log('Window was resized.');
};
```

### 9. Host Object

```javascript
//Alerts the number of pixels the document has been scrolled vertically
window.onscroll = function() {
  console.log('Scrolled vertically: ' + window.scrollY + ' pixels');
};
```

These examples illustrate the versatility of the `window` 
object in web development, allowing for a wide range of 
interactions with the browser and the user.*/



/* const tahoe = {
    mountains: ['Freel', 'Rose', 'Tallac'],
    print: (delay = 1000) => {
        
        setTimeout(() => {
            console.log(this.mountains.join(', ')); 
        }, delay);
    }
};
tahoe.print();

In the provided code snippet, the `print` method is defined as 
an arrow function. Arrow functions do not have their own `this` 
context; instead, they inherit `this` from their lexical scope 
at the time they are defined. If this code snippet is executed 
in the global scope (e.g., in a browser), `this` would refer to 
the global object (which is `window` in a web browser environment), 
not the `tahoe` object. Since the global scope does not have 
a `mountains` property, attempting to access `this.mountains.join(', ')` 
will result in a TypeError, as `this.mountains` will be `undefined` 
and you cannot call `join` on `undefined`.

Therefore, when you try to execute `tahoe.print()`, it will not 
log `"Freel, Rose, Tallac"` as intended. Instead, it is likely to 
throw an error because `this.mountains` is `undefined` in the 
context of the arrow function for `print`.

To fix this issue and ensure that `this` within the `setTimeout` 
callback correctly refers to the `tahoe` object, you should define 
the `print` method as a regular (non-arrow) function. This way, 
it can correctly bind `this` to the `tahoe` object. Since you're 
already using an arrow function for the `setTimeout` callback, 
`this` within that callback will correctly refer to the `tahoe` 
object, thanks to the lexical scoping of arrow functions:

```javascript
const tahoe = {
    mountains: ['Freel', 'Rose', 'Tallac'],
    // Use a regular function for print to correctly bind 'this'
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(', ')); // 'this' refers to the tahoe object
        }, delay);
    }
};
tahoe.print(); // Correctly logs "Freel, Rose, Tallac"
```

In this corrected version, the `print` method is a regular 
function, ensuring that `this` refers to the `tahoe` object 
when `print` is called as a method of `tahoe`. The arrow 
function used within `setTimeout` inherits its `this` from 
the `print` method's context, which is correctly bound to 
the `tahoe` object.
 */




//destructuring objects

/* const sandwich = {
    bread: 'dutch crunch',
    meat:'tuna',
    cheese: 'swiss',
    toppings: ['lettuce', 'tomato','mustard']
};
const{bread, meat} = sandwich;
console.log(bread, meat) //dutch crunch tuna */

/* const sandwich = {
    bread: 'dutch crunch',
    meat:'tuna',
    cheese: 'swiss',
    toppings: ['lettuce', 'tomato','mustard']
};
let {bread, meat} = sandwich; //if we use const instead, TypeError: 
//Assignment to constant variable
bread ='garlic'
meat = 'turkey'
console.log(bread, meat)
console.log(sandwich.bread, sandwich.meat)



The difference in console output between modifying 
variables after destructuring and the original object's 
properties comes from how variables are assigned and 
manipulated in JavaScript, especially in the context 
of primitive vs. reference values.

When you destructure an object:

```javascript
let {bread, meat} = sandwich;
```

You're creating new variables `bread` and `meat` that 
are initialized with the values from `sandwich.bread` 
and `sandwich.meat`, respectively. These variables are 
completely separate from the `sandwich` object. Since 
`bread` and `meat` are strings (which are primitive 
    values in JavaScript), they are copied by value. 
    This means that `bread` and `meat` hold a copy of 
    the string values found in `sandwich`, but they do 
    not reference the same memory location as the 
    `sandwich` object's properties.

After destructuring, when you modify `bread` and `meat`:

```javascript
bread = 'garlic';
meat = 'turkey';
```

You're only changing the values of these independent 
variables, not the `sandwich` object's properties. 
Therefore, when you log `bread` and `meat`, you see 
the updated values ('garlic' and 'turkey'), but when 
you log `sandwich.bread` and `sandwich.meat`, you see 
the original values ('dutch crunch' and 'tuna') 
because the `sandwich` object itself was never modified.

The error `TypeError: Assignment to constant variable.` 
would occur if you tried to reassign a new value to a 
constant variable. However, in your example, you're 
using `let` for `bread` and `meat`, allowing reassignment. 
If you had used `const` for `bread` and `meat`, you 
wouldn't be able to reassign them to 'garlic' and 'turkey' 
without causing an error, because `const` declares variables 
that cannot be reassigned after their initial assignment.

In summary, the console outputs differ because:
- `bread` and `meat` variables are independent of 
the `sandwich` object after being destructured and 
hold their own values.
- Modifying these variables does not affect 
the original `sandwich` object, so `sandwich.bread` 
and `sandwich.meat` remain unchanged.

 */

/* const lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`)
}
//destructuring incoming function arguments

const regularPerson = {
    firstName: 'Bill',
    lastName: 'Wilson'
};
lordify(regularPerson) //Bill of Canterbury
//instead of using dot notation syntax to dig into objects,
//we can destructure the values we need out of regularPerson */


//using the colon and nested curly braces, we can 
//destructure the firstName from the spouse's object

/* const regularPerson = {
    firstName: 'Bill',
    lastName: 'Wilson',
    spouse: {
        firstName: 'Dave',
        lastName: 'Bourne'
    }
};
const lordify = ({spouse: {firstName}}) =>{
    console.log(`${firstName} of Canterbury`)
}
lordify(regularPerson)
console.log(`${regularPerson.firstName} is spouse of ${regularPerson.spouse.firstName}`)
 */


/* function directions(...args){
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`)
}
directions('Addis Ababa City', 'Dukem city', 'Bishoftu City', 'Mojo City', 'Meki City')
 
The function directions you've provided utilizes the rest 
parameters (...args) to collect all arguments passed into a 
single array. It then deconstructs this array to separate 
the starting point from the remaining arguments. Following 
that, it reverses the remaining arguments to extract the 
final destination (finish) and any intermediate stops (stops).

*/


//the spread operator can also be used for objects
/* const morning = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly'
};
const dinner = 'mac and cheese';
const backpackingMeals ={
    ...morning,
    dinner
};
console.log(backpackingMeals) */

//output
//{
   // breakfast: 'oatmeal',
   // lunch: 'peanut butter and jelly',
   // dinner: 'mac and cheese'
  //}
  

  //Async operations

  /* async function fetchTodos() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();

        // Perform operations on the data
        console.log('Fetched Todos:', data.slice(0, 5)); // Log the first 5 todos for demonstration
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function
fetchTodos();
 */

/* Understanding asynchronous behavior is essential for 
JavaScript developers, as it enables the handling of 
long-running tasks, such as network requests, file 
operations, or timers, without blocking the main thread. 
This is critical for creating responsive, efficient 
applications, especially in environments like web 
browsers and Node.js, where you often deal with 
I/O-bound tasks. 

 Synchronous vs. Asynchronous Execution
Synchronous execution means each statement in your code 
is executed in order, one after the other. This can 
lead to blocking behavior where the execution of 
subsequent code has to wait until the current 
operation completes.
Asynchronous execution allows the program to 
perform long-running tasks in the background 
and proceed with other operations without 
waiting for the previous one to complete.


Event Loop and Call Stack
JavaScript is single-threaded, relying on the event loop 
and call stack to handle asynchronous operations. The call 
stack is where the JavaScript engine tracks the execution 
of functions. When a function completes, it's popped off 
the stack. The event loop checks if the call stack is 
empty and then looks at the task queues. If there are 
any tasks waiting, the event loop pushes the first one 
onto the call stack to be executed.


Handling Asynchronous Operations
JavaScript provides several patterns and features to work 
with asynchronous operations:

Callbacks: Functions passed as arguments to other functions 
to be executed after a task completes. While simple, they 
can lead to callback hell when nested deeply.

Promises: Objects representing the eventual completion or 
failure of an asynchronous operation. They provide a cleaner, 
more manageable way to handle asynchronous operations compared 
to callbacks, using .then(), .catch(), and .finally() methods.

async/await: Syntactic sugar on top of Promises, making 
asynchronous code look and behave a bit more like synchronous 
code. This makes it easier to read and understand.
*/